import Header from "@/app/components/Header";
import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import About from "@/app/components/About";
import Access from "@/app/components/Access";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Access />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
