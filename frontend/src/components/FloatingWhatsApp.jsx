import { useEffect, useState } from "react";
import { MessageCircle, X, ArrowRight } from "lucide-react";
import { WA_LINK } from "../lib/constants";

export const FloatingWhatsApp = () => {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const onScroll = () => setShow(window.scrollY > 400);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    if (!show) return null;

    return (
        <>
            {/* Floating WhatsApp Button */}
            <div className="fixed bottom-5 right-5 lg:bottom-7 lg:right-7 z-40 flex flex-col items-end gap-3">
                {open && (
                    <div
                        data-testid="whatsapp-popup"
                        className="bg-white rounded-2xl shadow-2xl border border-[#E2E8F0] w-[280px] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
                    >
                        <div className="bg-[#0A2540] p-4 flex items-center justify-between">
                            <div className="flex items-center gap-2.5">
                                <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center">
                                    <MessageCircle
                                        size={18}
                                        className="text-white"
                                    />
                                </div>
                                <div className="text-white">
                                    <div className="font-display font-bold text-sm">
                                        Tim Adi Jaya Gas
                                    </div>
                                    <div className="text-[11px] text-white/70 flex items-center gap-1.5">
                                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                        Online sekarang
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="Tutup"
                                className="text-white/70 hover:text-white"
                            >
                                <X size={16} />
                            </button>
                        </div>
                        <div className="p-4 bg-[#F8FAFC]">
                            <div className="bg-white rounded-lg p-3 text-sm text-[#334155] shadow-sm border border-[#E2E8F0]">
                                Halo! 👋 Ada yang bisa kami bantu? Tim kami
                                siap membantu konsultasi kebutuhan gas Anda.
                            </div>
                            <a
                                href={WA_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-testid="whatsapp-popup-cta"
                                className="mt-3 w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe57] text-white font-semibold rounded-md py-2.5 text-sm transition-colors"
                            >
                                Mulai Chat
                                <ArrowRight size={14} />
                            </a>
                        </div>
                    </div>
                )}

                <button
                    onClick={() => setOpen(!open)}
                    data-testid="floating-whatsapp-button"
                    aria-label="Chat WhatsApp"
                    className="w-14 h-14 lg:w-16 lg:h-16 rounded-full bg-[#25D366] hover:bg-[#1ebe57] text-white flex items-center justify-center shadow-2xl wa-pulse transition-transform hover:scale-105"
                >
                    {open ? (
                        <X size={24} />
                    ) : (
                        <MessageCircle size={26} strokeWidth={2.2} />
                    )}
                </button>
            </div>

            {/* Mobile sticky CTA bar */}
            <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-xl border-t border-[#E2E8F0] p-3 grid grid-cols-2 gap-2 shadow-[0_-4px_20px_rgba(10,37,64,0.08)]">
                <a
                    href="tel:+62881080590092"
                    data-testid="mobile-sticky-call"
                    className="btn-secondary !py-2.5 text-sm"
                >
                    Telepon
                </a>
                <a
                    href={WA_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="mobile-sticky-whatsapp"
                    className="btn-primary !py-2.5 text-sm"
                >
                    <MessageCircle size={14} />
                    WhatsApp
                </a>
            </div>
        </>
    );
};
