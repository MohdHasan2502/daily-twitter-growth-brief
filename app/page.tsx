import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* HERO */}
        <section className="space-y-6 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
            Stop guessing what to tweet.
            <br />
            Get daily reply strategies that actually work.
          </h1>

          <p className="text-lg text-gray-600">
            We study reply behavior on Twitter, identify what drives real
            conversations, and tell you exactly what to do next.
          </p>

          <div className="space-y-2">
            <Link
              href="/today"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
            >
              See today’s growth brief →
            </Link>
            <p className="text-xs text-gray-500">
              Starts with a preview • No login required
            </p>
          </div>
        </section>

        {/* PROBLEM */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">
            Twitter doesn’t reward posting more. It rewards replying better.
          </h2>
          <p className="text-gray-600">
            Likes don’t convert. Generic replies don’t stick.
            What actually grows your account is knowing:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Which replies lead to conversations</li>
            <li>When timing actually matters</li>
            <li>What behavior brings people back to your profile</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="space-y-2">
            <h3 className="font-medium">1. Observe</h3>
            <p className="text-sm text-gray-600">
              We look at reply behavior — timing, depth, and follow-ups.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">2. Understand</h3>
            <p className="text-sm text-gray-600">
              Patterns emerge from real engagement, not vanity metrics.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">3. Guide</h3>
            <p className="text-sm text-gray-600">
              You get one clear brief telling you what to do — and what to stop.
            </p>
          </div>
        </section>

        {/* PREVIEW CLARITY (IMPORTANT FIX) */}
        <section className="max-w-3xl space-y-3">
          <h3 className="font-medium">How this becomes personal</h3>
          <p className="text-sm text-gray-600">
            Day 1 starts with a sample growth brief so you can understand the
            approach. As you continue, the guidance adapts to your reply style,
            timing, and follow-up behavior.
          </p>
          <p className="text-sm text-gray-600">
            You can connect your Twitter account when you’re ready.
            Read-only access. No posting. Ever.
          </p>
        </section>

        {/* EXAMPLE INSIGHT */}
        <section className="max-w-2xl bg-white p-6 rounded-2xl shadow-sm space-y-4">
          <p className="text-xs uppercase tracking-wide text-gray-400">
            Example — daily growth brief
          </p>

          <p className="text-sm text-gray-700">
            <strong>What’s working:</strong> Early replies that invite follow-ups
          </p>

          <p className="text-sm text-gray-700">
            <strong>What to do today:</strong> Reply within the first hour and ask
            one thoughtful follow-up question
          </p>

          <p className="text-sm text-red-600">
            <strong>Pause:</strong> One-line replies that don’t continue the conversation
          </p>
        </section>

        {/* BUILT FOR */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">
            Built for people growing from zero
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Under 10k followers</li>
            <li>Reply consistently but lack clarity</li>
            <li>Want guidance, not automation</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">
              One clear brief. Every day.
            </h2>
            <p className="text-3xl font-bold mt-2">$10 / month</p>
          </div>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Daily growth brief based on real behavior</li>
            <li>Clear guidance on what to do and what to stop</li>
            <li>Focused on replies, timing, and conversation quality</li>
            <li>No dashboards. No noise.</li>
          </ul>

          <div className="space-y-2">
            <Link
              href="/today"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
            >
              Get my daily growth brief →
            </Link>
            <p className="text-xs text-gray-500">
              Cancel anytime • No posting permissions
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">
            How this earns your trust
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Behavior-based guidance, not generic playbooks</li>
            <li>Never posts or replies on your behalf</li>
            <li>You stay in control — we only guide</li>
          </ul>
        </section>

        {/* VALIDATION */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">
            Built by observing real replies, day by day
          </h2>
          <p className="text-sm text-gray-700">
            This product emerged from studying what actually caused
            conversations and follower growth.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Some reply styles triggered discussion, others didn’t</li>
            <li>Early replies consistently led to follow-ups</li>
            <li>Conversation depth mattered more than volume</li>
          </ul>
        </section>

        {/* FINAL CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Start with today’s brief
          </h2>
          <p className="text-gray-600">
            No posting permissions. No spam. Just guidance.
          </p>
          <Link
            href="/onboarding"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl text-sm font-medium"
          >
            Get today’s growth brief →
          </Link>
        </section>

      </div>
    </main>
  );
}
