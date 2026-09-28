import type { Testimonial } from "@/types/content";

/**
 * PLACEHOLDER — replace with a real, approved customer story before launch.
 * Toggle visibility with `featureFlags.showTestimonial`.
 */
export const featuredTestimonial: Testimonial = {
  quote:
    "We connected Dagsis to WhatsApp on a Friday. By Monday it was answering most of our incoming questions, and our team finally had time for the customers who really needed them.",
  author: "Alex Morgan",
  role: "Head of Customer Experience",
  company: "Example Co.",
  avatarInitials: "AM",
  metrics: [
    { value: "—%", label: "Questions resolved automatically" },
    { value: "—s", label: "Average first response" },
    { value: "24/7", label: "Coverage" },
  ],
};
