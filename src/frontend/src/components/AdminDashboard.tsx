import { createActorWithConfig } from "@caffeineai/core-infrastructure";
import { useCallback, useEffect, useId, useMemo, useState } from "react";
import { createActor } from "../backend";
import { useLeaderboard } from "../hooks/useLeaderboard";
import type { ModuleId } from "../types";

interface AdminDashboardProps {
  onBack: () => void;
}

interface AdminEntry {
  key: string;
  playerName: string;
  moduleName: string;
  moduleId: string;
  score: number;
  totalQuestions: number;
  timestamp: number;
  source: "local" | "backend";
}

type GradeKey = "luar-biasa" | "bagus" | "cukup" | "perlu-belajar";

interface Grade {
  label: string;
  color: string;
  bg: string;
}

const GRADES: Record<GradeKey, Grade> = {
  "luar-biasa": { label: "Luar Biasa", color: "#15803d", bg: "#dcfce7" },
  bagus: { label: "Bagus", color: "#1d4ed8", bg: "#dbeafe" },
  cukup: { label: "Cukup", color: "#a16207", bg: "#fef9c3" },
  "perlu-belajar": { label: "Perlu Belajar", color: "#b91c1c", bg: "#fee2e2" },
};

function getGradeKey(score: number, total: number): GradeKey {
  const pct = total > 0 ? (score / total) * 100 : 0;
  if (pct >= 90) return "luar-biasa";
  if (pct >= 70) return "bagus";
  if (pct >= 50) return "cukup";
  return "perlu-belajar";
}

