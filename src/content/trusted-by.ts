import type { Stat } from "@/types/content";

/**
 * Social proof — hidden via `featureFlags.showTrustedBy` until we have
 * verified customer logos and numbers.
 *
 * Logos: add SVG/PNG files to /public/images/logos and list them here.
 */
export const trustedByContent = {
  title: "Trusted by growing teams worldwide",
  logos: [
    { name: "Company One", src: "" },
    { name: "Company Two", src: "" },
    { name: "Company Three", src: "" },
    { name: "Company Four", src: "" },
    { name: "Company Five", src: "" },
    { name: "Company Six", src: "" },
  ],
  stats: [
    { value: "—", label: "Businesses" },
    { value: "—", label: "Conversations handled" },
    { value: "—", label: "Countries" },
  ] satisfies Stat[],
};
