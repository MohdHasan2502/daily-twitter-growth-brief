import { recentBehavior } from "./mockActivityData";
import { buildInsightFromBehavior } from "./buildInsightFromBehavior";

export function generateMockInsight() {
  const dayIndex = new Date().getDay(); // 0–6

  return buildInsightFromBehavior(recentBehavior, {
    dayIndex,
  });
}
