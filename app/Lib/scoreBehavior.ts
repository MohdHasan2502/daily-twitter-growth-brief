import { Behavior } from "./behavior";

export function scoreBehavior(b: Behavior): number {
  let score = 0;

  score += b.likes * 1;
  score += b.repliesReceived * 3;
  score += b.followersGained * 5;

  if (b.repliedEarly) score += 5;
  if (b.replyContinuedConversation) score += 7;

  if (b.replyLength === "LONG") score += 4;
  if (b.replyLength === "SHORT") score -= 2;

  return score;
}
