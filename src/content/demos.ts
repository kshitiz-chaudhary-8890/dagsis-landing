import { Building2, Scissors, ShoppingBag, UtensilsCrossed } from "lucide-react";

export const demoShowcase = {
  eyebrow: "Interactive product showcase",
  title: "Don't Just Read About It. Try It.",
  description: "Explore demo website previews with a Dagsis chatbot, and see a customer conversation in action.",
  instruction: "Pick an industry below, open the demo site and start a conversation. Ask about products, prices, bookings or policies and see how the agent responds.",
  cta: "Try This Demo",
  closing: "Want this for your own business?",
};

export const industryDemos = [
  {
    id: "restaurant", label: "Restaurant", title: "Restaurant Demo", icon: UtensilsCrossed,
    description: "Ask about the menu, dietary options, opening hours and reservations.",
    href: process.env.NEXT_PUBLIC_RESTAURANT_DEMO_URL || "/demo/restaurant",
    image: "/images/showcase/demo-restaurant.webp", imageAlt: "A restaurant dining room with wooden tables and warm lighting",
    brand: "The Table", category: "Restaurant & bar", headline: "Come for dinner.\nStay a little longer.",
    websiteDescription: "Browse our seasonal menu, find your favourite table and plan your next visit.", action: "View our menu", navigation: ["Menu", "Reservations", "Contact"],
    accent: "#75452c", background: "#faf7f1", websiteInk: "#28221b",
    greeting: "Welcome to The Table! Ask me about our menu, dietary options or reservations.",
    questions: [
      { question: "Do you have vegetarian options?", answer: "Yes! Our sample menu includes a roasted vegetable bowl and mushroom pasta. Tell us about any dietary requirements when you book.", keywords: ["vegetarian", "vegan", "diet", "menu", "food"] },
      { question: "What time do you close?", answer: "In this demo, we're open Tuesday to Sunday, 12pm–10pm. Our kitchen takes its last orders at 9:30pm.", keywords: ["open", "close", "time", "hours", "sunday"] },
      { question: "Can I reserve a table?", answer: "Of course. How many guests will be joining you, and which date and time do you have in mind? This preview won't make a real booking.", keywords: ["reserve", "reservation", "book", "table"] },
    ],
  },
  {
    id: "retail", label: "Retail store", title: "Retail Store Demo", icon: ShoppingBag,
    description: "Ask about products, delivery, returns and promotions.",
    href: process.env.NEXT_PUBLIC_RETAIL_DEMO_URL || "/demo/retail",
    image: "/images/showcase/demo-retail.webp", imageAlt: "A clothing boutique with curated racks and shelves",
    brand: "Everyday Store", category: "Spring collection", headline: "New arrivals.\nEveryday essentials.",
    websiteDescription: "Discover the latest collection. Shop clothing, accessories and everyday staples.", action: "Shop new arrivals", navigation: ["Shop", "New in", "Delivery & returns"],
    accent: "#284e3e", background: "#f6f7f4", websiteInk: "#202923",
    greeting: "Hi from Everyday Store! I can help with products, delivery and returns.",
    questions: [
      { question: "How long does delivery take?", answer: "For this sample store, standard delivery takes 2–4 working days. You'll receive a tracking link when your order is dispatched.", keywords: ["deliver", "shipping", "ship", "long", "track"] },
      { question: "What's your return policy?", answer: "Our sample policy allows returns within 14 days, with items unused and in their original packaging. Sale items are excluded.", keywords: ["return", "refund", "policy", "exchange"] },
      { question: "Any promotions running?", answer: "This demo includes a sample welcome offer: 10% off your first order with HELLO10. It isn't a real redeemable promotion.", keywords: ["promo", "discount", "offer", "sale", "product"] },
    ],
  },
  {
    id: "salon", label: "Clinic / salon", title: "Clinic or Salon Demo", icon: Scissors,
    description: "Ask about services, pricing and appointment slots.",
    href: process.env.NEXT_PUBLIC_SALON_DEMO_URL || "/demo/salon",
    image: "/images/showcase/demo-salon.webp", imageAlt: "A bright salon with styling chairs and large mirrors",
    brand: "Studio & You", category: "Hair & beauty studio", headline: "Your style.\nOur expertise.",
    websiteDescription: "Cuts, colour and treatments tailored to you. Explore our services or find an appointment.", action: "View services & prices", navigation: ["Services", "The team", "Book a visit"],
    accent: "#623e51", background: "#fbf8f6", websiteInk: "#292524",
    greeting: "Welcome to Studio & You! Ask me about our services, prices or appointment times.",
    questions: [
      { question: "What services do you offer?", answer: "Our sample salon offers haircuts, colour, styling and conditioning treatments. Which service are you interested in?", keywords: ["service", "offer", "hair", "colour", "treatment"] },
      { question: "How much is a haircut?", answer: "In this preview, a haircut starts at S$45 and includes a consultation, wash and finish. Prices are illustrative.", keywords: ["price", "cost", "much", "haircut"] },
      { question: "Any appointments this week?", answer: "Our sample calendar has slots on Thursday at 2pm and Saturday at 11am. This preview won't create a real appointment.", keywords: ["appoint", "book", "slot", "week", "available"] },
    ],
  },
  {
    id: "property", label: "Property / education", title: "Property or Education Demo", icon: Building2,
    description: "Ask about listings or courses, and see it capture your details as a lead.",
    href: process.env.NEXT_PUBLIC_PROPERTY_DEMO_URL || "/demo/property",
    image: "/images/showcase/demo-property.webp", imageAlt: "A contemporary house with large windows and a landscaped garden",
    brand: "Habitat Homes", category: "Featured property", headline: "Space to live.\nRoom to grow.",
    websiteDescription: "Explore our featured three-bedroom home, with a private garden and open-plan living.", action: "View this property", navigation: ["Buy", "Rent", "Contact an agent"],
    accent: "#1e3945", background: "#f6f7f7", websiteInk: "#23313a",
    greeting: "Hi from Habitat Homes! I can help you explore listings or arrange a sample viewing.",
    questions: [
      { question: "Any three-bedroom homes?", answer: "Our sample listing is a three-bedroom home with a private garden and spacious living area. Are you looking to buy or rent?", keywords: ["bedroom", "home", "list", "property", "house", "rent"] },
      { question: "Can I arrange a viewing?", answer: "Sure. A real agent would ask for your name, email and preferred time here. Please don't enter personal details in this sample preview.", keywords: ["view", "visit", "arrange", "book", "detail"] },
      { question: "Tell me about the neighbourhood", answer: "In this demo, the home is in a quiet residential area close to parks, shops and public transport. The listing and location are illustrative.", keywords: ["neighbour", "location", "area", "transport", "school"] },
    ],
  },
] as const;