import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://creditcardpayoffcalculator.com"),

  title: {
    default: "Credit Card Payoff Calculator",
    template: "%s | Credit Card Payoff Calculator",
  },

  description:
    "Use our free credit card payoff calculator to estimate how long it will take to pay off your credit card, total interest, and total amount paid.",

  keywords: [
    "credit card payoff calculator",
    "credit card payment calculator",
    "credit card debt calculator",
    "credit card interest calculator",
    "pay off credit card",
  ],

  authors: [{ name: "Credit Card Payoff Calculator" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Credit Card Payoff Calculator",
    description:
      "Calculate how long it may take to pay off your credit card and estimate your total interest.",
    type: "website",
    siteName: "Credit Card Payoff Calculator",
  },

  twitter: {
    card: "summary_large_image",
    title: "Credit Card Payoff Calculator",
    description:
      "Free calculator to estimate your credit card payoff time and total interest.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}