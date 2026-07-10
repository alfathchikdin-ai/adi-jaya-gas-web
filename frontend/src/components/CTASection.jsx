import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, PhoneCall } from "lucide-react";
import { WA_LINK, PHONE_RAW, openWhatsAppLink } from "../lib/constants";

export const CTASection = () => {
    return (
        <section
            data-testid="cta-section"
            className="cta-bg relative py-20 lg:py-24 text-white overflow-hidden"
        >
            <div className="absolute inset-0 dot-pattern-light opacity-40 pointer-events-none" />
            <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-[#FF6B00]/15 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-40 -left-32 w-[480px] h-[480px] rounded-full bg-[#FF6B00]/10 blur-3xl pointer-events-none" />

            <div className="aj-container relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="aj-overline !text-[#FF8B33]">
                        Butuh Konsultasi Gas?
                    </span>
                    <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-6xl font-extrabold !text-white leading-[1.05]">
                        Butuh Gas Industri{" "}
                        <span className="text-[#FF6B00]">Berkualitas?</span>
                    </h2>
                    <p className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                        Tim kami siap memberikan rekomendasi gas yang tepat,
                        penawaran harga kompetitif, dan jadwal pengiriman
                        sesuai kebutuhan Anda.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3 justify-center">
                        <a
                            href={WA_LINK}
                            onClick={(e) => {
                                e.preventDefault();
                                openWhatsAppLink(WA_LINK);
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="cta-section-whatsapp"
                            className="btn-primary !px-8 !py-4 text-base"
                        >
                            <MessageCircle size={18} />
                            Hubungi Tim Kami Sekarang
                            <ArrowRight size={18} />
                        </a>
                        <a
                            href={`tel:+${PHONE_RAW}`}
                            data-testid="cta-section-phone"
                            className="btn-outline-white !px-8 !py-4 text-base"
                        >
                            <PhoneCall size={18} />
                            Telepon Langsung
                        </a>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                            Respon &lt; 5 menit
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                            Konsultasi gratis
                        </span>
                        <span className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00]" />
                            Tanpa komitmen
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
