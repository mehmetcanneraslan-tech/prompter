import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
