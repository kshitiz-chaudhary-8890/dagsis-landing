import type { FaqItem, SectionIntro } from "@/types/content";

export const faqIntro: SectionIntro = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions.",
  description: "Quick answers to what businesses ask us most.",
};

export const faqs: FaqItem[] = [
  {
    question: "What is Dagsis?",
    answer:
      "Dagsis is an AI platform that lets businesses build chatbots trained on their own content and deploy them to their website and messaging channels to answer customers and capture leads.",
  },
  {
    question: "Do I need technical skills to use it?",
    answer:
      "No. You upload your content, describe how the agent should behave, and deploy it from the dashboard.",
  },
  {
    question: "Which channels does it support?",
    answer:
      "WhatsApp, Instagram, Facebook, Discord, Telegram and your website.",
  },
  {
    question: "How does the AI learn about my business?",
    answer:
      "You add files, URLs or your website to a knowledge base, and the agent answers using that information.",
  },
  {
    question: "Can my team use it too?",
    answer:
      "Yes. You can invite team members, and control their access through roles and permissions.",
  },
  {
    question: "How are leads captured?",
    answer:
      "When the AI detects a potential buyer, it asks for their details in the conversation and saves them in your Leads section.",
  },
  {
    question: "Is there a free plan?",
    answer:
      "Yes. You can start on the free package and upgrade to a business package when you are ready.",
  },
];

/** Topics group the supplied questions without changing their answers. */
export const faqGroups = [
  { id: "getting-started", title: "Getting started", items: [faqs[0], faqs[1], faqs[6]] },
  { id: "your-ai-agent", title: "Your AI agent", items: [faqs[2], faqs[3]] },
  { id: "team-and-leads", title: "Team & leads", items: [faqs[4], faqs[5]] },
];
