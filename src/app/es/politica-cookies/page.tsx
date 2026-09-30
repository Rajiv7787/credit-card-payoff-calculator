import Link from "next/link";

export default function PoliticaCookies() {
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
          Política de Cookies
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Última actualización: 30 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. ¿Qué son las cookies?
            </h2>

            <p className="mt-3">
              Las cookies son pequeños archivos de texto que pueden almacenarse
              en tu dispositivo cuando visitas un sitio web. Pueden ayudar a
              que un sitio recuerde determinadas preferencias y proporcione
              información sobre cómo se utiliza.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. ¿Cómo utilizamos las cookies?
            </h2>

            <p className="mt-3">
              CreditPay puede utilizar cookies y tecnologías similares para
              diferentes finalidades, incluyendo el funcionamiento del sitio,
              análisis de tráfico y publicidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Cookies necesarias
            </h2>

            <p className="mt-3">
              Algunas cookies pueden ser necesarias para determinadas funciones
              técnicas del sitio web y para proporcionar una experiencia de
              navegación adecuada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Cookies de análisis
            </h2>

            <p className="mt-3">
              Podemos utilizar herramientas de análisis para comprender cómo
              los visitantes utilizan nuestro sitio, por ejemplo, qué páginas
              reciben visitas y cómo los usuarios interactúan con las
              herramientas.
            </p>

            <p className="mt-3">
              Esta información puede ayudarnos a mejorar el rendimiento y la
              experiencia del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Cookies de publicidad
            </h2>

            <p className="mt-3">
              CreditPay puede utilizar servicios de publicidad de terceros.
              Estos servicios pueden utilizar cookies u otras tecnologías para
              mostrar anuncios y medir su rendimiento.
            </p>

            <p className="mt-3">
              Los proveedores externos pueden utilizar información sobre las
              visitas a este y otros sitios web de acuerdo con sus propias
              políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              6. Control de cookies
            </h2>

            <p className="mt-3">
              Puedes configurar tu navegador para aceptar, rechazar o eliminar
              determinadas cookies. Las opciones disponibles dependen del
              navegador y del dispositivo que utilices.
            </p>

            <p className="mt-3">
              Desactivar algunas cookies puede afectar determinadas funciones o
              características del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              7. Cookies de terceros
            </h2>

            <p className="mt-3">
              Algunos servicios utilizados en el sitio pueden establecer sus
              propias cookies. CreditPay no controla directamente las cookies
              establecidas por terceros.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              8. Cambios en esta política
            </h2>

            <p className="mt-3">
              Podemos actualizar esta Política de Cookies cuando sea necesario.
              Cualquier cambio se publicará en esta página junto con la fecha
              de actualización correspondiente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              9. Contacto
            </h2>

            <p className="mt-3">
              Si tienes preguntas sobre el uso de cookies en CreditPay, puedes
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
              Esta política proporciona información general sobre el uso de
              cookies en CreditPay y puede actualizarse cuando cambien nuestras
              herramientas o servicios.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}