import Link from "next/link";

export default function Home() {
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
            <a
              href="#calculadora"
              className="text-slate-600 hover:text-blue-600"
            >
              Calculadora
            </a>

            <a
              href="#como-funciona"
              className="text-slate-600 hover:text-blue-600"
            >
              Cómo funciona
            </a>

            <a
              href="#preguntas"
              className="text-slate-600 hover:text-blue-600"
            >
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
            estima los intereses totales y comprende cómo tu pago mensual
            puede afectar tu deuda.
          </p>

          <a
            href="#calculadora"
            className="mt-8 inline-flex rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Calcular mi deuda ↓
          </a>

        </div>
      </section>

      {/* Calculator Preview */}
      <section id="calculadora" className="-mt-4 px-4 pb-16">
        <div className="mx-auto max-w-6xl">

          <div className="grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Herramienta gratuita
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Calcula tu deuda
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Introduce tu saldo, tasa APR y pago mensual para obtener una
                estimación del tiempo necesario para liquidar tu tarjeta.
              </p>

              <div className="mt-8 space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Saldo actual
                  </label>

                  <div className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-400">
                    $5,000
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Tasa APR
                  </label>

                  <div className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-400">
                    24.99%
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold">
                    Pago mensual
                  </label>

                  <div className="rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 text-slate-400">
                    $200
                  </div>
                </div>

              </div>

              <Link
                href="/es/calculadora-pago-tarjeta-credito"
                className="mt-7 block w-full rounded-xl bg-blue-600 px-5 py-4 text-center font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
              >
                Abrir calculadora →
              </Link>

            </div>

            <div className="rounded-3xl bg-slate-950 p-8 text-white shadow-xl sm:p-10">

              <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
                Ejemplo
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                Entiende tus resultados
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                La calculadora estima el número de meses, los intereses
                acumulados y el importe total pagado.
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-6 ring-1 ring-white/10">

                <p className="text-sm text-slate-400">
                  Tiempo estimado
                </p>

                <p className="mt-2 text-4xl font-bold">
                  36 meses
                </p>

              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">

                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">
                    Intereses
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    $2,135
                  </p>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/10">
                  <p className="text-sm text-slate-400">
                    Total pagado
                  </p>

                  <p className="mt-2 text-2xl font-bold">
                    $7,135
                  </p>
                </div>

              </div>

              <p className="mt-6 text-sm leading-6 text-slate-400">
                Los resultados son estimaciones y pueden variar según los
                términos de tu tarjeta de crédito.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white px-4 py-20">
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Fácil y rápido
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              ¿Por qué utilizar nuestra calculadora?
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <div className="text-3xl">⚡</div>

              <h3 className="mt-5 text-xl font-bold">
                Resultados rápidos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Obtén una estimación en segundos introduciendo solo tres
                datos básicos.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <div className="text-3xl">💰</div>

              <h3 className="mt-5 text-xl font-bold">
                Comprende los intereses
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Comprueba cuánto podrías pagar en intereses durante el período
                de pago.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-7 ring-1 ring-slate-200">
              <div className="text-3xl">📊</div>

              <h3 className="mt-5 text-xl font-bold">
                Planifica tus pagos
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Utiliza los resultados como referencia para comprender
                diferentes escenarios de pago.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* How It Works */}
      <section
        id="como-funciona"
        className="border-y border-slate-200 bg-slate-50 px-4 py-20"
      >
        <div className="mx-auto max-w-6xl">

          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Tres pasos
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Cómo funciona
            </h2>

          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                1
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Ingresa tu saldo
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Introduce la cantidad que debes actualmente en tu tarjeta.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                2
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Añade tu APR
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Introduce la tasa de interés anual de tu tarjeta.
              </p>

            </div>

            <div className="rounded-2xl bg-white p-7 text-center shadow-sm ring-1 ring-slate-200">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                3
              </div>

              <h3 className="mt-5 text-lg font-bold">
                Introduce tu pago
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                Indica cuánto planeas pagar cada mes.
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
              Las deudas de tarjetas de crédito pueden acumular intereses cada
              mes. Comprender tu saldo, APR y pago mensual puede ayudarte a
              conocer mejor el costo de tu deuda.
            </p>

            <p>
              Una calculadora de pago de tarjeta de crédito permite estimar
              cuántos meses podrían ser necesarios para liquidar un saldo
              cuando realizas pagos mensuales constantes.
            </p>

            <p>
              Aumentar el pago mensual puede reducir el tiempo necesario para
              liquidar una deuda y puede disminuir la cantidad total de
              intereses pagados.
            </p>

            <p>
              Los resultados reales pueden variar porque los emisores de
              tarjetas pueden utilizar diferentes métodos para calcular
              intereses y pueden aplicar cargos u otras condiciones.
            </p>

          </div>

        </div>
      </section>

      {/* FAQ */}
      <section
        id="preguntas"
        className="bg-slate-100 px-4 py-20"
      >
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
                una deuda según el saldo, la tasa de interés y el pago mensual.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Pagar más cada mes puede reducir los intereses?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                En general, un pago mensual mayor puede reducir el tiempo que
                mantienes un saldo y puede reducir los intereses totales.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Por qué el resultado puede ser diferente al de mi banco?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                Los emisores pueden utilizar diferentes métodos de cálculo,
                fechas de pago, cargos o tasas promocionales.
              </p>
            </details>

            <details className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
              <summary className="cursor-pointer font-semibold">
                ¿Esta calculadora ofrece asesoramiento financiero?
              </summary>

              <p className="mt-4 leading-7 text-slate-600">
                No. La herramienta proporciona estimaciones únicamente con
                fines educativos e informativos.
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