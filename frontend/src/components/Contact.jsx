import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle, Clock, Send } from "lucide-react";
import {
    PHONE_RAW,
    PHONE_DISPLAY,
    EMAIL,
    ADDRESS,
    MAPS_EMBED,
    MAPS_LINK,
} from "../lib/constants";

const buildWaUrl = ({ name, company, product, message }) => {
    const text = `Halo Adi Jaya Gas, saya ingin konsultasi:\n\n*Nama:* ${name || "-"}\n*Perusahaan:* ${company || "-"}\n*Produk yang dibutuhkan:* ${product || "-"}\n*Pesan:* ${message || "-"}`;
    return `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(text)}`;
};

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        company: "",
        product: "",
        message: "",
    });

    const onChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        const url = buildWaUrl(form);
        window.open(url, "_blank", "noopener,noreferrer");
    };

    const items = [
        {
            icon: MessageCircle,
            label: "WhatsApp",
            value: PHONE_DISPLAY,
            href: `https://wa.me/${PHONE_RAW}`,
            primary: true,
            testId: "contact-whatsapp",
        },
        {
            icon: Phone,
            label: "Telepon",
            value: PHONE_DISPLAY,
            href: `tel:+${PHONE_RAW}`,
            testId: "contact-phone",
        },
        {
            icon: Mail,
            label: "Email",
            value: EMAIL,
            href: `mailto:${EMAIL}`,
            testId: "contact-email",
        },
        {
            icon: MapPin,
            label: "Alamat",
            value: ADDRESS,
            href: MAPS_LINK,
            testId: "contact-address",
        },
    ];

    return (
        <section
            id="kontak"
            data-testid="contact-section"
            className="py-20 lg:py-28 bg-white"
        >
            <div className="aj-container">
                <div className="max-w-3xl mb-12">
                    <span className="aj-overline">Hubungi Kami</span>
                    <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
                        Diskusikan kebutuhan gas Anda{" "}
                        <span className="text-[#FF6B00]">
                            langsung dengan tim kami
                        </span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Left column: contact info & map */}
                    <div className="lg:col-span-7 space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {items.map((it) => {
                                const Icon = it.icon;
                                return (
                                    <a
                                        key={it.label}
                                        href={it.href}
                                        target={
                                            it.label === "Telepon"
                                                ? undefined
                                                : "_blank"
                                        }
                                        rel="noopener noreferrer"
                                        data-testid={it.testId}
                                        className={`group flex items-start gap-4 p-5 rounded-xl border transition-all hover:-translate-y-1 ${
                                            it.primary
                                                ? "bg-[#0A2540] border-[#0A2540] text-white hover:bg-[#FF6B00] hover:border-[#FF6B00]"
                                                : "bg-[#F8FAFC] border-[#E2E8F0] hover:border-[#FF6B00]"
                                        }`}
                                    >
                                        <div
                                            className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 ${
                                                it.primary
                                                    ? "bg-[#FF6B00] text-white group-hover:bg-white group-hover:text-[#FF6B00]"
                                                    : "bg-white border border-[#E2E8F0] text-[#FF6B00]"
                                            }`}
                                        >
                                            <Icon size={20} />
                                        </div>
                                        <div className="min-w-0">
                                            <div
                                                className={`text-xs font-semibold uppercase tracking-wider ${
                                                    it.primary
                                                        ? "text-white/70"
                                                        : "text-[#64748B]"
                                                }`}
                                            >
                                                {it.label}
                                            </div>
                                            <div
                                                className={`mt-1 font-semibold text-sm break-words ${
                                                    it.primary
                                                        ? "!text-white"
                                                        : "!text-[#0A2540]"
                                                }`}
                                            >
                                                {it.value}
                                            </div>
                                        </div>
                                    </a>
                                );
                            })}
                        </div>

                        <div className="flex items-center gap-3 p-4 rounded-lg bg-[#FF6B00]/10 border border-[#FF6B00]/20">
                            <Clock
                                size={18}
                                className="text-[#FF6B00] flex-shrink-0"
                            />
                            <p className="text-sm text-[#0A2540] font-medium">
                                <strong>Jam Operasional:</strong> Senin sampai Sabtu
                                08.00 hingga 17.00 WIB · WhatsApp 24/7 untuk pesanan
                                urgent
                            </p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="rounded-xl overflow-hidden border border-[#E2E8F0] aspect-[16/10] bg-[#F8FAFC]"
                            data-testid="contact-map"
                        >
                            <iframe
                                title="Lokasi Adi Jaya Gas"
                                src={MAPS_EMBED}
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                allowFullScreen
                            />
                        </motion.div>
                    </div>

                    {/* Right column: form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5"
                    >
                        <form
                            onSubmit={onSubmit}
                            data-testid="contact-form"
                            className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-7 lg:p-8 sticky top-28"
                        >
                            <h3 className="font-display text-2xl font-bold !text-[#0A2540]">
                                Kirim Pertanyaan via WhatsApp
                            </h3>
                            <p className="text-sm text-[#64748B] mt-1">
                                Isi form, kami akan respon di bawah 5 menit di
                                jam kerja.
                            </p>

                            <div className="mt-5 space-y-3.5">
                                <div>
                                    <label className="block text-xs font-semibold text-[#0A2540] uppercase tracking-wider mb-1.5">
                                        Nama Lengkap
                                    </label>
                                    <input
                                        name="name"
                                        value={form.name}
                                        onChange={onChange}
                                        required
                                        data-testid="form-name"
                                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all text-[#0A2540] text-sm"
                                        placeholder="Budi Santoso"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#0A2540] uppercase tracking-wider mb-1.5">
                                        Perusahaan
                                    </label>
                                    <input
                                        name="company"
                                        value={form.company}
                                        onChange={onChange}
                                        data-testid="form-company"
                                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all text-[#0A2540] text-sm"
                                        placeholder="PT Maju Jaya"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#0A2540] uppercase tracking-wider mb-1.5">
                                        Produk yang Dibutuhkan
                                    </label>
                                    <select
                                        name="product"
                                        value={form.product}
                                        onChange={onChange}
                                        data-testid="form-product"
                                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all text-[#0A2540] text-sm"
                                    >
                                        <option value="">
                                            Pilih produk...
                                        </option>
                                        <option>Oxygen (O₂)</option>
                                        <option>Nitrogen (N₂)</option>
                                        <option>Argon (Ar)</option>
                                        <option>Carbon Dioxide (CO₂)</option>
                                        <option>Helium (He)</option>
                                        <option>Specialty / UHP Gas</option>
                                        <option>Calibration Gas</option>
                                        <option>Lainnya</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-[#0A2540] uppercase tracking-wider mb-1.5">
                                        Pesan / Spesifikasi
                                    </label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={onChange}
                                        rows={3}
                                        data-testid="form-message"
                                        className="w-full bg-white border border-[#CBD5E1] rounded-md px-4 py-2.5 focus:ring-2 focus:ring-[#FF6B00] focus:border-transparent outline-none transition-all text-[#0A2540] text-sm resize-none"
                                        placeholder="Volume, frekuensi, lokasi pengiriman..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    data-testid="form-submit"
                                    className="btn-primary w-full !py-3.5"
                                >
                                    <Send size={16} />
                                    Kirim via WhatsApp
                                </button>
                                <p className="text-[11px] text-center text-[#64748B] leading-relaxed">
                                    Dengan mengirim form, Anda akan diarahkan
                                    ke WhatsApp tim kami.
                                </p>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
