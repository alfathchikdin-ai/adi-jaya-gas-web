const GTM_ID = "GTM-N8S9LFR4";

export const initializeGTM = () => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function gtag() {
        window.dataLayer.push(arguments);
    };
    window.__gtmInitialized = true;
};

export const pushToDataLayer = (eventName, payload = {}) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...payload });
};

export const trackPageView = (path = window.location.pathname + window.location.search + window.location.hash) => {
    if (typeof window === "undefined") return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        event: "pageview",
        page: path,
    });
};
