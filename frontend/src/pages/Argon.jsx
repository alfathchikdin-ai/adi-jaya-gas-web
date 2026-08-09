import { useEffect } from "react";
import {
    ArrowRight,
    CheckCircle2,
    Factory,
    Flame,
    Hospital,
    MapPin,
    MessageCircle,
    ShieldCheck,
    Truck,
    Wrench,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingWhatsApp } from "../components/FloatingWhatsApp";
import {
    buildWaLink,
    openWhatsAppLink,
} from "../lib/constants";

const argonWaMessage =
    "Halo Adi Jaya Gas, saya ingin menanyakan ketersediaan Argon. Mohon info harga dan ukuran tabung yang tersedia.";
const argonWaLink = buildWaLink(argonWaMessage);

const overviewCards = [
    {
        title: "TIG Welding",
        description: "Argon digunakan sebagai shielding gas pada proses TIG welding untuk berbagai pekerjaan fabrikasi.",
    },
    {
        title: "MIG Welding",
        description: "Digunakan sebagai bagian dari shielding gas pada aplikasi MIG welding tertentu sesuai kebutuhan.",
    },
    {
        title: "Stainless Steel & Aluminium",
        description: "Mendukung proses pengelasan stainless steel dan aluminium untuk kebutuhan workshop dan fabrikasi.",
    },
    {
        title: "Fabrikasi",
        description: "Untuk berbagai kebutuhan fabrikasi, workshop, dan pekerjaan industri.",
    },
];

const applications = [
    {
        title: "TIG Welding",
        description:
            "Untuk proses TIG welding pada stainless steel, aluminium, dan berbagai material lainnya.",
        icon: Wrench,
    },
    {
        title: "MIG Welding",
        description:
            "Digunakan sebagai shielding gas pada aplikasi MIG welding tertentu.",
        icon: Flame,
    },
    {
        title: "Fabrikasi",
        description:
            "Mendukung berbagai pekerjaan fabrikasi dan kebutuhan workshop industri.",
        icon: Factory,
    },
    {
        title: "Laboratorium",
        description:
            "Untuk kebutuhan laboratorium dan aplikasi profesional tertentu sesuai spesifikasi.",
        icon: Hospital,
    },
];

const specChecklist = [
    "Melayani kebutuhan welding, fabrikasi, manufaktur, dan customer profesional.",
    "Ketersediaan dapat dikonfirmasi sebelum pemesanan",
    "Pengiriman ke area Tangerang dan Jakarta",
    "Melayani kebutuhan rutin maupun volume tertentu",
];

const specRows = [
    ["Nama Produk", "Argon"],
    ["Rumus Kimia", "Ar"],
    ["Bentuk", "Compressed Gas"],
    ["Kategori", "Industrial & Specialty Gas"],
    ["Kemasan", "Cylinder"],
    ["Ukuran Tabung", "Tersedia berdasarkan kebutuhan"],
    ["Grade", "Sesuai kebutuhan penggunaan"],
    ["Ketersediaan", "Konfirmasi sebelum pemesanan"],
];

const whyAjgCards = [
    {
        title: "Pengiriman",
        description:
            "Pengiriman ke seluruh Jabodetabek dan area sekitarnya.",
        icon: Truck,
    },
    {
        title: "Kebutuhan Bisnis",
        description:
            "Melayani kebutuhan welding, fabrikasi, manufaktur, dan customer profesional.",
        icon: ShieldCheck,
    },
    {
        title: "Cek Ketersediaan",
        description:
            "Konfirmasi kebutuhan dan ketersediaan sebelum melakukan pemesanan.",
        icon: CheckCircle2,
    },
];

const shippingAreas = ["Jabodetabek & Sekitarnya"];

const faqs = [
    {
        question: "Argon digunakan untuk apa?",
        answer:
            "Argon banyak digunakan sebagai shielding gas pada welding, terutama TIG dan beberapa aplikasi MIG, serta berbagai kebutuhan fabrikasi dan industri.",
    },
    {
        question: "Apakah Adi Jaya Gas menyediakan Argon untuk kebutuhan industri?",
        answer:
            "Ya. Kami melayani kebutuhan Argon untuk welding, workshop, fabrikasi, manufaktur, dan berbagai kebutuhan profesional.",
    },
    {
        question: "Apakah Argon bisa digunakan untuk stainless steel dan aluminium?",
        answer:
            "Ya. Argon dapat digunakan pada berbagai aplikasi welding stainless steel dan aluminium sesuai proses dan spesifikasi yang diperlukan.",
    },
    {
        question: "Bagaimana cara mengetahui harga Argon?",
        answer:
            "Harga dapat berbeda berdasarkan grade, ukuran tabung, jumlah kebutuhan, dan lokasi pengiriman. Hubungi kami untuk mendapatkan penawaran sesuai kebutuhan Anda.",
    },
];

