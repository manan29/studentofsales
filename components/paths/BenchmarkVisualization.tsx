const mockBenchmarks = [
  { label: "Base salary", value: "$78,000" },
  { label: "OTE", value: "$142,000" },
  { label: "Avg. quota attainment", value: "94%" },
];

export default function BenchmarkVisualization({ locked }: { locked: boolean }) {
  return (
    <div className="relative rounded border border-line bg-canvas px-4 py-4">
      <div className={locked ? "blur-sm select-none pointer-events-none" : ""}>
        <div className="grid grid-cols-3 gap-3">
          {mockBenchmarks.map((item) => (
            <div key={item.label}>
              <div className="text-heading font-bold text-lg">{item.value}</div>
              <div className="text-body text-xs mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
      {locked && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="rounded bg-surface border border-line px-3 py-1 text-xs text-body uppercase tracking-wide">
            Locked
          </span>
        </div>
      )}
    </div>
  );
}
