import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <div className="min-h-screen">
        <Hero />
        <About />
        <Services />
        {/* <Portfolio />
        <Testimonials /> */}
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
