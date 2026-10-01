import type { Metadata } from "next";
import { ContactPageContent } from "@/components/pages/contact/ContactPage";
import { contactPage } from "@/content/inner-pages";

export const metadata: Metadata = { title: "Contact Us", description: contactPage.description };

export default function ContactPage() {
  return <ContactPageContent />;
}
