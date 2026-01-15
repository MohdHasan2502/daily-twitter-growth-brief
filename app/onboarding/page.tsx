import Link from "next/link";

export default function OnboardingPage() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-sm space-y-6 text-center">

        <h1 className="text-2xl font-semibold tracking-tight">
          Your daily growth brief is ready
        </h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          In the next 24 hours, you’ll know exactly how to reply to grow —
          and what to stop doing.
        </p>

        <p className="text-xs text-gray-500">
          No posting access. No automation. Just guidance.
        </p>

        <Link
          href="/today"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl text-sm font-medium"
        >
          View today’s brief →
        </Link>
      </div>
    </main>
  );
}
