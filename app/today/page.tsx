import { generateMockInsight } from "../Lib/generateInsight";

export default function TodayPage() {
  const insight = generateMockInsight();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm p-6 space-y-8">

        {/* HEADER */}
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Today’s growth brief · preview
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Here’s what would help your account today
          </h1>
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
            Growth comes from replies that invite follow-ups —
            not from replying more. This brief helps you focus
            on what actually compounds.
          </p>
        </div>

        {/* PREVIEW CLARITY */}
        <div className="rounded-xl bg-blue-50 p-4 space-y-1">
          <p className="text-sm text-blue-800 font-medium">
            This is a preview.
          </p>
          <p className="text-sm text-blue-700">
            As you continue, these daily briefs adapt to your
            reply timing, depth, and conversation patterns —
            without posting on your behalf.
          </p>
        </div>

        {/* FOOTER */}
        <div className="text-xs text-gray-400">
          Generated for today · No posting permissions · No automation
        </div>

      </div>
    </main>
  );
}