function formatDateTime(ts: number): string {
  return new Date(ts).toLocaleString("id-ID", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function downloadCSV(entries: AdminEntry[]): void {
  const header = "No,Nama Pemain,Modul,Skor,Nilai,Waktu Bermain,Grade";
  const rows = entries.map((e, i) => {
    const grade = GRADES[getGradeKey(e.score, e.totalQuestions)].label;
    const nilai = `${e.score}/${e.totalQuestions * 10}`;
    const time = formatDateTime(e.timestamp);
    return `${i + 1},"${e.playerName}","${e.moduleName}",${e.score},"${nilai}","${time}","${grade}"`;
  });
  const csv = [header, ...rows].join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `hasil-bermain-${new Date().toISOString().slice(0, 10)}.csv`;
  a.click();
  URL.revokeObjectURL(url);
}

const MODULE_NAMES: Record<string, string> = {
  "siklus-hidup": "Siklus Hidup Manusia",
  pernikahan: "Persiapan Pernikahan",
  pus: "Pasangan Usia Subur",
  "remaja-berprestasi": "Remaja Berprestasi",
  kespro: "Kesehatan Reproduksi Remaja",
  "anak-perlindungan": "Mengenal Organ Reproduksi & Perlindungan Anak",
  "remaja-calon-pengantin": "Remaja & Calon Pengantin",
  "pus-kbpp": "KB Pascapersalinan & PUS",
  "lansia-keluarga": "Lansia Sehat & Dukungan Keluarga",
};

const ALL_MODULE_IDS: ModuleId[] = [
  "siklus-hidup",
  "pernikahan",
  "pus",
  "remaja-berprestasi",
  "kespro",
  "anak-perlindungan",
  "remaja-calon-pengantin",
  "pus-kbpp",
  "lansia-keluarga",
];

const PAGE_SIZE = 20;

export default function AdminDashboard({ onBack }: AdminDashboardProps) {
  const { getModuleEntries } = useLeaderboard();
  const [backendEntries, setBackendEntries] = useState<AdminEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterModule, setFilterModule] = useState<string>("all");
  const [filterSearch, setFilterSearch] = useState("");
  const [filterDateFrom, setFilterDateFrom] = useState("");
  const [filterDateTo, setFilterDateTo] = useState("");
  const [page, setPage] = useState(1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [clearing, setClearing] = useState(false);

  // Stable IDs for accessible labels
  const moduleId = useId();
  const searchId = useId();
  const dateFromId = useId();
  const dateToId = useId();

  // Fetch backend entries
  const fetchBackend = useCallback(async () => {
    setLoading(true);
    try {
      const actor = await createActorWithConfig(createActor);
      const results = await actor.getAllGameResults();
      const mapped: AdminEntry[] = results.map((r) => ({
        key: `backend-${r.playerName}-${r.moduleId}-${r.timestamp.toString()}`,
        playerName: r.playerName,
        moduleName: r.moduleName || MODULE_NAMES[r.moduleId] || r.moduleId,
        moduleId: r.moduleId,
        score: Number(r.score),
        totalQuestions: Number(r.totalQuestions) || 10,
        timestamp: Number(r.timestamp),
        source: "backend",
      }));
      setBackendEntries(mapped);
    } catch {
      setBackendEntries([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchBackend();
  }, [fetchBackend]);

  // Build local entries from localStorage (all 9 modules)
  const localEntries = useMemo((): AdminEntry[] => {
    return ALL_MODULE_IDS.flatMap((mid) =>
      getModuleEntries(mid).map((e) => ({
        key: `local-${e.name}-${mid}-${e.score}-${e.date}`,
        playerName: e.name,
        moduleName: e.moduleTitle || MODULE_NAMES[mid] || mid,
        moduleId: mid,
        score: e.score,
        totalQuestions: 10,
        timestamp: new Date(e.date).getTime() || Date.now(),
        source: "local" as const,
      })),
    );
  }, [getModuleEntries]);

  // Merge + deduplicate (backend wins over local for same key)
  const allEntries = useMemo((): AdminEntry[] => {
    const byKey = new Map<string, AdminEntry>();
    for (const e of localEntries) {
      const dedupKey = `${e.playerName}|${e.moduleId}|${e.score}`;
      if (!byKey.has(dedupKey)) byKey.set(dedupKey, e);
    }
    for (const e of backendEntries) {
      const dedupKey = `${e.playerName}|${e.moduleId}|${e.score}`;
      byKey.set(dedupKey, e);
    }
    return Array.from(byKey.values()).sort((a, b) => b.timestamp - a.timestamp);
  }, [localEntries, backendEntries]);

  // Filter
  const filtered = useMemo(() => {
    return allEntries.filter((e) => {
      if (filterModule !== "all" && e.moduleId !== filterModule) return false;
      if (
        filterSearch &&
        !e.playerName.toLowerCase().includes(filterSearch.toLowerCase())
      )
        return false;
      if (filterDateFrom) {
        const from = new Date(filterDateFrom).getTime();
        if (e.timestamp < from) return false;
      }
      if (filterDateTo) {
        const to = new Date(filterDateTo).getTime() + 86400000;
        if (e.timestamp > to) return false;
      }
      return true;
    });
  }, [allEntries, filterModule, filterSearch, filterDateFrom, filterDateTo]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  // Stats
  const stats = useMemo(() => {
    if (allEntries.length === 0)
      return { total: 0, avgScore: 0, topModule: "-" };
    const avgScore = Math.round(
      allEntries.reduce((s, e) => s + e.score, 0) / allEntries.length,
    );
    const moduleCounts: Record<string, number> = {};
    for (const e of allEntries) {
      moduleCounts[e.moduleId] = (moduleCounts[e.moduleId] || 0) + 1;
    }
    const topModuleId = Object.entries(moduleCounts).sort(
      (a, b) => b[1] - a[1],
    )[0]?.[0];
    const topModule = MODULE_NAMES[topModuleId ?? ""] || topModuleId || "-";
    return { total: allEntries.length, avgScore, topModule };
  }, [allEntries]);

  const handleClearAll = async () => {
    setClearing(true);
    try {
      const actor = await createActorWithConfig(createActor);
      await actor.clearAllResults();
      for (const id of ALL_MODULE_IDS) {
        localStorage.removeItem(`leaderboard_${id}`);
      }
      setBackendEntries([]);
    } catch {
      // ignore
    } finally {
      setClearing(false);
      setShowConfirm(false);
    }
  };

  const closeConfirm = () => setShowConfirm(false);

  const clearFilters = () => {
    setFilterModule("all");
    setFilterSearch("");
    setFilterDateFrom("");
    setFilterDateTo("");
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] animate-fade-in">
      {/* Dashboard Header */}
      <div
        className="py-8 px-6 text-white"
        style={{
          background:
            "linear-gradient(135deg, #003087 0%, #00509E 60%, #2D9CDB 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-2">
            <button
              type="button"
              data-ocid="admin.back.button"
              onClick={onBack}
              className="text-white/70 hover:text-white transition-colors text-sm font-semibold flex items-center gap-1"
            >
              ← Kembali
            </button>
          </div>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-black leading-tight">
                ⚙️ Dashboard Admin
              </h1>
              <p className="text-white/80 text-sm mt-1">
                Semua Hasil Bermain — Game Edukasi BKKBN
              </p>
            </div>
            <div className="flex gap-3 flex-wrap">
              <button
                type="button"
                data-ocid="admin.refresh.button"
                onClick={() => void fetchBackend()}
                disabled={loading}
                className="bg-white/20 hover:bg-white/30 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors border border-white/30 disabled:opacity-50"
              >
                {loading ? "⏳ Memuat..." : "🔄 Refresh Data"}
              </button>
              <button
                type="button"
                data-ocid="admin.export.button"
                onClick={() => downloadCSV(filtered)}
                className="bg-[#F5B700] hover:bg-[#d4a000] text-[#003087] font-black text-sm px-4 py-2 rounded-xl transition-colors shadow"
              >
                ⬇️ Export CSV
              </button>
              <button
                type="button"
                data-ocid="admin.clear.button"
                onClick={() => setShowConfirm(true)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold text-sm px-4 py-2 rounded-xl transition-colors shadow"
              >
                🗑️ Hapus Semua Data
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {[
            {
              label: "Total Pemain",
              value: allEntries.length,
              emoji: "👥",
              color: "#003087",
              bg: "#EFF6FF",
            },
            {
              label: "Total Permainan",
              value: filtered.length,
              emoji: "🎮",
              color: "#059669",
              bg: "#ECFDF5",
            },
            {
              label: "Rata-rata Skor",
              value: stats.avgScore,
              emoji: "📊",
              color: "#7C3AED",
              bg: "#F5F3FF",
            },
            {
              label: "Modul Terpopuler",
              value: stats.topModule,
              emoji: "🏆",
              color: "#B45309",
              bg: "#FFFBEB",
              isText: true,
            },
          ].map((s) => (
            <div
              key={s.label}
              className="rounded-2xl p-4 shadow-sm border border-white"
              style={{ background: s.bg }}
              data-ocid={`admin.stat.${s.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="text-2xl mb-1">{s.emoji}</div>
              <div
                className="text-2xl font-black leading-tight truncate"
                style={{ color: s.color }}
              >
                {s.isText ? (
                  <span className="text-sm leading-snug block">{s.value}</span>
                ) : (
                  s.value
                )}
              </div>
              <div className="text-xs text-gray-500 mt-1 font-medium">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 mb-5">
          <div className="flex flex-wrap gap-3 items-end">
            {/* Module filter */}
            <div className="flex-1 min-w-[160px]">
              <label
                htmlFor={moduleId}
                className="text-xs font-semibold text-gray-500 mb-1 block"
              >
                Filter Modul
              </label>
              <select
                id={moduleId}
                data-ocid="admin.filter.module"
                value={filterModule}
                onChange={(e) => {
                  setFilterModule(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087] bg-white"
              >
                <option value="all">Semua Modul</option>
                {ALL_MODULE_IDS.map((id) => (
                  <option key={id} value={id}>
                    {MODULE_NAMES[id]}
                  </option>
                ))}
              </select>
            </div>

            {/* Search */}
            <div className="flex-1 min-w-[160px]">
              <label
                htmlFor={searchId}
                className="text-xs font-semibold text-gray-500 mb-1 block"
              >
                Cari Nama Pemain
              </label>
              <input
                id={searchId}
                data-ocid="admin.filter.search"
                type="text"
                placeholder="Ketik nama..."
                value={filterSearch}
                onChange={(e) => {
                  setFilterSearch(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087]"
              />
            </div>

            {/* Date from */}
            <div className="flex-1 min-w-[140px]">
              <label
                htmlFor={dateFromId}
                className="text-xs font-semibold text-gray-500 mb-1 block"
              >
                Dari Tanggal
              </label>
              <input
                id={dateFromId}
                data-ocid="admin.filter.date-from"
                type="date"
                value={filterDateFrom}
                onChange={(e) => {
                  setFilterDateFrom(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087]"
              />
            </div>

            {/* Date to */}
            <div className="flex-1 min-w-[140px]">
              <label
                htmlFor={dateToId}
                className="text-xs font-semibold text-gray-500 mb-1 block"
              >
                Sampai Tanggal
              </label>
              <input
                id={dateToId}
                data-ocid="admin.filter.date-to"
                type="date"
                value={filterDateTo}
                onChange={(e) => {
                  setFilterDateTo(e.target.value);
                  setPage(1);
                }}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#003087]"
              />
            </div>

            {/* Clear filters */}
            <button
              type="button"
              data-ocid="admin.filter.clear"
              onClick={clearFilters}
              className="border border-gray-200 text-gray-500 hover:bg-gray-50 font-semibold text-sm px-4 py-2 rounded-xl transition-colors h-[38px] self-end"
            >
              ✕ Reset
            </button>
          </div>
        </div>

        {/* Table header count */}
        <div className="flex items-center justify-between mb-3">
          <p className="text-sm text-gray-600 font-medium">
            Menampilkan{" "}
            <strong className="text-[#003087]">
              {Math.min(
                (page - 1) * PAGE_SIZE + paginated.length,
                filtered.length,
              )}
            </strong>{" "}
            dari <strong className="text-[#003087]">{filtered.length}</strong>{" "}
            hasil bermain
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <button
                type="button"
                data-ocid="admin.pagination.prev"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ‹ Prev
              </button>
              <span className="text-sm text-gray-600 font-medium">
                {page} / {totalPages}
              </span>
              <button
                type="button"
                data-ocid="admin.pagination.next"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Next ›
              </button>
            </div>
          )}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {loading ? (
            <div data-ocid="admin.table.loading" className="py-16 text-center">
              <div className="text-4xl mb-3 animate-bounce">⏳</div>
              <p className="text-gray-500 font-medium">Memuat data...</p>
              <p className="text-gray-400 text-xs mt-1">
                Menghubungkan ke server...
              </p>
            </div>
          ) : paginated.length === 0 ? (
            <div data-ocid="admin.table.empty" className="py-16 text-center">
              <div className="text-5xl mb-3">📭</div>
              <p className="text-gray-600 font-semibold text-lg">
                Belum Ada Data
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {filterSearch ||
                filterModule !== "all" ||
                filterDateFrom ||
                filterDateTo
                  ? "Tidak ada hasil yang sesuai filter. Coba reset filter."
                  : "Belum ada pemain yang menyelesaikan kuis. Ajak teman bermain!"}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100">
                    {[
                      { label: "No", align: "text-left" },
                      { label: "Nama Pemain", align: "text-left" },
                      { label: "Modul", align: "text-left" },
                      { label: "Skor", align: "text-right" },
                      { label: "Nilai", align: "text-right" },
                      { label: "Waktu Bermain", align: "text-left" },
                      { label: "Grade", align: "text-center" },
                    ].map((col) => (
                      <th
                        key={col.label}
                        className={`py-3 px-4 ${col.align} font-black text-[#003087] text-xs uppercase tracking-wide`}
                        style={{ background: "#EFF6FF" }}
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginated.map((entry, idx) => {
                    const gradeKey = getGradeKey(
                      entry.score,
                      entry.totalQuestions,
                    );
                    const grade = GRADES[gradeKey];
                    const rowNum = (page - 1) * PAGE_SIZE + idx + 1;
                    return (
                      <tr
                        key={entry.key}
                        data-ocid={`admin.table.row-${rowNum}`}
                        className="border-b border-gray-50 hover:bg-blue-50/30 transition-colors"
                      >
                        <td className="py-3 px-4 text-gray-400 font-medium text-xs">
                          {rowNum}
                        </td>
                        <td className="py-3 px-4">
                          <span className="font-bold text-gray-800 truncate max-w-[120px] block">
                            {entry.playerName}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className="text-gray-600 text-xs leading-tight line-clamp-2 max-w-[200px]">
                            {entry.moduleName}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <span
                            className="font-black text-base"
                            style={{ color: grade.color }}
                          >
                            {entry.score}
                          </span>
                          <span className="text-gray-400 text-xs">/100</span>
                        </td>
                        <td className="py-3 px-4 text-right text-xs text-gray-500 font-medium">
                          {Math.round(
                            (entry.score / (entry.totalQuestions * 10)) * 100,
                          )}
                          %
                        </td>
                        <td className="py-3 px-4 text-xs text-gray-500 whitespace-nowrap">
                          {entry.timestamp > 0
                            ? formatDateTime(entry.timestamp)
                            : "-"}
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span
                            className="inline-block text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap"
                            style={{
                              color: grade.color,
                              background: grade.bg,
                            }}
                          >
                            {grade.label}
                          </span>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Bottom pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-5">
            <button
              type="button"
              onClick={() => setPage(1)}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              «
            </button>
            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              ‹ Prev
            </button>
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              const start = Math.max(1, Math.min(page - 2, totalPages - 4));
              const p = start + i;
              return (
                <button
                  key={p}
                  type="button"
                  onClick={() => setPage(p)}
                  className="px-3 py-1.5 rounded-lg border text-sm font-semibold transition-colors"
                  style={
                    p === page
                      ? {
                          background: "#003087",
                          color: "#fff",
                          borderColor: "#003087",
                        }
                      : { borderColor: "#e5e7eb", color: "#374151" }
                  }
                >
                  {p}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next ›
            </button>
            <button
              type="button"
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
              className="px-3 py-1.5 rounded-lg border border-gray-200 text-sm font-semibold hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              »
            </button>
          </div>
        )}
      </div>

      {/* Confirm Delete Dialog */}
      {showConfirm && (
        <dialog
          aria-labelledby="confirm-dialog-title"
          data-ocid="admin.confirm-dialog"
          open
          className="fixed inset-0 m-0 w-full h-full bg-black/50 flex items-center justify-center z-50 px-4 border-none p-0"
        >
          <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-6 animate-fade-in">
            <div className="text-4xl text-center mb-3">⚠️</div>
            <h2
              id="confirm-dialog-title"
              className="text-lg font-black text-center text-gray-800 mb-2"
            >
              Hapus Semua Data?
            </h2>
            <p className="text-gray-500 text-sm text-center mb-6">
              Semua hasil bermain dari server dan penyimpanan lokal akan dihapus
              permanen. Tindakan ini tidak bisa dibatalkan.
            </p>
            <div className="flex gap-3">
              <button
                type="button"
                data-ocid="admin.confirm-dialog.cancel"
                onClick={closeConfirm}
                onKeyDown={(e) => {
                  if (e.key === "Escape") closeConfirm();
                }}
                className="flex-1 py-2.5 rounded-xl border-2 border-gray-200 text-gray-600 font-bold text-sm hover:bg-gray-50 transition-colors"
              >
                Batal
              </button>
              <button
                type="button"
                data-ocid="admin.confirm-dialog.confirm"
                onClick={() => void handleClearAll()}
                disabled={clearing}
                className="flex-1 py-2.5 rounded-xl bg-red-500 hover:bg-red-600 text-white font-black text-sm transition-colors disabled:opacity-50"
              >
                {clearing ? "Menghapus..." : "Ya, Hapus Semua"}
              </button>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
