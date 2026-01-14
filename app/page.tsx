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
           We analyze YOUR replies, find what gets engagement, and tell you exactly what to do next.
          </p>

          <Link
            href="/today"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
          >
           See my growth brief →
          </Link>
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
            <li>When timing matters</li>
            <li>What behavior brings followers back</li>
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="grid md:grid-cols-3 gap-8 max-w-4xl">
          <div className="space-y-2">
            <h3 className="font-medium">1. Observe</h3>
            <p className="text-sm text-gray-600">
              We look at how your replies perform — timing, depth, and follow-ups.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">2. Understand</h3>
            <p className="text-sm text-gray-600">
              Patterns are detected based on real engagement, not vanity metrics.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="font-medium">3. Guide</h3>
            <p className="text-sm text-gray-600">
              You get one clear brief telling you what to do — and what to stop.
            </p>
          </div>
        </section>

        {/* EXAMPLE INSIGHT */}
        <section className="max-w-2xl bg-white p-6 rounded-2xl shadow-sm space-y-3">
          <h3 className="font-medium">Example daily insight</h3>
          <h3 className="text-2xl">Here’s what a real daily brief looks like:</h3>
          <p className="text-sm text-gray-700">
            <strong>What’s working:</strong> Early replies that invite follow-ups
          </p>
          <p className="text-sm text-gray-700">
            <strong>What to do today:</strong> Reply within the first hour and ask one thoughtful follow-up question
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
            <li>Have under 10k followers</li>
            <li>Reply daily but don’t know what’s effective</li>
            <li>Want clarity, not automation</li>
          </ul>
        </section>

        {/* PRICING */}
        <section className="max-w-3xl bg-white p-8 rounded-2xl shadow-sm space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">One clear brief. Every day.</h2>
            <p className="text-3xl font-bold mt-2">$10 / month</p>
          </div>

          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>A daily growth brief based on your recent activity</li>
            <li>Clear guidance on what to do and what to stop</li>
            <li>Focused on replies, timing, and conversation quality</li>
            <li>No dashboards. No vanity metrics. No noise</li>
          </ul>

          <div className="space-y-2">
            <Link
              href="/today"
              className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
            >
              Get my daily growth brief →
            </Link>
            <p className="text-xs text-gray-500">
              Cancel anytime. No posting permissions.
            </p>
          </div>
        </section>

        {/* TRUST */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">How this earns your trust</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Uses your activity, not generic playbooks</li>
            <li>Never posts or replies on your behalf</li>
            <li>You stay in control — we only guide</li>
          </ul>
        </section>

        {/* VALIDATION */}
        <section className="max-w-3xl space-y-4">
          <h2 className="text-2xl font-semibold">
           Built by tracking real replies, day by day
          </h2>
          <p className="text-sm text-gray-700">
            This product was built by tracking real replies from a growing account.
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Some topics triggered replies, others didn’t</li>
            <li>Early replies led to more follow-ups</li>
            <li>Certain reply styles brought profile visits and followers</li>
          </ul>
          <p className="text-sm text-gray-700">
            Today’s brief exists because these patterns repeated.
          </p>
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
            Get my daily growth brief →
          </Link>
        </section>

      </div>
    </main>
  );
}
