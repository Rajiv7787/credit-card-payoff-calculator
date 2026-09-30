import Link from "next/link";

export default function Descargo() {
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
          Descargo de Responsabilidad
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Última actualización: 30 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Información general
            </h2>
            <p className="mt-3">
              La información disponible en CreditPay se proporciona únicamente
              con fines educativos e informativos. Nuestro objetivo es ayudar
              a los usuarios a comprender determinados cálculos relacionados
              con las finanzas personales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. No es asesoramiento financiero
            </h2>
            <p className="mt-3">
              El contenido, las calculadoras y los resultados proporcionados
              por este sitio no constituyen asesoramiento financiero, legal,
              fiscal, crediticio o de inversión.
            </p>
            <p className="mt-3">
              Las decisiones financieras deben basarse en tu situación
              individual y, cuando sea necesario, en el asesoramiento de un
              profesional cualificado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Resultados de las calculadoras
            </h2>
            <p className="mt-3">
              Los resultados generados por nuestras calculadoras son
              estimaciones basadas en los datos introducidos por el usuario y
              en las fórmulas utilizadas por la herramienta.
            </p>
            <p className="mt-3">
              Los resultados reales pueden variar debido a factores como tasas
              de interés, cargos, fechas de pago, políticas de los
              prestamistas, intereses diarios y otros términos específicos de
              cada cuenta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Exactitud de la información
            </h2>
            <p className="mt-3">
              Nos esforzamos por proporcionar información útil y precisa, pero
              no garantizamos que todo el contenido sea completo, exacto,
              actualizado o libre de errores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Decisiones financieras
            </h2>
            <p className="mt-3">
              No debes tomar decisiones financieras importantes basándote
              únicamente en la información o en los resultados proporcionados
              por CreditPay.
            </p>
            <p className="mt-3">
              Para decisiones importantes relacionadas con deudas, crédito,
              impuestos, inversiones o finanzas personales, considera consultar
              con un profesional cualificado.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              6. Enlaces y servicios de terceros
            </h2>
            <p className="mt-3">
              CreditPay puede incluir enlaces o referencias a servicios de
              terceros. No controlamos ni garantizamos la exactitud, seguridad
              o disponibilidad del contenido de dichos terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              7. Limitación de responsabilidad
            </h2>
            <p className="mt-3">
              En la medida permitida por la legislación aplicable, CreditPay no
              será responsable de pérdidas o daños derivados del uso de la
              información, calculadoras o herramientas disponibles en este
              sitio.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              8. Cambios en este descargo
            </h2>
            <p className="mt-3">
              Podemos actualizar este Descargo de Responsabilidad cuando sea
              necesario. Los cambios se publicarán en esta página junto con la
              fecha de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              9. Contacto
            </h2>
            <p className="mt-3">
              Si tienes preguntas sobre este Descargo de Responsabilidad,
              puedes visitar nuestra página de contacto.
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
              Este contenido es de carácter general y no sustituye el
              asesoramiento profesional personalizado.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}