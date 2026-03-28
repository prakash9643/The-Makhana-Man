import { Panel } from "@/types/panel";

export async function getPanels(): Promise<Panel[]> {
  const res = await fetch(
    "https://aaronature.com/wp-json/wp/v2/about-panels?_embed",
    { cache: "no-store" }
  );

  const data = await res.json();

  return data
    .map((item: any) => ({
      title: item.acf?.title,
      description: item.acf?.description,
      bg_color: item.acf?.bg_color || "#fff",
      panel_type: item.acf?.panel_type,
      order: item.acf?.order || 0,
      image: item._embedded?.["wp:featuredmedia"]?.[0]?.source_url,
    }))
    .sort((a: Panel, b: Panel) => a.order - b.order);
}