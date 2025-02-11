
import HeroSectionHome from "@/components/HeroSection/home/HeroSectionHome";
import Benefits from "@/components/Benefits/Benefits";
import Testimonials from "@/components/Testimonials/Testimonials";
import Navigate from "@/components/Navigate/Navigate";
export default function Home() {
  return (
    <>
      <main className="lg:px-[168px] lg:pt-[80px] lg:pb-[140px] sm:px-[4px] sm:pt-[50px] sm:pb-[79px]">
          <HeroSectionHome/>
          <Benefits/>
          <Testimonials/>
          <Navigate/>
      </main>
    </>
  );
}
