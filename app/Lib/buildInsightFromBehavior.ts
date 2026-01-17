

export function buildInsightFromBehavior(
  behavior: any,
  context: { dayIndex: number }
) {
  const focusAreas = [
    "reply_timing",
    "conversation_depth",
    "follow_up_quality",
    "selectivity",
    "opening_strength",
  ];

  const focus =
    focusAreas[context.dayIndex % focusAreas.length];

  switch (focus) {
    case "reply_timing":
      return {
        primaryInsight:
          "Replies posted early are driving most of your engagement",
        reasoning:
          "Your highest-performing replies were posted within the first hour and led to ongoing conversations.",
        doToday: [
          "Reply within the first hour on tweets in your feed",
          "Prioritize fewer, timely replies",
          "Engage where conversation is already forming",
        ],
        pauseToday: [
          "Late replies on saturated threads",
        ],
        date: new Date().toDateString(),
      };

    case "conversation_depth":
      return {
        primaryInsight:
          "Longer replies that invite responses perform best",
        reasoning:
          "Replies that encouraged follow-ups led to higher visibility and profile visits.",
        doToday: [
          "Write replies that ask a thoughtful question",
          "Add context, not reactions",
          "Invite continuation",
        ],
        pauseToday: [
          "One-line reactions without substance",
        ],
        date: new Date().toDateString(),
      };

    default:
      return {
        primaryInsight:
          "Focused engagement compounds growth",
        reasoning:
          "Consistency in one behavior outperforms scattered effort.",
        doToday: [
          "Apply today’s focus deliberately",
        ],
        pauseToday: [
          "Trying to do everything at once",
        ],
        date: new Date().toDateString(),
      };
  }
}

