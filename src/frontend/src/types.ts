export type ModuleId =
  | "siklus-hidup"
  | "pernikahan"
  | "pus"
  | "remaja-berprestasi"
  | "kespro";

export type QuestionType = "multiple-choice" | "true-false" | "fill-blank";

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  // For multiple-choice: 4 options; for true-false: ["Benar", "Salah"]; for fill-blank: hints
  options: [string, string] | [string, string, string, string];
  correctIndex: number;
  explanation: string;
  // For fill-blank: the correct answer text (also at correctIndex in options)
  fillAnswer?: string;
}

export interface Chapter {
  id: number;
  title: string;
  emoji: string;
  description: string;
  // Pool of questions to randomly pick from
  questionPool: Question[];
  // How many questions to pick from pool for each play
  questionsPerPlay: number;
}

export interface LembarBalikSection {
  title: string;
  emoji: string;
  content: string;
  highlight?: string;
}

export interface Module {
  id: ModuleId;
  title: string;
  subtitle: string;
  emoji: string;
  gradientFrom: string;
  gradientTo: string;
  accentColor: string;
  lembarBalik: LembarBalikSection[];
  chapters: Chapter[];
  // Legacy flat questions for backwards compat
  questions: Question[];
}

export interface LeaderboardEntry {
  name: string;
  score: number;
  date: string;
  moduleId: ModuleId;
  moduleTitle: string;
}

export type AppView =
  | { type: "home" }
  | { type: "lembar-balik-before"; moduleId: ModuleId }
  | { type: "name-entry"; moduleId: ModuleId }
  | { type: "quiz"; moduleId: ModuleId; playerName: string }
  | { type: "results"; moduleId: ModuleId; playerName: string; score: number }
  | { type: "lembar-balik-after"; moduleId: ModuleId }
  | { type: "leaderboard-module"; moduleId: ModuleId }
  | { type: "leaderboard-global" };
