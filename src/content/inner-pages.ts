export const aboutPage = {
  title: "Making Every Customer Conversation Count.",
  description: "Dagsis helps businesses turn their own knowledge into AI agents that answer customers, capture leads and work around the clock.",
  whoWeAre: [
    "Dagsis AI is a platform for businesses that want to respond to customers faster without growing their support team at the same pace. You turn your existing content, such as documents, website pages and FAQs, into an AI agent that speaks in your brand's voice and works across the channels your customers already use.",
    "We started Dagsis with a simple observation: customers now expect instant replies on the apps they use every day, especially WhatsApp, but most businesses cannot staff every conversation around the clock. Dagsis closes that gap.",
  ],
  mission: "To make reliable, brand-safe AI customer conversations accessible to every business, whatever its size or technical ability.",
  beliefs: [
    { title: "Answers should be reliable.", description: "The AI speaks only from your knowledge, so you can trust what it says on your behalf." },
    { title: "Technology should be simple.", description: "If it needs a developer to set up, it isn't finished." },
    { title: "Every conversation is an opportunity.", description: "Every question is a chance to help a customer or meet a future one." },
    { title: "You should always be in control.", description: "You decide what your agent knows, how it behaves and who can manage it." },
  ],
  offer: "A single platform to build knowledge bases, create agents, deploy them to WhatsApp, Instagram, Facebook, Discord, Telegram and your website, manage your workspace, capture leads, and measure how well your AI is performing.",
  founder: {
    name: "Founder Name",
    role: "Founder & CEO",
    quote: "We built Dagsis so businesses can answer customers with confidence, whenever they reach out.",
    photo: "/images/hero/about-founder-placeholder.png",
  },
  closing: "Want to see what Dagsis can do for your business?",
} as const;

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  subtitle: string;
  introduction: string;
  image: string;
  imageAlt: string;
  useCases: readonly { title: string; description: string }[];
  faqs: readonly { question: string; answer: string }[];
};

export const industriesPage = {
  title: "AI Customer Conversations, Built for Your Industry.",
  description: "From shops to clinics to classrooms, see how Dagsis helps businesses like yours serve customers faster.",
  intro: "Every industry has its own questions, its own rush hours and its own way of talking to customers. Choose yours to see how Dagsis fits.",
} as const;

