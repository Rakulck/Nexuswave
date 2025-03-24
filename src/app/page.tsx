import About from './components/home/About/About';
import Services from './components/home/Services/Services';
import Contact from './components/home/Contact';
import Hero from './components/home/Hero';
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
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
