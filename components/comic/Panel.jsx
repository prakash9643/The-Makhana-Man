import LeftText from "./panels/LeftText";
import CenterHero from "./panels/CenterHero";
import SplitPanel from "./panels/SplitPanel";
import Flavour from "./panels/Flavour";

export default function Panel({ data }) {
  switch (data.panel_type) {
    case "left-text":
      return <LeftText data={data} />;
    case "center":
      return <CenterHero data={data} />;
    case "split":
      return <SplitPanel data={data} />;
    case "full-image":
      return <Flavour data={data} />;
    default:
      return <CenterHero data={data} />;
  }
}