export function Argon() {
    useEffect(() => {
        document.title = "Supplier Argon Industri Tangerang & Jakarta | Adi Jaya Gas";
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
                                ARGON Ar
                            </span>
                            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-[1.05] tracking-tight text-white">
                                <span style={{ color: "#FFFFFF" }}>Supplier Argon</span>
                                <span className="block">
                                    <span className="gradient-text">Industri</span>
                                </span>
                            </h1>
                            <p className="mt-6 max-w-xl text-base sm:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                                Argon untuk kebutuhan industri, welding, cutting,
                                fabrikasi, medis, dan berbagai kebutuhan profesional.
                            </p>

                            <div className="mt-9 flex flex-wrap gap-3">
                                <a
                                    href={argonWaLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openWhatsAppLink(argonWaLink);
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
                                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-4 lg:p-6 shadow-2xl backdrop-blur-xl">
                                    <div className="flex flex-col items-start gap-3 mb-6 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                                        <div className="aj-overline !text-[#FF8B33]">
                                            Argon Ar
                                        </div>
                                        <div className="flex gap-2">
                                            <span className="h-2.5 w-2.5 rounded-full bg-[#FF6B00]" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                            <span className="h-2.5 w-2.5 rounded-full bg-white/30" />
                                        </div>
                                    </div>

                                    <div className="rounded-2xl border border-white/10 bg-[#0A2540]/60 p-4 lg:p-6">
                                        <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
                                            <div>
                                                <p className="text-xs uppercase tracking-[0.24em]" style={{ color: "#CBD5E1" }}>
                                                    Industrial Grade
                                                </p>
                                                <p className="mt-3 font-display text-4xl font-bold" style={{ color: "#FFFFFF" }}>
                                                    Ar
                                                </p>
                                            </div>
                                            <div className="w-full rounded-xl border border-[#FF6B00]/30 bg-[#FF6B00]/10 px-3 py-2 text-left lg:w-auto lg:text-right">
                                                <p className="text-[10px] uppercase tracking-[0.18em] text-[#FFB278]">
                                                    Purity
                                                </p>
                                                <p className="text-sm font-bold text-[#FFB278]">
                                                    Sesuai kebutuhan
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5 space-y-3 text-sm text-white lg:mt-6">
                                            <div className="flex flex-col items-start gap-1 rounded-lg bg-white/5 px-3 py-2 border border-white/10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                                                <span style={{ color: "#FFFFFF" }}>Volume</span>
                                                <span className="font-semibold break-words text-left lg:text-right" style={{ color: "#FFFFFF" }}>
                                                    Sesuai kebutuhan
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-start gap-1 rounded-lg bg-white/5 px-3 py-2 border border-white/10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                                                <span style={{ color: "#FFFFFF" }}>Pengiriman</span>
                                                <span className="font-semibold break-words text-left lg:text-right" style={{ color: "#FFFFFF" }}>
                                                    Jabodetabek & Sekitarnya
                                                </span>
                                            </div>
                                            <div className="flex flex-col items-start gap-1 rounded-lg bg-white/5 px-3 py-2 border border-white/10 lg:flex-row lg:items-center lg:justify-between lg:gap-0">
                                                <span style={{ color: "#FFFFFF" }}>Penggunaan</span>
                                                <span className="font-semibold break-words text-left lg:text-right" style={{ color: "#FFFFFF" }}>
                                                    Welding & Industri
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
                                ARGON
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold text-[#0A2540] sm:text-4xl lg:text-5xl">
                                Argon untuk berbagai kebutuhan operasional
                            </h2>
                            <p className="mt-5 text-base sm:text-lg text-[#475569] leading-relaxed">
                                Argon digunakan untuk mendukung berbagai kebutuhan
                                operasional di industri, workshop, dan pekerjaan
                                teknis yang memerlukan proses yang stabil dan
                                terukur.
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
                                Detail Argon
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
                                Supplier Argon untuk kebutuhan operasional Anda
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
                                BUTUH ARGON?
                            </span>
                            <h2 className="mt-4 font-display text-3xl font-extrabold sm:text-4xl lg:text-5xl" style={{ color: "#FFFFFF" }}>
                                Cek ketersediaan Argon sekarang
                            </h2>
                            <p className="mt-5 text-base sm:text-lg leading-relaxed" style={{ color: "#FFFFFF" }}>
                                Sampaikan kebutuhan Anda kepada tim kami. Kami bantu
                                cek ketersediaan, ukuran tabung, dan pengiriman.
                            </p>

                            <div className="mt-9 flex justify-center">
                                <a
                                    href={argonWaLink}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openWhatsAppLink(argonWaLink);
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
                                Pertanyaan tentang Argon
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

export default Argon;