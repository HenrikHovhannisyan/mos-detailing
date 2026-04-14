import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import Services from "../components/Services/Services";
import WorksPreview from "../components/WorksPreview/WorksPreview";
import Contacts from "../components/Contacts/Contacts";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <BeforeAfter />
      <Services />
      <WorksPreview />
      <Contacts />
      <Footer />
    </main>
  );
}
