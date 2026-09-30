import Link from "next/link";

export default function Contacto() {
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
          Contacto
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Estamos aquí para ayudarte.
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Ponte en contacto
            </h2>

            <p className="mt-3">
              Si tienes preguntas, comentarios, sugerencias o encuentras algún
              problema con nuestras calculadoras, puedes ponerte en contacto
              con nosotros.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900">
              Correo electrónico
            </h2>

            <p className="mt-3 text-slate-600">
              Para consultas generales, escríbenos por correo electrónico:
            </p>

            <p className="mt-4">
              <span className="font-semibold text-slate-900">
                contact@creditpay.com
              </span>
            </p>

            <p className="mt-4 text-sm text-slate-500">
              Nota: reemplaza esta dirección por tu dirección de correo
              electrónico real antes de publicar el sitio oficialmente.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Antes de escribirnos
            </h2>

            <p className="mt-3">
              Para preguntas relacionadas con los resultados de una
              calculadora, incluye los datos generales utilizados en el
              cálculo. No envíes números completos de tarjetas de crédito,
              contraseñas, información bancaria ni otros datos financieros
              confidenciales.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              Otras páginas
            </h2>

            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <Link
                href="/es/privacidad"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Política de Privacidad
              </Link>

              <Link
                href="/es/terminos"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Términos y Condiciones
              </Link>

              <Link
                href="/es/descargo"
                className="font-semibold text-blue-600 hover:text-blue-800"
              >
                Descargo de Responsabilidad
              </Link>
            </div>
          </section>
        </div>
      </article>
    </main>
  );
}