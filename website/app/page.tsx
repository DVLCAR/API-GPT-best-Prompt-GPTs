import Hero from '@/components/sections/Hero';
import ProductPillars from '@/components/sections/ProductPillars';
import LogoWall from '@/components/sections/LogoWall';
import Metrics from '@/components/sections/Metrics';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <ProductPillars />
      <LogoWall />
      <Metrics />
      <FinalCTA />
    </>
  );
}
