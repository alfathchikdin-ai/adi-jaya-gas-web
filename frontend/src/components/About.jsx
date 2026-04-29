import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, HeartHandshake, Sparkles } from "lucide-react";
import { WA_LINK } from "../lib/constants";

const pillars = [
    {
        icon: ShieldCheck,
        title: "Keandalan",
        desc: "Supply chain yang kuat memastikan stok selalu tersedia.",
    },
    {
        icon: HeartHandshake,
        title: "Komitmen",
        desc: "Hubungan jangka panjang berbasis kepercayaan & transparansi.",
    },
    {
        icon: Sparkles,
        title: "Keselamatan",
        desc: "Standar K3 ketat di setiap tahap pengisian & pengiriman.",
    },
];

export const About = () => {
    return (
        <section
            id="tentang"
            data-testid="about-section"
            className="py-20 lg:py-28 bg-white"
        >
            <div className="aj-container grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-6 relative"
                >
                    <div className="relative aspect-[4/5] lg:aspect-[5/6] rounded-2xl overflow-hidden border border-[#E2E8F0]">
                        <img
                            src="https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/yjbo3qze_IMG_4591.jpeg"
                            alt="Gudang stok tabung gas Adi Jaya Gas"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540]/70 via-transparent to-transparent" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-6 -right-2 lg:-right-8 bg-[#FF6B00] text-white rounded-xl p-5 lg:p-6 shadow-2xl max-w-[240px]">
                        <div className="font-display font-extrabold text-3xl lg:text-4xl leading-none">
                            12+
                        </div>
                        <p className="mt-1 text-sm font-semibold !text-white/95">
                            Tahun melayani industri Indonesia
                        </p>
                    </div>

                    {/* Decorative corner */}
                    <div className="hidden lg:block absolute -top-6 -left-6 w-24 h-24 border-l-4 border-t-4 border-[#FF6B00] rounded-tl-2xl" />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="lg:col-span-6"
                >
                    <span className="aj-overline">Tentang Kami</span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Mitra gas industri yang{" "}
                        <span className="text-[#FF6B00]">tumbuh bersama</span>{" "}
                        bisnis Anda.
                    </h2>
                    <div className="mt-6 space-y-4 text-base lg:text-[17px] text-[#475569] leading-relaxed">
                        <p>
                            <strong className="text-[#0A2540]">
                                Adi Jaya Gas
                            </strong>{" "}
                            adalah supplier gas industri, medis, dan specialty
                            gas yang berlokasi di Banten. Selama lebih dari
                            satu dekade, kami melayani perusahaan manufaktur,
                            rumah sakit, laboratorium, hingga workshop welding
                            di Jabodetabek dan sekitarnya.
                        </p>
                        <p>
                            Kami percaya bahwa gas bukan sekadar produk — ia
                            adalah bagian dari proses produksi pelanggan.
                            Karena itu, kami berkomitmen pada{" "}
                            <strong className="text-[#0A2540]">
                                keandalan supply, kemurnian produk, dan
                                kepuasan pelanggan
                            </strong>{" "}
                            di setiap pengiriman.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {pillars.map((p) => {
                            const Icon = p.icon;
                            return (
                                <div
                                    key={p.title}
                                    className="p-4 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0]"
                                >
                                    <Icon
                                        size={22}
                                        className="text-[#FF6B00] mb-2"
                                    />
                                    <h4 className="font-display font-bold text-[#0A2540] text-base">
                                        {p.title}
                                    </h4>
                                    <p className="text-xs text-[#64748B] leading-snug mt-1">
                                        {p.desc}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    <div className="mt-8">
                        <a
                            href={WA_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="about-cta"
                            className="btn-secondary"
                        >
                            <CheckCircle2 size={18} />
                            Diskusikan Kebutuhan Anda
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
