import Link from "next/link";

export default function PrivacyPolicy() {
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
              Legal & Privacy
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 30, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 leading-7 text-slate-600">

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                1. Introduction
              </h2>

              <p className="mt-4">
                Welcome to CreditPay. We respect your privacy and are
                committed to protecting information that may be collected
                when you use our website and online calculators.
              </p>

              <p className="mt-4">
                This Privacy Policy explains what information may be
                collected, how it may be used, and the choices available
                to you when using our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                2. Information We Collect
              </h2>

              <p className="mt-4">
                Our calculators are designed to work directly in your
                browser. Information entered into a calculator may be
                processed locally in your browser to generate results.
              </p>

              <p className="mt-4">
                We do not require you to create an account to use our
                basic calculator tools.
              </p>

              <p className="mt-4">
                We may receive limited technical information automatically,
                such as browser type, device type, approximate location,
                referring pages, and general website usage information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                3. How We Use Information
              </h2>

              <p className="mt-4">
                Information may be used to operate, maintain, improve,
                secure, and understand the performance of our website.
              </p>

              <p className="mt-4">
                We may also use aggregated or non-personally identifiable
                information to understand how visitors interact with our
                website and to improve our content and tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                4. Cookies and Similar Technologies
              </h2>

              <p className="mt-4">
                CreditPay may use cookies and similar technologies for
                website functionality, analytics, security, advertising,
                and other legitimate purposes.
              </p>

              <p className="mt-4">
                You can generally control cookies through your browser
                settings. Disabling certain cookies may affect some
                website features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                5. Advertising
              </h2>

              <p className="mt-4">
                We may display advertisements from third-party advertising
                providers. These providers may use cookies or similar
                technologies to provide, personalize, measure, or improve
                advertising.
              </p>

              <p className="mt-4">
                When advertising services are enabled on this website,
                their respective privacy policies and terms may also apply.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                6. Third-Party Services
              </h2>

              <p className="mt-4">
                Our website may use third-party services for hosting,
                analytics, advertising, security, or other website
                functionality.
              </p>

              <p className="mt-4">
                These services may process information according to their
                own privacy policies and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                7. Data Security
              </h2>

              <p className="mt-4">
                We take reasonable measures to help protect information
                associated with our website. However, no internet
                transmission or electronic storage system can be guaranteed
                to be completely secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                8. Children's Privacy
              </h2>

              <p className="mt-4">
                Our website is not intentionally directed toward children
                under the age required by applicable privacy laws. We do
                not knowingly collect personal information from children
                through our basic calculator tools.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                9. Your Privacy Choices
              </h2>

              <p className="mt-4">
                Depending on your location, you may have rights regarding
                access, correction, deletion, restriction, or other
                processing of your personal information.
              </p>

              <p className="mt-4">
                You may also manage cookies through your browser and,
                where applicable, through available advertising or privacy
                controls.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                10. Changes to This Privacy Policy
              </h2>

              <p className="mt-4">
                We may update this Privacy Policy from time to time to
                reflect changes to our website, services, legal requirements,
                or privacy practices.
              </p>

              <p className="mt-4">
                Any updated version will be posted on this page with a
                revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                11. Contact
              </h2>

              <p className="mt-4">
                If you have questions about this Privacy Policy or our
                privacy practices, please contact us through the contact
                information provided on our website.
              </p>
            </section>

          </div>

          {/* Footer links */}
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