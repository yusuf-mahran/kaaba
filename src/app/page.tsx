import AboutSection from '../../components/AboutSection';
import HeroSection from '../../components/HeroSection';
import PackagesSection from '../../components/PackagesSection';
import GallerySection from '../../components/GallerySection';
import SelectJourney from '../../components/SelectJourney';
import StatsSection from '../../components/StatsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <SelectJourney />
      <AboutSection />
      <StatsSection />
      <PackagesSection />
      <GallerySection />
    </>
  );
}
