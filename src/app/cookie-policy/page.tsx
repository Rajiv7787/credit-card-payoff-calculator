import Link from "next/link";

export default function CookiePolicy() {
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
              Privacy & Cookies
            </p>

            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Cookie Policy
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last updated: September 30, 2026
            </p>
          </div>

          <div className="mt-10 space-y-10 leading-7 text-slate-600">

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                1. What Are Cookies?
              </h2>

              <p className="mt-4">
                Cookies are small text files that websites may store on
                your device when you visit a website. They can help
                websites remember information, understand how visitors
                use the site, and provide certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                2. How CreditPay May Use Cookies
              </h2>

              <p className="mt-4">
                CreditPay may use cookies and similar technologies for
                several purposes, including website functionality,
                security, analytics, performance measurement, and
                advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                3. Essential Cookies
              </h2>

              <p className="mt-4">
                Some cookies or similar technologies may be necessary
                for the website to function properly, maintain security,
                or provide features requested by visitors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                4. Analytics
              </h2>

              <p className="mt-4">
                We may use analytics services to understand general
                website usage, such as which pages are visited, how
                visitors navigate the site, and how website performance
                can be improved.
              </p>

              <p className="mt-4">
                Analytics information may be collected in an aggregated
                or otherwise privacy-protected form depending on the
                service used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                5. Advertising Cookies
              </h2>

              <p className="mt-4">
                CreditPay may use third-party advertising services to
                display advertisements. These services may use cookies
                or similar technologies to provide, personalize,
                measure, or improve advertising.
              </p>

              <p className="mt-4">
                Advertising providers may process information according
                to their own privacy policies and applicable requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                6. Managing Cookies
              </h2>

              <p className="mt-4">
                Most modern web browsers allow you to control or delete
                cookies through browser settings.
              </p>

              <p className="mt-4">
                You can usually choose to block cookies, delete existing
                cookies, or receive a notification before cookies are
                stored. However, disabling certain cookies may affect
                some website functionality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                7. Third-Party Services
              </h2>

              <p className="mt-4">
                Some third-party services used on the website may place
                their own cookies or similar technologies on your device.
              </p>

              <p className="mt-4">
                Their use of cookies is governed by their respective
                policies and terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                8. Changes to This Cookie Policy
              </h2>

              <p className="mt-4">
                We may update this Cookie Policy when our website,
                services, advertising technology, or applicable
                requirements change.
              </p>

              <p className="mt-4">
                Any updated version will be posted on this page with
                a revised "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-900">
                9. Contact Us
              </h2>

              <p className="mt-4">
                If you have questions about how cookies are used on
                CreditPay, you can contact us through our contact page.
              </p>

              <Link
                href="/contact"
                className="mt-5 inline-flex rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Contact Us →
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
                href="/about"
                className="text-blue-600 hover:underline"
              >
                About
              </Link>

              <Link
                href="/contact"
                className="text-blue-600 hover:underline"
              >
                Contact
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