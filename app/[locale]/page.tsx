import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import WhyUs from "../components/WhyUs/WhyUs";
import Contact from "../components/Contact/Contact";
import Faq from "../components/Faq/Faq";
import TopPar from "../components/TopPar/TopServices";
import CallMeWidget from "../components/CallMeWidget/callme-widget";

export default function Home() {
  return (
    <div>
      <Hero />
      <TopPar />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Faq />
      <CallMeWidget />
    </div>
  );
}
