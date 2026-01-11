import { generateMockInsight } from "../Lib/generateInsight";

export default function TodayPage() {
  const insight = generateMockInsight();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="max-w-lg w-full bg-white rounded-2xl shadow-sm p-6 space-y-8">

        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold tracking-tight">
            Today’s Growth Brief
          </h1>
          <p className="text-sm text-gray-500">
            Clear guidance based on your recent Twitter activity
          </p>
        </div>

        {/* Primary Insight */}
        <div className="rounded-xl border bg-gray-50 p-4 space-y-2">
          <h2 className="text-lg font-medium text-gray-900">
            {insight.primaryInsight}
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {insight.reasoning}
          </p>
        </div>

        {/* What To Do */}
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

        {/* What to Pause */}
        <div className="rounded-xl bg-red-50 p-4">
          <p className="text-sm text-red-700">
            {insight.pauseToday[0]}
          </p>
        </div>

        {/* Footer */}
        <div className="text-xs text-gray-400">
          Updated {insight.date} • No posting permissions required
        </div>

      </div>
    </main>
  );
}
