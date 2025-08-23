import HeroSection from "./heroSection/page";
import FeaturedProductSection from "./featuresection/page";
import ProductsPage from "./components/ProductsPage/ProductsPage";

export default function Home() {
  return (
    <div>
      <div>
        <HeroSection></HeroSection>
      </div>
      <div>
        <ProductsPage></ProductsPage>
      </div>
      <div>
        <FeaturedProductSection></FeaturedProductSection>
      </div>
    </div>
  );
}
