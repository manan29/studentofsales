export default function RoadmapBanner({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-line bg-gradient-to-tr from-[#111319] via-[#1A102F] to-[#0A201D] px-6 py-10">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 32px)",
        }}
      />
      <div className="relative">
        <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-wide text-heading">
          {heading}
        </h1>
        <p className="text-body mt-3 max-w-xl">{description}</p>
      </div>
    </div>
  );
}
