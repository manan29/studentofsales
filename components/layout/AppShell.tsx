import Sidebar from "@/components/layout/Sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-canvas text-heading">
      <Sidebar />
      <main className="lg:pl-64">
        <div className="max-w-2xl mx-auto px-4 py-10 lg:py-16">{children}</div>
      </main>
    </div>
  );
}
