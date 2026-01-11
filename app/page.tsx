import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">

        {/* HERO */}
        <section className="space-y-6 max-w-2xl">
          <h1 className="text-4xl font-semibold tracking-tight leading-tight">
           Stop guessing what to tweet. Get daily reply strategies that actually work
          </h1>
          <p className="text-lg text-gray-600">
            We analyze YOUR replies, find what gets engagement, and tell you exactly what to do next.
            
          </p>

          <Link
            href="/today"
            className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
          >
            View today’s growth brief →
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
        <section className="max-w-2xl space-y-4 bg-white p-6 rounded-2xl shadow-sm">
          <h3 className="font-medium">Example daily insight</h3>
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
        {/* Insertions */}
          <section>
            <h2 className="text-2xl font-semibold">Perfect for creators ready to stop posting into the void</h2>
            <p className="text-gray-600">One clear brief. Every day.</p>
            <br />
            <p className="text-black-800 text-2xl font-bold">$10 a month</p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>A daily growth brief based on your recent activity</li>
              <li>Clear guidance on what to do and what to stop</li>
              <li>Focused on replies, timing, and conversation quality</li>
              <li> No dashboards. No vanity metrics. No noise</li>
              <li>[ Get my daily growth brief ]</li>
              <li className="font-bold">Cancel anytime. No posting permissions.</li>
            </ul>
          </section>

          {/* HOW TO EARN YOUR TRUST */}
          <section>
            <h2 className="text-2xl font-semibold">How this earns your trust</h2>
            <br />
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li> Uses your activity, not generic playbooks</li>
              <li>Never posts or replies on your behalf</li>
              <li> You stay in control — we only guide</li>
            </ul>
          </section>



          {/* validation */}
          <section>
            <h2 className="text-2xl font-semibold">Built using real posting behavior</h2>
            <p className="text-sm text-gray-700">This product was built by tracking real replies from a growing account.</p>
            <br />
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Over the last few days:</li>
              <li>Some topics triggered replies, others didn’t</li>
              <li>Early replies led to more follow-ups</li>
              <li>Certain reply styles brought profile visits and followers</li>
              

              <p>Today’s brief exists because these patterns repeated.</p>
            </ul>
          </section>







        {/* CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">
            Start with today’s brief
          </h2>
          <p className="text-gray-600">
            No posting permissions. No spam. Just guidance.
          </p>
          <Link
            href="/today"
            className="inline-block bg-black text-white px-8 py-3 rounded-xl text-sm font-medium"
          >
            Get my daily growth brief →
          </Link>
        </section>

      </div>
    </main>
  );
}
