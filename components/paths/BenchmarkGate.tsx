"use client";

import { useActionState } from "react";
import { submitBenchmarkLead, BenchmarkFormState } from "@/lib/actions/leads";
import BenchmarkForm from "@/components/paths/BenchmarkForm";
import BenchmarkVisualization from "@/components/paths/BenchmarkVisualization";

const initialState: BenchmarkFormState = { status: "idle" };

export default function BenchmarkGate({
  pathGroupSlug,
  pathSlug,
}: {
  pathGroupSlug: string;
  pathSlug: string;
}) {
  const boundAction = submitBenchmarkLead.bind(null, pathGroupSlug, pathSlug);
  const [state, formAction, pending] = useActionState(boundAction, initialState);
  const unlocked = state.status === "success";

  return (
    <section className="mt-10 rounded border border-line bg-surface p-5">
      <h2 className="text-heading font-semibold uppercase tracking-wide text-sm mb-1">
        Compensation Benchmark
      </h2>
      <p className="text-body text-sm mb-4">
        Crowd-sourced from reps at this exact milestone. Unlock it by sharing where you
        are today.
      </p>
      <BenchmarkVisualization locked={!unlocked} />
      {!unlocked && (
        <div className="mt-4">
          <BenchmarkForm
            formAction={formAction}
            pending={pending}
            errorMessage={state.status === "error" ? state.message : undefined}
          />
        </div>
      )}
    </section>
  );
}
