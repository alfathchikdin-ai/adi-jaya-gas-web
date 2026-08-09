import { useEffect } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Droplets,
    FlaskConical,
    MessageCircle,
    ShieldCheck,
    Truck,
    UtensilsCrossed,
    Wrench,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import { buildWaLink, openWhatsAppLink } from "../lib/constants";

const productName = "Carbon Dioxide";
const productFormula = "CO₂";
const productWaMessage =
    "Halo Adi Jaya Gas, saya ingin menanyakan ketersediaan CO₂. Mohon info harga dan ukuran tabung yang tersedia.";
const productWaLink = buildWaLink(productWaMessage);

const overviewCards = [
    {
        title: "Food & Beverage",
        description:
            "Digunakan dalam berbagai proses food & beverage, termasuk aplikasi karbonasi dan pengemasan tertentu.",
    },
    {
        title: "Welding",
        description:
            "Digunakan dalam proses welding tertentu sebagai bagian dari shielding gas sesuai kebutuhan.",
    },
    {
        title: "Water Treatment",
        description:
            "Digunakan dalam aplikasi water treatment dan proses pengolahan tertentu.",
    },
    {
        title: "Industri & Laboratorium",
        description:
            "Digunakan untuk berbagai kebutuhan industri, penelitian, dan aplikasi laboratorium sesuai spesifikasi.",
    },
];

const applications = [
    {
        title: "Food & Beverage",
        description:
            "Digunakan untuk kebutuhan karbonasi dan aplikasi food & beverage tertentu.",
        icon: UtensilsCrossed,
    },
    {
        title: "Welding",
        description:
            "Digunakan sebagai shielding gas pada aplikasi welding tertentu.",
        icon: Wrench,
    },
    {
        title: "Water Treatment",
        description:
            "Digunakan dalam beberapa proses pengolahan air dan aplikasi water treatment.",
        icon: Droplets,
    },
    {
        title: "Laboratorium",
        description:
            "Untuk kebutuhan analisis, penelitian, dan aplikasi laboratorium tertentu.",
        icon: FlaskConical,
    },
];

const specChecklist = [
    "Melayani kebutuhan bisnis dan industri",
    "Ketersediaan dapat dikonfirmasi sebelum pemesanan",
    "Pengiriman ke area Jabodetabek dan sekitar",
    "Melayani kebutuhan rutin maupun volume tertentu",
];

const specRows = [
    ["Nama Produk", productName],
    ["Rumus Kimia", productFormula],
    ["Bentuk", "Compressed Gas"],
    ["Kategori", "Industrial & Specialty Gas"],
    ["Kemasan", "Cylinder"],
    ["Ukuran Tabung", "Tersedia berdasarkan kebutuhan"],
    ["Grade", "Sesuai kebutuhan"],
    ["Ketersediaan", "Konfirmasi sebelum pemesanan"],
];

const whyAjgCards = [
    {
        title: "Pengiriman Jabodetabek",
        description:
            "Pengiriman ke seluruh Jabodetabek dan area sekitarnya.",
        icon: Truck,
    },
    {
        title: "Kebutuhan Bisnis",
        description:
            "Melayani kebutuhan industri, food & beverage, welding, dan customer profesional.",
        icon: ShieldCheck,
    },
    {
        title: "Cek Ketersediaan",
        description:
            "Konfirmasi kebutuhan dan ketersediaan sebelum melakukan pemesanan.",
        icon: CheckCircle2,
    },
];

const faqs = [
    {
        question: "CO₂ digunakan untuk apa?",
        answer:
            "CO₂ banyak digunakan untuk kebutuhan food & beverage, welding, water treatment, laboratorium, dan berbagai aplikasi industri lainnya.",
    },
    {
        question: "Apakah Adi Jaya Gas menyediakan CO₂ untuk kebutuhan industri?",
        answer:
            "Ya. Kami melayani kebutuhan CO₂ untuk industri, food & beverage, welding, laboratorium, dan berbagai kebutuhan profesional.",
    },
    {
        question: "Apakah CO₂ bisa digunakan untuk food & beverage?",
        answer:
            "CO₂ dapat digunakan untuk aplikasi food & beverage tertentu, seperti karbonasi dan kebutuhan proses lainnya sesuai spesifikasi yang diperlukan.",
    },
    {
        question: "Bagaimana cara mengetahui harga CO₂?",
        answer:
            "Harga dapat berbeda berdasarkan grade, ukuran tabung, jumlah kebutuhan, dan lokasi pengiriman. Hubungi kami untuk mendapatkan penawaran sesuai kebutuhan Anda.",
    },
];

