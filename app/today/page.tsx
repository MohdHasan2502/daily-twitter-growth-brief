import { generateMockInsight } from "../Lib/generateInsight";

export default function TodayPage() {
  const insight = generateMockInsight();

  return (
    <main className="min-h-screen bg-gray-300 flex items-center justify-center px-4 py-12">
      <div className="max-w-lg w-full bg-green-50 rounded-2xl shadow-sm p-6 space-y-8">

        {/* HEADER */}
        <div className="space-y-1">
          <p className="text-lg uppercase tracking-wide text-gray-400">
            Today’s growth brief · preview
          </p>
          <p className="text-sm text-gray-500">
  One focused growth behavior per day. Guidance compounds over time.
</p>
          <div className="border-l-4 border-green-400 bg-green-50/40 px-4 py-3 rounded-r-lg">
  <h1 className="text-lg font-medium text-gray-900">
    Here’s what would help your account today
  </h1>
</div>

          <p className="text-sm text-gray-500">
            One clear insight based on real reply behavior.
          </p>
        </div>

        {/* PRIMARY INSIGHT */}
        <div className="rounded-xl border bg-gray-50 p-4 space-y-2">
          <h2 className="text-lg font-medium text-gray-900">
            {insight.primaryInsight}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {insight.reasoning}
          </p>
        </div>

        {/* WHAT TO DO */}
        <div className="space-y-3">
          <h3 className="font-medium text-gray-900">
            What to do today
          </h3>
          <ul className="space-y-2 text-sm text-gray-700">
            {insight.doToday.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </div>

        {/* WHAT TO PAUSE */}
        <div className="rounded-xl bg-red-50 p-4 space-y-1">
          <h4 className="text-sm font-medium text-red-800">
            What to pause
          </h4>
          <p className="text-sm text-red-700">
            {insight.pauseToday[0]}
          </p>
        </div>

        {/* WHY THIS EXISTS */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-900">
            Why this brief exists
          </h4>
          <p className="text-sm text-gray-600">
            You don’t need more replies. You need replies that invite a second message.
            This brief exists to help you choose which replies are worth writing today..
          </p>
        </div>

        {/* PREVIEW CLARITY */}
        <div className="rounded-xl bg-blue-50 p-4 space-y-1">
          <p className="text-sm text-blue-800 font-medium">
            This is a preview.
          </p>
          <p className="text-sm text-blue-700">
            This is a preview using observed reply patterns.
            As you continue, the brief narrows — fewer suggestions, more certainty.
          </p>
        </div>

        {/* FOOTER */}
        <p className="text-xs text-gray-400">
  This brief focuses on one growth behavior per day.
  Insights evolve as patterns change not daily by default.
</p>

        <div className="text-xs text-gray-400">
          Generated for today · No posting permissions · No automation
        </div>

      </div>
    </main>
  );
}
