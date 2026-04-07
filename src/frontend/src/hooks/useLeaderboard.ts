import type { LeaderboardEntry, ModuleId } from "../types";

export function useLeaderboard() {
  const getModuleEntries = (moduleId: ModuleId): LeaderboardEntry[] => {
    const data = localStorage.getItem(`leaderboard_${moduleId}`);
    return data ? (JSON.parse(data) as LeaderboardEntry[]) : [];
  };

  const addEntry = (entry: LeaderboardEntry): void => {
    const entries = getModuleEntries(entry.moduleId);
    const updated = [...entries, entry]
      .sort((a, b) => b.score - a.score)
      .slice(0, 10);
    localStorage.setItem(
      `leaderboard_${entry.moduleId}`,
      JSON.stringify(updated),
    );
  };

  const getAllEntries = (): LeaderboardEntry[] => {
    const moduleIds: ModuleId[] = [
      "siklus-hidup",
      "pernikahan",
      "pus",
      "remaja-berprestasi",
      "kespro",
    ];
    return moduleIds
      .flatMap((id) => getModuleEntries(id))
      .sort((a, b) => b.score - a.score)
      .slice(0, 50);
  };

  return { getModuleEntries, addEntry, getAllEntries };
}
