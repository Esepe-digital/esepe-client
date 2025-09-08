import Image from 'next/image';
import Legales from '@/assets/images/legales.jpg';

export default function TermsAndConditions() {
  return (
    <div className="max-w-6xl mx-auto bg-white">
      {/* Header Banner with Logo and Title */}
      <div className="relative w-full h-[200px] md:h-[250px]">
        <Image
          src={Legales}
          alt="Aerial view of residential area"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content Section */}
      <div className="px-4 py-8 md:px-8">
        {/* First Terms and Conditions - ALTOS DEL VALLE */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES PROMOCIÓN
          </h3>
          <p className="text-lg">Te regalamos un cero kilómetro.</p>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 15 de abril de 2025, comparece:{' '}
            <strong>INMOBILIARIA ESEPE VEME SUR S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número{' '}
            <strong>76.285.248-9</strong>;{' '}
            <strong>INMOBILIARIA ALTOS DEL VALLE S.A.</strong>, sociedad del
            giro inmobiliario, Rol Único Tributario número 76.375.357-3;
            <strong>INMOBILIARIA ESEPE-VEME S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.570.640-8, todas
            representadas por don Pablo René Schneider Ponce, chileno, casado y
            separado de bienes, ingeniero civil, cédula de identidad número
            8.776.244-0, todos con domicilio para estos efectos en calle
            Alcántara número 656, comuna de Las Condes, Región Metropolitana, en
            adelante todas en conjunto como{' '}
            <strong>&ldquo;La Inmobiliaria&rdquo;</strong> o{' '}
            <strong>&ldquo;Las Inmobiliarias&rdquo;</strong>, vienen en
            establecer las siguientes bases notariales, en adelante, Las Bases,
            las cuales corresponden a la promoción denominada &ldquo;Beneficio
            Escrituración&rdquo; que a continuación se detalla:
          </p>
        </div>
        <div className="space-y-6">
          <section>
            <h2 className="text-xl font-bold mt-4">
              PRIMERO: Antecedentes Generales.
            </h2>
            <div className="space-y-4">
              <p>
                I) La Inmobiliaria, con motivo de la venta de sus respectivos
                proyectos inmobiliarios y con el objeto de beneficiar a sus
                clientes, ha decidido implementar una promoción, por tiempo
                limitado, según los términos y condiciones que se indican a
                continuación.
              </p>
              <p>
                II) La promoción tiene por finalidad publicitar e incentivar la
                compra de unidades de determinados proyectos y su posterior
                pronta entrega material, promoción que regirá entre los días 21
                de abril de 2025 hasta el día 18 de mayo de 2025 inclusive,
                según los términos y condiciones que se establecen en este
                instrumento.
              </p>
              <p>
                La promoción consiste en que toda persona natural que cumpla con
                los requisitos señalados en estas bases, recibirá junto con la
                compraventa de una unidad, sin costo para ella, un automóvil
                cero kilómetros. Es decir, toda persona natural que reserve una
                unidad y celebre un contrato de promesa de compraventa por este
                durante el periodo de la promoción y cumpliendo las condiciones
                establecidas en este instrumento, en adelante &ldquo;El
                Beneficiario&rdquo; o &ldquo;El Cliente&rdquo;, recibirá después
                de la suscripción de la escritura de compraventa respectiva, un
                automóvil cero kilómetros.
              </p>
              <p>
                Será condición esencial para la entrega del automóvil que el
                Beneficiario suscriba la escritura de compraventa del inmueble
                reservado o promesado.
              </p>
              <p>
                III) Se deja expresa constancia que esta promoción, está
                dirigida exclusivamente a personas naturales que realicen la
                reserva, promesa y luego suscriban el contrato de compraventa
                definitiva, sin el desarrollo de una gestión comercial ni
                publicidad y sin asumir, de ninguna manera, la representación de
                las sociedades singularizadas precedentemente. El beneficiario
                no podrá ser una persona natural o jurídica que esté relacionado
                directa o indirectamente con actuales operaciones comerciales de
                compra y venta de propiedades, ya sea dentro de la industria
                inmobiliaria o de la construcción.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              SEGUNDO: Inscripción en promoción.
            </h2>
            <div className="space-y-4">
              <p>
                I) Sólo podrán participar como Beneficiarios, las personas
                naturales mayores de edad.
              </p>
              <p>
                II) Para estos efectos, deberán inscribirse conjuntamente con la
                suscripción de la reserva o promesa de compraventa, mediante en
                el formulario correspondiente con su nombre completo, correo
                electrónico y número de teléfono. Los datos del Beneficiario se
                tendrán como únicos y válidos para efectos de las presentes
                Bases y cuya exactitud, veracidad y contenido, es responsable de
                manera exclusiva de quien se registre.
              </p>
              <p>
                III) La inscripción se realiza con el asesor de ventas y, es
                personal e intransferible por lo que la calidad de Beneficiario
                no podrá ser cedida a ningún título.
              </p>
              <p>
                IV) Al momento de efectuar la inscripción del Beneficiario, éste
                deberá declarar como íntegramente conocidas y aceptadas las
                presentes Bases.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              TERCERO: Requisitos Beneficiario
            </h2>
            <div className="space-y-4">
              <p>
                El Beneficiario que haga la reserva o suscriba la promesa, debe
                cumplir con los siguientes requisitos:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  El Beneficiario debe ser una persona natural, mayor de edad y
                  con cédula nacional de identidad vigente o extranjero con
                  residencia definitiva.
                </li>
                <li>
                  El Beneficiario no podrá ser una persona natural o jurídica
                  que esté relacionado directa o indirectamente con operaciones
                  comerciales de compra y venta de propiedades, ya sea dentro de
                  la industria inmobiliaria o de la construcción.
                </li>
                <li>
                  El Beneficiario deberá suscribir la respectiva reserva entre
                  los días 21 de abril y 18 de mayo inclusive.
                </li>
                <li>
                  El Beneficiario deberá haber realizado la reserva pagando el
                  valor inicial en ella consignado a entera satisfacción de la
                  inmobiliaria.
                </li>
                <li>
                  El Beneficiario debe concurrir a firmar la promesa de
                  compraventa dentro de los 30 días siguientes a la reserva del
                  inmueble.
                </li>
                <li>
                  El Beneficiario deberá ser un Cliente, que reserve la unidad y
                  celebre la respectiva promesa de compraventa durante las
                  fechas y dentro de los plazos estipulados en el presente
                  documento.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">CUARTO: Beneficio.</h2>
            <div className="space-y-4">
              <p>
                Uno) El beneficio o premio establecido para el Beneficiario que
                haya hecho la reserva o promesa, de una de las unidades de los
                proyectos indicados en la cláusula sexta, durante la vigencia de
                la presente promoción, obtendrá de la Inmobiliaria:
              </p>
              <ul className="list-disc pl-5">
                <li>
                  I) El Premio de un auto cero kilómetros Suzuki Nuevo S-Presso
                  1.0 GLX, o equivalente de igual o menor valor.
                </li>
                <li>
                  II) Se deja expresamente establecido que La Inmobiliaria no
                  asume responsabilidad alguna respecto del cumplimiento por
                  parte del Beneficiario de los hechos, actos o contratos que
                  dependan de él o de las instituciones que otorguen el
                  financiamiento para concretar la operación de compra.
                </li>
                <li>
                  III) Para todos los efectos legales, se entenderá que las
                  operaciones de compraventa tienen un solo futuro comprador.
                </li>
                <li>
                  IV) La promoción será válida hasta agotar stock en la
                  automotora otorgante de los vehículos, denominada DERCO.
                </li>
                <li>
                  V) El color del vehículo estará sujeto a disponibilidad por la
                  automotora.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              QUINTO: Proyectos Inmobiliarios incluidos en la promoción.
            </h2>
            <div className="space-y-4">
              <ul className="list-disc pl-5">
                <li>
                  Altos del Valle; ubicada en la comuna de Puente Alto, de
                  Inmobiliaria Altos del Valle S.A.
                </li>
                <li>
                  Barrio Viña Carmen etapas 1 y 2; ubicada en la comuna de Buin,
                  de Inmobiliaria Esepe Veme Sur S.A.
                </li>
                <li>
                  San Francisco; ubicada en la comuna de Puente Alto, de
                  Inmobiliaria Esepe Veme S.A.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold">
              SEXTO: Estipulaciones generales.
            </h2>
            <div className="space-y-4">
              <ul className="list-disc pl-5">
                <li>
                  La promoción no es acumulable a otras promociones de La
                  Inmobiliaria.
                </li>
                <li>
                  Los Beneficiarios autorizan a Inmobiliaria para incluir sus
                  nombres en bases de datos y efectuar su tratamiento en
                  conformidad a la ley 19.628.
                </li>
                <li>
                  La Inmobiliaria no asume responsabilidad alguna respecto a la
                  gestión, reserva y venta de las unidades respectivas.
                </li>
                <li>
                  La Inmobiliaria se reserva el derecho de aclarar, complementar
                  y modificar las bases mediante declaración escrita.
                </li>
                <li>
                  La participación en esta promoción implica la aceptación
                  irrestricta de las presentes Bases.
                </li>
                <li>
                  Para cualquier diferencia o controversia, las partes fijan su
                  domicilio en la ciudad y comuna de Santiago y se someten a la
                  competencia de los Tribunales Ordinarios de Justicia.
                </li>
                <li>
                  Las presentes Bases de la promoción serán protocolizadas ante
                  Notario Público.
                </li>
              </ul>
            </div>
          </section>

          <section>
            <div className="text-center">
              <p>
                <strong>Pablo René Schneider Ponce</strong>
              </p>
              <p>Gerente General</p>
              <p className="mt-6">
                <strong>
                  <em>pp. INMOBILIARIA ESEPE VEME SUR S.A.</em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>pp. INMOBILIARIA ALTOS DEL VALLE S.A.,</em>
                </strong>
              </p>
              <p>
                <strong>
                  <em>pp. INMOBILIARIA ESEPE-VEME S.A.</em>
                </strong>
              </p>
            </div>
          </section>
        </div>
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752] mt-10">
            BASES PROMOCIÓN
          </h3>
          <p className="text-lg">Gift Card</p>
        </div>
        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 1 de marzo de 2025, comparece:{' '}
            <strong>INMOBILIARIA ALTOS DEL VALLE S.A.</strong>, sociedad del
            giro inmobiliario, Rol Único Tributario número 76.375.357-3,
            representada por don Pablo René Schneider Ponce, chileno, casado y
            separado de bienes, ingeniero civil, cédula de identidad número
            8.776.244-0, ambos con domicilio para estos efectos en calle
            Alcántara número 656, comuna de Las Condes, Región Metropolitana, en
            adelante como <strong>La Inmobiliaria</strong>, viene en siguientes
            siguientes bases notariales, en adelante, Las Bases, las cuales las
            corresponden a la promoción denominada
            <strong>Gift Card</strong> que a continuación se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              I)La Inmobiliaria, con motivo de la venta de su proyecto
              inmobiliario Altos del Valle y con el objeto de beneficiar a sus
              clientes, ha decidido implementar una promoción, por tiempo
              limitado, según los términos y condiciones que se indican a
              continuación.
            </p>
            <p>
              II) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos y su posterior pronta
              entrega material, promoción que regirá entre los días 1 de marzo
              de 2025 hasta el día 31 de marzo de 2025 inclusive, según los
              términos y condiciones que se establecen en este instrumento.
            </p>
            <p>
              La promoción consiste en que toda persona natural que cumpla con
              los requisitos señalados en estas bases, recibirá junto con la
              compraventa de una unidad, sin costo para ella, una Gift Card por
              el valor que corresponda según el Valor del inmueble respectivo,
              de la conformidad con listado que constituye el Anexo A del
              presente instrumento. Es decir, toda persona natural que reserve
              una unidad y celebre un contrato de promesa de compraventa por
              este durante el periodo de la promoción y, cumpliendo las
              condiciones establecidas en este instrumento, en adelante
              <strong>El Beneficiario</strong> o <strong>El Cliente</strong>,
              recibirá junto con la suscripción de la escritura de compraventa
              respectiva, una Gift Card por el valor que corresponda a dicha
              unidad.
            </p>
            <p>
              Será condición escencial para la entrega la Gift Card que el
              Beneficiario suscriba la escritura de compraventa del inmueble
              reservado o promesado.
            </p>
            <p>
              III) Se deja expresa constancia que esta promoción, está dirigida
              exclusivamente a personas naturales que realicen la reserva o
              promesa y posteriormente suscriban el contrato de compraventa
              definitiva, sin el desarrollo de una gestión comercial ni
              publicidad y sin asumir, de ninguna manera, la representación de
              las sociedades singularizadas precedentemente. El beneficiario no
              podrá ser una persona natural o jurídica que tenga algún
              relacionado directa o indirectamente con actuales operaciones
              comerciales de compra y venta de propiedades, ya sea dentro de la
              industria inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción en promoción.
            </p>
            <p>
              Uno) Sólo podrán participar como Beneficiarios, las personas
              naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, deberán inscribirse conjuntamente con la
              suscripción de la reserva o promesa de compraventa, mediante en el
              formulario correspondiente con su nombre completo, correo
              electrónico y número de teléfono. Los datos del Beneficiario se
              tendrán como únicos y válidos para efectos de las presentes Bases
              y cuya exactitud, veracidad y contenido, es responsable de manera
              exclusiva de quien se registre. Solo podrán participar quienes se
              registren en tiempo y forma, el registro es de exclusiva
              responsabilidad del participante o cliente. El registro se
              realizará al momento de la reserva de la propiedad en sala de
              ventas, o en los siguientes 7 días posteriores en caso de ser una
              reserva online, para la cual se le enviará el formulario de
              inscripción por correo electrónico.
            </p>
            <p>
              Tres) La inscripción se realiza con el asesor de ventas y, es
              personal e intransferible por lo que la calidad de Beneficiario no
              podrá ser cedida a ningún título.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Beneficiario,
              este deberá declarar como íntegramente conocidas y aceptadas las
              presentes Bases.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: Requisitos Beneficiario
            </p>
            <p>
              El Beneficiario que haga la reserva o suscriba la promesa, debe
              cumplir con los siguientes requisitos:
            </p>
            <ol className="list-decimal pl-8 space-y-2">
              <li>
                El Beneficiario debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva;
              </li>
            </ol>
            <ul className="list-disc pl-8 space-y-4 mt-4">
              <li>
                El Beneficiario no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>
                El Beneficiario deberá suscribir la respectiva reserva o promesa
                entre los días 1 de marzo y 31 de marzo inclusive.
              </li>
              <li>
                El Beneficiario deberá haber realizado la reserva pagando el
                valor inicial en ella consignado a entera satisfacción de la
                inmobiliaria.
              </li>
              <li>
                El Beneficiario debe concurrir a firmar la promesa de
                compraventa dentro de los 30 días siguientes a la reserva del
                inmueble.
              </li>
              <li>
                El Beneficiario deberá ser un Nuevo Cliente, que reserve la
                unidad y celebre la respectiva promesa de compraventa durante
                las fechas y dentro de los plazos estipulados en el presente
                documento.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Beneficiario que
              haya hecho la reserva o promesa, de una de las unidades de los
              proyectos indicados en la cláusula sexta, durante la vigencia de
              la presente promoción, obtendrá de la Inmobiliaria:
            </p>
            <p>
              i) El Premio de una Gift Card por el monto en pesos que
              corresponda de conformidad con lo estipulado en el Anexo A.
            </p>
            <p>
              Independiente del número de personas que firmen la respectiva
              reserva y posterior promesa, la promoción tiene un tope de máximo
              de una Gift Card por unidad reservada o promesada.
            </p>
            <p>
              ii) Se deja expresamente establecido que La Inmobiliaria no asume
              responsabilidad alguna respecto del cumplimiento por parte del
              Beneficiario de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              iii) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo futuro comprador,
              independientemente de que la reserva o promesa de compraventa se
              realice en comunidad o en forma conjunta por dos o más personas
              naturales y/o jurídicas. Atendido lo anterior, sólo será
              procedente la entrega de un premio por cada reserva y escritura de
              compraventa firmada, independientemente del número de futuros
              compradores que suscriban la reserva.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              QUINTO: Proyecto Inmobiliario incluido en la promoción.
            </p>
            <p>
              Se incluye en la presente promoción el proyecto inmobiliario
              denominado Altos del Valle, ubicado en la comuna de Puente Alto,
              de Inmobiliaria Altos del Valle S.A.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Estipulaciones generales.
            </p>
            <p>
              Uno) Se deja expresamente establecido que entre los Participantes,
              por una parte, y La Inmobiliaria, por la otra, no existirá
              relación laboral, de dependencia ni subordinación de ninguna
              especie;
            </p>
            <p>
              Dos) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria;
            </p>
            <p>
              Tres) Los Beneficiarios autorizan a Inmobiliaria para incluir sus
              nombres en bases de datos y efectuar su tratamiento en conformidad
              a la ley 19.628. Del mismo modo, los Beneficiarios asumen
              exclusiva responsabilidad respecto de los datos entregados, sin
              que a la Inmobiliaria le quepa responsabilidad alguna al respecto;
            </p>
            <p>
              Cuatro) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Cinco) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Seis) Para cualquier diferencia o controversia que la en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
            <p>
              Siete) Las presentes Bases de la promoción están protocolizadas
              ante Notario Público aquí.
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">
              Pablo René Schneider Ponce
            </p>
            <p>Gerente General</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ALTOS DEL VALLE S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Second Terms and Conditions - ESEPE-VEME */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES PROMOCIÓN
          </h3>
          <p className="text-lg">Gift Card</p>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 1 de marzo de 2025, comparece:{' '}
            <strong>INMOBILIARIA ESEPE-VEME S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.570.640-8, representada
            por don Pablo René Schneider Ponce, chileno, casado y separado de
            bienes, ingeniero civil, cédula de identidad número 8.776.244-0,
            ambos con domicilio para estos efectos en calle Alcántara número
            656, comuna de Las Condes, Región Metropolitana, en adelante como
            <strong>La Inmobiliaria</strong>, viene en establecer las siguientes
            bases notariales, en adelante, Las Bases, las cuales corresponden a
            la promoción denominada<strong>Gift Card</strong>
            que a continuación se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              I)La Inmobiliaria, con motivo de la venta de su proyecto
              inmobiliario San Francisco y con el objeto de beneficiar a sus
              clientes, ha decidido implementar una promoción, por tiempo
              limitado, según los términos y condiciones que se indican a
              continuación.
            </p>
            <p>
              II) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos y su posterior pronta
              entrega material, promoción que regirá entre los días 1 de marzo
              de 2025 hasta el día 31 de marzo de 2025 inclusive, según los
              términos y condiciones que se establecen en este instrumento.
            </p>
            <p>
              La promoción consiste en que toda persona natural que cumpla con
              los requisitos señalados en estas bases, recibirá junto con la
              compraventa de una unidad, sin costo para ella, una Gift Card por
              el valor que corresponda según el Valor del inmueble respectivo,
              de la conformidad con listado que constituye el Anexo A del
              presente instrumento. Es decir, toda persona natural que reserve
              una unidad y celebre un contrato de promesa de compraventa por
              este durante el periodo de la promoción y, cumpliendo las
              condiciones establecidas en este instrumento, en adelante
              <strong>El Beneficiario</strong> o <strong>El Cliente</strong>,
              recibirá junto con la suscripción de la escritura de compraventa
              respectiva, una Gift Card por el valor que corresponda a dicha
              unidad.
            </p>
            <p>
              Será condición escencial para la entrega la Gift Card que el
              Beneficiario suscriba la escritura de compraventa del inmueble
              reservado o promesado.
            </p>
            <p>
              III) Se deja expresa constancia que esta promoción, está dirigida
              exclusivamente a personas naturales que realicen la reserva o
              promesa y posteriormente suscriban el contrato de compraventa
              definitiva, sin el desarrollo de una gestión comercial ni
              publicidad y sin asumir, de ninguna manera, la representación de
              las sociedades singularizadas precedentemente. El beneficiario no
              podrá ser una persona natural o jurídica que esté relacionado
              directa o indirectamente con actuales operaciones comerciales de
              compra y venta de propiedades, ya sea dentro de la industria
              inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción en promoción.
            </p>
            <p>
              Uno) Sólo podrán participar como Beneficiarios, las personas
              naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, deberán inscribirse conjuntamente con la
              suscripción de la reserva o promesa de compraventa, mediante en el
              formulario correspondiente con su nombre completo, correo
              electrónico y número de teléfono. Los datos del Beneficiario se
              tendrán como únicos y válidos para efectos de las presentes Bases
              y cuya exactitud, veracidad y contenido, es responsable de manera
              exclusiva de quien se registre. Solo podrán participar quienes se
              registren en tiempo y forma, el registro es de exclusiva
              responsabilidad del participante o cliente. El registro se
              realizará al momento de la reserva de la propiedad en sala de
              ventas, o en los siguientes 7 días posteriores en caso de ser una
              reserva online, para la cual se le enviará el formulario de
              inscripción por correo electrónico.
            </p>
            <p>
              Tres) La inscripción se realiza con el asesor de ventas y, es
              personal e intransferible por lo que la calidad de Beneficiario no
              podrá ser cedida a ningún título.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Beneficiario,
              este deberá declarar como íntegramente conocidas y aceptadas las
              presentes Bases.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: Requisitos Beneficiario
            </p>
            <p>
              El Beneficiario que haga la reserva o suscriba la promesa, debe
              cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Beneficiario debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva;
              </li>
              <li>
                El Beneficiario no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>
                El Beneficiario deberá suscribir la respectiva reserva o promesa
                entre los días 1 de marzo y 31 de marzo inclusive.
              </li>
              <li>
                El Beneficiario deberá haber realizado la reserva pagando el
                valor inicial en ella consignado a entera satisfacción de la
                inmobiliaria.
              </li>
              <li>
                El Beneficiario debe concurrir a firmar la promesa de
                compraventa dentro de los 30 días siguientes a la reserva del
                inmueble.
              </li>
              <li>
                El Beneficiario deberá ser un Nuevo Cliente, que reserve la
                unidad y celebre la respectiva promesa de compraventa durante
                las fechas y dentro de los plazos estipulados en el presente
                documento.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Beneficiario que
              haya hecho la reserva o promesa, de una de las unidades de los
              proyectos indicados en la cláusula sexta, durante la vigencia de
              la presente promoción, obtendrá de la Inmobiliaria:
            </p>
            <p>
              I) El Premio de una Gift Card por el monto en pesos que
              corresponda de conformidad con lo estipulado en el Anexo A.
            </p>
            <p>
              Independiente del número de personas que firmen la respectiva
              reserva y posterior promesa, la promoción tiene un tope de máximo
              de una Gift Card por unidad reservada o promesada.
            </p>
            <p>
              ii) Se deja expresamente establecido que La Inmobiliaria no asume
              responsabilidad alguna respecto del cumplimiento por parte del
              Beneficiario de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              iii) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo futuro comprador,
              independientemente de que la reserva o promesa de compraventa se
              realice en comunidad o en forma conjunta por dos o más personas
              naturales y/o jurídicas. Atendido lo anterior, sólo será
              procedente la entrega de un premio por cada reserva y escritura de
              compraventa firmada, independientemente del número de futuros
              compradores que suscriban la reserva.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              QUINTO: Proyecto Inmobiliario incluido en la promoción.
            </p>
            <p>
              Se incluye en la presente promoción el proyecto inmobiliario
              denominado San Francisco, ubicado en la comuna de Puente Alto, de
              Inmobiliaria Esepe Veme S.A.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Estipulaciones generales.
            </p>
            <p>
              Uno) Se deja expresamente establecido que entre los Participantes,
              por una parte, y La Inmobiliaria, por la otra, no existirá
              relación laboral, de dependencia ni subordinación de ninguna
              especie;
            </p>
            <p>
              Dos) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria;
            </p>
            <p>
              Tres) Los Beneficiarios autorizan a Inmobiliaria para incluir sus
              nombres en bases de datos y efectuar su tratamiento en conformidad
              a la ley 19.628. Del mismo modo, los Beneficiarios asumen
              exclusiva responsabilidad respecto de los datos entregados, sin
              que a la Inmobiliaria le quepa responsabilidad alguna al respecto;
            </p>
            <p>
              Cuatro) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Cinco) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Seis) Para cualquier diferencia o controversia que la en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
            <p>
              Siete) Las presentes Bases de la promoción están protocolizadas
              ante Notario Público aquí.
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">
              Pablo René Schneider Ponce
            </p>
            <p>Gerente General</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE-VEME S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Third Terms and Conditions - ESEPE VEME SUR */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES PROMOCIÓN
          </h3>
          <p className="text-lg">Gift Card</p>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 1 de marzo de 2025, comparece:{' '}
            <strong>INMOBILIARIA ESEPE VEME SUR S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.285.248-9, representada
            por don Pablo René Schneider Ponce, chileno, casado y separado de
            bienes, ingeniero civil, cédula de identidad número 8.776.244-0,
            todos con domicilio para estos efectos en calle Alcántara número
            656, comuna de Las Condes, Región Metropolitana, en adelante como
            <strong>La Inmobiliaria</strong>, viene en establecer las siguientes
            siguientes bases notariales, en adelante, Las Bases, las cuales
            corresponden a la promoción denominada <strong>Gift Card</strong>
            que a continuación se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              I)La Inmobiliaria, con motivo de la venta de su proyecto
              inmobiliario ;Barrio Viña Carmen y con el objeto de sus clientes,
              ha decidido implementar una promoción, por tiempo limitado, según
              los términos y condiciones que se indican a continuación.
            </p>
            <p>
              II) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos y su posterior pronta
              entrega material, promoción que regirá entre los días 1 de marzo
              de 2025 hasta el día 31 de marzo de 2025 inclusive, según los
              términos y condiciones que se establecen en este instrumento.
            </p>
            <p>
              La promoción consiste en que toda persona natural que cumpla con
              los requisitos señalados en estas bases, recibirá junto con la
              compraventa de una unidad, sin costo para ella, una Gift Card por
              el valor que corresponda según el Valor del inmueble respectivo,
              de la conformidad con listado que constituye el Anexo A del
              presente instrumento. Es decir, toda persona natural que reserve
              una unidad y celebre un contrato de promesa de compraventa por
              este durante el periodo de la promoción y, cumpliendo las
              condiciones establecidas en este instrumento, en adelante &quot;
              <strong>El Beneficiario</strong>&quot; o &quot;
              <strong>El Cliente</strong>&quot;, recibirá junto con la
              suscripción de la escritura de compraventa respectiva, una Gift
              Card por el valor que corresponda a dicha unidad.
            </p>
            <p>
              Será condición escencial para la entrega la Gift Card que el
              Beneficiario suscriba la escritura de compraventa del inmueble
              reservado o promesado.
            </p>
            <p>
              III) Se deja expresa constancia que esta promoción, está dirigida
              exclusivamente a personas naturales que realicen la reserva o
              promesa y posteriormente suscriban el contrato de compraventa
              definitiva, sin el desarrollo de una gestión comercial ni
              publicidad y sin asumir, de ninguna manera, la representación de
              las sociedades singularizadas precedentemente. El beneficiario no
              podrá ser una persona natural o jurídica que esté relacionado
              directa o indirectamente con actuales operaciones comerciales de
              compra y venta de propiedades, ya sea dentro de la industria
              inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción en promoción.
            </p>
            <p>
              Uno) Sólo podrán participar como Beneficiarios, las personas
              naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, deberán inscribirse conjuntamente con la
              suscripción de la reserva o promesa de compraventa, mediante en el
              formulario correspondiente con su nombre completo, correo
              electrónico y número de teléfono. Los datos del Beneficiario se
              tendrán como únicos y válidos para efectos de las presentes Bases
              y cuya exactitud, veracidad y contenido, es responsable de manera
              exclusiva de quien se registre. Solo podrán participar quienes se
              registren en tiempo y forma, el registro es de exclusiva
              responsabilidad del participante o cliente. El registro se
              realizará al momento de la reserva de la propiedad en sala de
              ventas, o en los siguientes 7 días posteriores en caso de ser una
              reserva online, para la cual se le enviará el formulario de
              inscripción por correo electrónico.
            </p>
            <p>
              Tres) La inscripción se realiza con el asesor de ventas y, es
              personal e intransferible por lo que la calidad de Beneficiario no
              podrá ser cedida a ningún título.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Beneficiario,
              este deberá declarar como íntegramente conocidas y aceptadas las
              presentes Bases.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: Requisitos Beneficiario
            </p>
            <p>
              El Beneficiario que haga la reserva o suscriba la promesa, debe
              cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Beneficiario debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva;
              </li>
              <li>
                El Beneficiario no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>
                El Beneficiario deberá suscribir la respectiva reserva o promesa
                entre los días 1 de marzo y 31 de marzo inclusive.
              </li>
              <li>
                El Beneficiario deberá haber realizado la reserva pagando el
                valor inicial en ella consignado a entera satisfaction de la
                inmobiliaria.
              </li>
              <li>
                El Beneficiario debe concurrir a firmar la promesa de
                compraventa dentro de los 30 días siguientes a la reserva del
                inmueble.
              </li>
              <li>
                El Beneficiario deberá ser un &#39;Nuevo Cliente&#39;, que
                reserve la unidad y celebre la respectiva promesa de compraventa
                las fechas y dentro de los plazos estipulados en el presente
                documento.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Beneficiario que
              haya hecho la reserva o promesa, de una de las unidades de los
              proyectos indicados en la cláusula sexta, durante la vigencia de
              la presente promoción, obtendrá de la Inmobiliaria:
            </p>
            <p>
              I) El Premio de una Gift Card por el monto en pesos que
              corresponda de conformidad con lo estipulado en el Anexo A.
            </p>
            <p>
              Independiente del número de personas que firmen la respectiva
              reserva y posterior promesa, la promoción tiene un tope de máximo
              de una Gift Card por unidad reservada o promesada.
            </p>
            <p>
              II) Se deja expresamente establecido que La Inmobiliaria no asume
              responsabilidad alguna respecto del cumplimiento por parte del
              Beneficiario de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              III) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo futuro comprador,
              independientemente de que la reserva o promesa de compraventa se
              realice en comunidad o en forma conjunta por dos o más personas
              naturales y/o jurídicas. Atendido lo anterior, sólo será
              procedente la entrega de un premio por cada reserva y escritura de
              compraventa firmada, independientemente del número de futuros
              compradores que suscriban la reserva.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              QUINTO: Proyecto Inmobiliario incluido en la promoción.
            </p>
            <p>
              Se incluye en la presente promoción el proyecto inmobiliario
              denominado Barrio Viña Carmen, ubicado en la comuna de Buin, de
              Inmobiliaria Esepe Veme Sur S.A.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Estipulaciones generales.
            </p>
            <p>
              Uno) Se deja expresamente establecido que entre los Participantes,
              por una parte, y La Inmobiliaria, por la otra, no existirá
              relación laboral, de dependencia ni subordinación de ninguna
              especie;
            </p>
            <p>
              Dos) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria;
            </p>
            <p>
              Tres) Los Beneficiarios autorizan a Inmobiliaria para incluir sus
              nombres en bases de datos y efectuar su tratamiento en conformidad
              a la ley 19.628. Del mismo modo, los Beneficiarios asumen
              exclusiva responsabilidad respecto de los datos entregados, sin
              que a la Inmobiliaria le quepa responsabilidad alguna al respecto;
            </p>
            <p>
              Cuatro) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Cinco) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Seis) Para cualquier diferencia o controversia que la en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
            <p>
              Siete) Las presentes Bases de la promoción están protocolizadas
              ante Notario Público aquí.
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">
              Pablo René Schneider Ponce
            </p>
            <p>Gerente General</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE VEME SUR S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Fourth Terms and Conditions - SUMMER PROMOTION */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES LEGALES PROMOCIÓN VERANO
          </h3>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 2 de enero de 2025, comparece:{' '}
            <strong>INMOBILIARIA ESEPE VEME SUR S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.285.248-9;{' '}
            <strong>INMOBILIARIA ALTOS DEL VALLE S.A.</strong>, sociedad del
            giro inmobiliario, Rol Único Tributario número 76.375.357-3;{' '}
            <strong>INMOBILIARIA ESEPE-VEME S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.570.640-8, todas
            representadas por don Pablo René Schneider Ponce, chileno, casado y
            separado de bienes, ingeniero civil, cédula de identidad número
            8.776.244-0, todos con domicilio para estos efectos en calle
            Alcántara número 656, comuna de Las Condes, Región Metropolitana, en
            adelante todas en conjunto como.
            <strong>La Inmobiliaria</strong>
            <strong>Las Inmobiliarias</strong>, vienen en establecer las
            siguientes bases notariales, en adelante, Las Bases, las cuales
            corresponden a la promoción denominada <strong>Gift Card</strong>{' '}
            que a continuación se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              I) La Inmobiliaria, con motivo de la venta de sus respectivos
              proyectos inmobiliarios y con el objeto de beneficiar a sus
              clientes, ha decidido implementar una promoción, por tiempo
              limitado, según los términos y condiciones que se indican a
              continuación.
            </p>
            <p>
              II) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos y su posterior pronta
              entrega material, promoción que regirá entre los días 2 de enero
              de 2025 hasta el día 28 de febrero de 2025 inclusive, según los
              términos y condiciones que se establecen en este instrumento.
            </p>
            <p>
              La promoción consiste en que toda persona natural que cumpla con
              los requisitos señalados en estas bases, recibirá junto con la
              compraventa de una unidad, sin costo para ella, una Gift Card de
              retail por $1.000.000.-(un millón de pesos) designada por la
              inmobiliaria. Es decir, toda persona natural que reserve una
              unidad y celebre un contrato de promesa de compraventa por este
              durante el periodo de la promoción y, cumpliendo las condiciones
              establecidas en este instrumento, en adelante
              <strong>El Beneficiario</strong> o <strong>El Cliente</strong>,
              recibirá junto con la suscripción de la escritura de compraventa
              respectiva, una $1.000.000.-(un millón de pesos).
            </p>
            <p>
              Será condición escencial para la entrega la Gift Card que el
              Beneficiario suscriba la escritura de compraventa del inmueble
              reservado o promesado.
            </p>
            <p>
              III) Se deja expresa constancia que esta promoción, está dirigida
              exclusivamente a personas naturales que realicen la reserva o
              promesa y posteriormente suscriban el contrato de compraventa
              definitiva, sin el desarrollo de una gestión comercial ni
              publicidad y sin asumir, de ninguna manera, la representación de
              las sociedades singularizadas precedentemente. El beneficiario no
              podrá ser una persona natural o jurídica que esté relacionado
              directa o indirectamente con actuales operaciones comerciales de
              compra y venta de propiedades, ya sea dentro de la industria
              inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción en promoción.
            </p>
            <p>
              Uno) Sólo podrán participar como Beneficiarios, las personas
              naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, deberán inscribirse conjuntamente con la
              suscripción de la reserva o promesa de compraventa, con su nombre
              completo, correo electrónico, rut y número de teléfono. Los datos
              del Beneficiario se tendrán como únicos y válidos para efectos de
              las presentes Bases y cuya exactitud, veracidad y contenido, es
              responsable de manera exclusiva de quien se registre. Solo podrán
              participar quienes se registren en tiempo y forma, el registro es
              de exclusiva responsabilidad del participante o cliente. El
              registro se realizará al momento de la reserva de la propiedad en
              sala de ventas, o en los siguientes 7 días posteriores en caso de
              ser una reserva online, para la cual se le enviará el formulario
              de inscripción por correo electrónico.
            </p>
            <p>
              Tres) La inscripción se realiza con el asesor de ventas y, es
              personal e intransferible por lo que la calidad de Beneficiario no
              podrá ser cedida a ningún título.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Beneficiario,
              este deberá declarar como íntegramente conocidas y aceptadas las
              presentes Bases.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: Requisitos Beneficiario
            </p>
            <p>
              El Beneficiario que haga la reserva o suscriba la promesa, debe
              cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Beneficiario debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva;
              </li>
              <li>
                El Beneficiario no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>
                El Beneficiario deberá suscribir la respectiva reserva o promesa
                entre los días 2 de enero y 28 de febrero inclusive.
              </li>
              <li>
                El Beneficiario deberá haber realizado la reserva pagando el
                valor inicial en ella consignado a entera satisfacción de la
                inmobiliaria.
              </li>
              <li>
                El Beneficiario deberá ser un nuevo Cliente, que reserve la
                unidad y celebre la respectiva promesa de compraventa durante
                las fechas y dentro de los plazos estipulados en el presente
                documento.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Beneficiario que
              haya hecho la reserva o promesa, de una de las unidades de los
              proyectos indicados en la cláusula sexta, durante la vigencia de
              la presente promoción, obtendrá de la Inmobiliaria:
            </p>
            <p>
              I) El Premio de una Gift Card por $1.000.000.-(un millón de
              pesos).
            </p>
            <p>
              Independiente del número de personas que firmen la respectiva
              reserva y posterior promesa, la promoción tiene un tope de máximo
              de una Gift Card por unidad escriturada.
            </p>
            <p>
              II) Se deja expresamente establecido que La Inmobiliaria no asume
              responsabilidad alguna respecto del cumplimiento por parte del
              Beneficiario de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              III) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo futuro comprador,
              independientemente de que la reserva o promesa de compraventa se
              realice en comunidad o en forma conjunta por dos o más personas
              naturales y/o jurídicas. Atendido lo anterior, sólo será
              procedente la entrega de un premio por cada reserva y escritura de
              compraventa firmada, independientemente del número de futuros
              compradores que suscriban la reserva.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              QUINTO: Proyectos Inmobiliarios incluidos en la promoción.
            </p>
            <p>
              Se incluyen en la presente promoción los siguientes proyectos
              inmobiliarios con entrega inmediata de las Inmobiliarias
              singularizadas en la comparecencia del presente instrumento:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Altos del Valle; ubicada en la comuna de Puente Alto, de
                Inmobiliaria Altos del Valle S.A.
              </li>
              <li>
                Barrio Viña Carmen; ubicada en la comuna de Buin, de
                Inmobiliaria Esepe Veme Sur S.A.
              </li>
              <li>
                San Francisco; ubicada en la comuna de Puente Alto, de
                Inmobiliaria Esepe Veme S.A.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Estipulaciones generales.
            </p>
            <p>
              Uno) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria;
            </p>
            <p>
              Dos) Los Beneficiarios autorizan a Inmobiliaria para incluir sus
              nombres en bases de datos y efectuar su tratamiento en conformidad
              a la ley 19.628. Del mismo modo, los Beneficiarios asumen
              exclusiva responsabilidad respecto de los datos entregados, sin
              que a la Inmobiliaria le quepa responsabilidad alguna al respecto;
            </p>
            <p>
              Tres) Se deja expresa constancia que la Inmobiliaria no asume
              obligación ni responsabilidad alguna frente a los participantes
              respecto a la gestión, reserva y venta de las unidades
              respectivas. De esta forma, la Inmobiliaria podrá negociar
              libremente con los participantes, sin restricciones, limitaciones
              o condiciones de ninguna naturaleza. En este sentido, los
              participantes podrán optar a otras promociones especiales o
              transitorias que cada proyecto pudiere mantener vigente a la época
              de cierre del negocio.
            </p>
            <p>
              Cuatro) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Cinco) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Seis) Para cualquier diferencia o controversia que la en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
            <p>
              Siete) Las presentes Bases de la promoción están protocolizadas
              ante Notario Público.
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">Pablo Schneider Ponce</p>
            <p>Representante Legal</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE VEME SUR S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ALTOS DEL VALLE S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE-VEME S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Fifth Terms and Conditions - CAR PROMOTION */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES LEGALES PROMOCIÓN
          </h3>
          <p className="text-lg">Te regalamos un cero kilómetro.</p>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 2 de diciembre de 2024, comparece:{' '}
            <strong>INMOBILIARIA ESEPE VEME SUR S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.285.248-9;{' '}
            <strong>INMOBILIARIA ALTOS DEL VALLE S.A.</strong>, sociedad del
            giro inmobiliario, Rol Único Tributario número 76.375.357-3;{' '}
            <strong>INMOBILIARIA ESEPE-VEME S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.570.640-8, todas
            representadas por don Pablo René Schneider Ponce, chileno, casado y
            separado de bienes, ingeniero civil, cédula de identidad número
            8.776.244-0, todos con domicilio para estos efectos en calle
            Alcántara número 656, comuna de Las Condes, Región Metropolitana, en
            adelante todas en conjunto como <strong>La Inmobiliaria</strong> o
            <strong>Las Inmobiliarias</strong>, vienen en establecer las
            siguientes bases notariales, en adelante, Las Bases, las cuales
            corresponden a la promoción denominada
            <strong>Te regalamos un cero kilómetro</strong> que a continuación
            se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              I)La Inmobiliaria, con motivo de la venta de sus respectivos
              proyectos inmobiliarios y con el objeto de beneficiar a sus
              clientes, ha decidido implementar una promoción, por tiempo
              limitado, según los términos y condiciones que se indican a
              continuación.
            </p>
            <p>
              II) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos y su posterior pronta
              entrega material, promoción que regirá entre los días 7 de
              diciembre de 2024 hasta el día 31 de diciembre de 2024 inclusive,
              según los términos y condiciones que se establecen en este
              instrumento.
            </p>
            <p>
              La promoción consiste en que toda persona natural que cumpla con
              los requisitos señalados en estas bases, recibirá junto con la
              compraventa de una unidad, sin costo para ella, un automóvil cero
              kilómetros. Es decir, toda persona natural que reserve una unidad
              y celebre un contrato de promesa de compraventa durante el periodo
              de la promoción y, cumpliendo las condiciones establecidas en este
              instrumento, en adelante <strong>El Beneficiario</strong> o
              <strong>El Cliente</strong>, recibirá junto con la suscripción de
              la escritura de compraventa respectiva, un automóvil cero
              kilómetros.
            </p>
            <p>
              Será condición escencial para la entrega del automovil que el
              Beneficiario suscriba la escritura de compraventa del inmueble
              reservado o promesado.
            </p>
            <p>
              III) Se deja expresa constancia que esta promoción, está dirigida
              exclusivamente a personas naturales que realicen la reserva o
              promesa y posteriormente suscriban el contrato de compraventa
              definitiva, sin el desarrollo de una gestión comercial ni
              publicidad y sin asumir, de ninguna manera, la representación de
              las sociedades singularizadas precedentemente. El beneficiario no
              podrá ser una persona natural o jurídica que esté relacionado
              directa o indirectamente con actuales operaciones comerciales de
              compra y venta de propiedades, ya sea dentro de la industria
              inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción en promoción.
            </p>
            <p>
              Uno) Sólo podrán participar como Beneficiarios, las personas
              naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, deberán inscribirse conjuntamente con la
              suscripción de la reserva o promesa de compraventa, mediante en el
              formulario correspondiente con su nombre completo, correo
              electrónico y número de teléfono. Los datos del Beneficiario se
              tendrán como únicos y válidos para efectos de las presentes Bases
              y cuya exactitud, veracidad y contenido, es responsable de manera
              exclusiva de quien se registre. Solo podrán participar quienes se
              registren en tiempo y forma, el registro es de exclusiva
              responsabilidad del participante o cliente. El registro se
              realizará al momento de la reserva de la propiedad en sala de
              ventas, o en los siguientes 7 días posteriores en caso de ser una
              reserva online, para la cual se le enviará el formulario de
              inscripción por correo electrónico.
            </p>
            <p>
              Tres) La inscripción se realiza con el asesor de ventas y, es
              personal e intransferible por lo que la calidad de Beneficiario no
              podrá ser cedida a ningún título.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Beneficiario,
              este deberá declarar como Íntegramente conocidas y aceptadas las
              presentes Bases.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: Requisitos Beneficiario
            </p>
            <p>
              El Beneficiario que haga la reserva o suscriba la promesa, debe
              cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Beneficiario debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva;
              </li>
              <li>
                El Beneficiario no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>El Beneficiario no puede ser funcionario de Inmobiliaria;</li>
              <li>
                El Beneficiario no puede ser familiar de algún trabajador de La
                Inmobiliaria ni sus empresas relacionadas.
              </li>
              <li>
                El Beneficiario deberá suscribir la respectiva reserva o promesa
                entre los días 7 y 31 de diciembre inclusive.
              </li>
              <li>
                El Beneficiario deberá haber realizado la reserva pagando el
                valor inicial en ella consignado a entera satisfacción de la
                inmobiliaria.
              </li>
              <li>
                El Beneficiario deberá firmar la pre-entrega del inmueble con
                anterioridad a la compraventa, informando cualquier observación
                para su solución post-venta, aceptando que el inmueble se
                entenderá para todos los efectos materialmente entregado desde
                la firma de la compraventa, momento desde el cual todos los
                gastos relacionados a él serán del adquirente.
              </li>
              <li>
                El Beneficiario deberá ser un Nuevo Cliente, que reserve la
                unidad y celebre la respectiva promesa de compraventa durante
                las fechas y dentro de los plazos estipulados en el presente
                documento.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Beneficiario que
              haya hecho la reserva o promesa, de una de las unidades de los
              proyectos indicados en la cláusula sexta, durante la vigencia de
              la presente promoción, obtendrá de la Inmobiliaria:
            </p>
            <p>
              I) El Premio de un auto cero kilómetros Suzuki Nuevo S-Presso 1.0
              GLX, o equivalente de igual o menor valor. En caso de que la
              automotora DERCO no cuente con stock al momento de la suscripción
              de la escritura de compraventa definitiva por el Beneficiario, La
              Inmobiliaria se reserva el derecho de elegir un vehículo de
              similares características y valor, a su exclusivo criterio.
            </p>
            <p>
              Independiente del número de personas que firmen la respectiva
              reserva y posterior promesa, la promoción tiene un tope de máximo
              de un automóvil por unidad reservada o promesada.
            </p>
            <p>
              II) Se deja expresamente establecido que La Inmobiliaria no asume
              responsabilidad alguna respecto del cumplimiento por parte del
              Beneficiario de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              III) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo futuro comprador,
              independientemente de que la reserva o promesa de compraventa se
              realice en comunidad o en forma conjunta por dos o más personas
              naturales y/o jurídicas. Atendido lo anterior, sólo será
              procedente la entrega de un premio por cada reserva y escritura de
              compraventa firmada, independientemente del número de futuros
              compradores que suscriban la reserva.
            </p>
            <p>
              IV) La promoción será válida hasta agotar stock en la automotora
              otorgante de los vehiculos, denominada DERCO.
            </p>
            <p>
              V) El color del vehículo estará sujeto a disponibilidad por la
              automotora, por lo que no dará derecho a elección por parte del
              Beneficiario.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              QUINTO: Proyectos Inmobiliarios incluidos en la promoción.
            </p>
            <p>
              Se incluyen en la presente promoción los siguientes proyectos
              inmobiliarios de las Inmobiliarias singularizadas en la
              comparecencia del presente instrumento:
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Estipulaciones generales.
            </p>
            <p>
              Uno) No podrán participar en la promoción a que se refieren estas
              Bases los funcionarios de Inmobiliaria o cualquier otra empresa
              del grupo, ni sus familiares directos;
            </p>
            <p>
              Dos) Se deja expresamente establecido que entre los Participantes,
              por una parte, y La Inmobiliaria, por la otra, no existirá
              relación laboral, de dependencia ni subordinación de ninguna
              especie;
            </p>
            <p>
              Tres) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria.
            </p>
            <p>
              Cuatro) Los Beneficiarios autorizan a Inmobiliaria para incluir
              sus nombres en bases de datos y efectuar su tratamiento en
              conformidad a la ley 19.628. Del mismo modo, los Beneficiarios
              asumen exclusiva responsabilidad respecto de los datos entregados,
              sin que a la Inmobiliaria le quepa responsabilidad alguna al
              respecto;
            </p>
            <p>
              Cinco) Se deja expresa constancia que la Inmobiliaria no asume
              obligación ni responsabilidad alguna frente a los participantes
              respecto a la gestión, reserva y venta de las unidades
              respectivas. De esta forma, la Inmobiliaria podrá negociar
              libremente con los participantes, sin restricciones, limitaciones
              o condiciones de ninguna naturaleza. En este sentido, los
              participantes podrán optar a otras promociones especiales o
              transitorias que cada proyecto pudiere mantener vigente a la época
              de cierre del negocio.
            </p>
            <p>
              Seis) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Siete) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Ocho) Para cualquier diferencia o controversia que la en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
          </div>

          <div className="mt-6">
            <p>
              Descarga las presentes Bases Legales de la promoción Llévate un
              Auto 0 km protocolizadas ante Notario Público{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                AQUÍ
              </a>
              .
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">
              Pablo René Schneider Ponce
            </p>
            <p>Representante Legal</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE VEME SUR S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ALTOS DEL VALLE S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE-VEME S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Sixth Terms and Conditions - REFERRAL BENEFIT */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            BASES LEGALES PROMOCIÓN
          </h3>
          <p className="text-lg">Beneficio Referidos</p>
        </div>

        <div className="space-y-6 text-justify">
          <p>
            En Santiago de Chile, a 17 de diciembre de 2024, comparece{' '}
            <strong>INMOBILIARIA ESEPE VEME SUR S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.285.248-9;{' '}
            <strong>INMOBILIARIA ALTOS DEL VALLE S.A.</strong>, sociedad del
            giro inmobiliario, Rol Único Tributario número 76.375.357-3;{' '}
            <strong>INMOBILIARIA ESEPE-VEME S.A.</strong>, sociedad del giro
            inmobiliario, Rol Único Tributario número 76.570.640-8, todas
            representadas por don Pablo René Schneider Ponce, chileno, casado y
            separado de bienes, ingeniero civil, cédula de identidad número
            8.776.244-0, todos con domicilio para estos efectos en calle
            Alcántara número 656, comuna de Las Condes, Región Metropolitana, en
            adelante todas en conjunto como <strong>La Inmobiliaria</strong> o
            <strong>Las Inmobiliarias</strong>, vienen en establecer las
            siguientes bases notariales, en adelante, Las Bases, las cuales
            corresponden a la promoción denominada
            <strong>Beneficio Referidos</strong>, que a continuación se detalla:
          </p>

          <div>
            <p className="font-bold text-[#123752]">
              PRIMERO: Antecedentes Generales.
            </p>
            <p>
              Uno) La Inmobiliaria, con motivo de la venta de sus respectivos
              proyectos inmobiliarios y con el objeto de beneficiar a sus
              clientes, personas naturales, mayores de 18 años, extranjeros o
              nacionales, ha decidido implementar la promoción Referidos, por
              tiempo limitado y según los términos y condiciones que se indican
              a continuación.
            </p>
            <p>
              Dos) La promoción tiene por finalidad publicitar e incentivar la
              compra de unidades de determinados proyectos por el plazo fijo
              entre los días 17 de diciembre de 2024 hasta 31 de marzo 2025,
              según los términos y condiciones que se establecen en este
              instrumento.
            </p>
            <p>
              Para estos efectos se ha diseñado un sistema de promoción de
              inmuebles en virtud del cual, toda persona natural que tenga
              interés y cumpla con los requisitos señalados en estas bases,
              podrá referir o recomendar a terceros interesados en adquirir
              viviendas de las inmobiliarias singularizadas en el numeral sexto
              de estas Bases, lo que permitirá obtener un premio, el que se
              detalla en la cláusula quinta de estas Bases. Para ello es
              condición esencial que el referido suscriba una compraventa de una
              vivienda en los proyectos que forman parte de la presente
              promoción, en los términos especificados en la cláusula quinta de
              este instrumento.
            </p>
            <p>
              Tres) Conforme lo señalado precedentemente, las presentes Bases
              contienen los términos y condiciones en virtud de los cuales se
              podrá acceder a la promoción de Referidos.
            </p>
            <p>
              Cuarto) Se deja expresa constancia que esta promoción de
              Referidos, está dirigida exclusivamente a personas naturales que
              refieran o recomienden de manera directa e individual a
              potenciales compradores, sin el desarrollo de una gestión
              comercial ni publicidad y sin asumir, de ninguna manera, la
              representación de las sociedades singularizadas precedentemente.
              El referido no podrá ser una persona natural o jurídica que esté
              relacionado directa o indirectamente con operaciones comerciales
              de compra y venta de propiedades, ya sea dentro de la industria
              inmobiliaria o de la construcción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEGUNDO: Inscripción del Recomendante y del Referido.
            </p>
            <p>
              Uno) Sólo podrán inscribirse como Recomendante y Referido,
              personas naturales mayores de edad.
            </p>
            <p>
              Dos) Para estos efectos, ambos se deberán inscribir en sala de
              venta del proyecto, indicando nombre completo, correo electrónico
              y número de teléfono, del Recomendante y del Referido. Los datos
              del Referido se tendrán como únicos y válidos para efectos de las
              presentes Bases y cuya exactitud, veracidad y contenido, es
              responsable de manera exclusiva el Recomendante.
            </p>
            <p>
              Tres) La inscripción es personal e intransferible por lo que la
              calidad de Recomendante no podrá ser cedida a ningún título. El
              Recomendante deberá efectuar la inscripción que hace referencia en
              el numeral anterior, al momento de entregar los datos del
              recomendado al asesor inmobiliario en sala de ventas.
            </p>
            <p>
              Cuatro) Al momento de efectuar la inscripción del Referido, el
              Recomendante deberá declarar como íntegramente conocidas y
              aceptadas las presentes Bases, declarando, asimismo, no tener
              conflicto de interés con el Referido.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">TERCERO: Recomendante</p>
            <p>El Recomendante debe cumplir con los siguientes requisitos:</p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Recomendante debe ser una persona natural, mayor de edad y
                con cédula nacional de identidad vigente o extranjero con
                residencia definitiva, que haya adquirido un inmueble de un
                proyecto de La Inmobiliaria;
              </li>
              <li>
                El Recomendante no podrá ser una persona natural o jurídica que
                esté relacionado directa o indirectamente con operaciones
                comerciales de compra y venta de propiedades, ya sea dentro de
                la industria inmobiliaria o de la construcción;
              </li>
              <li>El Recomendante no puede ser el mismo Referido;</li>
              <li>El Recomendante no puede ser funcionario de Inmobiliaria;</li>
              <li>
                El Recomendante no puede ser familiar de algún trabajador de La
                Inmobiliaria ni sus empresas relacionadas.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: Referidos.</p>
            <p>
              Uno) Los Referidos deberán cumplir con los siguientes requisitos:
            </p>
            <ul className="list-disc pl-8 space-y-4">
              <li>
                El Referido debe ser una persona natural, mayor de edad y con
                cédula nacional de identidad vigente o extranjero con residencia
                definitiva;
              </li>
              <li>El Referido no puede ser el mismo Recomendante;</li>
              <li>El Referido no podrá ser cliente de La Inmobiliaria;</li>
              <li>
                El Referido no puede ser funcionario de Inmobiliaria o cualquier
                otra empresa relacionada;
              </li>
              <li>
                El referido no puede ser familiar de algún trabajador de
                Inmobiliaria o cualquier otra empresa relacionada;
              </li>
            </ul>
            <p>
              Dos) El premio que obtenga el Recomendante tendrá un tope máximo
              de cuatro beneficios por Referido, aun cuando dicho Referido
              celebre compraventas respecto a más de cuatro unidades en
              cualquiera de los proyectos objeto de esta promoción.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">QUINTO: Beneficio.</p>
            <p>
              Uno) El beneficio o premio establecido para el Recomendante, cuyo
              Referido haya suscrito válidamente escritura de compraventa de uno
              de las casas de los proyectos indicados en la cláusula sexta, en
              el plazo máximo de 30 días corridos contados desde la suscripción
              de dicha compraventa tanto por el Referido como por la
              Inmobiliaria:
            </p>
            <p>
              Dos) El premio consiste en una Gift Card de $350.000 de cualquier
              empresa de retail que designe la Inmobiliaria.
            </p>
            <p>
              Tres) El premio que obtenga el Recomendante tendrá un tope máximo
              de cuatro gift cards por Referido, aun cuando dicho Referido
              celebre contratos de compraventa por más de cuatro unidades en
              cualquiera de los proyectos objeto de esta promoción.
            </p>
            <p>
              Cuatro) Se deja expresamente establecido que La Inmobiliaria no
              asume responsabilidad alguna respecto del cumplimiento por parte
              del Referido de los hechos, actos o contratos que dependan de él o
              de las instituciones que otorguen el financiamiento para concretar
              la operación de compra.
            </p>
            <p>
              Cinco) Si dos o más Recomendantes hubieren recomendado a un mismo
              Referido, el premio será otorgado a quien lo hubiere recomendado
              primero, según la fecha y hora de registro. La acreditación del
              día y hora de la inscripción se efectuará en base a los reportes
              que emita la Inmobiliaria, los que producirán plena prueba para
              todos los efectos legales.
            </p>
            <p>
              Seis) Para todos los efectos legales, se entenderá que las
              operaciones de compraventa tienen un solo comprador,
              independientemente de que la compraventa se realice en comunidad o
              en forma conjunta por dos o más personas naturales y/o jurídicas.
              Atendido lo anterior, sólo será procedente el pago de un premio
              por cada compraventa firmada, independientemente del número de
              compradores que suscriban la escritura.
            </p>
            <p>
              Siete) El beneficio o premio establecido para un Nuevo Cliente,
              que acuda a firmar con un Referido:
            </p>
            <p>
              Siete) Un descuento de un 3% sobre el precio de lista del
              inmueble.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEXTO: Proyectos Inmobiliarios incluidos en la promoción.
            </p>
            <p>
              Se incluyen en la presente promoción los siguientes proyectos
              inmobiliarios de las Inmobiliarias singularizadas en la
              comparecencia del presente instrumento:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Altos del Valle; ubicada en la comuna de Puente Alto, de la
                inmobiliaria Altos del Valle S.A.
              </li>
              <li>
                Altos del Valle Oriente; ubicada en la comuna de Puente Alto, de
                la inmobiliaria Altos del Valle S.A.
              </li>
              <li>
                Barrio Viña Carmen; ubicada en la comuna de Buin, de la
                Inmobiliaria Esepe – Veme Sur S.A.
              </li>
              <li>
                San Francisco; ubicada en la comuna de Puente Alto, de la
                Inmobiliaria Esepe Veme S.A.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SEPTIMO: Estipulaciones generales.
            </p>
            <p>
              Uno) No podrán participar en la promoción a que se refieren estas
              Bases los funcionarios de Inmobiliaria o cualquier otra empresa
              del grupo, ni sus familiares directos;
            </p>
            <p>
              Dos) Se deja expresamente establecido que entre los Recomendantes
              y/o Referidos, por una parte, y La Inmobiliaria, por la otra, no
              existirá relación laboral, de dependencia ni subordinación de
              ninguna especie;
            </p>
            <p>
              Tres) La promoción a que se refiere estas Bases no es acumulable a
              otras promociones de La Inmobiliaria;
            </p>
            <p>
              Cuatro) Los Recomendantes autorizan a Inmobiliaria para incluir
              sus nombres en bases de datos y efectuar su tratamiento en
              conformidad a la ley 19.628. Del mismo modo. los Recomendantes
              asumen exclusiva responsabilidad respecto de los datos de los
              Referidos, sin que a la Inmobiliaria le quepa responsabilidad
              alguna al respecto;
            </p>
            <p>
              Cinco) Se deja expresa constancia que la Inmobiliaria no asume
              obligación ni responsabilidad alguna frente a los recomendantes
              respecto a la gestión y venta de las unidades respecto de los
              Referidos;
            </p>
            <p>
              De esta forma, la Inmobiliaria podrá negociar libremente con los
              Referidos, sin restricciones, limitaciones o condiciones de
              ninguna naturaleza. En este sentido, los Referidos podrán optar a
              otras promociones especiales o transitorias que cada proyecto
              pudiere mantener vigente a la época de cierre del negocio.
            </p>
            <p>
              Seis) La Inmobiliaria, en su calidad de titular de las presentes
              Bases, se reserva el derecho de aclarar, complementar y
              modificarlas mediante declaración escrita, la cual se
              protocolizará en la misma notaría.
            </p>
            <p>
              Siete) La participación en esta promoción implicará la aceptación
              irrestricta e inapelable de las presentes Bases en todas sus
              partes.
            </p>
            <p>
              Ocho) Para cualquier diferencia o controversia que ja en relación
              con la promoción y/o con estas Bases, las partes fijan su
              domicilio en la ciudad y comuna de Santiago y se someten a la
              competencia de sus Tribunales Ordinarios de Justicia.
            </p>
          </div>

          <div className="mt-6">
            <p>
              Nueve) Puedes descargar las presentes Bases de la promoción
              protocolizadas ante Notario Público{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                aquí
              </a>
              .
            </p>
          </div>

          <div className="text-center mt-10 mb-6">
            <p className="font-bold text-[#123752]">
              Pablo René Schneider Ponce
            </p>
            <p>Representante Legal</p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE VEME SUR S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ALTOS DEL VALLE S.A.
            </p>
            <p className="font-bold text-[#123752]">
              pp. INMOBILIARIA ESEPE-VEME S.A.
            </p>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-12 border-t-2 border-gray-300" />

        {/* Seventh Terms and Conditions - ECOMMERCE */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold uppercase text-[#123752]">
            TÉRMINOS Y CONDICIONES ECOMMERCE
          </h3>
        </div>

        <div className="space-y-6 text-justify">
          <div>
            <p className="font-bold text-[#123752]">PRIMERO: GENERALIDADES</p>
            <p>
              Este documento regula los términos y condiciones bajo los cuales
              Ud. tiene derecho a acceder y usar los servicios del sitio Web
              www.esepe.cl y de cualquier información, texto, video u otro
              material comunicado en el sitio web.
            </p>
            <p>
              En este sitio Web podrá usar, sin costo, el software y las
              aplicaciones para equipos móviles que le permitan navegar,
              visitar, comparar y si lo desea, adquirir los bienes que se
              exhiben aquí.
            </p>
            <p>
              Le recomendamos que lea detenidamente estas Condiciones e imprima
              o guarde una copia de las mismas en la unidad de disco local para
              su información.
            </p>
            <p>
              Estos Términos y Condiciones serán aplicados y se entenderán
              incorporados en cada uno de los contratos que celebre con
              Bschneider Consultores por medio de este sitio web.
            </p>
            <p>
              El uso de este sitio web, la aplicación de estos Términos y
              Condiciones, los actos que ejecute y los contratos que celebre por
              medio de este sitio web, se encuentran sujetos y sometidos a las
              leyes de la República de Chile y en especial a la ley 19.496 de
              protección de los derechos de los consumidores y el Decreto Nº 6,
              de 21 de enero de 2021, del Ministerio de Economía (Reglamento de
              Comercio Electrónico).
            </p>
            <p>
              Bschneider Consultores por lo tanto, aplicará estrictamente todos
              los beneficios, garantías y derechos reconocidos en favor de los
              consumidores en la ley 19.496 y el Reglamento de Comercio
              Electrónico. Además, Bschneider Consultores adhiere en todas sus
              partes al Código de Buenas Prácticas para el Comercio Electrónico
              de la Cámara de Comercio de Santiago, el cual se encuentra
              disponible en el siguiente link.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">SEGUNDO: COMUNICACIONES</p>
            <p>
              Para la comunicación de cualquier presentación, consulta o reclamo
              a propósito del uso de este sitio, o los contratos que en él se
              lleven a cabo, Bschneider Consultores, 77.218.240-6 designa como
              representante especial a don Pablo Schneider P., Director,
              disponible en el correo esepe@esepe.cl y en el teléfono de
              Servicio al Cliente 23712969; ambos domiciliados para estos
              efectos en calle Alcántara 656, comuna de Las Condes, ciudad de
              Santiago. Su personería para actuar por Bschneider Consultores
              costa en escritura pública de 10 de mayo del 2005 otorgada en la
              Notaría José Musalem Saffie.
            </p>
            <p>
              Bschneider Consultores se pondrá en contacto con usted a través de
              correo electrónico, teléfono o WhatsApp, según su preferencia de
              contacto indicada en el proceso de contratación.
            </p>
            <p>
              Bschneider Consultores se obliga a que en caso de enviarle
              información publicitaria o promocional, por correo electrónico u
              otro medio similar, ésta contendrá al menos la siguiente
              información:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Identificación del mensaje, que lo haga reconocible como
                publicidad o comunicación promocional, en el campo de asunto del
                mensaje.
              </li>
              <li>
                Existencia del derecho del consumidor o usuario a solicitar el
                cese de envíos de publicidad de ese tipo por Bschneider
                Consultores y la obligación de Bschneider Consultores de
                suspender esos envíos.
              </li>
              <li>
                Un procedimiento simple y eficaz para que el consumidor pueda
                hacer esa solicitud, indicando una dirección electrónica para
                estos efectos.
              </li>
              <li>
                La Identificación del anunciante con su denominación comercial.
              </li>
              <li>
                Tratándose de publicidad teaser, se cumplirá con las
                obligaciones señaladas precedentemente en la medida que se
                identifique la agencia que realiza la misma.
              </li>
            </ul>
            <p>
              Bschneider Consultores cesará el envío de los mensajes
              publicitarios o promocionales por correo electrónico u otros
              medios de comunicación individual equivalentes, a toda persona que
              hubiere solicitado expresamente la suspensión de esos envíos.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              TERCERO: LIBERTAD DE NAVEGACIÓN y ACEPTACIÓN DE LOS TÉRMINOS Y
              CONDICIONES
            </p>
            <p>
              La mera visita de este sitio no impone ningún tipo de obligación
              para el usuario, a menos que éste exprese de forma inequívoca, por
              medio de actos positivos, su voluntad de contratar con la empresa
              para adquirir bienes, en la forma indicada en estos términos y
              condiciones.
            </p>
            <p>
              Para aceptar estos Términos y Condiciones, el usuario deberá hacer
              click donde el sitio web de Bschneider Consultores ofrezca esta
              opción en la interfaz del usuario con la frase he leído y u otra u
              otra equivalente que permita dar su consentimiento inequívoco
              inequívoco respecto de la aceptación.
            </p>
            <p className="font-semibold text-[#4A6793]">
              Modificación y Terminación de las condiciones.
            </p>
            <p>
              Estos Términos y Condiciones podrán ser modificadas por Bschneider
              Consultores cuando lo considere oportuno haciendolo público en
              www.esepe.cl la versión más actualizada.
            </p>
            <p>
              Estas modificaciones serán comunicadas por Bschneider Consultores
              a los usuarios que en la configuración de su cuenta hayan indicado
              que desean recibir notificaciones de los cambios de estos Términos
              y Conditions.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">CUARTO: REGISTRO</p>
            <p>
              El registro en el sitio y el uso de contraseña no se solicita para
              contratar.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">QUINTO: CÓMO CONTRATAR</p>
            <p>
              Para realizar una reserva de propiedad en este sitio se debe ser
              mayor de edad. Además deberá seguir los siguientes pasos haciendo
              click en el campo correspondiente:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Para iniciar el proceso de contratación es necesario que
                confirme haber leído y aceptado estos Términos y Condiciones.
              </li>
              <li>
                Seleccione el producto que le interesa y agréguelo a su carro de
                compra.
              </li>
              <li>
                Una vez hecha la orden, se desplegará en la pantalla: Una
                descripción del producto contratado.
              </li>
              <li>Envío de la información al correo electrónico registrado.</li>
              <li>
                La orden luego pasará automáticamente a un proceso de
                confirmación de identidad, resguardándose siempre la seguridad y
                privacidad del usuario y del proceso de contratación,
                disponibilidad, vigencia y cupo del medio de pago que se haya
                seleccionado.
              </li>
              <li>
                No se verá afectado el comprador en sus derechos ni tampoco se
                le efectuarán cargos, sin que sea confirmada su identidad.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">SEXTO: MEDIOS DE PAGO</p>
            <p>
              Salvo que se señale un medio diferente para casos u ofertas
              específicos, los productos que se informan en este sitio sólo
              podrán ser pagados por medio de:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Tarjeta de crédito bancarias Visa, Mastercard, Dinners Club
                International o American Express, emitidas en Chile o en el
                extranjero, siempre que mantengan un contacto vigente para este
                efecto con Bschneider Consultores.
              </li>
              <li>
                Tarjetas de débito bancarias acogidas al sistema Redcompra,
                emitidas en Chile por bancos nacionales, que mantengan un
                contrato vigente para tales efectos con Bschneider Consultores.
              </li>
            </ul>
            <p>
              El pago con tarjetas de débito se realizará a través de WebPay,
              que es un sistema de pago electrónico que se encarga de hacer el
              cargo automático a la cuenta bancaria del usuario.
            </p>
            <p>
              Los usuarios declaran que entienden que estos medios de pago o
              portales de pago pertenecen a terceras empresas proveedoras de
              estos servicios, independientes y no vinculadas a Bschneider
              Consultores, por lo que la continuidad de su prestación de
              servicios en el tiempo, así como el correcto funcionamiento de sus
              herramientas y botones de pago en línea, será de exclusiva
              responsabilidad de las empresa proveedoras de estos servicios y en
              ningún caso de Bschneider Consultores.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              SÉPTIMO: DERECHOS Y GARANTÍAS
            </p>
            <p className="font-semibold text-[#4A6793]">
              Cambios y devoluciones.
            </p>
            <p>
              La reserva estará vigente por 15 días posteriores al abono del
              monto solicitado. En caso de que llegada dicha fecha no se hubiese
              firmado una promesa de compraventa, la reserva quedará sin efecto
              y el reservante deberá pagar a B.Schneider Consultores Ltda una
              multa equivalente a la suma entregada en este acto, por lo que
              autoriza expresamente a B.Schneider Consultores Ltda a retenerla.
              En caso de no lograr la pre-aprobación bancaria, el pago será
              devuelto al reservante. En caso de devolución de dinero la empresa
              realizará un abono en el medio de pago que haya utilizado.
            </p>
            <p className="font-semibold text-[#4A6793]">Derecho de Retracto.</p>
            <p>
              Usted contará con un plazo de 15 días para poner término al
              contrato de reserva celebrado por medios electrónicos. Este plazo
              de 15 días se contará desde que se haya enviado confirmación
              escrita de haberse perfeccionado el contrato, copia íntegra,
              acceso claro, comprensible e inequívoco a los términos y
              condiciones, así como la posibilidad de imprimirlos.
            </p>
            <p>
              Para ejercer este derecho podrá utilizar los mismos medios que
              empleó para celebrar el contrato.
            </p>
            <p>
              Bschneider Consultores tendrá la obligación de devolverle las
              sumas abonadas, sin retención de gastos, y a la mayor brevedad
              posible y, en cualquier caso, antes de 45 días a la comunicación
              del retracto.
            </p>
            <p className="font-semibold text-[#4A6793]">Garantías Legales.</p>
            <p>
              La propiedad estará sujeta a las garantías que la ley establece
              con los siguientes plazos diferenciados de las acciones por los
              daños y perjuicios provenientes de fallas, errores o defectos en
              la construcción:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                En el plazo de 10 años, en el caso de fallas o defectos que
                afecten la estructura soportante del inmueble.
              </li>
              <li>
                En el plazo de 5 años, cuando se trate de fallas o defectos de
                los elementos constructivos o de las instalaciones.
              </li>
              <li>
                En el plazo de 3 años, si hubiesen fallas o defectos que afecten
                a elementos de terminaciones o de acabado de las obras.
              </li>
            </ul>
            <p>
              Los plazos de prescripción anteriormente señalados se contarán
              desde la fecha de la recepción definitiva por parte del Dirección
              de Obras Municipales, con excepción del plazo de 3 años por fallas
              o defectos que afecten las terminaciones o el acabado de las
              obras, caso en el cual el plazo se cuenta desde la inscripción del
              inmueble en el Conservador de Bienes Raíces.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">OCTAVO: RESPONSABILIDAD</p>
            <p>En ningún caso Bschneider Consultores responderá por:</p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                La utilización indebida que Usuarios o visitantes de El Sitio
                puedan hacer de los materiales exhibidos, de los derechos de
                propiedad industrial y de los derechos de propiedad intelectual.
              </li>
              <li>
                Daños o eventuales daños y perjuicios que se le puedan causar a
                los Compradores y/o Usuarios por el funcionamiento de las
                herramientas de búsqueda y de los errores que se generen por los
                elementos técnicos de El Sitio o motor de búsqueda.
              </li>
              <li>
                Contenidos de las páginas a las que los Compradores o Usuarios
                puedan acceder con o sin autorización de Bschneider Consultores.
              </li>
              <li>
                El acceso de menores de edad o personas sin capacidad, bajo los
                términos de la legislación correspondiente, a los contenidos
                adherentes a la relación contractual que surja de El Sitio.
              </li>
              <li>
                Pérdida, mal uso o uso no autorizado de su código de validación,
                ya sea por parte del Usuario y/ o comprador Compradores, o de
                terceros, luego de realizada la compra en la forma expresada en
                los Términos y Condiciones. Asimismo, las partes reconocen y
                dejan constancia que la plataforma computacional proporcionada
                por Bschneider Consultores no es infalible, y por tanto, durante
                la vigencia del presente Contrato pueden verificarse
                circunstancias ajenas a la voluntad de Bschneider Consultores,
                que impliquen que El Sitio o la plataforma computacional no se
                encuentren operativos durante un determinado periodo de tiempo.
              </li>
              <li>
                Información de Bschneider Consultores o sus servicios que se
                encuentre en sitios distintos a www.esepe.cl
              </li>
            </ul>
            <p>
              En tales casos, Bschneider Consultores procurará restablecer El
              Sitio y el sistema computacional con la mayor celeridad posible,
              sin que por ello pueda imputársele algún tipo de responsabilidad.
            </p>
            <p>
              Bschneider Consultores no garantiza la disponibilidad y
              continuidad del funcionamiento de El Sitio y tampoco que en
              cualquier momento y tiempo, los Usuarios puedan acceder a las
              promociones y Ofertas del El Sitio.
            </p>
            <p>
              Bschneider Consultores no se hace responsable por los virus ni
              otros elementos en los documentos electrónicos almacenados en los
              sistemas informáticos de los Usuarios. Bschneider Consultores no
              responderá de los perjuicios ocasionados al Cliente, provenientes
              del uso inadecuado de las tecnologías puestas a disposición de
              éste, cualquiera sea la forma en la cual se utilicen
              inadecuadamente estas tecnologías. Bschneider Consultores no
              responderá de los daños producidos a El Sitio por el uso indebido
              y de mala fe de los Usuarios y/o Compradores. No obstante, en el
              evento de realizarse un doble pago por un Usuario o Comprador en
              El Sitio Bschneider Consultores devolverá la suma del sobrepago,
              dentro de los 5 días siguientes a la recepción del respectivo
              reclamo escrito del Usuario o Comprador, en el que se anexen los
              originales de los comprobantes del pago adicional a lo adquirido.
            </p>
            <p>
              En Login, registro y comunicación con empresas de medios de pago,
              Bschneider Consultores usa certificados digitales de seguridad
              (SSL), con el fin de encriptar comunicación. Bschneider
              Consultores no manipula ni almacena datos financieros de sus
              clientes.
            </p>
            <p>
              En todo caso, la responsabilidad de Bschneider Consultores,
              contractual, extracontractual o legal, con los Usuarios,
              Compradores o visitantes de El Sitio no excederá del precio
              efectivamente pagado por el Comprador en contraprestación por el
              producto o servicio, sin perjuicio de lo que determinen los
              Tribunales de Justicia.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              NOVENO: SEGURIDAD DE DATOS Y CLAVE SECRETA
            </p>
            <p className="font-semibold text-[#4A6793]">
              Medidas de seguridad implementadas por Bschneider Consultores
            </p>
            <p>
              Bschneider Consultores ha adoptado sistemas de seguridad efectivos
              y confiables con tal de proteger la integridad y confidencialidad
              de las transacciones y pago de sus consumidores y usuarios.
            </p>
            <p>
              Los datos entregados por los consumidores y usuarios se encuentran
              protegidos por el Uso de certificados SSL de Cloudflare:
              Garantizando la encriptación de datos transmitidos entre el
              servidor y los usuarios.
            </p>
            <p>
              Reglas WAF (Web Application Firewall) mediante Cloudflare:
              Protegiendo contra ataques web comunes como inyecciones SQL,
              scripts entre sitios (XSS) y otras vulnerabilidades.
            </p>
            <p>
              Servidor configurado para bloquear bots maliciosos y referencias
              de spam: Incluyendo bloqueos para escáneres de vulnerabilidades,
              agentes de usuario sospechosos, malware, adware, ransomware, y
              sitios maliciosos.
            </p>
            <p>
              Anti-DDoS: Mitigando ataques de denegación de servicio
              distribuidos para garantizar la disponibilidad del servicio.
              Bloqueo de detectores de temas de WordPress: Previniendo la
              exposición de información sensible sobre la plataforma utilizada.
            </p>
            <p>
              Fail2Ban: Implementando medidas de protección contra infractores
              recurrentes mediante la creación de reglas de bloqueo automáticas.
            </p>
            <p>
              Estas medidas combinadas proporcionan un entorno seguro y
              protegido para todos los usuarios y sus datos, asegurando que las
              transacciones se realicen de manera segura y confiable.
            </p>
            <p>El Sitio web esepe.cl no utliza cookies.</p>
            <p className="font-semibold text-[#4A6793]">
              Responsabilidad de los Usuarios respecto de la información
              registrada en el sitio.
            </p>
            <p>
              Bschneider Consultores adoptará las medidas necesarias y prudentes
              para resguardar la seguridad de los datos y clave secreta, como
              sistemas de encriptación de información, certificados de seguridad
              u otros que la empresa estime pertinente. En caso de detectarse
              cambios en la información que hayas registrado en el sitio, o
              bien, ante cualquier irregularidad en las transacciones
              relacionadas con su identificación o la del medio de pago, o
              simplemente como medida de protección a su identidad, nuestros
              ejecutivos podrán contactarlo por vía telefónica o correo
              electrónico, a fin de corroborar sus datos e intentar evitar
              posibles fraudes.
            </p>
            <p>
              En caso de no poder establecer el contacto en un plazo de 72 hrs,
              por su propia seguridad, su orden de compra efectuada en nuestro
              sitio no podrá ser confirmada. Le informaremos vía telefónica o
              por correo electrónico que su orden ha quedado sin efecto por no
              poder confirmar su identidad o el medio de pago ofrecido. Además,
              los comprobantes de las gestiones realizadas para contactarte y
              poder confirmar la operación, estarán disponibles en nuestras
              oficinas durante 30 días, para que puedas confirmar la orden de
              compra. Cualquier consulta puede ser efectuada a esepe@esepe.cl
            </p>
            <p>
              Sin embargo los Usuarios y/o Compradores son exclusivamente
              responsables por la pérdida, mal uso o uso no autorizado del
              código de validación, ya sea por parte de los mismos o de
              terceros, luego de realizada la compra en la forma expresada en
              los Términos y Condiciones.
            </p>
            <p className="font-semibold text-[#4A6793]">Datos personales:</p>
            <p>
              Los Usuarios y/o Compradores garantizan que la información que
              suministran para la celebración del contrato es veraz, completa,
              exacta y actualizada.
            </p>
            <p>
              De conformidad con la Ley 19.628 los datos personales que
              suministren en el Sitio Web pasarán a formar parte de una base de
              datos de Bschneider Consultores y serán destinados única y
              exclusivamente en para ser utilizados en los fines que motivaron
              su entrega y especialmente para la comunicación en general entre
              la empresa y sus clientes, validar los datos de la compra,
              concretar el despacho y responder sus consultas. Los datos no
              serán comunicados a otras empresas sin la expresa autorización de
              su titular ni serán transferidos internacionalmente.
            </p>
            <p>
              Bschneider Consultores jamás solicita datos personales o
              financieros a través de correo electrónico
            </p>
            <p>
              Bschneider Consultores presume que los datos han sido incorporados
              por su titular o por persona autorizada por éste, así como que son
              correctos y exactos. Los Usuarios y/o Compradores con la
              aceptación de los presentes Términos y Condiciones manifiestan que
              los datos de carácter personal que aporte a través de los
              formularios online en la página web de Bschneider Consultores
              pueden ser utilizados para Ofertas posteriores y distintas a las
              ofrecidas en El Sitio.
            </p>
            <p>
              Sin perjuicio de lo anterior, Bschneider Consultores garantiza a
              los usuarios el libre ejercicio de sus derechos de información,
              modificación, cancelación y bloqueo de sus datos personales
              establecidos en la Ley 19.628. Por consiguiente, los compradores
              podrán realizar requerimientos que digan relación con dichos
              derechos, y en un plazo máximo de dos días corridos, Bschneider
              Consultores deberá dar respuesta e implementar efectivamente esta
              solicitud.
            </p>
            <p className="font-semibold text-[#4A6793]">
              Documentos Electrónicos:
            </p>
            <p>
              El usuario en su calidad de receptor manual de documentos
              electrónicos, de conformidad con la Resolución Exenta N° 11 del 14
              de febrero de 2003 del Servicio de Impuestos Internos (que
              estableció el procedimiento para que contribuyentes autorizados
              para emitir documentos electrónicos puedan también enviarlos por
              estos medios a receptores manuales), declara y acepta lo
              siguiente:
            </p>
            <p>
              Al aprobar estos términos y condiciones, el usuario autoriza a la
              empresa Bschneider Consultores Rut 77.218.240-6 , para que el
              documento tributario correspondiente de esta transacción, le sea
              entregada solamente por un medio electrónico. De igual forma,
              autoriza que el aviso de publicación del documento tributario me
              enviado mediante correo electrónico.
            </p>
            <p>
              De conformidad con la normativa indicada, y en caso que el usuario
              lo requiera para respaldar la información contable, asume en
              relación a dichos documentos tributarios, las siguientes
              obligaciones:
            </p>
            <ul className="list-disc pl-8 space-y-2">
              <li>
                Imprimir los documentos recibidos en forma electrónica, para
                cada período tributario, en forma inmediata a su recepción desde
                el emisor.;
              </li>
              <li>
                Imprimir el documento en el tamaño y forma que fue generado;
              </li>
              <li>
                Utilizar papel blanco tipo original de tamaño mínimo 21,5 cm x
                14 cm (1/2 carta) y de tamaño máximo 21,5 x 33 cm (oficio);
              </li>
              <li>
                Imprimir en una calidad que asegure la permanencia de la
                legibilidad del documento durante un periodo mínimo de seis
                años, conforme lo establece la legislación vigente sobre la
                materia. Esta impresión se hará hecha usando impresión láser o
                de inyección de tinta, excepto que se establezca una
                autorización o norma distinta al respecto.
              </li>
            </ul>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              DÉCIMO: ALCANCE DE LAS CONDICIONES INFORMADAS EN EL SITIO
            </p>
            <p>
              Bschneider Consultores no modificará las condiciones bajo las
              cuales haya contratado con los consumidores en este sitio.
              Mientras aparezcan en este sitio, los precios informados estarán a
              disposición del usuario, aunque no sean los mismos que se ofrezcan
              en otros canales de venta de Bschneider Consultores, como tiendas
              físicas, catálogos, televisión, radio, u otros.
            </p>
            <p>
              Cualquier cambio en las informaciones publicadas en este sitio,
              incluyendo las referidas a mercaderías, servicios, precios,
              existencias y condiciones, promociones y ofertas, tendrá lugar
              antes de recibir una orden de compra y solo se referirá a
              operaciones futuras, sin afectar, en caso alguno, derechos
              adquiridos por los consumidores.
            </p>
            <p>
              Las promociones que ofrecidas en el sitio no necesariamente serán
              las mismas que Bschneider Consultores ofrezca por otros canales de
              venta.
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              DÉCIMO PRIMERO: PROPIEDAD INTELECTUAL
            </p>
            <p>
              Todos los contenidos incluidos en este sitio, como textos,
              material gráfico, logotipos, íconos de botones, códigos fuente,
              imágenes, audio clips, descargas digitales y compilaciones de
              datos, son propiedad de Bschneider Consultores o de sus
              proveedores de contenidos, y están protegidos por las leyes
              chilenas e internacionales sobre propiedad intelectual. Los
              materiales gráficos, logotipos, encabezados de páginas, frases
              publicitarias, iconos de botones, textos escritos y nombres de
              servicios incluidos en este sitio son marcas comerciales,
              creaciones o imágenes comerciales de propiedad de Bschneider
              Consultores en Chile y en otros países. Dichas marcas, creaciones
              e imágenes comerciales no se pueden usar en relación a ningún
              producto o servicio que pueda causar confusión entre los clientes
              y en ninguna forma que desprestigie o desacredite a Bschneider
              Consultores. Las demás marcas comerciales que no sean de propiedad
              de Bschneider Consultores y que aparezcan en este sitio pertenecen
              a sus respectivos dueños.
            </p>
            <p>
              Todos los derechos no expresamente otorgados en estos Términos y
              Condiciones son reservados por Bschneider Consultores o sus
              cesionarios, proveedores, editores, titulares de derechos u otros
              proveedores de contenidos. Ningún producto, imagen o sonido pueden
              ser reproducidos, duplicados, copiados, vendidos, revendidos,
              visitados o explotados para ningún fin, en todo o en parte, sin el
              consentimiento escrito previo de Bschneider Consultores. No se
              puede enmarcar o utilizar técnicas de enmarcación para encerrar
              alguna marca comercial, logotipo u otra información registrada o
              patentada (incluyendo imágenes, texto, disposición de páginas, o
              formulario) de Bschneider Consultores, sin nuestro consentimiento
              escrito previo. Tampoco se puede usar meta etiquetas ni ningún
              otro texto oculto que use el nombre o marcas comerciales de
              Bschneider Consultores sin autorización escrita previa de esta
              empresa. Se prohíbe hacer un uso indebido de este sitio o de estas
              marcas, licencias o patentes. Lo anterior, sin perjuicio de las
              excepciones expresamente señaladas en la ley.
            </p>
            <p>
              Bschneider Consultores respeta la propiedad intelectual de otros.
              Si cree que su trabajo ha sido copiado en forma tal que constituye
              una violación del derecho de propiedad intelectual, contáctate con
              nosotros a esepe@esepe.cl
            </p>
          </div>

          <div>
            <p className="font-bold text-[#123752]">
              DÉCIMO SEGUNDO: LEGISLACIÓN APLICABLE Y COMPETENCIA
            </p>
            <p>
              Todas las desavenencias que deriven de estas Condiciones o de los
              servicios de Bschneider Consultores sea que tomen la forma de
              reclamación o litigio tendrá lugar únicamente en Santiago de
              Chile, y por este acto aceptas dicha legislación, jurisdicción y
              lugar de los tribunales y renuncias a cualquier objeción en cuanto
              a la inconveniencia de foro.
            </p>
            <p>
              Adicionalmente, Bschneider Consultores deja constancia que adhiere
              en todas sus partes al Código de Buenas Prácticas para el Comercio
              Electrónico de la Cámara de Comercio de Santiago, el cual se
              encuentra disponible aquí.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
