import Link from "next/link";

export default function Disclaimer() {
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

      {/* Content */}
      <section className="px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">

          <div className="border-b border-slate-200 pb-8">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Important Information
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Disclaimer
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 30, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 leading-7 text-slate-600">

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                General Information
              </h2>

              <p className="mt-4">
                The information and calculators provided by CreditPay
                are intended for general educational and informational
                purposes only.
              </p>

              <p className="mt-4">
                While we make reasonable efforts to provide useful and
                understandable information, we do not guarantee that
                all information or calculations are complete, accurate,
                current, or suitable for your individual circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Not Financial Advice
              </h2>

              <p className="mt-4">
                Nothing on this website constitutes financial, investment,
                legal, tax, credit, accounting, or other professional advice.
              </p>

              <p className="mt-4">
                CreditPay does not know your complete financial situation
                and cannot determine what financial decisions are appropriate
                for you.
              </p>

              <p className="mt-4">
                Consider consulting a qualified professional when you need
                advice based on your individual circumstances.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Calculator Estimates
              </h2>

              <p className="mt-4">
                Calculator results are estimates based on the information
                entered by the user and the assumptions used by the
                calculator.
              </p>

              <p className="mt-4">
                Actual credit card costs and repayment periods may differ
                because card issuers may use daily interest calculations,
                different payment dates, fees, minimum payment rules,
                promotional rates, or other account-specific terms.
              </p>

              <p className="mt-4">
                Always check the terms and information provided by your
                credit card issuer before making financial decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                No Guarantee of Results
              </h2>

              <p className="mt-4">
                CreditPay does not guarantee any particular financial
                outcome from using our calculators, information, or
                educational resources.
              </p>

              <p className="mt-4">
                Your results may vary depending on your financial
                circumstances, account terms, payment behavior, interest
                rates, fees, and other factors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Third-Party Information and Links
              </h2>

              <p className="mt-4">
                Our website may contain links to third-party websites,
                services, or resources.
              </p>

              <p className="mt-4">
                These links are provided for convenience and informational
                purposes. CreditPay does not control or guarantee the
                accuracy, availability, security, or privacy practices of
                third-party websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Advertising
              </h2>

              <p className="mt-4">
                CreditPay may display advertisements provided by
                third-party advertising networks.
              </p>

              <p className="mt-4">
                The presence of an advertisement does not constitute an
                endorsement or recommendation of the advertised product
                or service by CreditPay.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Limitation of Liability
              </h2>

              <p className="mt-4">
                To the extent permitted by applicable law, CreditPay and
                its operators are not responsible for losses, damages,
                or consequences resulting from reliance on information,
                calculations, or other content provided through this website.
              </p>

              <p className="mt-4">
                Users are responsible for independently verifying important
                information before making financial or other decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                Changes to This Disclaimer
              </h2>

              <p className="mt-4">
                We may update this Disclaimer from time to time to reflect
                changes to our website, services, or applicable requirements.
              </p>

              <p className="mt-4">
                Any updated version will be posted on this page with a
                revised "Last updated" date.
              </p>
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
                href="/en/credit-card-payoff-calculator"
                className="text-blue-600 hover:underline"
              >
                Calculator
              </Link>

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