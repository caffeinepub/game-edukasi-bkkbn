export type ModuleId =
  | "siklus-hidup"
  | "pernikahan"
  | "pus"
  | "remaja-berprestasi"
  | "kespro";

export interface Question {
  id: number;
  question: string;
  options: [string, string, string, string];
  correctIndex: number;
  explanation: string;
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
