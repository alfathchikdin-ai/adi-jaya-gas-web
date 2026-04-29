import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "Bapak Hendra Wijaya",
        role: "Factory Manager",
        company: "PT Karya Logam Sejahtera",
        avatar: "HW",
        text: "Supply argon dan CO₂ dari Adi Jaya Gas sangat konsisten. Pengiriman tepat waktu dan kemurniannya selalu sesuai spek. Tidak pernah ada downtime karena kehabisan gas dalam 3 tahun terakhir.",
    },
    {
        name: "Ibu Sari Lestari",
        role: "Procurement Officer",
        company: "RS Mitra Sehat Tangerang",
        avatar: "SL",
        text: "Untuk medical oxygen, kami sangat selektif. CV. Adi Jaya Gas selalu menyertakan CoA dan responsif saat ada permintaan mendesak. Mereka mengerti operasional rumah sakit.",
    },
    {
        name: "Bapak Rizky Pratama",
        role: "Pemilik Workshop",
        company: "Bengkel Las Berkah Jaya",
        avatar: "RP",
        text: "Sebagai workshop kecil, kami diperlakukan sama profesionalnya seperti klien besar. Harga bersaing, antar sampai workshop, dan tim sales-nya sangat informatif soal regulator yang cocok.",
    },
];

export const Testimonials = () => {
    return (
        <section
            data-testid="testimonials-section"
            className="py-20 lg:py-28 bg-[#F8FAFC] relative overflow-hidden"
        >
            <div className="absolute inset-0 dot-pattern opacity-40 pointer-events-none" />
            <div className="aj-container relative">
                <div className="max-w-3xl mb-14">
                    <span className="aj-overline">Testimoni Pelanggan</span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Apa kata{" "}
                        <span className="text-[#FF6B00]">mitra B2B</span> kami?
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
                    {testimonials.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            data-testid={`testimonial-${i}`}
                            className="relative bg-white border border-[#E2E8F0] rounded-xl p-7 lg:p-8 hover:shadow-lg transition-shadow"
                        >
                            <Quote
                                size={36}
                                className="text-[#FF6B00]/20 absolute top-6 right-6"
                                strokeWidth={2.5}
                            />
                            <div className="flex gap-1 mb-4">
                                {[...Array(5)].map((_, idx) => (
                                    <Star
                                        key={idx}
                                        size={16}
                                        className="text-[#FF6B00] fill-[#FF6B00]"
                                    />
                                ))}
                            </div>
                            <blockquote className="text-[#334155] text-[15px] leading-relaxed">
                                "{t.text}"
                            </blockquote>
                            <figcaption className="mt-6 pt-5 border-t border-[#E2E8F0] flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-[#0A2540] text-white flex items-center justify-center font-display font-bold text-sm">
                                    {t.avatar}
                                </div>
                                <div>
                                    <div className="font-display font-bold text-[#0A2540] text-sm">
                                        {t.name}
                                    </div>
                                    <div className="text-xs text-[#64748B]">
                                        {t.role} · {t.company}
                                    </div>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
