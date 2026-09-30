export const plans = [
  {
    title: "Free",
    price: {
      monthly: "$0",
      annual: "$0",
    },
    subtitle: {
      monthly: "/month",
      annual: "/year",
    },
    features: [
      "20MB Upload limit",
      "1 AI agent",
      "Chat History",
      "500 credits",
      "No organization workspace",
    ],
  },

  {
    title: "Pro",
    price: {
      monthly: "$29.00",
      annual: "$290.00",
    },
    subtitle: {
      monthly: "/month",
      annual: "/year",
    },
    features: [
      "100MB Upload limit",
      "5 AI agents",
      "Detailed Analytics",
      "Chat history",
      "5,000 credits",
      "Add up to 5 team members",
      "1 organization workspace",
    ],
  },

  {
    title: "Business",
    price: {
      monthly: "$99.99",
      annual: "$999.99",
    },
    subtitle: {
      monthly: "/month",
      annual: "/year",
    },
    features: [
      "500MB Upload limit",
      "25 AI agents",
      "Detailed Analytics",
      "Chat history",
      "50,000 credits",
      "Unlimited team members",
      "1 organization workspace",
    ],
  },

  {
    title: "Custom",
    price: {
      monthly: "Let's Talk",
      annual: "Let's Talk",
    },
    subtitle: {
      monthly: "",
      annual: "",
    },
    features: [
      "Custom credit limits",
      "Unlimited AI agents",
      "Unlimited users",
      "White-label solution",
      "Custom integrations",
      "Dedicated manager",
      "SLA & contracts",
    ],
  },
];

export const BILLING_TABS = [
  "Overview",
  // "Your Subscription",
  // "Payment & Billing",
];

export const CYCLE_TABS = ["Monthly", "Annual"];


export interface PlanCardProps {
  title: string;
  price: string;
  subtitle?: string;
  badge?: string;
  features: string[];
  buttonText: string;
  active?: boolean;
  highlighted?: boolean;
  onSelect?: () => void;
}

export interface PlanConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (code: string) => void;
  currentPlan: string;
  newPlan: any;
  isUpgrade: boolean;
}