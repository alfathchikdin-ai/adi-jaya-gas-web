import { motion } from "framer-motion";
import {
    ArrowRight,
    MessageCircle,
    Clock,
    Truck,
    ShieldCheck,
    Award,
} from "lucide-react";
import { WA_LINK } from "../lib/constants";

const features = [
    { icon: Clock, label: "Layanan 24/7" },
    { icon: Truck, label: "Pengiriman Cepat" },
    { icon: ShieldCheck, label: "Kualitas Tersertifikasi" },
    { icon: Award, label: "Dipercaya Industri" },
];

export const Hero = () => {
    return (
        <section
            id="beranda"
            data-testid="hero-section"
            className="relative hero-bg min-h-[92vh] flex items-center pt-20 lg:pt-24 overflow-hidden"
        >
            {/* Decorative grid */}
            <div className="absolute inset-0 dot-pattern-light opacity-60 pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#FF6B00]/10 blur-3xl pointer-events-none" />

            <div className="aj-container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full py-16 lg:py-24">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className="lg:col-span-7 text-white"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-[#FF6B00] animate-pulse" />
                        <span className="text-xs font-semibold tracking-[0.18em] uppercase text-white/90">
                            Supplier Gas Resmi · Banten
                        </span>
                    </div>

                    <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold !text-white leading-[1.05] tracking-tight">
                        Supplier Gas Industri{" "}
                        <span className="relative inline-block">
                            <span className="gradient-text">Terpercaya</span>
                            <svg
                                className="absolute -bottom-2 left-0 w-full"
                                viewBox="0 0 200 8"
                                preserveAspectRatio="none"
                            >
                                <path
                                    d="M0 4 Q 50 0 100 4 T 200 4"
                                    stroke="#FF6B00"
                                    strokeWidth="3"
                                    fill="none"
                                />
                            </svg>
                        </span>{" "}
                        untuk Kebutuhan Bisnis Anda
                    </h1>

                    <p className="mt-6 text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl">
                        Menyediakan gas industri, medis, dan specialty gas
                        dengan kualitas terjamin, pengiriman cepat, dan
                        pelayanan profesional ke seluruh Jabodetabek dan
                        sekitarnya.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-primary-cta"
                            className="btn-primary !px-7 !py-3.5 text-base group"
                        >
                            Konsultasi Sekarang
                            <ArrowRight
                                size={18}
                                className="group-hover:translate-x-1 transition-transform"
                            />
                        </a>
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="hero-whatsapp-cta"
                            className="btn-outline-white !px-7 !py-3.5 text-base"
                        >
                            <MessageCircle size={18} />
                            Hubungi via WhatsApp
                        </a>
                    </div>

                    <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
                        {features.map((f, i) => {
                            const Icon = f.icon;
                            return (
                                <motion.div
                                    key={f.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: 0.3 + i * 0.08,
                                        duration: 0.4,
                                    }}
                                    className="flex items-center gap-2.5 text-white/85"
                                    data-testid={`hero-feature-${i}`}
                                >
                                    <div className="w-9 h-9 rounded-md bg-[#FF6B00]/15 border border-[#FF6B00]/30 flex items-center justify-center text-[#FF6B00] flex-shrink-0">
                                        <Icon size={16} />
                                    </div>
                                    <span className="text-xs sm:text-sm font-semibold leading-tight">
                                        {f.label}
                                    </span>
                                </motion.div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Floating product card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="lg:col-span-5 hidden lg:block"
                >
                    <div className="relative float-slow">
                        <div className="absolute -inset-4 bg-[#FF6B00]/20 blur-3xl rounded-full" />
                        <div className="relative bg-white/5 backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
                            <div className="flex items-center justify-between mb-5">
                                <div className="aj-overline !text-[#FF8B33]">
                                    Quick Quote
                                </div>
                                <div className="flex gap-1.5">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B00]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-white/30" />
                                </div>
                            </div>
                            <h3 className="!text-white text-2xl font-display font-bold mb-4">
                                Butuh penawaran cepat?
                            </h3>
                            <div className="space-y-3 mb-5">
                                {[
                                    {
                                        k: "Oxygen (O₂)",
                                        v: "99.5%+ Purity",
                                    },
                                    {
                                        k: "Nitrogen (N₂)",
                                        v: "UHP Grade",
                                    },
                                    {
                                        k: "Argon (Ar)",
                                        v: "Welding Grade",
                                    },
                                ].map((p) => (
                                    <div
                                        key={p.k}
                                        className="flex items-center justify-between py-2.5 px-3 rounded-md bg-white/5 border border-white/10"
                                    >
                                        <span className="text-white/90 font-medium text-sm">
                                            {p.k}
                                        </span>
                                        <span className="text-[#FF8B33] font-semibold text-xs">
                                            {p.v}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="hero-quote-cta"
                                className="btn-primary w-full"
                            >
                                Minta Penawaran
                                <ArrowRight size={16} />
                            </a>
                            <p className="text-center text-xs text-white/50 mt-3">
                                Respon cepat · Tim teknis siap membantu
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom fade to next section */}
            <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-b from-transparent to-white pointer-events-none" />
        </section>
    );
};
