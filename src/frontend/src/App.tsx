import { useState } from "react";
import BKKBNHeader from "./components/BKKBNHeader";
import GlobalLeaderboardPage from "./components/GlobalLeaderboardPage";
import HomeScreen from "./components/HomeScreen";
import LeaderboardModulePage from "./components/LeaderboardModulePage";
import LembarBalikPage from "./components/LembarBalikPage";
import NameEntryPage from "./components/NameEntryPage";
import QuizPage from "./components/QuizPage";
import ResultsPage from "./components/ResultsPage";
import { MODULES } from "./data/modules";
import type { AppView, ModuleId } from "./types";

export default function App() {
  const [view, setView] = useState<AppView>({ type: "home" });

  const navigate = (v: AppView) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setView(v);
  };

  const getModule = (moduleId: ModuleId) => {
    const mod = MODULES.find((m) => m.id === moduleId);
    if (!mod) throw new Error(`Module ${moduleId} not found`);
    return mod;
  };

  const renderView = () => {
    switch (view.type) {
      case "home":
        return (
          <HomeScreen
            onSelectModule={(id) =>
              navigate({ type: "lembar-balik-before", moduleId: id })
            }
            onGlobalLeaderboard={() => navigate({ type: "leaderboard-global" })}
          />
        );

      case "lembar-balik-before": {
        const mod = getModule(view.moduleId);
        return (
          <LembarBalikPage
            module={mod}
            mode="before"
            onStart={() =>
              navigate({ type: "name-entry", moduleId: view.moduleId })
            }
            onBack={() => navigate({ type: "home" })}
          />
        );
      }

      case "name-entry": {
        const mod = getModule(view.moduleId);
        return (
          <NameEntryPage
            module={mod}
            onStart={(name) =>
              navigate({
                type: "quiz",
                moduleId: view.moduleId,
                playerName: name,
              })
            }
            onBack={() =>
              navigate({ type: "lembar-balik-before", moduleId: view.moduleId })
            }
          />
        );
      }

      case "quiz": {
        const mod = getModule(view.moduleId);
        return (
          <QuizPage
            module={mod}
            playerName={view.playerName}
            onFinish={(score) =>
              navigate({
                type: "results",
                moduleId: view.moduleId,
                playerName: view.playerName,
                score,
              })
            }
          />
        );
      }

      case "results": {
        const mod = getModule(view.moduleId);
        return (
          <ResultsPage
            module={mod}
            playerName={view.playerName}
            score={view.score}
            onViewMaterial={() =>
              navigate({ type: "lembar-balik-after", moduleId: view.moduleId })
            }
            onLeaderboard={() =>
              navigate({ type: "leaderboard-module", moduleId: view.moduleId })
            }
            onRetry={() =>
              navigate({ type: "name-entry", moduleId: view.moduleId })
            }
            onHome={() => navigate({ type: "home" })}
          />
        );
      }

      case "lembar-balik-after": {
        const mod = getModule(view.moduleId);
        return (
          <LembarBalikPage
            module={mod}
            mode="after"
            onStart={() =>
              navigate({ type: "leaderboard-module", moduleId: view.moduleId })
            }
            onBack={() =>
              navigate({ type: "leaderboard-module", moduleId: view.moduleId })
            }
          />
        );
      }

      case "leaderboard-module": {
        const mod = getModule(view.moduleId);
        return (
          <LeaderboardModulePage
            module={mod}
            onBack={() => navigate({ type: "home" })}
            onRetry={() =>
              navigate({ type: "name-entry", moduleId: view.moduleId })
            }
          />
        );
      }

      case "leaderboard-global":
        return (
          <GlobalLeaderboardPage onBack={() => navigate({ type: "home" })} />
        );

      default:
        return (
          <HomeScreen
            onSelectModule={(id) =>
              navigate({ type: "lembar-balik-before", moduleId: id })
            }
            onGlobalLeaderboard={() => navigate({ type: "leaderboard-global" })}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF] font-poppins">
      <BKKBNHeader
        onHome={() => navigate({ type: "home" })}
        onGlobalLeaderboard={() => navigate({ type: "leaderboard-global" })}
      />
      <main>{renderView()}</main>
    </div>
  );
}
