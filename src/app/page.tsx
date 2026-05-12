import Hero from "@/components/sections/Hero";
import BrandDesign from "@/components/sections/BrandDesign";
import GraphicDesign from "@/components/sections/GraphicDesign";
import MagazineDesign from "@/components/sections/MagazineDesign";
import Photography from "@/components/sections/Photography";
import TextileDesign from "@/components/sections/TextileDesign";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <BrandDesign />
      <GraphicDesign />
      <MagazineDesign />
      <Photography />
      <TextileDesign />
      <Contact />
    </div>
  );
}
