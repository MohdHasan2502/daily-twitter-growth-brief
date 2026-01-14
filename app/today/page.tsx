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
            Clear guidance based on your recent activity
          </p>
        </div>

        {/* Reassurance */}
        <p className="text-xs text-gray-400">
          Based on your recent replies
        </p>

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

        {/* Why you're seeing this */}
        <div className="rounded-xl border bg-gray-50 p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900">
            Why you’re seeing this today
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            Yesterday, we looked at how your replies performed.
          </p>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Replies posted earlier triggered more follow-ups</li>
            <li>• Short, one-line replies ended conversations</li>
            <li>• UI/UX-related replies led to profile visits</li>
          </ul>
        </div>

        {/* Today's Focus */}
        <div className="rounded-xl border bg-gray-50 p-4 space-y-2">
          <h3 className="text-sm font-medium text-gray-900">
            Today’s focus
          </h3>
          <p className="text-sm text-gray-700">
            Reply to 3 tweets using this approach.
            Stop once you’ve done that.
          </p>
        </div>

        {/* Tomorrow loop */}
        <p className="text-xs text-gray-400">
          Tomorrow’s brief will adjust based on what happens today.
        </p>

        {/* Footer */}
        <div className="text-xs text-gray-400">
          Updated {insight.date} • No posting permissions required
        </div>

      </div>
    </main>
  );
}
