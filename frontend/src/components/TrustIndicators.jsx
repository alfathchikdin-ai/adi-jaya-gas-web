import { motion } from "framer-motion";

const stats = [
    { value: "500+", label: "Pelanggan Aktif", suffix: "" },
    { value: "12", label: "Tahun Pengalaman", suffix: "+" },
    { value: "8", label: "Wilayah Jangkauan", suffix: "" },
    { value: "20", label: "Varian Produk Gas", suffix: "+" },
];

export const TrustIndicators = () => {
    return (
        <section
            data-testid="trust-indicators"
            className="bg-white border-y border-[#E2E8F0] py-10 lg:py-14 relative -mt-1"
        >
            <div className="aj-container">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6 divide-y lg:divide-y-0 lg:divide-x divide-[#E2E8F0]">
                    {stats.map((s, i) => (
                        <motion.div
                            key={s.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="px-4 lg:px-8 text-center lg:text-left pt-8 lg:pt-0"
                            data-testid={`trust-stat-${i}`}
                        >
                            <div className="font-display font-extrabold text-4xl lg:text-5xl text-[#0A2540] tracking-tight">
                                {s.value}
                                <span className="text-[#FF6B00]">
                                    {s.suffix}
                                </span>
                            </div>
                            <p className="mt-2 text-sm font-medium text-[#64748B] uppercase tracking-wider">
                                {s.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
