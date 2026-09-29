import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://creditcardpayoffcalculator.com/",
      lastModified: new Date(),
    },
    {
      url: "https://creditcardpayoffcalculator.com/en/credit-card-payoff-calculator",
      lastModified: new Date(),
    },
    {
      url: "https://creditcardpayoffcalculator.com/es/calculadora-pago-tarjeta-credito",
      lastModified: new Date(),
    },
  ];
}