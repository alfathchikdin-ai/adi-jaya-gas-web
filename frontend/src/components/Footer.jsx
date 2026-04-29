import { Flame, Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import {
    PHONE_DISPLAY,
    PHONE_RAW,
    EMAIL,
    ADDRESS,
    MAPS_LINK,
} from "../lib/constants";

const navLinks = [
    { label: "Beranda", href: "#beranda" },
    { label: "Produk", href: "#produk" },
    { label: "Industri", href: "#industri" },
    { label: "Tentang", href: "#tentang" },
    { label: "Kontak", href: "#kontak" },
];

const products = [
    "Oxygen (O₂)",
    "Nitrogen (N₂)",
    "Argon (Ar)",
    "Carbon Dioxide (CO₂)",
    "Helium (He)",
    "Specialty & UHP Gas",
];

export const Footer = () => {
    return (
        <footer
            data-testid="main-footer"
            className="bg-[#051320] text-[#94A3B8] relative overflow-hidden"
        >
            <div className="absolute inset-0 dot-pattern-light opacity-30 pointer-events-none" />
            <div className="aj-container relative pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                                <Flame
                                    size={22}
                                    className="text-[#FF6B00]"
                                    strokeWidth={2.5}
                                />
                            </div>
                            <div>
                                <p className="font-display font-extrabold text-base !text-white">
                                    CV. ADI JAYA GAS
                                </p>
                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#64748B] font-semibold">
                                    Industrial · Medical · Specialty
                                </p>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
                            Supplier gas industri, medis, dan specialty gas
                            terpercaya untuk kebutuhan bisnis di Banten,
                            Jakarta, dan sekitarnya.
                        </p>
                        <div className="mt-5 flex gap-2">
                            {[
                                { Icon: Facebook, label: "Facebook" },
                                { Icon: Instagram, label: "Instagram" },
                                { Icon: Linkedin, label: "LinkedIn" },
                            ].map(({ Icon, label }) => (
                                <a
                                    key={label}
                                    href="#"
                                    aria-label={label}
                                    data-testid={`footer-social-${label.toLowerCase()}`}
                                    className="w-10 h-10 rounded-md bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#FF6B00] hover:border-[#FF6B00] hover:text-white transition-all"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick links */}
                    <div className="lg:col-span-2">
                        <h4 className="font-display font-bold !text-white text-sm uppercase tracking-wider mb-4">
                            Navigasi
                        </h4>
                        <ul className="space-y-2.5">
                            {navLinks.map((l) => (
                                <li key={l.href}>
                                    <a
                                        href={l.href}
                                        data-testid={`footer-nav-${l.label.toLowerCase()}`}
                                        className="text-sm hover:text-[#FF6B00] transition-colors"
                                    >
                                        {l.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-bold !text-white text-sm uppercase tracking-wider mb-4">
                            Produk
                        </h4>
                        <ul className="space-y-2.5">
                            {products.map((p) => (
                                <li key={p}>
                                    <a
                                        href="#produk"
                                        className="text-sm hover:text-[#FF6B00] transition-colors"
                                    >
                                        {p}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-3">
                        <h4 className="font-display font-bold !text-white text-sm uppercase tracking-wider mb-4">
                            Kontak
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start gap-2.5">
                                <Phone
                                    size={15}
                                    className="text-[#FF6B00] mt-0.5 flex-shrink-0"
                                />
                                <a
                                    href={`tel:+${PHONE_RAW}`}
                                    className="hover:text-[#FF6B00] transition-colors"
                                >
                                    {PHONE_DISPLAY}
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <Mail
                                    size={15}
                                    className="text-[#FF6B00] mt-0.5 flex-shrink-0"
                                />
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="hover:text-[#FF6B00] transition-colors break-all"
                                >
                                    {EMAIL}
                                </a>
                            </li>
                            <li className="flex items-start gap-2.5">
                                <MapPin
                                    size={15}
                                    className="text-[#FF6B00] mt-0.5 flex-shrink-0"
                                />
                                <a
                                    href={MAPS_LINK}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#FF6B00] transition-colors leading-relaxed"
                                >
                                    {ADDRESS}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
                    <p>
                        &copy; {new Date().getFullYear()} CV. Adi Jaya Gas.
                        Hak cipta dilindungi.
                    </p>
                    <p className="text-[#64748B]">
                        Supplier Gas Industri · Medis · Specialty Gas
                    </p>
                </div>
            </div>
        </footer>
    );
};
