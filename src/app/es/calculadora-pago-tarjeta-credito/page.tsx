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
      setError("Ingresa valores válidos en los tres campos.");
      return;
    }

    const monthlyRate = annualRate / 100 / 12;

    if (
      monthlyRate > 0 &&
      monthlyPayment <= principal * monthlyRate
    ) {
      setError(
        "Tu pago mensual es demasiado bajo para liquidar este saldo con la tasa APR actual. Intenta con un pago mensual mayor."
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
        setError("El pago no es suficiente para reducir el saldo.");
        return;
      }

      totalInterest += monthlyInterest;
      remaining -= principalPayment;
      numberOfMonths++;
    }

    if (numberOfMonths >= 1200) {
      setError("El período de pago es demasiado largo para calcularlo.");
      return;
    }

    setMonths(numberOfMonths);
    setInterest(totalInterest);
    setTotalPaid(principal + totalInterest);
  }

  function formatMoney(value: number | null) {
    if (value === null) return "$0.00";

    return new Intl.NumberFormat("es-MX", {
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
            href="/es/"
            className="text-xl font-bold tracking-tight"
          >
            Credit<span className="text-blue-600">Pay</span>
          </Link>

          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <a href="#calculadora" className="text-slate-600 hover:text-blue-600">
              Calculadora
            </a>

            <a href="#como-funciona" className="text-slate-600 hover:text-blue-600">
              Cómo funciona
            </a>

            <a href="#preguntas" className="text-slate-600 hover:text-blue-600">
              Preguntas
            </a>
          </nav>

          <div className="flex overflow-hidden rounded-lg border border-slate-300 bg-white text-sm">
            <Link
              href="/"
              className="px-3 py-2 font-medium text-slate-700 hover:bg-slate-100"
            >
              English
            </Link>

            <Link
              href="/es/"
              className="bg-slate-900 px-3 py-2 font-medium text-white"
            >
              Español
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-slate-50 px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl text-center">

          <div className="mb-5 inline-flex rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-medium text-blue-700 shadow-sm">
            Calculadora gratuita de deudas
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Calculadora de Pago
            <span className="block text-blue-600">
              de Tarjeta de Crédito
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Descubre cuánto tiempo puede tomar pagar tu tarjeta de crédito,
            estima los intereses totales y comprueba cómo tu pago mensual
            afecta tu deuda.
          </p>

          <a
            href="#calculadora"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
          >
            Calcular mi deuda ↓
          </a>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculadora" className="-mt-4 px-4 pb-16">
        <div className="mx-auto max-w-6xl">

          <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200">
            <div className="grid lg:grid-cols-2">

              {/* Form */}
              <div className="p-6 sm:p-10">

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                  Paso 1
                </p>

                <h2 className="mt-1 text-2xl font-bold sm:text-3xl">
                  Ingresa los datos de tu tarjeta
                </h2>

                <p className="mt-3 leading-7 text-slate-600">
                  Introduce tu saldo actual, APR y la cantidad que planeas
                  pagar cada mes.
                </p>

                <div className="mt-8 space-y-5">

                  {/* Balance */}
                  <div>
                    <label
                      htmlFor="balance"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Saldo actual de la tarjeta
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
                        className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-9 pr-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

                  {/* APR */}
                  <div>
                    <label
                      htmlFor="apr"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Tasa de interés anual (APR)
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
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 pr-12 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
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
                      Pago mensual
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
                        className="w-full rounded-xl border border-slate-300 bg-white py-3.5 pl-9 pr-4 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                      />
                    </div>
                  </div>

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
                    className="w-full rounded-xl bg-blue-600 px-5 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-700"
                  >
                    Calcular pago →
                  </button>

                  <p className="text-center text-xs text-slate-500">
                    Los resultados son estimaciones y pueden diferir de los
                    cálculos de tu emisor de tarjeta.
                  </p>
                </div>
              </div>

              {/* Results */}
              <div className="bg-slate-950 p-6 text-white sm:p-10">

                <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                  Tus resultados estimados
                </p>

                <h2 className="mt-2 text-2xl font-bold">
                  Resumen del pago
                </h2>

                <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">
                    Tiempo estimado para liquidar
                  </p>

                  <p className="mt-2 text-4xl font-bold sm:text-5xl">
                    {months !== null
                      ? `${months} ${months === 1 ? "mes" : "meses"}`
                      : "—"}
                  </p>

                  <p className="mt-2 text-sm text-slate-400">
                    Basado en el saldo, APR y pago mensual que ingresaste.
                  </p>
                </div>

                <div className="mt-5 grid gap-4 sm:grid-cols-2">

                  <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <p className="text-sm text-slate-400">
                      Intereses totales
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {formatMoney(interest)}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                    <p className="text-sm text-slate-400">
                      Importe total pagado
                    </p>

                    <p className="mt-2 text-2xl font-bold">
                      {formatMoney(totalPaid)}
                    </p>
                  </div>

                </div>

                {months !== null && (
                  <div className="mt-5 rounded-2xl border border-blue-400/20 bg-blue-500/10 p-5">
                    <p className="text-sm font-medium text-blue-300">
                      💡 Consejo
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Aumentar tu pago mensual puede ayudarte a liquidar el
                      saldo más rápido y reducir los intereses pagados con el
                      tiempo.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad */}
      <section className="px-4">
        <div className="mx-auto flex h-24 max-w-6xl items-center justify-center rounded-xl border border-dashed border-slate-300 bg-white text-sm text-slate-400">
          Publicidad
        </div>
      </section>

      {/* How it works */}
      <section
        id="como-funciona"
        className="border-y border-slate-200 bg-white px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Cálculo sencillo
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Cómo funciona la calculadora
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">
              La calculadora utiliza tu saldo, APR y pago mensual para estimar
              cuánto tiempo puede tomar liquidar tu tarjeta.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                1
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Ingresa tu saldo
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Introduce la cantidad que actualmente debes en tu tarjeta de
                crédito.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                2
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Ingresa tu APR
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Introduce la tasa porcentual anual que aparece en el estado de
                cuenta de tu tarjeta.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 text-center ring-1 ring-slate-200">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                3
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Ingresa tu pago
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Introduce la cantidad que planeas pagar cada mes.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Cómo pagar una deuda de tarjeta de crédito
          </h2>

          <div className="mt-6 space-y-5 leading-8 text-slate-600">

            <p>
              Las deudas de tarjetas de crédito pueden tardar más tiempo en
              pagarse cuando los intereses continúan acumulándose cada mes.
              Conocer tu saldo, APR y pago mensual puede ayudarte a entender el
              costo de tu deuda.
            </p>

            <p>
              Una calculadora de pago de tarjeta de crédito proporciona una
              estimación del número de meses necesarios para liquidar un saldo
              cuando realizas pagos mensuales constantes y la tasa de interés
              permanece sin cambios.
            </p>

            <p>
              Pagar más que el pago mínimo puede reducir el tiempo necesario
              para liquidar un saldo. También puede reducir la cantidad de
              intereses acumulados durante el período de pago.
            </p>

            <p>
              Los estados de cuenta reales pueden utilizar cálculos diarios de
              intereses y pueden incluir cargos, diferentes fechas de pago,
              tasas promocionales u otras condiciones. Por eso, los resultados
              de esta calculadora deben considerarse estimaciones.
            </p>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="preguntas" className="bg-slate-100 px-4 py-20">
        <div className="mx-auto max-w-4xl">

          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Preguntas frecuentes
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Preguntas frecuentes
            </h2>
          </div>

          <div className="mt-10 space-y-4">

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Qué es una calculadora de pago de tarjeta de crédito?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Es una herramienta que estima cuánto tiempo puede tomar pagar
                una deuda de tarjeta de crédito según el saldo, la tasa de
                interés y el pago mensual.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Pagar más cada mes reduce los intereses?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Generalmente, realizar pagos mayores puede reducir el tiempo
                durante el cual mantienes un saldo y puede reducir el total de
                intereses pagados.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Por qué mi estado de cuenta muestra una cantidad diferente?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Los emisores de tarjetas pueden calcular los intereses
                utilizando saldos diarios y pueden aplicar cargos, diferentes
                fechas de pago o tasas promocionales.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Esta calculadora proporciona asesoramiento financiero?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                No. Esta calculadora se proporciona únicamente con fines
                educativos e informativos. Los resultados son estimaciones.
              </p>
            </details>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 px-4 py-12 text-slate-300">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-5">

            {/* Marca */}
            <div>
              <h3 className="text-lg font-bold text-white">
                Credit<span className="text-blue-400">Pay</span>
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-400">
                Herramientas sencillas para ayudarte a comprender cálculos
                cotidianos de finanzas personales.
              </p>
            </div>

            {/* Calculadora */}
            <div>
              <h4 className="font-semibold text-white">
                Calculadora
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/es/calculadora-pago-tarjeta-credito"
                  className="block hover:text-white"
                >
                  Calculadora de pago de tarjeta de crédito
                </Link>
              </div>
            </div>

            {/* Recursos */}
            <div>
              <h4 className="font-semibold text-white">
                Recursos
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <a
                  href="#como-funciona"
                  className="block hover:text-white"
                >
                  Cómo funciona
                </a>

                <a
                  href="#preguntas"
                  className="block hover:text-white"
                >
                  Preguntas frecuentes
                </a>

                <Link
                  href="/es/sobre-nosotros"
                  className="block hover:text-white"
                >
                  Sobre nosotros
                </Link>

                <Link
                  href="/es/contacto"
                  className="block hover:text-white"
                >
                  Contacto
                </Link>
              </div>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold text-white">
                Legal
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/es/privacidad"
                  className="block hover:text-white"
                >
                  Política de Privacidad
                </Link>

                <Link
                  href="/es/terminos"
                  className="block hover:text-white"
                >
                  Términos y Condiciones
                </Link>

                <Link
                  href="/es/descargo"
                  className="block hover:text-white"
                >
                  Descargo de Responsabilidad
                </Link>

                <Link
                  href="/es/politica-cookies"
                  className="block hover:text-white"
                >
                  Política de Cookies
                </Link>
              </div>
            </div>

            {/* Idioma */}
            <div>
              <h4 className="font-semibold text-white">
                Idioma
              </h4>

              <div className="mt-3 space-y-2 text-sm">
                <Link
                  href="/"
                  className="block hover:text-white"
                >
                  English
                </Link>

                <Link
                  href="/es/"
                  className="block hover:text-white"
                >
                  Español
                </Link>
              </div>
            </div>

          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

              <p>
                © 2026 CreditPay. Todos los derechos reservados.
              </p>

              <p>
                Calculadoras financieras gratuitas con fines educativos.
              </p>

            </div>
          </div>

        </div>
      </footer>

    </main>
  );
}