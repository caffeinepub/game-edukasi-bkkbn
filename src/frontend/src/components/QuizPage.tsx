import { useState } from "react";
import type { Module } from "../types";

interface QuizPageProps {
  module: Module;
  playerName: string;
  onFinish: (score: number) => void;
}

export default function QuizPage({
  module: mod,
  playerName,
  onFinish,
}: QuizPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [animKey, setAnimKey] = useState(0);

  const question = mod.questions[currentIndex];
  const totalQuestions = mod.questions.length;
  const progress = (currentIndex / totalQuestions) * 100;

  const handleSelectOption = (index: number) => {
    if (answered) return;
    setSelectedOption(index);
    setAnswered(true);
    if (index === question.correctIndex) {
      setCorrectCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= totalQuestions) {
      onFinish(Math.round((correctCount / totalQuestions) * 100));
    } else {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setAnswered(false);
      setAnimKey((k) => k + 1);
    }
  };

  const optionLabels = ["A", "B", "C", "D"];

  const getOptionStyle = (index: number) => {
    if (!answered) {
      return {
        bg: "bg-white hover:bg-blue-50",
        border: "border-gray-200 hover:border-[#2D9CDB]",
        text: "text-gray-800",
      };
    }
    if (index === question.correctIndex) {
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

  return (
    <div className="min-h-screen bg-[#F3F8FF] px-4 py-8">
      <div className="max-w-2xl mx-auto">
        {/* Quiz Header */}
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

          {/* Progress bar */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
              <div
                data-ocid="quiz.progress.bar"
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${progress}%`,
                  background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
                }}
              />
            </div>
            <span className="text-sm font-bold text-gray-600 whitespace-nowrap">
              {currentIndex + 1} / {totalQuestions}
            </span>
          </div>
        </div>

        {/* Question Card */}
        <div
          key={animKey}
          className="bg-white rounded-2xl shadow-md p-6 mb-4 animate-fade-in"
        >
          <div
            className="inline-block text-white text-xs font-black px-3 py-1 rounded-full mb-4"
            style={{
              background: `linear-gradient(90deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
            }}
          >
            Pertanyaan {currentIndex + 1}
          </div>

          <h2 className="text-base sm:text-lg font-black text-gray-900 mb-6 leading-snug">
            {question.question}
          </h2>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((option, index) => {
              const style = getOptionStyle(index);
              return (
                <button
                  type="button"
                  key={option}
                  data-ocid={`quiz.option.${index + 1}`}
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
                      answered && index === question.correctIndex
                        ? "bg-green-500 border-green-500 text-white"
                        : answered &&
                            index === selectedOption &&
                            index !== question.correctIndex
                          ? "bg-red-400 border-red-400 text-white"
                          : "border-current"
                    }`}
                  >
                    {answered && index === question.correctIndex
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

          {/* Explanation */}
          {answered && (
            <div
              className="mt-5 rounded-xl p-4 animate-fade-in"
              style={{
                background:
                  selectedOption === question.correctIndex
                    ? "#f0fdf4"
                    : "#fef2f2",
                borderLeft: `4px solid ${
                  selectedOption === question.correctIndex
                    ? "#22c55e"
                    : "#ef4444"
                }`,
              }}
            >
              <div className="flex items-start gap-2">
                <span className="text-lg">
                  {selectedOption === question.correctIndex ? "✅" : "❌"}
                </span>
                <div>
                  <p
                    className="font-black text-sm mb-1"
                    style={{
                      color:
                        selectedOption === question.correctIndex
                          ? "#166534"
                          : "#991b1b",
                    }}
                  >
                    {selectedOption === question.correctIndex
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
              data-ocid="quiz.next.button"
              onClick={handleNext}
              className="px-6 py-3 rounded-xl text-white font-black text-sm hover:opacity-90 transition-opacity shadow-lg"
              style={{
                background: `linear-gradient(135deg, ${mod.gradientFrom}, ${mod.gradientTo})`,
              }}
            >
              {currentIndex + 1 >= totalQuestions
                ? "Lihat Hasil 🎯"
                : "Pertanyaan Berikutnya →"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
