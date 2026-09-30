import Link from "next/link";

export default function Terms() {
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
              Legal Information
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Terms & Conditions
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 30, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 leading-7 text-slate-600">

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                1. Acceptance of Terms
              </h2>

              <p className="mt-4">
                By accessing or using CreditPay, you agree to these
                Terms & Conditions. If you do not agree with these
                terms, please do not use the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                2. Use of the Website
              </h2>

              <p className="mt-4">
                CreditPay provides online calculators, educational
                information, and related resources for general
                informational purposes.
              </p>

              <p className="mt-4">
                You agree to use the website only for lawful purposes
                and in a way that does not interfere with the operation,
                security, or availability of the website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                3. Calculator Results
              </h2>

              <p className="mt-4">
                Calculator results are estimates based on the information
                entered by the user and the assumptions used by each tool.
              </p>

              <p className="mt-4">
                Actual results may differ because financial institutions
                may use different calculation methods, interest rates,
                payment schedules, fees, promotional offers, or other
                terms.
              </p>

              <p className="mt-4">
                You should verify important financial information with
                your credit card issuer or another appropriate source.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                4. No Financial Advice
              </h2>

              <p className="mt-4">
                Information provided by CreditPay is for general
                educational and informational purposes only.
              </p>

              <p className="mt-4">
                Nothing on this website should be considered financial,
                investment, legal, tax, credit, or professional advice.
              </p>

              <p className="mt-4">
                You are responsible for evaluating your own financial
                circumstances and making your own decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                5. Accuracy of Information
              </h2>

              <p className="mt-4">
                We make reasonable efforts to provide useful and
                understandable information, but we do not guarantee
                that all information is complete, accurate, current,
                or error-free.
              </p>

              <p className="mt-4">
                Information may change over time and should be verified
                when making important decisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                6. Third-Party Services and Links
              </h2>

              <p className="mt-4">
                The website may contain links to third-party websites,
                services, or resources.
              </p>

              <p className="mt-4">
                We are not responsible for the availability, accuracy,
                content, privacy practices, or policies of third-party
                websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                7. Advertising
              </h2>

              <p className="mt-4">
                CreditPay may display advertisements provided by
                third-party advertising networks.
              </p>

              <p className="mt-4">
                Advertisements and third-party services may have their
                own terms, policies, and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                8. Intellectual Property
              </h2>

              <p className="mt-4">
                Unless otherwise stated, website content including
                text, design, graphics, branding, and original materials
                is owned by or licensed to CreditPay.
              </p>

              <p className="mt-4">
                You may not reproduce, copy, modify, distribute, or
                commercially exploit website content without appropriate
                permission, except where permitted by applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                9. Website Availability
              </h2>

              <p className="mt-4">
                We may modify, suspend, discontinue, or restrict access
                to all or part of the website at any time without notice.
              </p>

              <p className="mt-4">
                We do not guarantee that the website will always be
                available, uninterrupted, or free from errors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                10. Limitation of Liability
              </h2>

              <p className="mt-4">
                To the extent permitted by applicable law, CreditPay
                and its operators are not responsible for losses or
                damages arising from your use of, or reliance on,
                information or calculator results provided through
                the website.
              </p>

              <p className="mt-4">
                This includes decisions made based on estimates,
                calculations, educational content, advertisements,
                or third-party information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                11. Changes to These Terms
              </h2>

              <p className="mt-4">
                We may update these Terms & Conditions from time to
                time. Changes become effective when the updated terms
                are posted on this page.
              </p>

              <p className="mt-4">
                Your continued use of the website after changes are
                posted indicates acceptance of the updated terms,
                subject to applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                12. Contact
              </h2>

              <p className="mt-4">
                If you have questions about these Terms & Conditions,
                please contact us through the contact information
                provided on the website.
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