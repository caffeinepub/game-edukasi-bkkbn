import List "mo:core/List";
import Array "mo:core/Array";
import Int "mo:core/Int";

actor {
  public type LeaderboardEntry = {
    playerName : Text;
    moduleName : Text;
    moduleId : Text;
    score : Nat;
    totalQuestions : Nat;
    timestamp : Int;
  };

  let allGameResults = List.empty<LeaderboardEntry>();

  public func saveGameResult(entry : LeaderboardEntry) : async () {
    allGameResults.add(entry);
  };

  public query func getAllGameResults() : async [LeaderboardEntry] {
    let arr = allGameResults.toArray();
    arr.sort<LeaderboardEntry>(func(a, b) = Int.compare(b.timestamp, a.timestamp));
  };

  public query func getResultsByModule(moduleId : Text) : async [LeaderboardEntry] {
    let filtered = allGameResults.filter(func(e) { e.moduleId == moduleId });
    let arr = filtered.toArray();
    arr.sort<LeaderboardEntry>(func(a, b) = Int.compare(b.timestamp, a.timestamp));
  };

  public func clearAllResults() : async () {
    allGameResults.clear();
  };
};
