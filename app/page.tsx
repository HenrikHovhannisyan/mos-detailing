import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
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
      <Services />
      <WorksPreview />
      <Contacts />
      <Footer />
    </main>
  );
}
