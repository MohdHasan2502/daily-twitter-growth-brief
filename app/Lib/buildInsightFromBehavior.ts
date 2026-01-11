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
      "Replies that continue conversations and arrive early are driving growth",
    reasoning:
      "Your highest-performing replies were early, longer, and led to back-and-forth conversations — regardless of topic.",
    doToday: [
      "Reply within the first hour on tweets in your feed",
      "Write replies that invite a follow-up",
      "Focus on fewer, higher-effort replies",
    ],
    pauseToday: [
      "One-line replies that don’t continue the conversation",
    ],
  };
}
