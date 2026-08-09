import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    MapPin,
} from "lucide-react";

import {
    PHONE_DISPLAY,
    PHONE_RAW,
    EMAIL,
    ADDRESS,
    MAPS_LINK,
} from "../lib/constants";

const navLinks = [
    { label: "Beranda", href: "/#beranda" },
    { label: "Produk", href: "/#produk" },
    { label: "Industri", href: "/#industri" },
    { label: "Tentang", href: "/#tentang" },
    { label: "Kontak", href: "/#kontak" },
];

const products = [
    {
        label: "Oxygen (O₂)",
        href: "/produk/oxygen",
    },
    {
        label: "Nitrogen (N₂)",
        href: "/produk/nitrogen",
    },
    {
        label: "Argon (Ar)",
        href: "/produk/argon",
    },
    {
        label: "Carbon Dioxide (CO₂)",
        href: "/produk/co2",
    },
    {
        label: "Helium (He)",
        href: "/produk/helium",
    },
    {
        label: "Specialty & UHP Gas",
        href: "/produk/specialty-gas",
    },
];

export const Footer = () => {
    return (
        <footer className="bg-[#061522] text-[#94A3B8]">
            <div className="aj-container py-14 lg:py-16">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-11 h-11 rounded-md bg-white text-[#0A2540] flex items-center justify-center font-display font-extrabold">
                                AJG
                            </div>

                            <div>
                                <div className="font-display font-bold !text-white text-base">
                                    ADI JAYA GAS
                                </div>

                                <div className="text-[10px] uppercase tracking-[0.18em] text-[#64748B]">
                                    Industrial · Medical · Specialty
                                </div>
                            </div>
                        </div>

                        <p className="text-sm leading-relaxed max-w-sm">
                            Supplier gas industri, medis, dan specialty gas
                            terpercaya untuk kebutuhan bisnis di Banten,
                            Jakarta, dan sekitarnya.
                        </p>

                        <div className="flex gap-2 mt-6">
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
                                    <Icon size={17} />
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
                                <li key={p.href}>
                                    <a
                                        href={p.href}
                                        className="text-sm hover:text-[#FF6B00] transition-colors"
                                    >
                                        {p.label}
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
                        &copy; {new Date().getFullYear()} Adi Jaya Gas.
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