import "@/App.css";
import { useEffect } from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";

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

import Oxygen from "./pages/Oxygen";
import Nitrogen from "./pages/Nitrogen";
import Argon from "./pages/Argon";
import CO2 from "./pages/CO2";
import Helium from "./pages/Helium";
import SpecialtyGas from "./pages/SpecialtyGas";

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

function Home() {
    return (
        <div className="App min-h-screen bg-white overflow-x-hidden">
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

            <div
                className="lg:hidden h-16"
                aria-hidden="true"
            />
        </div>
    );
}

function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                {/* HOMEPAGE */}
                <Route
                    path="/"
                    element={<Home />}
                />

                {/* PRODUCT PAGES */}
                <Route
                    path="/produk/oxygen"
                    element={<Oxygen />}
                />

                <Route
                    path="/produk/nitrogen"
                    element={<Nitrogen />}
                />

                <Route
                    path="/produk/argon"
                    element={<Argon />}
                />

                <Route
                    path="/produk/co2"
                    element={<CO2 />}
                />

                <Route
                    path="/produk/helium"
                    element={<Helium />}
                />

                <Route
                    path="/produk/specialty-gas"
                    element={<SpecialtyGas />}
                />
            </Routes>
        </BrowserRouter>
    );
}

export default App;