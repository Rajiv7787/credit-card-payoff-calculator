import Link from "next/link";

export default function About() {
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

          <Link
            href="/"
            className="text-sm font-medium text-slate-600 hover:text-blue-600"
          >
            ← Back to Home
          </Link>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            About CreditPay
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Simple Tools for
            <span className="block text-blue-600">
              Everyday Financial Questions
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            CreditPay provides simple online calculators and educational
            resources designed to help people better understand everyday
            personal finance calculations.
          </p>

        </div>
      </section>

      {/* Main Content */}
      <section className="-mt-4 px-4 pb-20">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">

            <div className="space-y-10 leading-7 text-slate-600">

              <section>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  What We Do
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Making financial calculations easier
                </h2>

                <p className="mt-4">
                  Financial questions can sometimes feel complicated.
                  CreditPay was created to make common calculations easier
                  to understand by providing straightforward online tools.
                </p>

                <p className="mt-4">
                  Our calculators are designed to help users explore
                  different scenarios and understand how changes to
                  numbers such as balances, interest rates, and payments
                  can affect estimated results.
                </p>
              </section>

              <section>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Our Approach
                </p>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  Simple, clear, and useful
                </h2>

                <div className="mt-6 grid gap-6 sm:grid-cols-3">

                  <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                    <div className="text-2xl">
                      🎯
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      Simple
                    </h3>

                    <p className="mt-2 text-sm leading-6">
                      We aim to make our tools easy to understand and
                      straightforward to use.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                    <div className="text-2xl">
                      📊
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      Practical
                    </h3>

                    <p className="mt-2 text-sm leading-6">
                      Our tools focus on calculations that people may
                      encounter in everyday financial planning.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200">
                    <div className="text-2xl">
                      🔎
                    </div>

                    <h3 className="mt-4 font-bold text-slate-900">
                      Transparent
                    </h3>

                    <p className="mt-2 text-sm leading-6">
                      We explain that calculator results are estimates
                      and may differ from real-world financial statements.
                    </p>
                  </div>

                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  Our Calculators
                </h2>

                <p className="mt-4">
                  CreditPay currently provides a credit card payoff
                  calculator that estimates payoff time, total interest,
                  and total payments based on information entered by
                  the user.
                </p>

                <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-6">

                  <h3 className="font-bold text-slate-900">
                    Credit Card Payoff Calculator
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Estimate how long it may take to pay off a credit
                    card balance based on your balance, APR, and monthly
                    payment.
                  </p>

                  <Link
                    href="/en/credit-card-payoff-calculator"
                    className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Try the Calculator →
                  </Link>

                </div>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  Important Information
                </h2>

                <p className="mt-4">
                  CreditPay provides general educational information
                  and calculator estimates. Our content is not intended
                  to provide personalized financial, investment, legal,
                  tax, or other professional advice.
                </p>

                <p className="mt-4">
                  Actual financial results can vary based on individual
                  circumstances, account terms, interest calculations,
                  fees, payment timing, and other factors.
                </p>

                <p className="mt-4">
                  Before making an important financial decision, review
                  the terms provided by your financial institution and
                  consider obtaining professional advice when appropriate.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-slate-900">
                  Contact CreditPay
                </h2>

                <p className="mt-4">
                  Have feedback about our calculators or found something
                  that needs improvement? We welcome feedback from our
                  visitors.
                </p>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 transition hover:bg-slate-100"
                >
                  Contact Us
                </Link>
              </section>

            </div>

            {/* Footer Links */}
            <div className="mt-12 border-t border-slate-200 pt-8 text-sm">

              <div className="flex flex-wrap gap-x-6 gap-y-3">

                <Link
                  href="/"
                  className="text-blue-600 hover:underline"
                >
                  Home
                </Link>

                <Link
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/terms"
                  className="text-blue-600 hover:underline"
                >
                  Terms & Conditions
                </Link>

                <Link
                  href="/disclaimer"
                  className="text-blue-600 hover:underline"
                >
                  Disclaimer
                </Link>

                <Link
                  href="/contact"
                  className="text-blue-600 hover:underline"
                >
                  Contact
                </Link>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950 px-4 py-10 text-center text-sm text-slate-500">
        <p>
          © 2026 CreditPay. All rights reserved.
        </p>
      </footer>

    </main>
  );
}