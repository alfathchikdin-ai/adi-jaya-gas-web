// Brand-wide constants for CV. Adi Jaya Gas
export const PHONE_RAW = "62881080590092";
export const PHONE_DISPLAY = "0881-0805-90092";
export const EMAIL = "adijayagas.id@gmail.com";
export const ADDRESS = "Jl. Bougenville D9, Kunciran Indah, Kec. Pinang, Banten";

const buildWaLink = (msg) =>
    `https://wa.me/${PHONE_RAW}?text=${encodeURIComponent(msg)}`;

export const WA_DEFAULT_MSG =
    "Halo CV. Adi Jaya Gas, saya tertarik untuk konsultasi mengenai kebutuhan gas industri. Mohon informasi lebih lanjut.";

export const WA_LINK = buildWaLink(WA_DEFAULT_MSG);

export const waLinkFor = (productOrTopic) =>
    buildWaLink(
        `Halo CV. Adi Jaya Gas, saya ingin menanyakan ketersediaan dan harga untuk ${productOrTopic}. Terima kasih.`,
    );

export const MAPS_QUERY = encodeURIComponent(
    "Jl. Bougenville D9, Kunciran Indah, Kec. Pinang, Banten",
);
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
