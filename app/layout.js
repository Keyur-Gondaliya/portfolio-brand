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
  title: "Keyur Gondaliya - AI Engineer | RAG Systems | LangChain Expert | Full-Stack Developer",
  description: "Keyur Gondaliya specializes in production-ready AI systems, RAG implementations, LangChain/LangGraph agents, and full-stack development. Expert in scaling AI solutions for enterprise applications.",
  keywords: "AI Engineer, RAG Systems, LangChain, LangGraph, AI Agents, Full Stack Developer, Production AI, Enterprise AI, Machine Learning Engineer",
  author: "Keyur Gondaliya",
  verification: {
    google: "",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Keyur Gondaliya - AI Engineer & Full-Stack Developer",
    description: "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions",
    url: "https://keyur-gondaliya.vercel.app",
    siteName: "Keyur Gondaliya Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Keyur Gondaliya - AI Engineer & Full-Stack Developer",
    description: "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Keyur Gondaliya",
            "jobTitle": "AI Engineer & Full-Stack Developer",
            "description": "Expert in production-ready AI systems, RAG implementations, and enterprise AI solutions",
            "url": "https://keyur-gondaliya.vercel.app",
            "sameAs": [
              "https://github.com/Keyur-Gondaliya",
              "https://gkcodes.wordpress.com"
            ],
            "knowsAbout": [
              "Artificial Intelligence",
              "RAG Systems",
              "LangChain",
              "LangGraph",
              "Full Stack Development",
              "AI Agents",
              "Machine Learning",
              "Production AI Systems"
            ],
            "hasOccupation": {
              "@type": "Occupation",
              "name": "AI Engineer",
              "occupationLocation": "Remote/Global",
              "skills": ["AI Development", "RAG Systems", "LangChain", "Full Stack Development"]
            }
          })
        }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "What is RAG and how can it help my business?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "RAG (Retrieval-Augmented Generation) combines AI with your business data to provide accurate, contextual responses. It can improve customer service, automate documentation, and enhance decision-making by 30-50%."
                }
              },
              {
                "@type": "Question",
                "name": "How do you ensure AI systems work in production?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I implement production-ready AI with proper error handling, monitoring, scaling strategies, and performance optimization. My systems handle enterprise-level traffic with 99.9% uptime."
                }
              },
              {
                "@type": "Question",
                "name": "What industries do you work with for AI solutions?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "I've delivered AI solutions for real estate, fintech, e-commerce, restaurant management, healthcare, and industrial sectors. Each solution is tailored to specific industry needs and compliance requirements."
                }
              }
            ]
          })
        }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