export const industries: readonly Industry[] = [
  {
    slug: "property",
    name: "Real Estate",
    summary: "Answer listing, pricing and viewing questions instantly, and turn casual browsers into booked viewings.",
    subtitle: "Turn every listing enquiry into a viewing, day or night.",
    introduction: "Property seekers browse listings late at night and on weekends: How much? Where exactly? Can I view it this Saturday? Agencies lose hot leads when replies wait till Monday. Dagsis gives your agency an AI agent trained on your listings, prices and policies, so every enquiry gets an instant, accurate reply on WhatsApp and your website, and serious buyers are captured as leads.",
    image: "/images/showcase/demo-realestate.webp",
    imageAlt: "Real estate demo website showing a property listing",
    useCases: [
      { title: "Listing enquiries", description: "The agent answers questions about price, location, size, tenure and availability using your listing information." },
      { title: "Viewing requests", description: "Buyers can ask about viewing slots and leave their details, which are saved as leads for your agents to follow up." },
      { title: "Policy questions", description: "Common queries on payment schedules, down payments and procedures are answered instantly." },
      { title: "Lead capture", description: "When a browser shows serious interest, the agent collects their contact details and saves them as a lead for your sales team." },
    ],
    faqs: [
      { question: "Can the agent answer questions about my specific listings?", answer: "Yes. Upload your listing details and it answers from them, including prices and availability." },
      { question: "Can buyers request viewings through it?", answer: "It can collect their preferred timing and contact details, which are saved in your Leads section for your agents to confirm." },
      { question: "Can it work on WhatsApp?", answer: "Yes. WhatsApp is one of the main channels it supports, along with your website and social media." },
      { question: "What if a buyer asks about financing?", answer: "It answers from the general information you provide, and passes complex cases to your agents as leads." },
    ],
  },
  {
    slug: "retail",
    name: "Retail",
    summary: "Answer product, pricing, stock and delivery questions instantly, and turn browsers into buyers, even outside store hours.",
    subtitle: "Turn every product question into a sale, day or night.",
    introduction: "Shoppers ask the same things again and again: Is it in stock? How much is delivery? Can I return it? When customers don't get an answer quickly, they leave for another store. Dagsis gives your retail business an AI agent trained on your catalogue, policies and promotions, so every shopper gets an instant, accurate reply on WhatsApp, your website or social media.",
    image: "/images/showcase/demo-retail.webp",
    imageAlt: "Clothing and accessories displayed in a retail store",
    useCases: [
      { title: "Product enquiries", description: "The agent answers questions about features, sizes, colours, pricing and availability using your product information." },
      { title: "Order and delivery questions", description: "Customers get quick answers on shipping timelines, delivery fees, returns and exchanges." },
      { title: "Promotions and recommendations", description: "The agent shares current offers and helps shoppers find what suits them." },
      { title: "Lead capture", description: "When a shopper shows buying interest, the agent collects their contact details and saves them as a lead for your sales team." },
    ],
    faqs: [
      { question: "Can the agent answer questions about my specific products?", answer: "Yes. You upload your product details, price lists or website, and the agent answers from that information." },
      { question: "What if a customer asks something the agent doesn't know?", answer: "It won't guess. You can review the conversation in your chat history and add the missing information to your knowledge base." },
      { question: "Can it work on WhatsApp?", answer: "Yes. You can deploy the same agent to WhatsApp, Instagram, Facebook and your website." },
      { question: "Will it help me collect customer details?", answer: "Yes. When it detects a potential buyer, it asks for their details and stores them in your Leads section." },
    ],
  },
  {
    slug: "education",
    name: "Education",
    summary: "Handle course enquiries, admissions questions and student support without overwhelming your admin team.",
    subtitle: "Answer every student and parent enquiry, without adding to your admin workload.",
    introduction: "Schools, tuition centres and training providers receive a steady flow of questions about courses, fees, schedules and admissions, many of them repeated daily and often outside office hours. Dagsis gives your institution an AI agent trained on your programme information, so prospective students and parents get clear answers instantly and your team can focus on teaching and enrolment.",
    image: "/images/showcase/demo-education.webp",
    imageAlt: "Education institute website preview",
    useCases: [
      { title: "Course and programme enquiries", description: "The agent explains course content, duration, fees and intake dates." },
      { title: "Admissions support", description: "It answers common admissions questions and captures applicants' details as leads for follow-up." },
      { title: "Student support", description: "Current students get quick answers on timetables, policies and campus information." },
      { title: "Parent communication", description: "Parents can check schedules and fee information on WhatsApp." },
    ],
    faqs: [
      { question: "Can the agent explain different courses and fees?", answer: "Yes. It answers using the programme details you provide." },
      { question: "Can it help with admissions enquiries?", answer: "Yes. It answers common questions and captures the applicant's details as a lead for your admissions staff." },
      { question: "Can my staff help manage the agent?", answer: "Yes. You can invite team members with edit or write permissions to help keep your knowledge bases and agents up to date." },
      { question: "Can students and parents use WhatsApp to reach it?", answer: "Yes. The agent can be deployed to WhatsApp along with your website and other channels." },
    ],
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    summary: "Help patients find services, check clinic information and share their details for follow-up, while your staff focus on care.",
    subtitle: "Help patients get answers quickly, so your staff can focus on care.",
    introduction: "Clinics and healthcare providers field constant questions about services, opening hours, locations and appointments. Dagsis gives your practice an AI agent trained on your service and clinic information, so patients get clear, consistent answers at any hour. The agent shares general information you provide. It does not provide medical advice or diagnosis.",
    image: "/images/showcase/demo-healthcare.webp",
    imageAlt: "Healthcare clinic website preview",
    useCases: [
      { title: "Service and clinic information", description: "The agent shares services offered, opening hours, locations and general preparation information." },
      { title: "Appointment enquiries", description: "Patients can ask about availability and leave their details, which are saved as leads for your staff to follow up." },
      { title: "Frequently asked questions", description: "Common queries on fees, procedures and policies are answered instantly." },
      { title: "Clear boundaries", description: "The agent sticks to the information you provide and does not offer medical advice." },
    ],
    faqs: [
      { question: "Does the agent give medical advice?", answer: "No. It is designed to share only the general information you provide." },
      { question: "Can patients request appointments through it?", answer: "It can answer availability questions and collect their details and preferred timing, which are saved in your Leads section for your staff to follow up." },
      { question: "Who controls what the agent says?", answer: "You do. It answers only from the knowledge you upload and the behaviour you define." },
      { question: "Who can manage the agent?", answer: "You decide. Role-based permissions control which team members can edit or manage the platform." },
    ],
  },
  {
    slug: "travel",
    name: "Travel",
    summary: "Respond to itinerary, package and booking questions at any hour, for travellers in any time zone.",
    subtitle: "Be there for every traveller, in every time zone.",
    introduction: "Travellers ask questions at all hours: about packages, itineraries, inclusions, visas and booking changes. Agencies and tour operators lose bookings when replies are slow. Dagsis gives your business an AI agent trained on your packages and policies, so travellers get instant answers on WhatsApp and your website, and serious enquiries are captured as leads.",
    image: "/images/showcase/demo-travel.webp",
    imageAlt: "Travel website preview showing a destination",
    useCases: [
      { title: "Package and itinerary enquiries", description: "The agent explains destinations, inclusions, pricing and travel dates." },
      { title: "Booking questions", description: "It answers questions about payment, changes and cancellations according to your policies." },
      { title: "Lead capture for custom trips", description: "When a traveller shows interest, the agent gathers their travel preferences and contact details for your consultants." },
      { title: "Round-the-clock coverage", description: "Travellers in different time zones get answers without waiting for office hours." },
    ],
    faqs: [
      { question: "Can the agent explain my travel packages?", answer: "Yes. Upload your package details and it answers from them." },
      { question: "Can it work outside office hours?", answer: "Yes. It responds at any time, and interested travellers are saved as leads for your team to follow up." },
      { question: "Can it handle enquiries across multiple channels?", answer: "Yes. WhatsApp, Instagram, Facebook, Telegram, Discord and your website are all supported." },
      { question: "How do my consultants see new enquiries?", answer: "Interested travellers are saved in your Leads section, so your sales team can follow up." },
    ],
  },
  {
    slug: "food",
    name: "Food",
    summary: "Share menus, answer opening hours and dietary questions, and collect reservation enquiries right in WhatsApp.",
    subtitle: "Answer menu and booking questions right where your customers already are.",
    introduction: "Restaurants, cafés and food businesses get the same questions every day: What's on the menu? Are you open? Can I book a table? Is there a vegetarian option? Dagsis gives your business an AI agent that answers these instantly on WhatsApp, so your staff can focus on serving guests instead of replying to messages.",
    image: "/images/showcase/demo-restaurant.webp",
    imageAlt: "Tables set inside a restaurant",
    useCases: [
      { title: "Menu and dietary questions", description: "The agent shares menu items, prices and dietary information from your menu." },
      { title: "Reservation enquiries", description: "Customers can ask about availability and leave their booking details, which are saved as leads for your team." },
      { title: "Opening hours and locations", description: "Common questions are answered instantly, for every outlet." },
      { title: "Promotions and events", description: "The agent shares current offers, set menus and special events." },
    ],
    faqs: [
      { question: "Can the agent answer questions about my menu?", answer: "Yes. Upload your menu and it answers from it, including prices and options." },
      { question: "Can customers make reservations through it?", answer: "It can collect their booking details and save them in your Leads section for your team to confirm." },
      { question: "Can it be used on WhatsApp?", answer: "Yes. WhatsApp is one of the main channels it supports." },
      { question: "What if the agent doesn't have the answer?", answer: "It won't guess. You can review the chat and add the missing details to your knowledge base." },
    ],
  },
];

