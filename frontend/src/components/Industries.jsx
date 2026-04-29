import { motion } from "framer-motion";
import {
    Factory,
    HeartPulse,
    FlaskConical,
    UtensilsCrossed,
    Wrench,
    Pill,
} from "lucide-react";

const items = [
    {
        icon: Factory,
        title: "Manufaktur",
        desc: "Inerting, purging, blanketing, dan kebutuhan produksi skala besar.",
    },
    {
        icon: HeartPulse,
        title: "Medis",
        desc: "Medical oxygen, N₂O, dan gas medis lainnya untuk rumah sakit & klinik.",
    },
    {
        icon: FlaskConical,
        title: "Laboratorium",
        desc: "UHP & specialty gas untuk GC/MS, kromatografi, dan riset universitas.",
    },
    {
        icon: UtensilsCrossed,
        title: "Food & Beverage",
        desc: "CO₂ food grade & nitrogen untuk MAP, karbonasi, dan packaging.",
    },
    {
        icon: Wrench,
        title: "Welding & Workshop",
        desc: "Argon, CO₂, dan gas mix untuk welding TIG/MIG presisi tinggi.",
    },
    {
        icon: Pill,
        title: "Farmasi",
        desc: "Gas dengan kemurnian dan sertifikasi sesuai standar farmasi.",
    },
];

export const Industries = () => {
    return (
        <section
            id="industri"
            data-testid="industries-section"
            className="py-20 lg:py-28 bg-[#0A2540] text-white relative overflow-hidden"
        >
            <div className="absolute inset-0 dot-pattern-light opacity-50 pointer-events-none" />
            <div className="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-[#FF6B00]/10 blur-3xl -translate-y-1/2 pointer-events-none" />

            <div className="aj-container relative">
                <div className="max-w-3xl mb-14">
                    <span className="aj-overline">Industri yang Kami Layani</span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold !text-white leading-tight">
                        Solusi gas untuk{" "}
                        <span className="text-[#FF6B00]">setiap sektor</span>{" "}
                        bisnis Anda
                    </h2>
                    <p className="mt-4 text-base lg:text-lg text-white/75 leading-relaxed">
                        Kami sudah dipercaya oleh ratusan pelaku industri di
                        Indonesia. Apapun sektor Anda, kami punya solusi gas
                        yang tepat.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
                    {items.map((it, i) => {
                        const Icon = it.icon;
                        return (
                            <motion.div
                                key={it.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.06 }}
                                data-testid={`industry-card-${i}`}
                                className="industry-card group rounded-xl p-7 bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-[#FF6B00]/95 hover:border-[#FF6B00] cursor-default"
                            >
                                <div className="industry-icon-wrap w-12 h-12 rounded-lg bg-[#FF6B00]/15 flex items-center justify-center mb-5 transition-colors text-[#FF8B33] group-hover:!text-white">
                                    <Icon size={22} strokeWidth={2.2} />
                                </div>
                                <h3 className="font-display text-xl font-bold !text-white mb-2">
                                    {it.title}
                                </h3>
                                <p className="text-sm text-white/75 leading-relaxed group-hover:text-white/95">
                                    {it.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
