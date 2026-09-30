import Link from "next/link";

export default function Terminos() {
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
          Términos y Condiciones
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Última actualización: 30 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Aceptación de los términos
            </h2>
            <p className="mt-3">
              Al acceder y utilizar CreditPay, aceptas estos Términos y
              Condiciones. Si no estás de acuerdo con alguna parte de estos
              términos, debes dejar de utilizar el sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. Uso del sitio web
            </h2>
            <p className="mt-3">
              CreditPay proporciona calculadoras financieras y contenido
              educativo para ayudar a los usuarios a comprender determinados
              cálculos relacionados con las finanzas personales.
            </p>
            <p className="mt-3">
              Debes utilizar el sitio únicamente para fines legales y de
              acuerdo con estos términos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Información educativa
            </h2>
            <p className="mt-3">
              La información y los resultados proporcionados por CreditPay
              tienen únicamente fines educativos e informativos.
            </p>
            <p className="mt-3">
              Los resultados de nuestras calculadoras son estimaciones y pueden
              no coincidir exactamente con los resultados proporcionados por
              una institución financiera.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. No constituye asesoramiento financiero
            </h2>
            <p className="mt-3">
              El contenido de CreditPay no constituye asesoramiento financiero,
              legal, fiscal o de inversión.
            </p>
            <p className="mt-3">
              Debes considerar tu propia situación financiera y, cuando sea
              apropiado, consultar con un profesional cualificado antes de
              tomar decisiones financieras importantes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Exactitud de los cálculos
            </h2>
            <p className="mt-3">
              Nos esforzamos por mantener nuestras calculadoras y contenidos
              actualizados y precisos. Sin embargo, no garantizamos que todos
              los resultados, cálculos, información o contenidos estén libres
              de errores o sean completamente exactos en todo momento.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              6. Disponibilidad del servicio
            </h2>
            <p className="mt-3">
              Podemos modificar, actualizar, suspender o retirar cualquier
              parte del sitio web o de sus herramientas en cualquier momento
              sin previo aviso.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              7. Propiedad intelectual
            </h2>
            <p className="mt-3">
              El diseño, contenido, textos, gráficos, código y otros elementos
              originales de CreditPay están protegidos por las leyes aplicables
              de propiedad intelectual.
            </p>
            <p className="mt-3">
              No puedes copiar, reproducir, modificar o redistribuir nuestro
              contenido sin autorización previa, salvo cuando la ley lo
              permita.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              8. Enlaces de terceros
            </h2>
            <p className="mt-3">
              El sitio puede contener enlaces a sitios web o servicios de
              terceros. CreditPay no controla ni garantiza el contenido,
              disponibilidad o prácticas de dichos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              9. Limitación de responsabilidad
            </h2>
            <p className="mt-3">
              En la medida permitida por la legislación aplicable, CreditPay no
              será responsable de pérdidas o daños derivados del uso o de la
              imposibilidad de utilizar el sitio web, sus calculadoras o la
              información proporcionada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              10. Cambios en estos términos
            </h2>
            <p className="mt-3">
              Podemos actualizar estos Términos y Condiciones ocasionalmente.
              Los cambios se publicarán en esta página y entrarán en vigor
              cuando sean publicados.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              11. Contacto
            </h2>
            <p className="mt-3">
              Si tienes preguntas sobre estos Términos y Condiciones, puedes
              visitar nuestra página de contacto.
            </p>

            <Link
              href="/es/contacto"
              className="mt-4 inline-block font-semibold text-blue-600 hover:text-blue-800"
            >
              Contacto →
            </Link>
          </section>

          <section className="border-t pt-8">
            <p className="text-sm text-slate-500">
              Estos Términos y Condiciones proporcionan información general
              sobre el uso del sitio y no constituyen asesoramiento legal.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}