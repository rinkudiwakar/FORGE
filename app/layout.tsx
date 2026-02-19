import type { Metadata } from "next";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "FORGE 1.0 | Product Buildathon by SEED NITJ",
  description: "Join FORGE 1.0, the premier product buildathon by SEED NITJ. Simulate startup reality, build working MVPs, and solve real-world problems. Register now!",
  keywords: "FORGE 1.0, Buildathon, Hackathon, SEED NITJ, Startup Simulation, MVP, Engineering, NIT Jalandhar, Backend Development",
  authors: [{ name: "SEED NITJ" }],
  openGraph: {
    type: "website",
    url: "https://forge.seednitj.com/",
    title: "FORGE 1.0 | Product Buildathon by SEED NITJ",
    description: "Simulate startup reality. Build functional MVPs. Solve real problems. Join FORGE 1.0 by SEED NITJ.",
    siteName: "FORGE 1.0",
    images: [{
      url: "/assets/forge 1.0 with bg.jpeg",
      width: 1200,
      height: 630,
      alt: "FORGE 1.0 Banner",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "FORGE 1.0 | Product Buildathon by SEED NITJ",
    description: "Simulate startup reality. Build functional MVPs. Solve real problems. Join FORGE 1.0 by SEED NITJ.",
    images: ["/assets/forge 1.0 with bg.jpeg"],
  },
  icons: {
    icon: "/assets/forge 1.0 with black bg.jpeg",
    shortcut: "/assets/forge 1.0 with black bg.jpeg",
    apple: "/assets/forge 1.0 with black bg.jpeg",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className="antialiased bg-brand-dark text-gray-300">
        <ScrollReveal />
        {children}
      </body>
    </html >
  );
}
