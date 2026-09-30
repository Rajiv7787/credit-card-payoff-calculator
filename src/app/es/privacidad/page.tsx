import Link from "next/link";

export default function Privacidad() {
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
          Política de Privacidad
        </h1>

        <p className="mt-3 text-sm text-slate-500">
          Última actualización: 30 de septiembre de 2026
        </p>

        <div className="mt-10 space-y-8 leading-7">
          <section>
            <h2 className="text-xl font-bold text-slate-900">
              1. Introducción
            </h2>
            <p className="mt-3">
              Bienvenido a CreditPay. Respetamos tu privacidad y estamos
              comprometidos con proteger la información que puedas proporcionar
              al utilizar nuestro sitio web y nuestras herramientas
              financieras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              2. Información que recopilamos
            </h2>
            <p className="mt-3">
              Nuestras calculadoras financieras están diseñadas para funcionar
              sin necesidad de crear una cuenta. Los valores introducidos en
              una calculadora, como el saldo de una tarjeta, la tasa de interés
              o el pago mensual, se utilizan para realizar los cálculos
              solicitados.
            </p>
            <p className="mt-3">
              No solicitamos información financiera personal, como números de
              tarjetas de crédito, contraseñas bancarias o credenciales de
              cuentas financieras.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              3. Uso de la información
            </h2>
            <p className="mt-3">
              La información técnica que pueda recopilarse automáticamente se
              puede utilizar para mantener, proteger, mejorar y analizar el
              funcionamiento del sitio web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              4. Cookies
            </h2>
            <p className="mt-3">
              CreditPay puede utilizar cookies y tecnologías similares para
              mejorar la experiencia del usuario, analizar el tráfico del sitio
              y mostrar publicidad relevante.
            </p>
            <p className="mt-3">
              Algunos proveedores externos, incluidos proveedores de
              publicidad y análisis, pueden utilizar cookies de acuerdo con sus
              propias políticas de privacidad.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              5. Publicidad
            </h2>
            <p className="mt-3">
              Podemos utilizar servicios de publicidad de terceros para
              mostrar anuncios en nuestro sitio web. Estos proveedores pueden
              utilizar cookies u otras tecnologías para ofrecer anuncios
              relevantes según las visitas de los usuarios a este y otros
              sitios web.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              6. Enlaces externos
            </h2>
            <p className="mt-3">
              Nuestro sitio puede contener enlaces a sitios web externos. No
              somos responsables de las prácticas de privacidad, contenido o
              seguridad de esos sitios.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              7. Seguridad
            </h2>
            <p className="mt-3">
              Tomamos medidas razonables para proteger nuestro sitio web y
              reducir los riesgos relacionados con el acceso no autorizado o el
              uso indebido de información.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              8. Privacidad de los menores
            </h2>
            <p className="mt-3">
              Nuestro sitio no está destinado específicamente a niños menores
              de 13 años y no recopilamos deliberadamente información personal
              de menores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              9. Cambios en esta política
            </h2>
            <p className="mt-3">
              Podemos actualizar esta Política de Privacidad periódicamente.
              Cualquier cambio será publicado en esta página junto con una
              nueva fecha de actualización.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-900">
              10. Contacto
            </h2>
            <p className="mt-3">
              Si tienes preguntas sobre esta Política de Privacidad, puedes
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
              Esta Política de Privacidad proporciona información general sobre
              nuestras prácticas de privacidad y no constituye asesoramiento
              legal.
            </p>
          </section>
        </div>
      </article>
    </main>
  );
}