export function CO2() {
    useEffect(() => {
        document.title = "Supplier CO₂ Industri Tangerang & Jakarta | Adi Jaya Gas";
    }, []);

    return (
        <div className="min-h-screen bg-white text-[#334155]">
            <Navbar />

            <main>
                <section
                    className="relative overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-24 text-white"
                    style={{
                        backgroundImage:
                            "linear-gradient(90deg, rgba(10, 37, 64, 0.90) 0%, rgba(10, 37, 64, 0.72) 50%, rgba(10, 37, 64, 0.45) 100%), url('/delivery-ajg.jpeg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundColor: "#0A2540",
                    }}
                >
                    <div className="absolute inset-0 dot-pattern-light opacity-60 pointer-events-none" />
                    <div className="absolute -bottom-28 -right-20 w-[400px] h-[400px] rounded-full bg-[#FF6B00]/15 blur-3xl pointer-events-none" />

                    <div className="aj-container relative z-10 grid gap-10 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-7">
                            <span className="aj-overline !text-[#FF8B33]">
                                CARBON DIOXIDE CO₂
                            </span>
                            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                                <span style={{ color: "#FFFFFF" }}>Supplier CO₂</span>
                                <span className="block">
                                    <span className="gradient-text">Industri</span>
                                </span>
                            </h1>
                            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                                CO₂ untuk kebutuhan food & beverage, welding,
                                fabrikasi, water treatment, laboratorium, dan
                                berbagai aplikasi industri.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href={productWaLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openWhatsAppLink(productWaLink);
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary !px-7 !py-3.5 text-base group"
                                >
                                    Tanya Ketersediaan
                                    <ArrowRight
                                        size={18}
                                        className="group-hover:translate-x-1 transition-transform"
                                    />
                                </a>
                                <a
                                    href="#spesifikasi"
                                    className="btn-outline-white !px-7 !py-3.5 text-base"
                                >
                                    <MessageCircle size={18} />
                                    Lihat Spesifikasi
                                </a>
                            </div>
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative mx-auto max-w-md">
                                <div className="absolute -inset-4 rounded-full bg-[#FF6B00]/20 blur-3xl" />
                                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-2xl backdrop-blur-xl">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="aj-overline !text-[#FF8B33]">
                                            Carbon Dioxide
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-[#0A2540]/60 p-6">
                                        <div className="flex items-center justify-between gap-4">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "#CBD5E1" }}>
                                                    Industrial & Specialty Gas
                                                </p>
                                                <p className="mt-3 font-display text-4xl font-bold" style={{ color: "#FFFFFF" }}>
                                                    CO₂
                                                </p>
                                            </div>
                                            <div className="rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-2 text-right">
                                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#FFB278]">
                                                    Purity
                                                </p>
                                                <p className="text-sm font-bold text-[#FFB278]">
                                                    Sesuai kebutuhan
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-6 space-y-3 text-sm text-white">
                                            <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/10">
                                                <span style={{ color: "#FFFFFF" }}>Volume</span>
                                                <span className="font-semibold" style={{ color: "#FFFFFF" }}>
                                                    Sesuai kebutuhan
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/10">
                                                <span style={{ color: "#FFFFFF" }}>Pengiriman</span>
                                                <span className="font-semibold" style={{ color: "#FFFFFF" }}>
                                                    Jabodetabek & Sekitarnya
                                                </span>
                                            </div>
                                            <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 border border-white/10">
                                                <span style={{ color: "#FFFFFF" }}>Penggunaan</span>
                                                <span className="font-semibold" style={{ color: "#FFFFFF" }}>
                                                    Industri & Food Beverage
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 lg:py-24">
                    <div className="aj-container">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF6B00]">
                                CARBON DIOXIDE
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                                CO₂ untuk kebutuhan industri dan proses spesifik
                            </h2>
                            <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                                CO₂ digunakan dalam berbagai proses food &
                                beverage, welding, water treatment, serta
                                kebutuhan industri dan laboratorium sesuai
                                spesifikasi yang diperlukan.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {overviewCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="product-card rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm"
                                >
                                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FF6B00]">
                                        <CheckCircle2 size={22} />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                                        {card.title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                        {card.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-[#F8FAFC] py-20 lg:py-24">
                    <div className="aj-container">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF6B00]">
                                APLIKASI
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                                Digunakan untuk berbagai kebutuhan
                            </h2>
                            <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                                Pilih kebutuhan Anda dan konsultasikan spesifikasi
                                yang diperlukan kepada tim kami.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {applications.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="product-card rounded-2xl border border-[#E2E8F0] bg-white p-7 shadow-sm"
                                >
                                    <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF0E6] text-[#FF6B00]">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="font-display text-2xl font-bold text-[#0A2540]">
                                        {title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed text-[#475569]">
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="spesifikasi" className="py-20 lg:py-24">
                    <div className="aj-container">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF6B00]">
                                SPESIFIKASI
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                                Detail Carbon Dioxide
                            </h2>
                            <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                                Spesifikasi produk dapat disesuaikan dengan kebutuhan
                                penggunaan. Hubungi kami untuk memastikan grade,
                                ukuran tabung, dan ketersediaan yang sesuai.
                            </p>
                        </div>

                        <div className="mt-12 grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                            <div className="rounded-2xl border border-[#E2E8F0] bg-white p-6 sm:p-8 shadow-sm">
                                <ul className="space-y-4">
                                    {specChecklist.map((item) => (
                                        <li
                                            key={item}
                                            className="flex items-start gap-3 text-base text-[#0A2540]"
                                        >
                                            <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#FFF0E6] text-[#FF6B00]">
                                                <CheckCircle2 size={15} />
                                            </span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] shadow-sm">
                                <div className="overflow-x-auto">
                                    <table className="min-w-full text-left text-sm">
                                        <tbody>
                                            {specRows.map(([label, value], index) => (
                                                <tr
                                                    key={label}
                                                    className={
                                                        index % 2 === 0
                                                            ? "bg-white/70"
                                                            : "bg-transparent"
                                                    }
                                                >
                                                    <th className="px-5 py-4 font-semibold text-[#0A2540] align-top">
                                                        {label}
                                                    </th>
                                                    <td className="px-5 py-4 text-[#475569] align-top">
                                                        {value}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#0A2540] py-20 text-white lg:py-24">
                    <div className="aj-container">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF8B33]">
                                MENGAPA MEMILIH KAMI
                            </span>
                            <h2
                                className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl"
                                style={{ color: "#FFFFFF", backgroundColor: "transparent" }}
                            >
                                Supplier CO₂ untuk kebutuhan operasional Anda
                            </h2>
                        </div>

                        <div className="mt-12 grid gap-5 lg:grid-cols-3">
                            {whyAjgCards.map(({ title, description, icon: Icon }) => (
                                <div
                                    key={title}
                                    className="industry-card rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
                                >
                                    <div className="industry-icon-wrap inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#FF8B33]">
                                        <Icon size={22} />
                                    </div>
                                    <h3 className="mt-5 font-display text-2xl font-bold" style={{ color: "#FFFFFF" }}>
                                        {title}
                                    </h3>
                                    <p className="mt-4 text-base leading-relaxed" style={{ color: "#FFFFFF" }}>
                                        {description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="cta-bg relative overflow-hidden py-20 text-white lg:py-24">
                    <div className="absolute inset-0 dot-pattern-light opacity-40 pointer-events-none" />
                    <div className="absolute -top-32 -right-20 h-[420px] w-[420px] rounded-full bg-[#FF6B00]/18 blur-3xl" />
                    <div className="absolute -bottom-28 -left-16 h-[360px] w-[360px] rounded-full bg-[#FF6B00]/15 blur-3xl" />

                    <div className="aj-container relative z-10">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF8B33]">
                                BUTUH CO₂?
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ color: "#FFFFFF" }}>
                                Cek ketersediaan CO₂ sekarang
                            </h2>
                            <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                                Sampaikan kebutuhan Anda kepada tim kami. Kami bantu
                                cek ketersediaan, ukuran tabung, dan pengiriman.
                            </p>

                            <div className="mt-9 flex justify-center">
                                <a
                                    href={productWaLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openWhatsAppLink(productWaLink);
                                    }}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary !px-8 !py-4 text-base"
                                >
                                    <MessageCircle size={18} />
                                    Hubungi via WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-[#F8FAFC] py-20 lg:py-24">
                    <div className="aj-container max-w-4xl">
                        <div className="mx-auto max-w-3xl text-center">
                            <span className="aj-overline !text-[#FF6B00]">FAQ</span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                                Pertanyaan tentang CO₂
                            </h2>
                        </div>

                        <div className="mt-10 space-y-4">
                            {faqs.map(({ question, answer }) => (
                                <details
                                    key={question}
                                    className="group rounded-2xl border border-[#E2E8F0] bg-white p-4 shadow-sm"
                                >
                                    <summary className="cursor-pointer list-none font-semibold text-[#0A2540] text-base sm:text-lg">
                                        {question}
                                    </summary>
                                    <p className="mt-3 text-base leading-relaxed text-[#475569]">
                                        {answer}
                                    </p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <FloatingWhatsApp />
            <div className="lg:hidden h-16" aria-hidden="true" />
        </div>
    );
}

export default CO2;
