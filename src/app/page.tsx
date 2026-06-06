import Hero from "@/component/home/heros";
import Features from "@/component/home/feature";
import OurStory from "@/component/about/ourStory";
import WhoWeServe from "@/component/about/whoWeAre";
import MissionVision from "@/component/about/mission";
import OurUsers from "@/component/home/ourUser";
import FAQ from "@/component/home/faq";
import Footer from "@/component/home/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <OurStory />
      <WhoWeServe />
      <MissionVision />
      <OurUsers />
      <FAQ />
      <Footer />
    </main>
  );
}
