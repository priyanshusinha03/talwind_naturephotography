import Hero from "@/components/Hero";
import Connectwithsns from "@/components/Connctwithsns";
import Carousel from "@/components/Carousel";
export default function Home() {
  return (
    <div>
      {/* <Hero
        heading="Capture Photography"
        message="capture moments in nature and keep them alive."
      /> */}
      <Carousel/>
      <Connectwithsns/>
    </div>
  );
}
