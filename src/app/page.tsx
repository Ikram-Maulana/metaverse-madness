import About from "@/components/sections/about";
import Explore from "@/components/sections/explore";
import Feedback from "@/components/sections/feedback";
import GetStarted from "@/components/sections/get-started";
import Hero from "@/components/sections/hero";
import Insights from "@/components/sections/insights";
import WhatsNew from "@/components/sections/whats-new";
import World from "@/components/sections/world";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Metaverse Madness",
  description:
    "A new thing in the future, where you can do stuff virtually by feeling like it's real.",
  applicationName: "Metaverse Madness",
  authors: [
    {
      name: "Ikram Maulana",
      url: "https://ikram-maulana.tech",
    },
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>
    </>
  );
}
