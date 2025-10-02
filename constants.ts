
export const DOMAINS: string[] = ['shield-box.com', 'temp-inbox.org', 'secure-drop.net'];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "How to Protect Your Identity Online in 2025",
    excerpt: "A comprehensive guide to digital privacy, from using temporary emails to securing your social media accounts. Learn actionable steps to keep your personal information safe from prying eyes.",
    category: "Online Privacy Guides",
    date: "2023-10-26",
  },
  {
    id: 2,
    title: "Why Every Developer Needs a Disposable Email Address",
    excerpt: "Developers constantly sign up for APIs, forums, and new tools. Discover how a disposable email can streamline your workflow, prevent spam, and secure your development environments.",
    category: "Cybersecurity Tips",
    date: "2023-10-22",
  },
  {
    id: 3,
    title: "ShieldMail Pro Feature: A Deep Dive into Custom Domains",
    excerpt: "Go beyond the basics with ShieldMail Pro. This article explores the power of custom usernames on exclusive domains and how they can enhance your professional and personal projects.",
    category: "Product Updates & Tutorials",
    date: "2023-10-18",
  },
  {
    id: 4,
    title: "The Ultimate Checklist for Avoiding Phishing Scams",
    excerpt: "Phishing attacks are more sophisticated than ever. Our checklist provides a clear, step-by-step guide to identifying and avoiding these malicious attempts to steal your data.",
    category: "Cybersecurity Tips",
    date: "2023-10-15",
  },
  {
    id: 5,
    title: "Privacy for Journalists: How Temporary Emails Can Protect Your Sources",
    excerpt: "For journalists, protecting sources is paramount. Learn how using services like ShieldMail can add a crucial layer of anonymity and security to your communications.",
    category: "Online Privacy Guides",
    date: "2023-10-11",
  },
];

export const FAQ_DATA = [
    {
        question: "What is the difference between the Free and Pro tiers?",
        answer: "Our Free tier is ad-supported and provides all the essentials for temporary email: instant generation, a 60-minute lifespan, and standard domains. ShieldMail Pro is a premium subscription that offers an ad-free experience, custom usernames, exclusive domains, extended 30-day lifespan, multiple inboxes, and priority support."
    },
    {
        question: "How long do my free emails last?",
        answer: "By default, a free email address is active for 60 minutes. You can use the 'Extend' button for a small, one-time extension. For longer needs, consider ShieldMail Pro, which allows inboxes to be active for up to 30 days."
    },
    {
        question: "Is my privacy protected on the free tier?",
        answer: "Absolutely. Both Free and Pro users benefit from our core privacy commitment. We don't require personal info for the free service, and all email contents are permanently deleted after the inbox expires."
    },
    {
        question: "What are premium domains?",
        answer: "Premium domains are exclusive to ShieldMail Pro subscribers. They are a curated list of domains that are less common and therefore less likely to be blocked by services, providing higher deliverability and uniqueness."
    },
    {
        question: "How do I get a custom username?",
        answer: "Custom usernames (e.g., 'my-project'@shield-pro.net) are a key feature of ShieldMail Pro. After subscribing, you'll gain access to our premium dashboard where you can create addresses with your chosen username on our exclusive domains."
    }
];

export const PRICING_DATA = {
  free: {
    name: 'Free',
    price: '$0',
    period: 'Forever',
    description: 'All the essentials to protect your privacy, supported by ads.',
    features: [
      'Instant Email Generation',
      '60-Minute Email Lifespan',
      'Standard Domain Pool',
      'Session Password Protection',
      'Ad-Supported',
    ],
    cta: 'Get Started',
  },
  pro: {
    name: 'ShieldMail Pro',
    price: '$10',
    period: '/ month',
    description: 'The ultimate toolkit for power users, developers, and privacy advocates.',
    features: [
      'Everything in Free, plus:',
      'Ad-Free Experience',
      'Custom Usernames',
      'Exclusive Premium Domains',
      'Up to 30-Day Lifespan',
      'Manage up to 10 Inboxes',
      'Increased Storage & Attachments',
      'Priority Support',
    ],
    cta: 'Go Pro',
  },
};
