"use client";

const milestoneOptions = [
  "Hitting quota consistently",
  "Promotion to AE",
  "Closing larger deals",
  "Promotion to manager",
  "Building/leading a team",
];

export default function BenchmarkForm({
  formAction,
  pending,
  errorMessage,
}: {
  formAction: (formData: FormData) => void;
  pending: boolean;
  errorMessage?: string;
}) {
  return (
    <form action={formAction} className="flex flex-col gap-3">
      <div>
        <label htmlFor="email" className="text-body text-xs uppercase tracking-wide">
          Work email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded border border-line bg-canvas text-heading px-3 py-2 text-sm outline-none focus:border-body"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="currentCtc" className="text-body text-xs uppercase tracking-wide">
          Current CTC
        </label>
        <input
          id="currentCtc"
          name="currentCtc"
          type="text"
          required
          className="mt-1 w-full rounded border border-line bg-canvas text-heading px-3 py-2 text-sm outline-none focus:border-body"
          placeholder="e.g. $120k"
        />
      </div>
      <div>
        <label htmlFor="targetMilestone" className="text-body text-xs uppercase tracking-wide">
          Target milestone
        </label>
        <select
          id="targetMilestone"
          name="targetMilestone"
          required
          defaultValue=""
          className="mt-1 w-full rounded border border-line bg-canvas text-heading px-3 py-2 text-sm outline-none focus:border-body"
        >
          <option value="" disabled>
            Select one
          </option>
          {milestoneOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {errorMessage && <p className="text-loss text-sm">{errorMessage}</p>}

      <button
        type="submit"
        disabled={pending}
        className="rounded bg-win text-canvas font-semibold px-4 py-2 text-sm disabled:opacity-60"
      >
        {pending ? "Submitting..." : "Unlock benchmark data"}
      </button>
    </form>
  );
}
