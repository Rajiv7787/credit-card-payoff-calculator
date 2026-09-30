import Link from "next/link";

export default function SobreNosotros() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="border-b bg-white">
        <div className="mx-auto max-w-5xl px-4 py-5">
          <Link href="/es/" className="text-xl font-bold text-slate-900">
            Credit<span className="text-blue-600">Pay</span>
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          Sobre Nosotros
        </h1>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              ¿Qué es CreditPay?
            </h2>

            <p className="mt-3">
              CreditPay es un sitio web de herramientas financieras gratuitas
              creado para ayudar a las personas a comprender mejor determinados
              cálculos relacionados con sus finanzas personales.
            </p>

            <p className="mt-3">
              Nuestro objetivo es ofrecer herramientas sencillas, rápidas y
              fáciles de usar, sin necesidad de conocimientos financieros
              avanzados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Nuestras herramientas
            </h2>

            <p className="mt-3">
              Actualmente ofrecemos herramientas como nuestra calculadora de
              pago de tarjetas de crédito, que permite estimar cuánto tiempo
              puede tardarse en pagar una deuda y cuánto interés podría pagarse
              durante ese período.
            </p>

            <p className="mt-3">
              Continuaremos desarrollando nuevas herramientas relacionadas con
              las finanzas personales y los cálculos cotidianos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Información clara y accesible
            </h2>

            <p className="mt-3">
              Creemos que las herramientas financieras no deberían ser
              complicadas. Por eso intentamos presentar los cálculos de una
              manera clara y comprensible para usuarios de diferentes niveles
              de experiencia.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Nuestro compromiso
            </h2>

            <p className="mt-3">
              Nos esforzamos por mantener nuestras herramientas funcionales,
              útiles y actualizadas. Sin embargo, los resultados de nuestras
              calculadoras son estimaciones y no sustituyen el asesoramiento
              financiero profesional.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Contacto
            </h2>

            <p className="mt-3">
              Si tienes sugerencias, comentarios o encuentras algún problema
              con una herramienta, nos gustaría saberlo.
            </p>

            <Link
              href="/es/contacto"
              className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800"
            >
              Contacta con nosotros →
            </Link>
          </section>

          <section className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
            <h2 className="text-xl font-bold text-slate-900">
              Herramienta destacada
            </h2>

            <p className="mt-3">
              ¿Quieres calcular cuánto tiempo podrías tardar en pagar una
              tarjeta de crédito?
            </p>

            <Link
              href="/es/calculadora-pago-tarjeta-credito"
              className="mt-4 inline-block rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Abrir calculadora →
            </Link>
          </section>
        </div>
      </article>
    </main>
  );
}