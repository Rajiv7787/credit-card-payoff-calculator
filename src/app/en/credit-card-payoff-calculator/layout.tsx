import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Credit Card Payoff Calculator",
  description:
    "Use our free credit card payoff calculator to estimate how long it will take to pay off your credit card, total interest, and total amount paid.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}