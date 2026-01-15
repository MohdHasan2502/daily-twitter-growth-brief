import { Behavior } from "./behavior";
import { Insight } from "./insight";
import { scoreBehavior } from "./scoreBehavior";

export function buildInsightFromBehavior(
  behaviors: Behavior[]
): Insight {
  const scored = behaviors.map((b) => ({
    ...b,
    score: scoreBehavior(b),
  }));

  const avgScore =
    scored.reduce((sum, b) => sum + b.score, 0) / scored.length;

  const strongSignals = scored.filter((b) => b.score >= avgScore);
  const weakSignals = scored.filter((b) => b.score < avgScore);

  return {
    date: new Date().toDateString(),
    primaryInsight:
      "Your replies grow when you respond early and ask a follow-up — not when you agree and move on.",
    reasoning:
      "Your highest-performing replies were early, longer, and led to back-and-forth conversations — regardless of topic.",
    doToday: [
     "Reply early to one tweet and end your reply with a genuine follow-up question.",
     "If you do more, repeat this pattern don’t change it."
    ],
    pauseToday: [
      "Replies that close the loop instead of opening one.",
    ],
  };
}
