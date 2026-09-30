"use client";

import Link from "next/link";
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
    setMonths(null);
    setInterest(null);
    setTotalPaid(null);

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
      setError("Please enter valid numbers in all three fields.");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;

    if (
      monthlyRate > 0 &&
      monthlyPayment <= principal * monthlyRate
    ) {
      setError(
        "Your monthly payment is too low to pay off this balance at the current APR. Try a higher monthly payment."
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
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight"
          >
            Credit<span className="text-blue-600">Pay</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a
              href="#calculator"
              className="text-slate-600 hover:text-blue-600"
            >
              Calculator
            </a>

            <a
              href="#how-it-works"
              className="text-slate-600 hover:text-blue-600"
            >
              How It Works
            </a>

            <a
              href="#faq"
              className="text-slate-600 hover:text-blue-600"
            >
              FAQ
            </a>
          </nav>

          <div className="flex overflow-hidden rounded-lg border border-slate-300 bg-white text-sm">
            <a
              href="/en/credit-card-payoff-calculator"
              className="bg-slate-900 px-3 py-2 font-medium text-white"
            >
              English
            </a>

            <a
              href="/es/calculadora-pago-tarjeta-credito"
              className="px-3 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              Español
            </a>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Free Credit Card Debt Calculator
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Credit Card Payoff
            <span className="block text-blue-600">
              Calculator
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Find out how long it may take to pay off your credit card,
            estimate your total interest, and see how your monthly
            payment affects your debt.
          </p>

          <a
            href="#calculator"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Calculate Your Payoff ↓
          </a>

        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" className="-mt-4 px-4 pb-16">
        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">

            <div className="grid lg:grid-cols-2">

              {/* Form */}
              <div className="p-6 sm:p-10">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                    Step 1
                  </p>

                  <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                    Enter your credit card details
                  </h2>

                  <p className="mt-3 leading-7 text-slate-600">
                    Enter your current balance, APR, and the amount
                    you plan to pay every month.
                  </p>
                </div>

                <div className="mt-8 space-y-5">

                  {/* Balance */}
                  <div>
                    <label
                      htmlFor="balance"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Current Credit Card Balance
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        $
                      </span>

                      <input
                        id="balance"
                        type="number"
                        min="0"
                        step="0.01"
                        value={balance}
                        onChange={(e) => setBalance(e.target.value)}
                        placeholder="5,000"
                        className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-9 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* APR */}
                  <div>
                    <label
                      htmlFor="apr"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Annual Interest Rate (APR)
                    </label>

                    <div className="relative">
                      <input
                        id="apr"
                        type="number"
                        min="0"
                        step="0.01"
                        value={apr}
                        onChange={(e) => setApr(e.target.value)}
                        placeholder="24.99"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-12 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />

                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                        %
                      </span>
                    </div>
                  </div>

                  {/* Payment */}
                  <div>
                    <label
                      htmlFor="payment"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Monthly Payment
                    </label>

                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
                        $
                      </span>

                      <input
                        id="payment"
                        type="number"
                        min="0"
                        step="0.01"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}
                        placeholder="200"
                        className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-9 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* Error */}
                  {error && (
                    <div
                      role="alert"
                      className="rounded-xl border border-red-200 bg-red-50 p-4 text-sm leading-6 text-red-700"
                    >
                      ⚠️ {error}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={calculatePayoff}
                    className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700 active:scale-[0.99]"
                  >
                    Calculate Payoff →
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Results are estimates and may differ from your
                    credit card issuer's calculations.
                  </p>

                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-950 p-6 text-white sm:p-10">

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  Your estimated results
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Payoff Summary
                </h2>

                <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">

                  <p className="text-sm text-slate-400">
                    Estimated payoff time
                  </p>

                  <p className="mt-2 text-4xl font-bold sm:text-5xl">
                    {months !== null
                      ? `${months} ${months === 1 ? "month" : "months"}`
                      : "—"}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Based on the balance, APR and monthly payment you entered.
                  </p>

                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <p className="text-sm text-slate-400">
                      Total Interest
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {formatMoney(interest)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <p className="text-sm text-slate-400">
                      Total Amount Paid
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {formatMoney(totalPaid)}
                    </p>
                  </div>

                </div>

                {months !== null && (
                  <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                    <p className="text-sm font-medium text-blue-300">
                      💡 Payment insight
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Increasing your monthly payment may help you
                      pay off the balance sooner and reduce the amount
                      of interest paid over time.
                    </p>
                  </div>
                )}

              </div>

            </div>
          </div>

        </div>
      </section>

      {/* Ad placeholder */}
      <section className="px-4">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-400">
          Advertisement
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-white px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Simple calculation
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              How the Credit Card Payoff Calculator Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              The calculator uses your balance, APR, and monthly
              payment to estimate how long it may take to pay off
              your credit card.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                1
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Enter Your Balance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enter the current amount you owe on your credit card.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                2
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Enter Your APR
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enter the annual percentage rate listed on your
                credit card statement.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                3
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Enter Your Payment
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Enter the amount you expect to pay toward the card
                each month.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* SEO Content */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Understanding Credit Card Payoff
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">

            <p>
              Credit card balances can take longer to pay off when
              interest continues to accumulate each month. Knowing
              your balance, APR, and monthly payment can help you
              understand how your current payment plan affects the
              total cost of your debt.
            </p>

            <p>
              A credit card payoff calculator provides an estimate
              of the number of months required to eliminate a balance
              when you make the same monthly payment and the interest
              rate remains unchanged.
            </p>

            <p>
              Paying more than the minimum payment can generally
              reduce the time needed to pay off a balance. It can also
              reduce the amount of interest that accumulates over the
              repayment period.
            </p>

            <p>
              Actual credit card statements may use daily interest
              calculations, different payment dates, fees, promotional
              APRs, or other terms. For that reason, calculator results
              should be treated as estimates rather than exact issuer
              statements.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-slate-100 px-4 py-20">

        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              FAQ
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                What is a credit card payoff calculator?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                It is a tool that estimates how long it may take to
                pay off a credit card balance based on the balance,
                interest rate, and monthly payment.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                Does paying more each month reduce interest?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Generally, a larger payment can reduce the amount of
                time a balance remains outstanding, which may reduce
                the total interest paid.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                Why does my credit card statement show a different amount?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Credit card issuers may calculate interest using daily
                balances and may include fees, payment timing, or
                promotional rates. This calculator provides an estimate.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                Is this calculator financial advice?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                No. This calculator is provided for educational and
                informational purposes. Consider your own financial
                situation and the terms provided by your card issuer.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-12 text-slate-300">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">

            <div>
              <h3 className="text-lg font-bold text-white">
                Credit<span className="text-blue-400">Pay</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Simple tools to help you understand everyday
                personal finance calculations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Calculator
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="#calculator"
                  className="block hover:text-white"
                >
                  Credit Card Payoff Calculator
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Resources
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="#how-it-works"
                  className="block hover:text-white"
                >
                  How It Works
                </a>

                <a
                  href="#faq"
                  className="block hover:text-white"
                >
                  FAQ
                </a>

                <Link
                  href="/"
                  className="block hover:text-white"
                >
                  Home
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Language
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="/en/credit-card-payoff-calculator"
                  className="block hover:text-white"
                >
                  English
                </a>

                <a
                  href="/es/calculadora-pago-tarjeta-credito"
                  className="block hover:text-white"
                >
                  Español
                </a>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            © 2026 CreditPay. All rights reserved.
          </div>

        </div>

      </footer>

    </main>
  );
}