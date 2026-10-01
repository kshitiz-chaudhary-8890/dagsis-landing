import { contactPage } from "@/content/inner-pages";
import { ContactForm } from "./ContactForm";
import { PageHero } from "./PageHero";

export function ContactPageContent() {
  return <>
    <PageHero eyebrow="Contact Us" title={<>Let&apos;s Talk About <em className="title-accent">Your Business.</em></>} description={contactPage.description} />
    <ContactForm />
  </>;
}
