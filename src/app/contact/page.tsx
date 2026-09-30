import Link from "next/link";

export default function Contact() {
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
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Get in Touch
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Contact Us
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Have a question, found an issue, or want to share feedback
            about CreditPay? We would be happy to hear from you.
          </p>

        </div>
      </section>

      {/* Contact Content */}
      <section className="-mt-4 px-4 pb-20">
        <div className="mx-auto max-w-5xl">

          <div className="grid gap-6 md:grid-cols-2">

            {/* Email Card */}
            <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                ✉️
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Email Us
              </h2>

              <p className="mt-3 leading-7 text-slate-600">
                For general questions, feedback, technical issues, or
                questions about our website, you can contact us by email.
              </p>

              <a
                href="mailto:contact@creditpay.com"
                className="mt-6 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                contact@creditpay.com
              </a>

            </div>

            {/* Feedback Card */}
            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-sm sm:p-10">

              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-2xl">
                💬
              </div>

              <h2 className="mt-6 text-2xl font-bold">
                Website Feedback
              </h2>

              <p className="mt-3 leading-7 text-slate-300">
                Found a calculation issue, broken link, typo, or another
                problem? Please include as much detail as possible so
                we can understand the issue.
              </p>

              <p className="mt-6 text-sm text-slate-400">
                Please do not send passwords, full credit card numbers,
                bank account information, or other sensitive financial
                information by email.
              </p>

            </div>

          </div>

          {/* Important Notice */}
          <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">

            <h2 className="font-bold text-amber-900">
              Important
            </h2>

            <p className="mt-2 text-sm leading-6 text-amber-800">
              CreditPay provides calculators and educational information.
              We cannot access or manage your credit card account, change
              your account terms, process payments, or provide personalized
              financial advice.
            </p>

          </div>

          {/* FAQ-style information */}
          <div className="mt-12 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 sm:p-10">

            <h2 className="text-2xl font-bold">
              Before Contacting Us
            </h2>

            <div className="mt-6 space-y-5">

              <div>
                <h3 className="font-semibold">
                  Calculator result looks different from my statement
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Credit card issuers may use daily interest calculations,
                  different payment dates, fees, promotional rates, and
                  other account-specific terms. Our calculator provides
                  an estimate.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  I found a technical problem
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Please describe the problem and, if possible, include
                  the page URL and the steps that caused the issue.
                </p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Do you provide financial advice?
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  No. Our calculators and educational content are provided
                  for general informational purposes only.
                </p>
              </div>

            </div>

          </div>

          {/* Footer Links */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">

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