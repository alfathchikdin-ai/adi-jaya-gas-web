import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { WA_LINK, LOGO_URL, openWhatsAppLink } from "../lib/constants";

const links = [
    { label: "Beranda", section: "beranda" },
    { label: "Produk", section: "produk" },
    { label: "Industri", section: "industri" },
    { label: "Tentang", section: "tentang" },
    { label: "Kontak", section: "kontak" },
];

export const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);

        onScroll();

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleSectionClick = (section) => {
        setOpen(false);

        // Kalau sedang di product page, kembali ke homepage dulu
        if (location.pathname !== "/") {
            navigate("/");

            // Tunggu homepage selesai dirender sebelum scroll
            setTimeout(() => {
                const element = document.getElementById(section);

                if (element) {
                    element.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                }
            }, 100);
        } else {
            // Kalau sudah di homepage, langsung scroll
            const element = document.getElementById(section);

            if (element) {
                element.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }
        }
    };

    return (
        <header
            data-testid="main-navbar"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-white/95 backdrop-blur-xl border-b border-[#E2E8F0] shadow-sm"
                    : "bg-white/80 backdrop-blur-md border-b border-transparent"
            }`}
        >
            <div className="aj-container flex items-center justify-between h-16 lg:h-20">

                {/* Logo */}
                <button
                    onClick={() => handleSectionClick("beranda")}
                    data-testid="navbar-logo"
                    className="flex items-center gap-3 group text-left"
                >
                    <img
                        src={LOGO_URL}
                        alt="Adi Jaya Gas"
                        className="h-16 w-auto shrink-0 object-contain sm:h-20 lg:h-24 xl:h-28"
                    />

                    <div className="leading-tight">
                        <p className="font-display font-extrabold text-[15px] lg:text-base text-[#0A2540] tracking-tight">
                            ADI JAYA GAS
                        </p>

                        <p className="text-[10px] lg:text-[11px] uppercase tracking-[0.18em] text-[#64748B] font-semibold">
                            Industrial · Medical · Specialty
                        </p>
                    </div>
                </button>

                {/* Desktop links */}
                <nav className="hidden lg:flex items-center gap-9">
                    {links.map((l) => (
                        <button
                            key={l.section}
                            onClick={() => handleSectionClick(l.section)}
                            data-testid={`nav-link-${l.label.toLowerCase()}`}
                            className="text-sm font-semibold text-[#334155] hover:text-[#FF6B00] transition-colors relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-[#FF6B00] after:transition-all hover:after:w-full"
                        >
                            {l.label}
                        </button>
                    ))}
                </nav>

                {/* Desktop CTA */}
                <div className="hidden lg:flex items-center gap-3">
                    <a
                        href="tel:+62881080590092"
                        data-testid="navbar-phone"
                        className="flex items-center gap-2 text-sm text-[#334155] hover:text-[#0A2540] font-medium"
                    >
                        <Phone size={15} />
                        0881-0805-90092
                    </a>

                    <a
                        href={WA_LINK}
                        onClick={(e) => {
                            e.preventDefault();
                            openWhatsAppLink(WA_LINK);
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="navbar-cta-button"
                        className="btn-primary !px-5 !py-2.5 text-sm"
                    >
                        Hubungi Kami
                    </a>
                </div>

                {/* Mobile toggle */}
                <button
                    onClick={() => setOpen(!open)}
                    data-testid="navbar-mobile-toggle"
                    className="lg:hidden w-10 h-10 flex items-center justify-center rounded-md border border-[#E2E8F0] text-[#0A2540]"
                    aria-label="Toggle menu"
                >
                    {open ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

            {/* Mobile menu */}
            {open && (
                <div className="lg:hidden bg-white border-t border-[#E2E8F0] shadow-lg">
                    <nav className="aj-container py-4 flex flex-col gap-1">
                        {links.map((l) => (
                            <button
                                key={l.section}
                                onClick={() =>
                                    handleSectionClick(l.section)
                                }
                                data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                                className="py-3 px-3 rounded-md text-[#0A2540] font-semibold hover:bg-[#F8FAFC] text-left"
                            >
                                {l.label}
                            </button>
                        ))}

                        <a
                            href={WA_LINK}
                            onClick={(e) => {
                                e.preventDefault();
                                openWhatsAppLink(WA_LINK);
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="navbar-mobile-cta"
                            className="btn-primary mt-3 w-full"
                        >
                            Hubungi Kami
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};