export const demoWebsitesPage = {
  title: "See Dagsis in Action.",
  description: "Try live demo websites with a Dagsis chatbot already configured, and chat with it like a real customer.",
  intro: "Each demo below is a sample business website with its own AI agent. Open one, start a conversation and ask anything a customer might ask.",
  demos: [
    { name: "Retail", description: "Ask about products, prices, delivery and returns, and see how the agent recommends items and captures your details.", image: "/images/showcase/demo-retail.webp", imageAlt: "Retail store interior", href: null },
    { name: "Education", description: "Ask about courses, fees, intake dates and admissions, and see how it handles enquiries from students and parents.", image: "/images/showcase/demo-education.webp", imageAlt: "Education demo website", href: process.env.NEXT_PUBLIC_EDUCATION_DEMO_URL || "https://university-seven-beta.vercel.app/" },
    { name: "Healthcare", description: "Ask about services, opening hours and appointment enquiries, and see how the agent shares general clinic information.", image: "/images/showcase/demo-healthcare.webp", imageAlt: "Healthcare demo website", href: process.env.NEXT_PUBLIC_HEALTHCARE_DEMO_URL || "https://clinic-and-healthcare.vercel.app/" },
    { name: "Food", description: "Ask about the menu, dietary options and reservations.", image: "/images/showcase/demo-restaurant.webp", imageAlt: "Restaurant interior", href: null },
  ],
  closing: "Like what you see? Book a Demo and we'll set this up for your business.",
} as const;

