import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">

        <p className="text-sm font-semibold text-blue-600">
          Free Finance Calculator
        </p>

        <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Credit Card Payoff Calculator
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
          Calculate how long it may take to pay off your credit card,
          estimate your total interest, and see how much you will pay.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">

          <Link
            href="/en/credit-card-payoff-calculator"
            className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            English Calculator
          </Link>

          <Link
            href="/es/calculadora-pago-tarjeta-credito"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-800 hover:bg-slate-100"
          >
            Calculadora en Español
          </Link>

        </div>

        <section className="mt-16 grid gap-6 text-left sm:grid-cols-3">

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold text-slate-900">
              Free to Use
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Calculate your estimated credit card payoff without signing up.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold text-slate-900">
              Estimate Interest
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              See an estimate of the total interest you may pay.
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
            <h2 className="font-semibold text-slate-900">
              English & Spanish
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Use the calculator in English or Spanish.
            </p>
          </div>

        </section>

      </div>
    </main>
  );
}