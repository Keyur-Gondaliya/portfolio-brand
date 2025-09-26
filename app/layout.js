import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://gk-solutions.vercel.app"),
  title: {
    default:
      "Keyur Gondaliya - AI Engineer | RAG Systems | LangChain Expert | Full-Stack Developer",
    template: "%s | Keyur Gondaliya - AI Engineer",
  },
  description:
    "Keyur Gondaliya specializes in production-ready AI systems, RAG implementations, LangChain/LangGraph agents, and full-stack development. Expert in scaling AI solutions for enterprise applications with 99.9% uptime.",
  keywords: [
    "AI Engineer",
    "RAG Systems",
    "LangChain Expert",
    "LangGraph",
    "AI Agents",
    "Full Stack Developer",
    "Production AI",
    "Enterprise AI",
    "Machine Learning Engineer",
    "Meta AI Advertising",
    "Conversational AI",
    "Vector Databases",
    "AI Automation",
    "Business AI Solutions",
  ],
  authors: [
    { name: "Keyur Gondaliya", url: "https://gk-solutions.vercel.app" },
  ],
  creator: "Keyur Gondaliya",
  publisher: "Keyur Gondaliya",
  alternates: {
    canonical: "https://gk-solutions.vercel.app",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://gk-solutions.vercel.app",
    title: "Keyur Gondaliya - AI Engineer & Full-Stack Developer",
    description:
      "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions. Building the future with AI, one system at a time.",
    siteName: "Keyur Gondaliya Portfolio",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Keyur Gondaliya - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyur Gondaliya - AI Engineer & Full-Stack Developer",
    description:
      "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "", // Add your Google Search Console verification code
    yandex: "",
    yahoo: "",
  },
  category: "Technology",
  classification: "AI Engineer Portfolio",
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Keyur Gondaliya",
    alternateName: ["KG", "Keyur G"],
    jobTitle: "AI Engineer & Full-Stack Developer",
    description:
      "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions",
    url: "https://gk-solutions.vercel.app",
    image: "https://gk-solutions.vercel.app/profile-image.jpg", // Add your profile image
    sameAs: [
      "https://github.com/Keyur-Gondaliya",
      "https://gkcodes.wordpress.com",
      "https://linkedin.com/in/keyur-gondaliya", // Add if you have LinkedIn
    ],
    knowsAbout: [
      "Artificial Intelligence",
      "RAG Systems",
      "LangChain",
      "LangGraph",
      "Full Stack Development",
      "AI Agents",
      "Machine Learning",
      "Production AI Systems",
      "Meta AI Advertising",
      "Enterprise AI Solutions",
      "Vector Databases",
      "AI Automation",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "AI Engineer",
      occupationLocation: {
        "@type": "Place",
        name: "Remote/Global",
      },
      skills: [
        "AI Development",
        "RAG Systems",
        "LangChain",
        "LangGraph",
        "Full Stack Development",
        "Meta AI Integration",
        "Production AI Deployment",
      ],
    },
    worksFor: {
      "@type": "Organization",
      name: "Independent AI Consultant",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Computer Science", // Add your actual education
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is RAG and how can it help my business?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RAG (Retrieval-Augmented Generation) combines AI with your business data to provide accurate, contextual responses. It can improve customer service, automate documentation, and enhance decision-making by 30-50%. I build RAG systems that work with your existing data sources and scale to enterprise requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How do you ensure AI systems work in production?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I implement production-ready AI with proper error handling, monitoring, scaling strategies, and performance optimization. My systems handle enterprise-level traffic with 99.9% uptime. I use containerization, load balancing, and comprehensive testing to ensure reliability.",
        },
      },
      {
        "@type": "Question",
        name: "What industries do you work with for AI solutions?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "I've delivered AI solutions for real estate, fintech, e-commerce, restaurant management, healthcare, and industrial sectors. Each solution is tailored to specific industry needs and compliance requirements. My cross-industry experience helps identify unique opportunities for AI implementation.",
        },
      },
      {
        "@type": "Question",
        name: "What's the difference between LangChain and LangGraph for business applications?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "LangChain is excellent for linear AI workflows and rapid prototyping, while LangGraph handles complex, multi-step business processes with conditional logic and parallel execution. I choose the right framework based on your specific use case and scalability requirements.",
        },
      },
      {
        "@type": "Question",
        name: "How can AI improve Meta advertising performance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "AI can optimize Meta ads through automated bid management, audience targeting, creative testing, and conversion prediction. I build systems that integrate with Meta's Conversions API for privacy-compliant tracking and typically achieve 20-35% improvement in ROAS.",
        },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "Website",
    name: "Keyur Gondaliya - AI Engineer Portfolio",
    url: "https://gk-solutions.vercel.app",
    description:
      "Professional portfolio showcasing AI engineering expertise, RAG systems, and full-stack development projects",
    author: {
      "@type": "Person",
      name: "Keyur Gondaliya",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "https://gk-solutions.vercel.app?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keyur Gondaliya AI Solutions",
    url: "https://gk-solutions.vercel.app",
    logo: "https://gk-solutions.vercel.app/logo.png", // Add your logo
    founder: {
      "@type": "Person",
      name: "Keyur Gondaliya",
    },
    description:
      "Specialized AI engineering services focusing on production-ready RAG systems, LangChain implementations, and enterprise AI solutions",
    knowsAbout: [
      "AI Engineering",
      "RAG Systems",
      "LangChain",
      "LangGraph",
      "Enterprise AI",
      "Meta AI Integration",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Enhanced Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {/* Additional Meta Tags for Enhanced SEO */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#333333" />
        <meta name="color-scheme" content="light" />

        {/* Enhanced Mobile Optimization */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />

        {/* Preconnect to External Domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon and App Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        {/* RSS Feed */}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="Keyur Gondaliya - AI Engineering Blog"
          href="/feed.xml"
        />

        {/* Prefetch DNS for Performance */}
        <link rel="dns-prefetch" href="//github.com" />
        <link rel="dns-prefetch" href="//gkcodes.wordpress.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
