import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/portfolio";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} | ${profile.title}`;
const description =
  "Portfolio of Jayson Soriano Emeterio, a Full Stack Developer in Marilao, Bulacan, Philippines, building internal business systems, database-driven applications and system integrations.";

export const metadata: Metadata = {
  ...(profile.siteUrl
    ? {
        metadataBase: new URL(profile.siteUrl),
        alternates: { canonical: "/" },
      }
    : {}),
  title,
  description,
  applicationName: `${profile.shortName} Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    "Jayson Emeterio",
    "Full Stack Developer",
    "PHP",
    "Laravel",
    "MySQL",
    "PostgreSQL",
    "Microsoft SQL Server",
    "Philippines",
  ],
  openGraph: {
    type: "profile",
    title,
    description,
    siteName: `${profile.shortName} Portfolio`,
    locale: "en_PH",
    firstName: "Jayson",
    lastName: "Emeterio",
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen">
        <a
          href="#main"
          className="sr-only rounded-md bg-accent px-4 py-2 font-medium text-on-accent focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-100"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