export const featuresPage = {
  title: "Everything You Need to Run AI Customer Conversations.",
  description: "Build, deploy, manage and measure your AI agents from one simple dashboard.",
  features: [
    { title: "Workspace", description: "Your workspace is the home for everything your business does on Dagsis. Your agents, knowledge bases, conversations, team members and settings all sit together in one organised, secure place." },
    { title: "Team Members", description: "Invite colleagues into your workspace by email and give them edit or write permissions so they can help manage the platform, such as updating knowledge bases and agents. Your business admin keeps overall control." },
    { title: "Role-Based Access", description: "You stay in control. Business admins manage members, update login details, assign roles and set permissions, while team members work with the edit or write access they have been given. Security controls help keep unauthorised people out of your workspace." },
    { title: "Knowledge Base", description: "Teach your AI using your own content. Upload files, add URLs or connect your website, and Dagsis organises it into a knowledge base your agents learn from. Because agents answer from your knowledge, replies stay accurate and on-brand." },
    { title: "Agents", description: "Create AI agents from your knowledge bases and shape how each one behaves. Set its role, tone of voice and behaviour through simple prompts, whether you want a friendly sales assistant or a formal support agent. You can create different agents for different purposes." },
    { title: "Leads", description: "When the AI detects a potential buyer on any channel, it politely asks for their name, email, phone number and other details and saves them as a lead in your dashboard. Your sales team can see who is interested and follow up promptly." },
    { title: "Analytics", description: "See how well your AI is performing. Track conversation volumes and how enquiries are being handled, and spot where your agent needs more knowledge. Use these insights to keep improving." },
    { title: "Session and Chat History", description: "Every conversation is recorded and organised into sessions. Review full chat histories to understand what customers ask and check the quality of the AI's replies." },
    { title: "Multiple Channels", description: "Deploy the same agent to your website, WhatsApp, Instagram, Facebook, Discord and Telegram, and manage every conversation from a single dashboard." },
  ],
  closing: "See every feature in action.",
} as const;

export const solutionsPage = {
  title: "Solutions for Every Customer Conversation.",
  description: "Whether you want to sell more, support better or empower your team, Dagsis has a solution for it.",
  intro: "How Businesses Use Dagsis",
  solutions: [
    { title: "AI Customer Support", description: "Give customers instant answers to common questions at any hour. Your agent resolves routine enquiries on its own, and chat history and analytics show you where to improve it.", bestFor: "businesses with high volumes of repeat questions." },
    { title: "WhatsApp Business Automation", description: "Meet customers on the app they use most. Connect your agent to WhatsApp so enquiries, bookings and FAQs are handled instantly.", bestFor: "businesses in Singapore and across Southeast Asia where WhatsApp is the main channel." },
    { title: "Lead Generation and Qualification", description: "Turn conversations into a pipeline. The agent recognises buying interest, collects contact details and saves each lead for your sales team to follow up.", bestFor: "sales-driven businesses, property, education and travel." },
    { title: "Website Chat Assistant", description: "Add a chatbot to your website that guides visitors, answers questions about your products or services and keeps them engaged instead of leaving.", bestFor: "businesses with significant website traffic." },
    { title: "Internal Knowledge Assistant", description: "Give your team an agent trained on your SOPs, policies and guides. New hires learn faster and experienced staff spend less time answering the same internal questions.", bestFor: "growing teams and multi-outlet businesses." },
    { title: "Multi-Channel Customer Engagement", description: "Run one agent across WhatsApp, Instagram, Facebook, Telegram, Discord and your website, and manage every conversation in one place.", bestFor: "businesses with customers spread across several platforms." },
  ],
  closing: "Not sure which solution fits? Book a Demo and we'll help you choose.",
} as const;

export const pricingPage = {
  title: "Simple Pricing That Grows With Your Business.",
  description: "Start free, then choose the package that fits your business and your conversations.",
} as const;

export const contactPage = {
  title: "Let's Talk About Your Business.",
  description: "Questions, a demo request or just curious? Our team is happy to help.",
} as const;
