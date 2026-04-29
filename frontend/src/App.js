import "@/App.css";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { TrustIndicators } from "./components/TrustIndicators";
import { Products } from "./components/Products";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Industries } from "./components/Industries";
import { About } from "./components/About";
import { Testimonials } from "./components/Testimonials";
import { CTASection } from "./components/CTASection";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

function App() {
    return (
        <div className="App min-h-screen bg-white">
            <Navbar />
            <main>
                <Hero />
                <TrustIndicators />
                <Products />
                <WhyChooseUs />
                <Industries />
                <About />
                <Testimonials />
                <CTASection />
                <Contact />
            </main>
            <Footer />
            <FloatingWhatsApp />
            {/* Spacer for mobile sticky CTA */}
            <div className="lg:hidden h-16" aria-hidden="true" />
        </div>
    );
}

export default App;
