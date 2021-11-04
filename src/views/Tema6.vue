<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Balance y documentación contable
    .row.mb-5.slideInUp
      .col-lg-7
        p.mb-3  En toda unidad productiva es importante que se lleve una contabilidad que le permita establecer los alcances administrativos y financieros, con el objetivo de cumplir las metas propuestas. Esta contabilidad nos facilita cierta documentación y balances que permitirán conocer en detalle la situación económica y financiera de la empresa.
        p.mb-4  Antes de entrar en profundidad, se debe conocer el concepto de balance, se puede decir, que es un contable que va a permitir conocer la situación financiera y económica de una empresa en un momento determinado del tiempo. El Balance se compone de tres factores, estos se conocen como: Activo, Pasivo y Patrimonio (Capital).
        .cajon.color-acento-contenido.p-4
          p.mb-0  El balance nos permitirá evaluar la evolución de la unidad productiva, de esta forma, nos brindará información real sobre el aumento o disminución neta de las partidas contables. Así, se podrá analizar qué partidas se podrán expandir o contraer. Esto quiere decir que dependiendo de la utilidad y eficiencia de ciertas partidas se podrá aumentar y disminuir el presupuesto, gasto o inversión de la unidad productiva.

      .col-lg-5
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i1.jpg' alt='imagen decorativa')

    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i2.png' alt='imagen decorativa')
      .col-lg-9
        p.mb-4  Para la realización de un balance comparativo se debe tener presente dos factores:    
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0 <b>Empresa objetivo:</b> se pueden comparar balances generales de empresas distintas, esto dependerá de su similitud y calidad de los datos. Pueden ser del mismo sector o poseen el mismo nicho de mercado. 

          li
            i.fas.fa-check
            p.mb-0 <b>Intervalo:</b> estos deberán ser homogéneos en términos comparativos. Deben tener el mismo rango de tiempo (anuales, trimestral, mensual...).

        p.mb-4  A continuación, se encuentran las características de un balance:
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0 Se rige por el principio contable de partida doble.       
          li
            i.fas.fa-check
            p.mb-0 Equilibrio entre activo, pasivo y patrimonio (contabilidad básica).  
          li
            i.fas.fa-check
            p.mb-0 Se recogen datos contables reales. 
          li
            i.fas.fa-check
            p.mb-0 Para un balance comparativo se deben tener previamente dos balances. 
          li
            i.fas.fa-check
            p.mb-0 La recolección de los datos y resultados estarán sujetos a interpretaciones a nivel económico y empresarial.

    p.mb-5  A continuación, se presenta un ejemplo simple de un balance comparativo: 

    .row.mb-5.justify-content-center
      .col-lg-10.mb-5
        figcaption.customCaption.mb-3 <b>Tabla</b> Balance Contable Comparativo
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-table1.svg' alt='Ejemplo de balance contable comparativo')        
        figcaption  Nota. SENA (2021). 
      
      .col-lg-10.mb-5
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i3.svg' alt='Ejemplod e balance contable comparativo')      

      .col-lg-8
        .cajon.color-primario.p-4(data-aos='flip-left')
          p.mb-0  Cuando es mayor el activo el pasivo es menor y mayor será el patrimonio. Caso contrario si el activo disminuye y el pasivo aumenta el patrimonio disminuirá.

    #t_6_1.titulo-segundo.color-secundario
      h2 6.1  Tipos de balance
    p.mb-5  Los balances nos permiten tener una idea más clara sobre la situación económica y financiera de la unidad productiva. A continuación, se estudiarán los tipos de balances financieros:
    .row.mb-5
      .col-lg-4
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i4.svg' alt='imagen decorativa')              
      .col-lg-8
        .tarjeta.tarjeta--gris.p-4.mb-5
          LineaTiempoC.color-primario(text-small)
            .row(titulo="Tipo 1")
              .col-md-12.mb-4.mb-md-0
                .h3 Balance de sumas y saldos
                p Es conocido como balance de comprobación. Este notifica a los empresarios que los movimientos económicos de la unidad productiva se realizaron como fue previsto. Las cuentas de esos libros deben cuadrar correctamente.
            .row(titulo="Tipo 2")
              .col-md-12.mb-4.mb-md-0
                .h3 Balance de pérdidas y ganancias
                p Aquí, se presentan tanto las pérdidas como las ganancias de la unidad productiva. Esto permite detectar errores sobre el funcionamiento empresarial. Se busca aumentar los beneficios y disminuir las perdidas.
            .row(titulo="Tipo 3")
              .col-md-12.mb-4.mb-md-0
                .h3 Balance de situación
                p.mb-3  Se conoce como balance general. Se realiza para determinar el total del patrimonio de la unidad productiva en un momento determinado. el patrimonio se divide en bienes, derechos, obligaciones y capital. Aquí se encuentran dos tipos de balance de situación:
                ul.lista-ul
                  li
                    i.fas.fa-check
                    p <b>Balance de situación inicial:</b> se realiza al principio y tiene como fin determinar la situación actual de la empresa. En un futuro servirá para comparar con otros balances y se pueda tomar decisiones según los resultados obtenidos.  
                  li
                    i.fas.fa-check
                    p <b>Balance de situación de cierre:</b> esta se realiza al final de la jornada económica, generalmente de manera anual. Aquí se analiza el rendimiento de la unidad productiva al finalizar todos los proyectos.
            .row(titulo="Tipo 4")
              .col-md-12.mb-4.mb-md-0
                .h3 Balance consolidado
                p.mb-3  Su objetivo es conocer la situación general de diferentes empresas en un solo estado. Detalla los balances de todas las empresas pertenecientes a una empresa matriz o sociedad. Este permite conocer de manera compacta la situación de todas las empresas. 
            .row(titulo="Tipo 5")
              .col-md-12.mb-4.mb-md-0
                .h3 Balance de prueba
                p.mb-3 Se conoce como balance de comprobación. Aquí se visualiza la totalidad de las cuentas de débito y crédito. Refleja un resumen de los estados financieros. No es requisito, pero permite una mejor organización y puede servir como bases para el balance final. 
            .row(titulo="Tipo 6")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance de prueba
                p.mb-3  Es complejo y minuciosamente detallado, aquí se especifica todo tipo de asunto. Se utiliza en empresas de gran magnitud.
            .row(titulo="Tipo 7")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance abreviado
                p.mb-3 Es compacto, y simple, a diferencia del normal este es menos detallado- se referencian las cuentas más importantes.
            .row(titulo="Tipo 8")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance clasificado
                p.mb-3  Aquí se presenta una división de las cuentas según las funciones que estas tengan. 
            .row(titulo="Tipo 9")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance presupuestario
                p.mb-3  Se verifica el cumplimiento de las metas que la unidad productiva se propuso cumplir en un periodo determinado. Este ayuda a identificar debilidades que no permiten cumplir los objetivos. 
            .row(titulo="Tipo 10")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance de apertura
                p.mb-3  Se realiza al principio de un periodo o ciclo contable. Generalmente se escoge una fecha inicial del año entrante.  
            .row(titulo="Tipo 11")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance parcial
                p.mb-3  Se realiza en cualquier momento entre el periodo contable. Las empresas lo realizan generalmente de manera trimestral o semestral.
            .row(titulo="Tipo 12")
              .col-md-12.mb-4.mb-md-0             
                .h3 Balance final
                p.mb-3  Se realiza al final de un periodo o ciclo contable, con el fin de observar el funcionamiento económico que tuvo la empresa durante todo el año.                  

    p.mb-5  A continuación, se podrá observar en el siguiente video, cómo hacer un balance inicial, el cual se puede aplicar a una unidad productiva, emprendimiento o idea de negocio:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    .row.mb-5
      .col-lg-9
        p.mb-3  Ahora, se explicará el balance de apertura el cual se realiza siempre al inicio de cada ciclo contable, convirtiéndose así en el primer asiento contable del nuevo periodo. De esta forma se permitirá tener una imagen general de la situación financiera y patrimonial de la unidad productiva al comienzo del nuevo periodo y ser comparado con el estado de la organización al inicio de cada año.
        p.mb-3  A diferencia de los otros balances financieros, en este se aplican a los saldos de las cuentas los ajustes pertinentes al cierre del año. De esta forma permite una mayor precisión de datos y conclusiones que un balance de situación ordinario en cualquier fecha del periodo. 
        p La estructura del balance de apertura es igual a la de cualquier balance mencionado anteriormente:
      .col-lg-3
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i5.svg' alt='imagen decorativa')    

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table.text-bold
            thead
              tr
                th.h4 Activo 
                th.h4 Patrimonio Neto
            tbody.bg-softgray
              tr
                td Activo no corriente
                td  Pasivo
              tr
                td  Activo corriente 
                td  Pasivo a largo plazo
              tr
                td  - 
                td  Pasivo a corto plazo
              tr
                td  Total, Saldos de Activos Ajustados 
                td  Total P. Neto + Saldo de Pasivos Ajustados

    p.mb-5  Como se puede observar en la estructura anterior, la única diferencia es que la precisión de datos es mayor. Esto se da porque los saldos estarían ajustados de acuerdo con las correcciones pertinentes. A continuación, se dispone un ejemplo de balance de apertura: 
    
    .row.mb-5.justify-content-center
      .col-lg-10
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-tabla2.svg' alt='Ejemplo de balance de apertura')         

    .row.mb-5 
      .col-lg-3
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-i6.svg' alt='imagen decorativa')   
      .col-lg-9
        p.mb-4  Del anterior ejemplo es preciso mencionar que el balance de apertura del año 2020 es resultado de la actividad que se originó durante el año 2019. Entre los ajustes que se pueden dar al cierre de año o del ciclo contable puede ser:
        ul.lista-ul.mb-4
          li
            i.fas.fa-check
            p.mb-0 Conversión de clientes a clientes de dudoso cobro.
          li
            i.fas.fa-check
            p.mb-0 Movimientos de la cuenta de reservas no registrados. 
          li
            i.fas.fa-check
            p.mb-0 Conciliaciones de caja y bancos no registradas.
          li
            i.fas.fa-check
            p.mb-0 Conversión de créditos o deudas del largo plazo al corto plazo.
        p Ahora se van a presentar el balance de apertura del año 2021 para poder realizar un comparativo entre ellos: 
    
    .row.mb-5.justify-content-center
      .col-lg-10
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t6-tabla3.svg' alt='Ejemplo de balance de apertura')     
    
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0  Del esquema anterior se puede ver que la apertura del año 2021 se evidencia que el curso de la unidad productiva es positivo ya que el monto del patrimonio neto ha crecido además de su peso en el balance. Como conclusión, se puede decir que la unidad productiva ha crecido positivamente en términos patrimoniales sin afectar en exceso la estructura financiera.



    Separador
    br
    br
    #t_6_2.titulo-segundo.color-secundario
      h2 6.2  Documentación contable
    .row.mb-5
      .col-lg-7
        p.mb-4(data-aos='fade-left')  Los documentos contables sirven de respaldo a transacciones que realiza la unidad productiva y se utilizan en la contabilidad, para calcular ingresos, egresos y patrimonios. En otras palabras, se puede decir que son archivos que sirven para registrar todas las actividades comerciales a las que se dedica una unidad productiva. De esta forma, funcionan como prueba de los movimientos financieros en determinado tiempo
        .cajon.color-acento-contenido.p-4.mb-4(data-aos='flip-left')
          p.mb-0  Estos documentos deben ser auditados por distintos organismos gubernamentales como la Dirección de Impuestos y Aduanas Nacionales – DIAN que es la entidad encargada de fiscalizar. <b>Es por esta razón que se debe manejar un adecuado proceso y manejo de los archivos y documentos contables. </b>
        p.mb-3  A continuación, se puede observar la categorización de algunos documentos contables:
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i7.jpg' alt='Ejemplo de balance de apertura')             

    .row.mb-5
      .col-lg-10
        figcaption.customCaption  <b>Tabla</b> Tipos de Documentos Contables

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.h4 Documentos contables internos 
                th.h4 Documentos contables externos
            tbody
              tr
                td 
                  p Se elaboran directamente en la unidad productiva.
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0 La factura de venta.
                    li
                      i.fas.fa-check
                      p.mb-0 Recibos de cobro.
                    li
                      i.fas.fa-check
                      p.mb-0 Presupuestos
                    li
                      i.fas.fa-check
                      p.mb-0 Vales 
                    li
                      i.fas.fa-check
                      p.mb-0 Recibos de pago, entre otros.
                td.bg-softgray 
                  p Son elaborados por otra empresa o por otro servicio adquirido.
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0 Recibo de caja.
                    li
                      i.fas.fa-check
                      p.mb-0 Comprobante de pago.
                    li
                      i.fas.fa-check
                      p.mb-0 Comprobante de devolución.
                    li
                      i.fas.fa-check
                      p.mb-0 Consignaciones.
                    li
                      i.fas.fa-check
                      p.mb-0 Letras de cambio.
                    li
                      i.fas.fa-check
                      p.mb-0 Factura de compra, entre otros.
          figcaption  Nota. SENA (2021). 

    p.mb-5  Ahora se abordarán algunos de los conceptos de los tipos de documentos contables y sus formatos más comunes: 

    .tarjeta.p-4.bg-slider.mb-5.shadow-box
      SlyderA
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Factura
            p Se constituye como un título valor, que el vendedor del servicio podrá librar y entregar al comprador o beneficiario del servicio, el objetivo de este documento es certificar las operaciones de consumo efectuada. Como requisitos mínimos debe contemplar: la fecha de la operación, el nombre de las partes, la descripción del producto o servicio, el valor del negocio, la forma de pago, entre otros aspectos. Se entrega la factura original al cliente y se elaboran dos copias, una para el archivo y otra para el comprobante diario de contabilidad (software o digital).    
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t6-s1.png' alt='Ejemplo de factura') 
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Recibo de caja  
            p Es un documento contable que se utiliza para registrar los diferentes recaudos de dinero que tenga la unidad productiva por concepto de cualquier transacción comercial. Aquí se contabiliza un debito a la cuenta caja y el crédito según el concepto de pago. El original se le entrega al cliente y se guarda una copia para el archivo consecutivo y diario de contabilidad. Como requisitos mínimos, debe llevar la fecha, los conceptos , datos de la unidad productiva, numeración consecutiva, el monto y total de la operación.   
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t6-s2.png' alt='Ejemplo de recibo de caja') 
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Letra de cambio 
            p Es un documento mercantil que contiene una promesa u obligación de pagar una determinada cantidad de dinero a una convenida fecha de vencimiento. Aquí interactúan dos actores llamados librador (girado) y tomador (beneficiario); el girador corresponde al acreedor o el que presta el dinero, el girado es quien esta obligado a pagar y el beneficiario es la persona a la que se le debe pagar, este último, puede ser el mismo girador.  
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t6-s3.png' alt='Ejemplo de letra de cambio') 

    br
    .row.mb-5
      .col-lg-6
        p Esos son algunos ejemplos de los tipos de documentos contables, es necesario tener en cuenta, que, según lo establecido por la ley, en el Decreto 410 de 1971 del Código de Comercio de Colombia en el Artículo 60, establece que: 
      .col-lg-6
        p.text-bold “Los libros y papeles a que se refiere este Capítulo deberán ser conservados cuando menos por diez (10) años, contados desde el cierre de aquéllos o a la fecha del último asiento, documento o comprobante”.
    
    .row.mb-5.justify-content-center
      .col-lg-7
        p.mb-3  Por otra parte, existen documentos denominados no contables, estos son de carácter informativo. Brindan información y detalles útiles para la contabilidad, pero no para efectuar procedimientos contables.  En otras palabras, se puede decir que no afectan ni realizan modificaciones en la contabilidad de la unidad productiva. Aquí se encuentran los siguientes documentos: 
        .row.mb-4
          .col-lg-6
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Remisiones
              li
                i.fas.fa-check
                p.mb-0  Cotizaciones
              li
                i.fas.fa-check
                p.mb-0  Órdenes de pedido
              li
                i.fas.fa-check
                p.mb-0  Órdenes de compra
               
          .col-lg-6
            ul.lista-ul
              li
                i.fas.fa-check
                p.mb-0  Órdenes de entrega
              li
                i.fas.fa-check
                p.mb-0  Remesa
              li
                i.fas.fa-check
                p.mb-0  Hojas de vida
              li
                i.fas.fa-check
                p.mb-0  Solicitudes
        p.mb-3  Por ejemplo: <b>la cotización</b>, también conocida como presupuesto o propuesta económica, es un documento de carácter informativo, que establece el precio de un bien o servicio como mecanismo de negociación de compra, consideraciones de carácter presupuestario, entre otras. Este documento no genera registro contable y puede solicitarse de forma física o virtual por medio de correo electrónico o medio digital. Este puede llegar a tener la misma estructura en su formato a la de una factura, pero en su información se indica su razón, como se puede observar a continuación: 
          
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i8.jpg' alt='Ejemplo de balance de apertura')      

    .row.mb-5.justify-content-center
      .col-lg-8
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i9.svg' alt='Ejemplo de balance de apertura')          


    Separador
    br
    br

    #t_6_3.titulo-segundo.color-secundario
      h2 6.3  Títulos de valor

    .row.mb-5
      .col-lg-8
        p.mb-3  Se entiende como título de valor a un documento que incorpora un derecho literal y autónomo, que legitima al uso de ese derecho al tenedor del título o a su beneficiario. En otras palabras, quien firma el documento se convierte en deudor. 
        p.mb-3  Un título de valor implica que la persona que suscribe el titulo está obligada a la prestación del poseedor del título, el tenedor es beneficiario y puede mediante acción cambiaria exigir jurídicamente el pago del contenido literal del título de valor. Un ejemplo de esto es: quien firma una letra de cambio, se encuentra obligado a pagarla en la fecha estipulada y el beneficiario podrá cobrarla jurídicamente si se niega el deudor.  
        p.mb-3  Los títulos de valor se pueden clasificar de la siguiente forma: 
      .col-lg-4
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i10.jpg' alt='Ejemplo de balance de apertura')     

    .row.mb-5.justify-content-center
      .col-lg-4
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i11.svg' alt='Ejemplo de balance de apertura') 
      .col-lg-6  
        LineaTiempoD.color-primario
          .text-small(numero="1" titulo="De contenido crediticio") 
            p Contienen un crédito en favor del tenedor del título, como una letra de cambio, un pagaré o un cheque.
          .text-small(numero="2" titulo="De contenido corporativo o de participación") 
            p Incorporan un derecho societario o empresarial, que representan una participación en la sociedad o empresa.
          .text-small(numero="3" titulo="De tradición o representativos de mercancías") 
            p Estos representan o incorporan la posesión o custodia de mercancías o dinero, como un contrato de depósito, ya sea de mercancías o dinero (cuentas de ahorros, por ejemplo).
          .text-small(numero="4" titulo="Títulos nominativos") 
            p Cuando en este o en la norma que rige su creación se exija la inscripción del tenedor en el registro que llevará el creador del título. Se reconoce como tenedor legítimo quien figure en el texto del documento.    
          .text-small(numero="5" titulo="Títulos a la orden") 
            p Aquí se incorpora el nombre o razón social del beneficiario o tenedor. Son transferibles por endoso, o se diga que son negociables.
          .text-small(numero="6" titulo="Títulos al portador") 
            p Este no se expide a nombre de persona determinada, sino que será pagadero a quien lo porte, sin importar su nombre.

            


    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t6-i12.svg' alt='Ejemplo de balance de apertura') 
      .col-lg-9
        p.mb-4  Se puede encontrar diferentes tipos de títulos valores, entre estos se tienen:
        ul.lista-ul
          li
            i.fas.fa-check
            p.mb-0  Cheques
          li
            i.fas.fa-check
            p.mb-0 Letras de cambio
          li
            i.fas.fa-check
            p.mb-0 Pagarés
          li
            i.fas.fa-check
            p.mb-0 Facturas cambiarias
          li
            i.fas.fa-check
            p.mb-0 Bonos
          li
            i.fas.fa-check
            p.mb-0 Certificados de depósito
          li
            i.fas.fa-check
            p.mb-0 Carta de porte y reconocimiento de embarque






</template>

<script>
export default {
  name: 'Tema7',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
