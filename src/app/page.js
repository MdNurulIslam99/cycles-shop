import Image from "next/image";
import HeroSection from "./heroSection/page";
import FeaturedProductSection from "./featuresection/page";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div>
        <FeaturedProductSection></FeaturedProductSection>
      </div>
    </div>
  );
}
