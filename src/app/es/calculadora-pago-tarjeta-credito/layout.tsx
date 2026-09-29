import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculadora de Pago de Tarjeta de Crédito",
  description:
    "Usa nuestra calculadora gratuita de pago de tarjetas de crédito para estimar cuánto tiempo tardarás en pagar tu deuda, el interés total y el importe total pagado.",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}