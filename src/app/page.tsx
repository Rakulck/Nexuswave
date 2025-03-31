import About from './components/home/About/About';
import Services from './components/home/Services/Services';
import Contact from './components/home/Contact';
import Hero from './components/home/Hero';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChatbotIcon from './components/Chatbot/ChatbotIcon';

export default function Home() {
  return (
    <main className="relative overflow-x-hidden w-full">
      <Navbar />
      <div className="min-h-screen w-full overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Contact />
      </div>
      <Footer />
      <ChatbotIcon />
    </main>
  );
}
