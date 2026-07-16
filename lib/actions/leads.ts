"use server";

import { getSupabaseServerClient } from "@/lib/supabase/server";

export type BenchmarkFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitBenchmarkLead(
  pathGroupSlug: string,
  pathSlug: string,
  _prevState: BenchmarkFormState,
  formData: FormData
): Promise<BenchmarkFormState> {
  const email = String(formData.get("email") ?? "").trim();
  const currentCtc = String(formData.get("currentCtc") ?? "").trim();
  const targetMilestone = String(formData.get("targetMilestone") ?? "").trim();

  if (!email || !currentCtc || !targetMilestone) {
    return { status: "error", message: "All fields are required." };
  }

  try {
    const supabase = getSupabaseServerClient();
    const { error } = await supabase.from("leads").insert({
      email,
      current_ctc: currentCtc,
      target_milestone: targetMilestone,
      path_group_slug: pathGroupSlug,
      path_slug: pathSlug,
    });

    if (error) {
      return { status: "error", message: "Something went wrong. Please try again." };
    }

    return { status: "success" };
  } catch {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
}
