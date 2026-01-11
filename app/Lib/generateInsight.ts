import { recentBehavior } from "./mockActivityData";
import { buildInsightFromBehavior } from "./buildInsightFromBehavior";

export function generateMockInsight() {
  return buildInsightFromBehavior(recentBehavior);
}
