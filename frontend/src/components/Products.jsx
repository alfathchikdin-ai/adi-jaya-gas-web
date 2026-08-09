import { motion } from "framer-motion";
import { ArrowUpRight, Atom, Wind, Flame, Beaker, Droplet, FlaskConical } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { waLinkFor, openWhatsAppLink } from "../lib/constants";

const products = [
    {
        id: "oxygen",
        code: "O₂",
        name: "Oxygen",
        icon: Atom,
        desc: "Gas oksigen kemurnian tinggi untuk kebutuhan medis, industri, dan pengelasan oxy-fuel.",
        applications: ["Rumah Sakit", "Pengelasan", "Pemotongan Logam"],
        accent: "from-[#FF6B00]/15 to-transparent",
    },
    {
        id: "nitrogen",
        code: "N₂",
        name: "Nitrogen",
        icon: Wind,
        desc: "Nitrogen liquid & gas untuk inerting, blanketing, food packaging, dan aplikasi laboratorium.",
        applications: ["F&B", "Laboratorium", "Manufaktur"],
        accent: "from-blue-400/15 to-transparent",
    },
    {
        id: "argon",
        code: "Ar",
        name: "Argon",
        icon: Flame,
        desc: "Argon UHP untuk pengelasan TIG/MIG presisi tinggi pada stainless steel dan aluminium.",
        applications: ["Welding TIG", "Welding MIG", "Stainless Steel"],
        accent: "from-purple-400/15 to-transparent",
    },
    {
        id: "co2",
        code: "CO₂",
        name: "Carbon Dioxide",
        icon: Droplet,
        desc: "CO₂ food grade & industrial untuk minuman berkarbonasi, pengelasan, dan greenhouse.",
        applications: ["Beverage", "MIG Welding", "Greenhouse"],
        accent: "from-emerald-400/15 to-transparent",
    },
    {
        id: "helium",
        code: "He",
        name: "Helium",
        icon: Beaker,
        desc: "Helium kemurnian tinggi untuk leak detection, kromatografi, dan aplikasi balon udara.",
        applications: ["Leak Detection", "Lab GC/MS", "Riset"],
        accent: "from-cyan-400/15 to-transparent",
    },
    {
        id: "specialty",
        code: "UHP",
        name: "Specialty & Calibration Gas",
        icon: FlaskConical,
        desc: "Gas mix khusus, calibration gas, dan UHP gas dengan sertifikasi traceable sesuai standar.",
        applications: ["Kalibrasi", "Riset", "Farmasi"],
        accent: "from-amber-400/15 to-transparent",
    },
];

export const Products = () => {
    const navigate = useNavigate();

    const getProductRoute = (id) => {
        if (id === "specialty") {
            return "/produk/specialty-gas";
        }

        return `/produk/${id}`;
    };

    return (
        <section id="produk" className="py-20 lg:py-24">
            <div className="aj-container">

                <div className="mb-12 max-w-3xl">
                    <span className="aj-overline">
                        Produk Kami
                    </span>

                    <h2 className="mt-3 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                        Lengkap untuk Setiap Kebutuhan{" "}
                        <span className="gradient-text">
                            Industri & Medis
                        </span>
                    </h2>

                    <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
                        Stok lengkap dengan grade industri, medis, hingga
                        ultra high purity (UHP).
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {products.map((p, i) => {
                        const Icon = p.icon;

                        return (
                            <motion.article
                                key={p.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{
                                    once: true,
                                    margin: "-50px",
                                }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.06,
                                }}
                                data-testid={`product-card-${p.id}`}
                                onClick={() =>
                                    navigate(getProductRoute(p.id))
                                }
                                className="product-card group relative bg-white border border-[#E2E8F0] rounded-xl p-7 overflow-hidden cursor-pointer"
                            >
                                <div
                                    className={`absolute -top-12 -right-12 w-40 h-40 rounded-full bg-gradient-to-br ${p.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                                />

                                <div className="relative">

                                    <div className="flex items-start justify-between mb-5">
                                        <div className="w-14 h-14 rounded-lg bg-[#0A2540] text-white flex items-center justify-center group-hover:bg-[#FF6B00] transition-colors">
                                            <Icon
                                                size={26}
                                                strokeWidth={2}
                                            />
                                        </div>

                                        <span className="font-display font-extrabold text-3xl text-[#E2E8F0] group-hover:text-[#FF6B00]/80 transition-colors">
                                            {p.code}
                                        </span>
                                    </div>

                                    <h3 className="font-display text-xl font-bold !text-[#0A2540]">
                                        {p.name}
                                    </h3>

                                    <p className="mt-2 text-sm text-[#475569] leading-relaxed min-h-[60px]">
                                        {p.desc}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-1.5">
                                        {p.applications.map((a) => (
                                            <span
                                                key={a}
                                                className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#F8FAFC] border border-[#E2E8F0] text-[#64748B]"
                                            >
                                                {a}
                                            </span>
                                        ))}
                                    </div>

                                    <a
                                        href={waLinkFor(p.name)}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            openWhatsAppLink(
                                                waLinkFor(p.name)
                                            );
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        data-testid={`product-cta-${p.id}`}
                                        className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[#0A2540] group-hover:text-[#FF6B00] transition-colors"
                                    >
                                        Tanya Ketersediaan

                                        <ArrowUpRight
                                            size={16}
                                            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                                        />
                                    </a>

                                </div>
                            </motion.article>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};