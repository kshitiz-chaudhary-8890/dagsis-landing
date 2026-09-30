import { Building2, GraduationCap, HeartPulse, Plane } from "lucide-react";

export const demoShowcase = {
  eyebrow: "Interactive product showcase",
  title: "Don't Just Read About It. Try It.",
  description: "Explore live demo websites for real estate, education, tours & travel and healthcare — each one running a Dagsis AI agent on real customer questions.",
  instruction: "Pick an industry below and open its live demo site. Ask about listings, programmes, itineraries or appointments and see how the agent responds.",
  cta: "Try This Demo",
  closing: "Want this for your own business?",
};

export const industryDemos = [
  {
    id: "realestate", label: "Real estate", title: "AUREA", icon: Building2,
    description: "Singapore's premier luxury property portfolio — ask about penthouses, district prices, psf and private viewings.",
    href: process.env.NEXT_PUBLIC_REAL_ESTATE_DEMO_URL || "https://property-ten-olive.vercel.app/",
    image: "/images/showcase/demo-realestate.webp", imageAlt: "The AUREA real estate website hero with a luxury sky penthouse in Singapore",
    brand: "AUREA", category: "Prime residences", headline: "Find your dream property.\nIn Singapore.",
    websiteDescription: "Explore premium residences, investment opportunities and luxury developments across Singapore's prime districts.", action: "Search properties", navigation: ["Properties", "New Projects", "Market Insights", "Contact"],
    accent: "#b8912f", background: "#10182a", websiteInk: "#1b2431",
    greeting: "Welcome to AUREA! Ask me about listings, districts, prices or private viewings.",
    questions: [
      { question: "Any penthouses in Marina Bay?", answer: "Yes! Our featured listing is The Sky Penthouse at Marina Bay Residences: 4 beds, 5 baths and 5,200 sqft at S$24.8M. Would you like the full details?", keywords: ["penthouse", "marina", "listing", "property", "bedroom"] },
      { question: "What is the average price per sqft?", answer: "In this sample portfolio, the Core Central Region averages about S$3,140 psf, with prime districts ranging from S$1,780 to S$4,500 psf.", keywords: ["price", "psf", "average", "cost", "budget", "sqft"] },
      { question: "Can I arrange a private viewing?", answer: "Of course. A real advisor would collect your name, contact and preferred time here. Please don't enter personal details in this sample preview.", keywords: ["view", "visit", "arrange", "book", "appointment", "advisor"] },
    ],
  },
  {
    id: "education", label: "Education", title: "Apex Institute", icon: GraduationCap,
    description: "100 accredited courses across 10 faculties — ask about programmes, fees, intakes and SkillsFuture subsidies.",
    href: process.env.NEXT_PUBLIC_EDUCATION_DEMO_URL || "https://university-seven-beta.vercel.app/",
    image: "/images/showcase/demo-education.webp", imageAlt: "The Apex Institute of Singapore website hero with its academic catalogue search",
    brand: "Apex Institute", category: "Executive education", headline: "Cultivating rigour.\nAcademic mastery.",
    websiteDescription: "Accredited executive diplomas and professional micro-credentials aligned with Singapore's Skills Framework.", action: "Explore catalog", navigation: ["Programmes", "Admissions", "Campuses"],
    accent: "#166b4f", background: "#f6f8f7", websiteInk: "#152238",
    greeting: "Welcome to Apex Institute! Ask me about programmes, fees, intakes or subsidies.",
    questions: [
      { question: "What programmes do you offer?", answer: "Our sample catalog spans data science, AI, cyber security, cloud computing and Cambridge prep — 100 accredited courses across 10 faculties.", keywords: ["programme", "course", "offer", "catalog", "faculty", "subject"] },
      { question: "How much is a course?", answer: "In this preview, professional courses start at S$1,950, with up to 50% SkillsFuture support for eligible Singapore citizens and PRs.", keywords: ["fee", "price", "cost", "much", "subsidy", "skillsfuture"] },
      { question: "When is the next intake?", answer: "Our sample calendar lists October and November 2026 terms. This preview won't submit a real application.", keywords: ["intake", "admission", "apply", "enrol", "start", "when"] },
    ],
  },
  {
    id: "travel", label: "Tours & travel", title: "Voyanta", icon: Plane,
    description: "Curated luxury journeys across 50 Singapore precincts and islands — ask about packages, itineraries and bespoke trips.",
    href: process.env.NEXT_PUBLIC_TRAVEL_DEMO_URL || "https://tours-travel-ochre.vercel.app/",
    image: "/images/showcase/demo-travel.webp", imageAlt: "The Voyanta travel website hero with a view of Marina Bay Sands in Singapore",
    brand: "Voyanta", category: "Luxury travel atelier", headline: "Curated journeys.\nAcross Singapore and beyond.",
    websiteDescription: "Handcrafted itineraries, private limousines and five-star stays, curated by our Singapore atelier.", action: "Explore journeys", navigation: ["Destinations", "Itineraries", "Stays"],
    accent: "#1d3a2f", background: "#13241d", websiteInk: "#22302a",
    greeting: "Welcome to Voyanta! Ask me about destinations, itineraries or private journeys.",
    questions: [
      { question: "What destinations do you cover?", answer: "Our sample archive spans 50 Singapore precincts and islands — Marina Bay, Sentosa Cove, Katong, Pulau Ubin and more. Where would you like to go?", keywords: ["destination", "place", "cover", "island", "precinct", "where"] },
      { question: "How much is a 5-day journey?", answer: "In this demo, curated journeys range from S$825 to S$1,625 per person, all-inclusive with stays and private transfers.", keywords: ["price", "cost", "much", "package", "journey", "day"] },
      { question: "Can you build a custom itinerary?", answer: "Absolutely. A real curator would draft a day-by-day plan within 4 business hours. This sample preview won't send a real request.", keywords: ["itinerary", "custom", "plan", "build", "bespoke", "trip"] },
    ],
  },
  {
    id: "healthcare", label: "Healthcare", title: "Vitalis Health", icon: HeartPulse,
    description: "20 clinics, 80 specialists and 30 insurance panels — ask about screenings, doctors and instant appointments.",
    href: process.env.NEXT_PUBLIC_HEALTHCARE_DEMO_URL || "https://clinic-and-healthcare.vercel.app/",
    image: "/images/showcase/demo-healthcare.webp", imageAlt: "The Vitalis Health website hero with its service shortcuts and search bar",
    brand: "Vitalis Health", category: "Medical network", headline: "How can we help\nyou today?",
    websiteDescription: "Preventive and interceptive healthcare across 20 Singapore sanctuaries, from screenings to specialist care.", action: "Book appointment", navigation: ["Doctors", "Services", "Appointments", "Locations"],
    accent: "#0f766e", background: "#faf7f2", websiteInk: "#1e3a3a",
    greeting: "Welcome to Vitalis Health! Ask me about services, doctors, appointments or insurance.",
    questions: [
      { question: "What services do you offer?", answer: "Our sample network covers health screenings, specialist care across 25 disciplines and 24/7 teleconsultation. What are you looking for?", keywords: ["service", "offer", "screening", "specialty", "treatment", "doctor"] },
      { question: "How do I book an appointment?", answer: "Pick a clinic, choose a specialist and select a slot — instant confirmation in about 30 seconds. This preview won't create a real booking.", keywords: ["book", "appointment", "slot", "schedule", "clinic"] },
      { question: "Is my insurance accepted?", answer: "In this demo, 30 panels are accredited — AIA, Great Eastern, Prudential, CHAS and more — with direct cashless billing.", keywords: ["insurance", "panel", "cover", "claim", "cashless"] },
    ],
  },
] as const;