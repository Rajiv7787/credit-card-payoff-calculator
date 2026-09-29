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
      setError("Please enter valid numbers.");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;

    if (
      monthlyRate > 0 &&
      monthlyPayment <= principal * monthlyRate
    ) {
      setError(
        "Your monthly payment is too low to pay off this balance at this APR."
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
        setError("The payment is not enough to reduce the balance.");
        return;
      }

      totalInterest += monthlyInterest;
      remaining -= principalPayment;
      numberOfMonths++;
    }

    if (numberOfMonths >= 1200) {
      setError("The payoff period is too long to calculate.");
      return;
    }

    setMonths(numberOfMonths);
    setInterest(totalInterest);
    setTotalPaid(principal + totalInterest);
  }

  function formatMoney(value: number | null) {
    if (value === null) return "$0.00";

    return new Intl.NumberFormat("en-US", {
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
              Finance Calculator
            </p>

            <h1 className="mt-1 text-3xl font-bold text-slate-900">
              Credit Card Payoff Calculator
            </h1>
          </div>

          <div className="flex w-fit overflow-hidden rounded-lg border border-slate-300 bg-white">
            <a
              href="/en/credit-card-payoff-calculator"
              className="bg-slate-900 px-4 py-2 text-sm font-medium text-white"
            >
              English
            </a>

            <a
              href="/es/calculadora-pago-tarjeta-credito"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              Español
            </a>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-2">

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="text-xl font-semibold text-slate-900">
              Payoff Calculator
            </h2>

            <p className="mt-2 text-sm text-slate-600">
              Find out how long it may take to pay off your credit card.
            </p>

            <div className="mt-6 space-y-5">

              <div>
                <label
                  htmlFor="balance"
                  className="mb-2 block text-sm font-medium text-slate-700"
                >
                  Credit Card Balance
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
                  Annual Interest Rate (APR)
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
                  Monthly Payment
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
                Calculate Payoff
              </button>

            </div>
          </div>

          <div className="rounded-2xl bg-slate-900 p-6 text-white">

            <p className="text-sm text-slate-300">
              Estimated payoff time
            </p>

            <p className="mt-2 text-4xl font-bold">
              {months !== null ? `${months} months` : "— months"}
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">
                  Total Interest
                </p>

                <p className="mt-1 text-xl font-semibold">
                  {formatMoney(interest)}
                </p>
              </div>

              <div className="rounded-xl bg-white/10 p-4">
                <p className="text-sm text-slate-300">
                  Total Paid
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
            How the Credit Card Payoff Calculator Works
          </h2>

          <p className="mt-4 leading-7 text-slate-600">
            Enter your current credit card balance, annual percentage
            rate, and monthly payment. The calculator estimates the
            number of months required to pay off the balance and the
            total interest paid.
          </p>

        </section>

      </div>
    </main>
  );
}