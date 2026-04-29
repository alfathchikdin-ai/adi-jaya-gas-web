import { motion } from "framer-motion";
import {
    Truck,
    ShieldCheck,
    DollarSign,
    Headphones,
    MapPin,
    Wrench,
} from "lucide-react";

const reasons = [
    {
        icon: Truck,
        title: "Pengiriman Cepat",
        desc: "Armada sendiri dan jadwal pengiriman fleksibel — same-day untuk wilayah Jabodetabek.",
        big: true,
    },
    {
        icon: ShieldCheck,
        title: "Kemurnian Terjamin",
        desc: "Setiap tabung disertai Certificate of Analysis (CoA) yang traceable.",
    },
    {
        icon: DollarSign,
        title: "Harga Kompetitif",
        desc: "Harga grosir & kontrak jangka panjang untuk volume besar.",
    },
    {
        icon: Headphones,
        title: "Pelayanan Profesional",
        desc: "Tim sales dedicated dengan respon WhatsApp di bawah 5 menit, 7 hari seminggu.",
    },
    {
        icon: MapPin,
        title: "Jangkauan Luas",
        desc: "Melayani Banten, Jakarta, Bogor, Tangerang, Bekasi, dan kota industri sekitarnya.",
    },
    {
        icon: Wrench,
        title: "Dukungan Teknis",
        desc: "Konsultasi pemilihan gas, regulator, dan instalasi oleh teknisi berpengalaman.",
    },
];

export const WhyChooseUs = () => {
    return (
        <section
            data-testid="why-choose-us"
            className="py-20 lg:py-28 bg-white"
        >
            <div className="aj-container">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-12">
                    <div className="lg:col-span-7">
                        <span className="aj-overline">Mengapa Memilih Kami</span>
                        <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                            Lebih dari sekedar supplier — kami adalah{" "}
                            <span className="text-[#FF6B00]">
                                mitra operasional
                            </span>{" "}
                            Anda.
                        </h2>
                    </div>
                    <p className="lg:col-span-5 text-base lg:text-lg text-[#475569] leading-relaxed">
                        Kami memahami bahwa downtime sangat mahal. Karena itu,
                        kami berkomitmen pada keandalan supply, kualitas
                        konsisten, dan responsivitas tim 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {reasons.map((r, i) => {
                        const Icon = r.icon;
                        return (
                            <motion.div
                                key={r.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                data-testid={`why-card-${i}`}
                                className={`group relative rounded-xl p-7 lg:p-8 border transition-all hover:-translate-y-1 ${
                                    r.big
                                        ? "lg:col-span-1 bg-[#0A2540] border-[#0A2540] text-white hover:shadow-2xl"
                                        : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#FF6B00] hover:shadow-lg"
                                }`}
                            >
                                <div
                                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-5 ${
                                        r.big
                                            ? "bg-[#FF6B00] text-white"
                                            : "bg-white border border-[#E2E8F0] text-[#FF6B00]"
                                    }`}
                                >
                                    <Icon size={22} strokeWidth={2.2} />
                                </div>
                                <h3
                                    className={`font-display text-xl font-bold mb-2 ${
                                        r.big ? "!text-white" : "!text-[#0A2540]"
                                    }`}
                                >
                                    {r.title}
                                </h3>
                                <p
                                    className={`text-sm leading-relaxed ${
                                        r.big ? "text-white/80" : "text-[#475569]"
                                    }`}
                                >
                                    {r.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
