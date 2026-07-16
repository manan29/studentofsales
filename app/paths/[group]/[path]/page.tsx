import { notFound } from "next/navigation";
import { getAllPathParams, getPath } from "@/lib/paths";
import RoadmapBanner from "@/components/paths/RoadmapBanner";
import BenchmarkGate from "@/components/paths/BenchmarkGate";
import WinsLossesBlock from "@/components/paths/WinsLossesBlock";
import ContextCardStream from "@/components/paths/ContextCardStream";

export function generateStaticParams() {
  return getAllPathParams();
}

export default async function PathPage({
  params,
}: {
  params: Promise<{ group: string; path: string }>;
}) {
  const { group, path } = await params;
  const result = getPath(group, path);

  if (!result) {
    notFound();
  }

  const { group: groupData, path: pathData } = result;

  return (
    <div>
      <RoadmapBanner
        heading={pathData.roadmapHeading}
        description={pathData.roadmapDescription}
      />
      <BenchmarkGate pathGroupSlug={groupData.slug} pathSlug={pathData.slug} />
      <WinsLossesBlock entries={pathData.winLossEntries} />
      <ContextCardStream resources={pathData.resources} />
    </div>
  );
}
