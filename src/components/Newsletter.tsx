// Shows a real sign-up form only when a newsletter provider is configured.
// The old site showed "Success!" without saving the email anywhere; this never fakes it.
const FORM_ACTION = process.env.NEXT_PUBLIC_NEWSLETTER_FORM_ACTION;

export function Newsletter() {
  return (
    <section id="newsletter" className="px-6 pb-16">
      <div className="mx-auto flex max-w-[1112px] flex-wrap items-end gap-x-16 gap-y-8 rounded-3xl bg-ink px-6 py-12 text-white sm:px-10 sm:py-14">
        <div className="min-w-0 flex-[1_1_340px]">
          <h2 className="heading text-4xl">One note a week, for your move.</h2>
          <p className="mt-3 text-base text-on-ink-muted">
            Every Tuesday: one idea, one resource, one thing to try.
          </p>
        </div>
        {FORM_ACTION ? (
          <form action={FORM_ACTION} method="post" className="flex min-w-0 flex-[1_1_420px] flex-wrap items-end gap-3">
            <div className="flex flex-[1_1_220px] flex-col gap-1.5">
              <label htmlFor="nl-email" className="text-sm font-semibold">Work email</label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@company.com"
                className="min-h-12 rounded-[10px] border border-[#55544f] bg-ink-panel px-3.5 text-base text-white placeholder:text-[#9a988f]"
              />
            </div>
            <button type="submit" className="btn btn-lg bg-paper text-ink hover:bg-white">Subscribe</button>
          </form>
        ) : (
          <p className="min-w-0 flex-[1_1_420px] text-base text-on-ink-muted">
            The weekly note is launching soon.
          </p>
        )}
      </div>
    </section>
  );
}
