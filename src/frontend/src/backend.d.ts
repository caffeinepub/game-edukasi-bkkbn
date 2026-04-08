import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface LeaderboardEntry {
    moduleId: string;
    moduleName: string;
    score: bigint;
    totalQuestions: bigint;
    timestamp: bigint;
    playerName: string;
}
export interface backendInterface {
    clearAllResults(): Promise<void>;
    getAllGameResults(): Promise<Array<LeaderboardEntry>>;
    getResultsByModule(moduleId: string): Promise<Array<LeaderboardEntry>>;
    saveGameResult(entry: LeaderboardEntry): Promise<void>;
}
