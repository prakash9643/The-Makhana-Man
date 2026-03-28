import { getPanels } from "@/lib/api";
import Panel from "@/components/comic/Panel";
import MakhanaStandard from "@/components/MakhanaStandard"

export default async function AboutPage() {
  const panels = await getPanels();

  return (
    <main className="overflow-x-hidden">
      {panels.map((panel, i) => (
        <Panel key={i} data={panel} />
      ))}
      <MakhanaStandard/>
    </main>
  );
}