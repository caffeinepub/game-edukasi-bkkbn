# Game Edukasi BKKBN

## Current State
New project. Only scaffold files exist (empty Motoko actor, no frontend components).

## Requested Changes (Diff)

### Add
- BKKBN-branded header with logo (SVG/styled text, blue #003087 + gold accents), tagline, and navigation
- Home/landing page with hero section and 5 module cards (gradient backgrounds, emoji icons)
- 5 fully-featured quiz/game modules:
  1. Siklus Hidup Manusia
  2. Persiapan Pernikahan
  3. Pasangan Usia Subur (PUS)
  4. Remaja Berprestasi
  5. Kesehatan Reproduksi Remaja
- Each module contains:
  - Lembar Balik (flip chart reading material) shown before AND after quiz
  - 10 multiple choice questions with 4 options each (all in Bahasa Indonesia)
  - Immediate answer feedback with explanation
  - Progress bar
  - Player name entry screen before quiz
  - Score display at end (out of 100)
  - Per-module leaderboard (top 10, stored in localStorage)
- Global Leaderboard page showing rankings across all modules
- Smooth page transitions and fun animations
- localStorage persistence for all scores and leaderboard data

### Modify
- N/A (new project)

### Remove
- N/A (new project)

## Implementation Plan
1. Set up index.css with BKKBN design tokens (blue #003087, gold/yellow accents, bright module colors)
2. Create type definitions for Quiz, Question, Score, LeaderboardEntry
3. Build data layer: all quiz content (50 questions total) and lembar balik content in static data files
4. Build shared components: BKKBNHeader, ModuleCard, ProgressBar, QuizFeedback, LeaderboardTable
5. Build page components: HomePage, LembarBalikPage, QuizPage, ResultPage, LeaderboardPage
6. Implement routing with React state machine (no router library needed)
7. Implement localStorage hooks for reading/writing leaderboard data
8. Wire all pages and transitions
9. Validate (lint + typecheck + build)
