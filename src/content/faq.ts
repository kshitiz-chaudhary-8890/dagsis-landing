import type { FaqItem, SectionIntro } from "@/types/content";

export const faqIntro: SectionIntro = {
  eyebrow: "FAQ",
  title: "Frequently asked",
  titleAccent: "questions",
  description: "Everything you need to know about Dagsis.",
};

export const faqs: FaqItem[] = [
  {
    question: "What is Dagsis?",
    answer:
      "Dagsis is a platform for building AI agents that learn from your own content (documents, website pages and FAQs) and answer customer questions across your website, WhatsApp, Instagram, Facebook, Telegram and Discord.",
  },
  {
    question: "Do I need technical skills to set it up?",
    answer:
      "No. You upload your content, configure your agent with a visual builder and connect channels in a few clicks. Adding the web widget takes a single line of code.",
  },
  {
    question: "What content can my agent learn from?",
    answer:
      "PDFs, Word documents, text files, website URLs and manually written Q&A. You can update or re-sync sources anytime to keep answers current.",
  },
  {
    question: "What happens when the agent can't answer?",
    answer:
      "You decide. The agent can hand the conversation to a human on your team, collect contact details for follow-up, or point the customer to the right resource.",
  },
  {
    question: "Which channels are supported?",
    answer:
      "Website (via our embeddable widget), WhatsApp, Instagram, Facebook Messenger, Telegram and Discord. One agent can run on all of them at the same time.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Your content is used only to power your own agents. Data is encrypted in transit and at rest. Contact us for details on our security practices.",
  },
  {
    question: "Can I try Dagsis for free?",
    answer:
      "Yes. The Free plan lets you build an agent and test it on your website. Upgrade whenever you need more messages, agents or channels.",
  },
];
