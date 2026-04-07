import { useMemo, useRef, useState } from "react";
import type { Chapter, Module, Question } from "../types";

interface QuizPageProps {
  module: Module;
  playerName: string;
  onFinish: (score: number) => void;
}

type QuizPhase =
  | { type: "chapter-intro"; chapterIndex: number }
  | { type: "question"; chapterIndex: number; questionIndex: number }
  | {
      type: "chapter-summary";
      chapterIndex: number;
      correct: number;
      total: number;
    };

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function pickRandom<T>(arr: T[], n: number): T[] {
  return shuffleArray(arr).slice(0, Math.min(n, arr.length));
}

function prepareQuestion(q: Question): {
  question: Question;
  mappedCorrectIndex: number;
} {
  if (q.type === "fill-blank") {
    const original = [...q.options] as string[];
    const correctText = original[q.correctIndex];
    const shuffled = shuffleArray(original);
    const mappedCorrectIndex = shuffled.indexOf(correctText);
    return {
      question: { ...q, options: shuffled as [string, string, string, string] },
      mappedCorrectIndex,
    };
  }
  return { question: q, mappedCorrectIndex: q.correctIndex };
}

export default function QuizPage({
  module: mod,
  playerName,
  onFinish,
}: QuizPageProps) {
  const chapters = mod.chapters && mod.chapters.length > 0 ? mod.chapters : [];

  const chapterQuestions = useMemo(() => {
    return chapters.map((ch) => {
      const picked = pickRandom(ch.questionPool, ch.questionsPerPlay);
      return picked.map((q) => prepareQuestion(q));
    });
  }, [chapters]);

  const [phase, setPhase] = useState<QuizPhase>({
    type: "chapter-intro",
    chapterIndex: 0,
  });
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  // Use ref to track scores synchronously to avoid stale state closure
  const scoresRef = useRef<{ correct: number; total: number }[]>(
    chapters.map(() => ({ correct: 0, total: 0 })),
  );
  const [, forceRender] = useState(0);

  const totalChapters = chapters.length;
  const totalQuestionsAll = chapterQuestions.reduce(
    (s, cq) => s + cq.length,
    0,
  );
  const totalCorrectAll = scoresRef.current.reduce(
    (s, cs) => s + cs.correct,
    0,
  );

  // ---- CHAPTER INTRO ----
  if (phase.type === "chapter-intro") {
    const chIdx = phase.chapterIndex;
    const chapter: Chapter = chapters[chIdx];
    const questionsInChapter = chapterQuestions[chIdx];
    const correctSoFar = scoresRef.current
      .slice(0, chIdx)
      .reduce((s, cs) => s + cs.correct, 0);

    return (
      <div className="min-h-screen bg-[#F3F8FF] px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{mod.emoji}</span>
                <span className="font-bold text-[#003087] text-sm">
                  {mod.title}
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-500">
                Pemain:{" "}
                <span className="text-[#003087] font-bold">{playerName}</span>
              </span>
            </div>
            <div className="flex gap-2 mb-1">
              {chapters.map((ch, i) => (
                <div
                  key={ch.id}
                  className={`flex-1 h-2 rounded-full ${
                    i < chIdx
                      ? "bg-green-500"
                      : i === chIdx
                        ? "bg-yellow-400"
                        : "bg-gray-200"
                  }`}
                />
              ))}
            </div>
            <p className="text-xs text-gray-500 text-right">
              Bab {chIdx + 1} dari {totalChapters}
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}22, ${mod.gradientTo}22)`,
              }}
            >
              {chapter.emoji}
            </div>
            <div
              className="inline-block text-white text-xs font-black px-3 py-1 rounded-full mb-3"
              style={{
                background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              Bab {chIdx + 1} dari {totalChapters}
            </div>
            <h2 className="text-2xl font-black text-gray-900 mb-2">
              {chapter.title}
            </h2>
            <p className="text-gray-500 text-sm mb-6">{chapter.description}</p>
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-2xl font-black text-[#003087]">
                  {questionsInChapter.length}
                </div>
                <div className="text-xs text-gray-500">Soal</div>
              </div>
              {chIdx > 0 && (
                <>
                  <div className="w-px h-8 bg-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-black text-green-600">
                      {correctSoFar}
                    </div>
                    <div className="text-xs text-gray-500">
                      Benar Sejauh Ini
                    </div>
                  </div>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={() =>
                setPhase({
                  type: "question",
                  chapterIndex: chIdx,
                  questionIndex: 0,
                })
              }
              className="px-8 py-4 rounded-xl text-white font-black text-base hover:opacity-90 transition-opacity shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              Mulai Bab {chIdx + 1} →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ---- CHAPTER SUMMARY ----
  if (phase.type === "chapter-summary") {
    const chIdx = phase.chapterIndex;
    const isLast = chIdx + 1 >= totalChapters;
    const percentage = Math.round(
      (phase.correct / Math.max(phase.total, 1)) * 100,
    );
    const grade =
      percentage >= 90
        ? "Luar Biasa! 🌟"
        : percentage >= 70
          ? "Bagus! 👍"
          : percentage >= 50
            ? "Cukup Baik 💪"
            : "Tetap Semangat! 📚";

    return (
      <div className="min-h-screen bg-[#F3F8FF] px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-4xl mx-auto mb-4"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}22, ${mod.gradientTo}22)`,
              }}
            >
              {chapters[chIdx].emoji}
            </div>
            <h2 className="text-xl font-black text-gray-900 mb-1">
              Bab {chIdx + 1} Selesai!
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              {chapters[chIdx].title}
            </p>
            <div
              className="text-5xl font-black mb-2"
              style={{ color: mod.gradientFrom }}
            >
              {percentage}%
            </div>
            <p className="text-lg font-bold text-gray-700 mb-1">{grade}</p>
            <p className="text-sm text-gray-500 mb-8">
              Benar {phase.correct} dari {phase.total} soal
            </p>

            <div className="flex gap-2 mb-6">
              {chapters.map((ch, i) => (
                <div key={ch.id} className="flex-1">
                  <div
                    className={`h-2 rounded-full ${
                      i < chIdx
                        ? "bg-green-500"
                        : i === chIdx
                          ? "bg-yellow-400"
                          : "bg-gray-200"
                    }`}
                  />
                  <p className="text-xs text-gray-400 text-center mt-1">
                    {ch.emoji}
                  </p>
                </div>
              ))}
            </div>

            {isLast ? (
              <button
                type="button"
                onClick={() => {
                  const finalScore = Math.round(
                    (totalCorrectAll / Math.max(totalQuestionsAll, 1)) * 100,
                  );
                  onFinish(finalScore);
                }}
                className="w-full py-4 rounded-xl text-white font-black text-base hover:opacity-90 transition-opacity shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                }}
              >
                Lihat Hasil Akhir 🎯
              </button>
            ) : (
              <button
                type="button"
                onClick={() => {
                  setPhase({ type: "chapter-intro", chapterIndex: chIdx + 1 });
                  setSelectedOption(null);
                  setAnswered(false);
                  setAnimKey((k) => k + 1);
                }}
                className="w-full py-4 rounded-xl text-white font-black text-base hover:opacity-90 transition-opacity shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                }}
              >
                Lanjut ke Bab {chIdx + 2}: {chapters[chIdx + 1].title} →
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ---- QUESTION ----
  const chIdx = phase.chapterIndex;
  const qIdx = phase.questionIndex;
  const chapterQs = chapterQuestions[chIdx];
  const { question, mappedCorrectIndex } = chapterQs[qIdx];
  const totalInChapter = chapterQs.length;

  const handleSelectOption = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    const isCorrect = index === mappedCorrectIndex;
    const prev = scoresRef.current[chIdx];
    scoresRef.current[chIdx] = {
      correct: prev.correct + (isCorrect ? 1 : 0),
      total: prev.total + 1,
    };
    forceRender((n) => n + 1);
  };

  const handleNext = () => {
    if (qIdx + 1 >= totalInChapter) {
      const { correct, total } = scoresRef.current[chIdx];
      setPhase({
        type: "chapter-summary",
        chapterIndex: chIdx,
        correct,
        total,
      });
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setPhase({
        type: "question",
        chapterIndex: chIdx,
        questionIndex: qIdx + 1,
      });
      setSelectedOption(null);
      setAnswered(false);
      setAnimKey((k) => k + 1);
    }
  };

  const getOptionStyle = (index: number) => {
    if (!answered) {
      return {
        bg: "bg-white hover:bg-blue-50",
        border: "border-gray-200 hover:border-[#2D9CDB]",
        text: "text-gray-800",
      };
    }
    if (index === mappedCorrectIndex) {
      return {
        bg: "bg-green-50",
        border: "border-green-500",
        text: "text-green-800",
      };
    }
    if (index === selectedOption) {
      return {
        bg: "bg-red-50",
        border: "border-red-400",
        text: "text-red-800",
      };
    }
    return {
      bg: "bg-gray-50",
      border: "border-gray-200",
      text: "text-gray-400",
    };
  };

  const optionLabels = ["A", "B", "C", "D"];
  const typeBadge: Record<
    string,
    { label: string; icon: string; color: string }
  > = {
    "multiple-choice": { label: "Pilihan Ganda", icon: "☑️", color: "#2D9CDB" },
    "true-false": { label: "Benar / Salah", icon: "⚖️", color: "#2ECC71" },
    "fill-blank": { label: "Isi Jawaban", icon: "✏️", color: "#8B5CF6" },
  };
  const badge = typeBadge[question.type] ?? typeBadge["multiple-choice"];

  return (
    <div className="min-h-screen bg-[#F3F8FF] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{mod.emoji}</span>
              <span className="font-bold text-[#003087] text-sm">
                {mod.title}
              </span>
            </div>
            <div className="text-sm font-semibold text-gray-500">
              Pemain:{" "}
              <span className="text-[#003087] font-bold">{playerName}</span>
            </div>
          </div>

          {/* Chapter progress tabs */}
          <div className="flex gap-2 mb-3">
            {chapters.map((ch, i) => (
              <div
                key={ch.id}
                className={`flex-1 h-2 rounded-full transition-all ${
                  i < chIdx ? "bg-green-500" : i !== chIdx ? "bg-gray-200" : ""
                }`}
                style={
                  i === chIdx
                    ? {
                        background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                      }
                    : {}
                }
              />
            ))}
          </div>

          <div className="flex items-center justify-between text-xs text-gray-500 mb-2">
            <span className="font-semibold">
              {chapters[chIdx].emoji} Bab {chIdx + 1}: {chapters[chIdx].title}
            </span>
            <span className="font-bold">
              Soal {qIdx + 1}/{totalInChapter}
            </span>
          </div>

          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{
                width: `${(qIdx / totalInChapter) * 100}%`,
                background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            />
          </div>
        </div>

        {/* Question Card */}
        <div
          key={animKey}
          className="bg-white rounded-2xl shadow-md p-6 mb-4 animate-fade-in"
        >
          <div className="flex items-center gap-2 mb-4">
            <div
              className="inline-flex items-center gap-1 text-white text-xs font-black px-3 py-1 rounded-full"
              style={{
                background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              Pertanyaan {qIdx + 1}
            </div>
            <div
              className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1 rounded-full border"
              style={{
                color: badge.color,
                borderColor: `${badge.color}44`,
                background: `${badge.color}11`,
              }}
            >
              {badge.icon} {badge.label}
            </div>
          </div>

          <h2 className="text-base sm:text-lg font-black text-gray-900 mb-6 leading-snug">
            {question.type === "fill-blank"
              ? question.question.replace("___", "___________")
              : question.question}
          </h2>

          {/* True/False */}
          {question.type === "true-false" && (
            <div className="grid grid-cols-2 gap-4">
              {question.options.map((option, index) => {
                const style = getOptionStyle(index);
                return (
                  <button
                    type="button"
                    key={`opt-${question.id}-${optionLabels[index]}`}
                    onClick={() => handleSelectOption(index)}
                    disabled={answered}
                    className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border-2 transition-all font-black ${
                      style.bg
                    } ${style.border} ${style.text} ${
                      !answered ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span className="text-4xl">
                      {index === 0 ? "✅" : "❌"}
                    </span>
                    <span className="text-base">{option}</span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Multiple choice & fill-blank */}
          {(question.type === "multiple-choice" ||
            question.type === "fill-blank") && (
            <div className="space-y-3">
              {question.options.map((option, index) => {
                const style = getOptionStyle(index);
                return (
                  <button
                    type="button"
                    key={`opt-${question.id}-${optionLabels[index]}`}
                    onClick={() => handleSelectOption(index)}
                    disabled={answered}
                    className={`w-full flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                      style.bg
                    } ${style.border} ${style.text} ${
                      !answered ? "cursor-pointer" : "cursor-default"
                    }`}
                  >
                    <span
                      className={`w-7 h-7 flex-shrink-0 rounded-full flex items-center justify-center text-xs font-black border-2 ${
                        answered && index === mappedCorrectIndex
                          ? "bg-green-500 border-green-500 text-white"
                          : answered &&
                              index === selectedOption &&
                              index !== mappedCorrectIndex
                            ? "bg-red-400 border-red-400 text-white"
                            : "border-current"
                      }`}
                    >
                      {answered && index === mappedCorrectIndex
                        ? "✓"
                        : optionLabels[index]}
                    </span>
                    <span className="text-sm font-medium leading-snug pt-0.5">
                      {option}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {/* Explanation */}
          {answered && (
            <div
              className="mt-5 rounded-xl p-4 animate-fade-in"
              style={{
                background:
                  selectedOption === mappedCorrectIndex ? "#f0fdf4" : "#fef2f2",
                borderLeft: `4px solid ${selectedOption === mappedCorrectIndex ? "#22c55e" : "#ef4444"}`,
              }}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">
                  {selectedOption === mappedCorrectIndex ? "✅" : "❌"}
                </span>
                <div>
                  <p
                    className="font-black text-sm mb-1"
                    style={{
                      color:
                        selectedOption === mappedCorrectIndex
                          ? "#166534"
                          : "#991b1b",
                    }}
                  >
                    {selectedOption === mappedCorrectIndex
                      ? "Benar! Hebat!"
                      : "Kurang tepat."}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Next button */}
        {answered && (
          <div className="flex justify-end animate-fade-in">
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-3 rounded-xl text-white font-black text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              {qIdx + 1 >= totalInChapter
                ? "Selesai Bab ✓"
                : "Pertanyaan Berikutnya →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
