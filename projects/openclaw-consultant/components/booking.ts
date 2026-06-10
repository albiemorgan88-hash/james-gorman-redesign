const defaultDiscoveryCallUrl = "https://calendly.com/contact-bluecanvas/initial-consultation";

const configuredDiscoveryCallUrl =
  process.env.NEXT_PUBLIC_BOOKING_URL ||
  process.env.NEXT_PUBLIC_CALENDLY_URL ||
  process.env.NEXT_PUBLIC_CAL_BOOKING_URL;

export const discoveryCallUrl =
  configuredDiscoveryCallUrl && !configuredDiscoveryCallUrl.includes("_HERE")
    ? configuredDiscoveryCallUrl
    : defaultDiscoveryCallUrl;
