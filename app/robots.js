export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        crawlDelay: 1,
      },
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      {
        userAgent: "ChatGPT-User",
        allow: "/",
      },
      {
        userAgent: "CCBot",
        allow: "/",
      },
      {
        userAgent: "anthropic-ai",
        allow: "/",
      },
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
    ],
    sitemap: "https://gk-solutions.vercel.app/sitemap.xml",
  };
}
