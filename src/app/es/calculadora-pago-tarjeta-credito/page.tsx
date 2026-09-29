"use client";

import { useState } from "react";

export default function Home() {
  const [balance, setBalance] = useState("");
  const [apr, setApr] = useState("");
  const [payment, setPayment] = useState("");

  const [months, setMonths] = useState<number | null>(null);
  const [interest, setInterest] = useState<number | null>(null);
  const [totalPaid, setTotalPaid] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculatePayoff() {
    setError("");

    const principal = Number(balance);
    const annualRate = Number(apr);
    const monthlyPayment = Number(payment);

    if (
      !Number.isFinite(principal) ||
      !Number.isFinite(annualRate) ||
      !Number.isFinite(monthlyPayment) ||
      principal <= 0 ||
      annualRate < 0 ||
      monthlyPayment <= 0
    ) {
      setError("Por favor, introduce números válidos.");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;

    if (
      monthlyRate > 0 &&
      monthlyPayment <= principal * monthlyRate
    ) {
      setError(
        "Tu pago mensual es demasiado bajo para liquidar este saldo con esta tasa APR."
      );
      return;
    }

    let remaining = principal;
    let totalInterest = 0;
    let numberOfMonths = 0;

    while (remaining > 0 && numberOfMonths < 1200) {
      const monthlyInterest = remaining * monthlyRate;

      const principalPayment = Math.min(
        monthlyPayment - monthlyInterest,
        remaining
      );

      if (principalPayment <= 0) {
        setError(
          "El pago no es suficiente para reducir el saldo."
        );
        return;
      }

      totalInterest += monthlyInterest;
      remaining -= principalPayment;
      numberOfMonths++;
    }

    if (numberOfMonths >= 1200) {
      setError(
        "El período de pago es demasiado largo para calcularlo."
      );
      return;
    }

    setMonths(numberOfMonths);
    setInterest(totalInterest);
    setTotalPaid(principal + totalInterest);
  }

  function formatMoney(value: number | null) {
    if (value === null) return "$0.00";

    return new Intl.NumberFormat("es-MX", {
      style: "currency",
      currency: "USD",
    }).format(value);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12">
      <div className="mx-auto max-w-5xl">

        <header className="mb-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <p className="text-sm font-semibold text-blue-600">
              Calculadora Financiera
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Calculadora de Pago de Tarjeta de Crédito
            </h1>
          </div>

          <div className="flex w-fit overflow-hidden rounded-lg border border-slate-300 bg-white">

            <a
              href="/en/credit-card-payoff-calculator"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              English
            </a>

            <a
              href="/es/calculadora-pago-tarjeta-credito"
              className="bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              Español
            </a>

          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

            <h2 className="text-xl font-semibold text-slate-900">
              Calculadora de Pago
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Descubre cuánto tiempo puede tardar en pagar tu tarjeta de crédito.
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <label
                  htmlFor="balance"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Saldo de la Tarjeta de Crédito
                </label>

                <input
                  id="balance"
                  type="number"
                  min="0"
                  step="0.01"
                  value={balance}
                  onChange={(e) => setBalance(e.target.value)}
                  placeholder="5000"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="apr"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Tasa de Interés Anual (APR)
                </label>

                <input
                  id="apr"
                  type="number"
                  min="0"
                  step="0.01"
                  value={apr}
                  onChange={(e) => setApr(e.target.value)}
                  placeholder="24.99"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="payment"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Pago Mensual
                </label>

                <input
                  id="payment"
                  type="number"
                  min="0"
                  step="0.01"
                  value={payment}
                  onChange={(e) => setPayment(e.target.value)}
                  placeholder="200"
                  className="w-full rounded-lg border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              {error && (
                <div
                  role="alert"
                  className="rounded-lg bg-red-50 p-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              <button
                type="button"
                onClick={calculatePayoff}
                className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
              >
                Calcular Pago
              </button>

            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm text-slate-300">
              Tiempo estimado para pagar
            </p>

            <p className="mt-2 text-4xl font-bold">
              {months !== null
                ? `${months} meses`
                : "— meses"}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">
                  Interés Total
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {formatMoney(interest)}
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">
                  Total Pagado
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {formatMoney(totalPaid)}
                </p>
              </div>

            </div>
          </div>

        </section>

        <section className="mt-12 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">

          <h2 className="text-2xl font-bold text-slate-900">
            Cómo Funciona la Calculadora de Pago de Tarjeta de Crédito
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Introduce el saldo actual de tu tarjeta de crédito, la tasa
            de interés anual y tu pago mensual. La calculadora estima
            cuántos meses necesitas para pagar el saldo y cuánto
            pagarás en intereses.
          </p>

        </section>

      </div>
    </main>
  );
}