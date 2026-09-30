import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Header */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">

          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-slate-900"
          >
            Credit<span className="text-blue-600">Pay</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/en/credit-card-payoff-calculator"
              className="text-slate-600 hover:text-blue-600"
            >
              Calculator
            </Link>

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
              href="/"
              className="bg-slate-900 px-3 py-2 font-medium text-white"
            >
              English
            </a>

            <a
              href="/es/"
              className="px-3 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              Español
            </a>
          </div>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Free Personal Finance Calculator
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-6xl">
            Take Control of Your
            <span className="block text-blue-600">
              Credit Card Debt
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Find out how long it may take to pay off your credit card,
            how much interest you could pay, and how your monthly payment
            affects your debt.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

            <Link
              href="/en/credit-card-payoff-calculator"
              className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
            >
              Calculate Your Payoff →
            </Link>

            <a
              href="#how-it-works"
              className="rounded-xl border border-slate-300 bg-white px-7 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-100"
            >
              Learn How It Works
            </a>

          </div>

        </div>
      </section>

      {/* Calculator Preview */}
      <section className="-mt-6 px-4">
        <div className="mx-auto max-w-5xl">

          <div className="rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-200 sm:p-10">

            <div className="grid gap-8 md:grid-cols-2 md:items-center">

              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Credit Card Payoff Calculator
                </p>

                <h2 className="mt-2 text-2xl font-bold sm:text-3xl">
                  See your debt payoff timeline
                </h2>

                <p className="mt-4 leading-7 text-slate-600">
                  Enter your balance, APR, and monthly payment to estimate
                  your payoff time and total interest.
                </p>

                <Link
                  href="/en/credit-card-payoff-calculator"
                  className="mt-6 inline-flex rounded-lg bg-slate-900 px-5 py-3 font-semibold text-white hover:bg-slate-800"
                >
                  Open Calculator
                </Link>
              </div>

              <div className="rounded-2xl bg-slate-950 p-6 text-white">

                <p className="text-sm text-slate-400">
                  Example calculation
                </p>

                <div className="mt-5 space-y-4">

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Balance</span>
                    <span className="font-semibold">$5,000</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">APR</span>
                    <span className="font-semibold">24.99%</span>
                  </div>

                  <div className="flex justify-between border-b border-white/10 pb-3">
                    <span className="text-slate-400">Monthly Payment</span>
                    <span className="font-semibold">$200</span>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-slate-400">
                      Estimated payoff
                    </p>
                    <p className="mt-1 text-3xl font-bold">
                      See your result
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Benefits */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Simple & Useful
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Understand your credit card debt
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-600">
              Get a clear estimate before deciding how much you want
              to pay toward your credit card balance.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">📊</div>
              <h3 className="mt-5 text-xl font-bold">
                Estimate Payoff Time
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                See approximately how many months it could take to
                eliminate your credit card balance.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">💰</div>
              <h3 className="mt-5 text-xl font-bold">
                Understand Interest
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Estimate how much interest you may pay over the life
                of your payoff plan.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
              <div className="text-3xl">🎯</div>
              <h3 className="mt-5 text-xl font-bold">
                Plan Your Payments
              </h3>
              <p className="mt-3 leading-7 text-slate-600">
                Experiment with different monthly payments to understand
                how they can affect your payoff timeline.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="border-y border-slate-200 bg-white px-4 py-20"
      >
        <div className="mx-auto max-w-5xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              How the Credit Card Payoff Calculator Works
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              The calculator uses your balance, annual percentage rate,
              and monthly payment to estimate your payoff timeline and
              total interest.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                1
              </div>
              <h3 className="mt-4 font-bold">
                Enter Your Balance
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enter your current credit card balance.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                2
              </div>
              <h3 className="mt-4 font-bold">
                Enter Your APR
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enter the annual percentage rate shown on your card statement.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                3
              </div>
              <h3 className="mt-4 font-bold">
                Enter Your Payment
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Enter the amount you plan to pay each month.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            <details className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                What is a credit card payoff calculator?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                A credit card payoff calculator estimates how long it
                may take to pay off a balance based on your APR and
                monthly payment.
              </p>
            </details>

            <details className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                Does paying more each month reduce interest?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                Generally, paying more toward your principal can reduce
                the amount of time you carry the balance and may reduce
                the total interest paid.
              </p>
            </details>

            <details className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                Is this calculator financial advice?
              </summary>
              <p className="mt-3 leading-7 text-slate-600">
                No. The results are estimates for educational purposes
                and may differ from the calculations used by your
                credit card issuer.
              </p>
            </details>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-950 px-4 py-12 text-slate-300">

        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">

            <div>
              <h3 className="text-lg font-bold text-white">
                Credit<span className="text-blue-400">Pay</span>
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Simple tools to help you understand everyday personal
                finance calculations.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Tools
              </h4>
              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/en/credit-card-payoff-calculator"
                  className="block hover:text-white"
                >
                  Credit Card Payoff Calculator
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Resources
              </h4>
              <div className="mt-3 space-y-2 text-sm">
                <a href="#how-it-works" className="block hover:text-white">
                  How It Works
                </a>
                <a href="#faq" className="block hover:text-white">
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white">
                Language
              </h4>
              <div className="mt-3 space-y-2 text-sm">
                <Link href="/" className="block hover:text-white">
                  English
                </Link>
                <Link href="/es/" className="block hover:text-white">
                  Español
                </Link>
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