// Brand-wide constants for Adi Jaya Gas
export const PHONE_RAW = "62881080590092";
export const PHONE_DISPLAY = "0881 0805 90092";
export const EMAIL = "adijayagas.id@gmail.com";
export const ADDRESS = "Jl. Bougenville D9, Kunciran Indah, Kec. Pinang, Banten";

// Brand assets (uploaded by client)
export const LOGO_URL =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/bgx5hjdw_Where%20Every%20Cake%20Meets%20the%20Cloud.%20%28Konten%20Instagram%20%2845%29%29.jpeg";
export const PHOTO_HERO =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/qiqqt1ux_IMG_4610.jpeg";
export const PHOTO_FACILITY =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/cq8bky7n_6ABD7932-40E0-4A82-8E54-8FF82F86DFA2.jpeg";
export const PHOTO_DELIVERY =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/gdj5w2mn_IMG_5748.jpeg";
export const PHOTO_CYLINDERS_A =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/0948lml7_IMG_6079.jpeg";
export const PHOTO_CYLINDERS_B =
    "https://customer-assets.emergentagent.com/job_industrial-gas-id/artifacts/342bhrua_IMG_5951.jpeg";

const buildWaLink = (msg) =>
    `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT_MSG =
    "Halo Adi Jaya Gas, saya tertarik untuk konsultasi mengenai kebutuhan gas industri. Mohon informasi lebih lanjut.";

export const WA_LINK = buildWaLink(WA_DEFAULT_MSG);

export const waLinkFor = (productOrTopic) =>
    buildWaLink(
        `Halo Adi Jaya Gas, saya ingin menanyakan ketersediaan dan harga untuk ${productOrTopic}. Terima kasih.`,
    );

export const MAPS_QUERY = encodeURIComponent(
    "Jl. Bougenville D9, Kunciran Indah, Kec. Pinang, Banten",
);
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
