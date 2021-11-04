<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Contabilidad y finanzas

    .row.mb-5
      .col-lg-8.slideInUp
        p.mb-3  Para toda unidad productiva es necesario que se cuente con un registro y control adecuado de sus actividades, esto permitirá conocer la realidad financiera de la empresa, cumplir con la normativa y servirá como soporte si decide solicitar un crédito ante una entidad financiera. Estas son algunas de las razones por las que una unidad productiva debe llevar una contabilidad financiera.
        p.mb-3  Por otra parte, las unidades productivas en Colombia deben llevar evidencia y registros actualizados de las transacciones, ante las autoridades correspondientes como la DIAN y la Cámara de Comercio mediante informes contables. Este es otro de los puntos importantes de llevar una contabilidad de la unidad productiva. A continuación, se observan los objetivos de una contabilidad:

      .col-lg-4
        figure.slideInLeft
          img(src='@/assets/curso/t4-i1.jpg' alt='imagen decorativa')

    
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-3  <b>Figura</b> Objetivos de la Contabilidad
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t4-i2.svg' alt='imagen decorativa')
        br
        figcaption  Nota. SENA (2021).
        
    p.mb-5  Según lo establecido en la imagen anterior, la contabilidad es una ciencia muy amplia, donde su objetivo recae en recoger, estructurar y registrar los movimientos que se dan en una unidad productiva. Para profundizar un poco más sobre el concepto contable, se verán los tipos de contabilidad. Estos tipos de contabilidad depende de muchos factores, como: el origen de los recursos, la actividad de la unidad productiva y el tipo de información que se trabaje. A continuación, se estudiará su conceptualización:

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-3 <b>Figura</b>  Tipos de Contabilidad Según su Origen, la Actividad e Información:
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t4-i3.svg' alt='imagen decorativa')
        br
        figcaption  Nota. SENA (2021).

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Contabilidad según el origen de los recursos" :icono="require('@/assets/curso/t4-ico1.svg')")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i4.jpg' alt='imagen decorativa')            
          .col-md-8.mb-4.mb-md-0
            h4 Contabilidad según el origen de los recursos
            p Aquí  se encuentran dos variedades de contabilidad: 
            ul.lista-ul
              li
                i.fas.fa-check
                p <b>Contabilidad pública:</b> se encarga de registrar y estructurar las operaciones que realizan las instituciones públicas.

              li
                i.fas.fa-check
                p <b>Contabilidad privada:</b> controla todas las operaciones realizadas por particulares, ya sean personas naturales (físicas) o jurídicas (contribuyentes).

      .py-4.py-md-5(titulo="Contabilidad según la actividad de la empresa" :icono="require('@/assets/curso/t4-ico2.svg')")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i5.jpg' alt='imagen decorativa')            
          .col-md-8.mb-4.mb-md-0
            h4 Contabilidad según la actividad de la empresa
            p La contabilidad debe adaptarse según el tipo de actividad de la unidad productiva. Esta clasificación es la siguiente:  
            ul.lista-ul
              li
                i.fas.fa-check
                p <b>Contabilidad industrial:</b> se aplica en empresas que transforman las materias primas en productos elaborados (terminados).

              li
                i.fas.fa-check
                p <b>Contabilidad comercial:</b> se aplica a empresas que se dedican a comprar y vender un producto específico ya terminado, su objetivo es controlar los movimientos económicos y financieros.

              li
                i.fas.fa-check
                p <b>Contabilidad de empresas extractivas:</b> aquí es específicamente para empresas especializadas en la explotación de recursos naturales.
                
              li
                i.fas.fa-check
                p <b>Contabilidad de servicios:</b> Aquí se contabiliza a empresas que se dedican a la prestación de servicios.

      .py-4.py-md-5(titulo="Contabilidad según la clase de información trabajada" :icono="require('@/assets/curso/t4-ico3.svg')")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t4-i6.jpg' alt='imagen decorativa')            
          .col-md-8.mb-4.mb-md-0
            h4 Contabilidad según la clase de información trabajada
            p La clasificación por información trabajada es una de las más conocidas y se estructura en diferentes tipos de la siguiente forma: 
            ul.lista-ul
              li
                i.fas.fa-check
                p <b>Contabilidad financiera:</b> registra la información relacionada con el estado financiero de la unidad productiva. Está dirigida a los gerentes y socios de la empresa. Se denomina contabilidad externa y se diferencia de la interna o de costes.
              li
                i.fas.fa-check
                p <b>Contabilidad administrativa:</b> Está enfocada a los aspectos más administrativos de la empresa, y se emplea para dar cumplimiento a los objetivos y estrategias de planificación de la unidad productiva.
              li
                i.fas.fa-check
                p <b>Contabilidad fiscal:</b> se emplea para registrar y preparar los informes afines con las declaraciones y pagos de impuestos a la Hacienda Pública.

              li
                i.fas.fa-check
                p <b>Contabilidad de costes:</b> se conoce como contabilidad interna, está enfocada a empresas y unidades productivas de carácter industrial, donde se tiene en cuenta los costes unitarios de producción, su venta y, contabilidad en general.
              li
                i.fas.fa-check
                p <b>Contabilidad de gestión:</b> se realiza una contabilidad de costes más amplia, aquí se registra toda la información económica y financiera de la unidad productiva para la toma de decisiones. Su análisis se realiza periódicamente.

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4(data-aos='flip-up')
          p.mb-0  Como se puede observar, existen varios tipos de contabilidad. Es por esta razón que se debe analizar la actividad e información de la unidad productiva para aplicar la contabilidad adecuada. 
    
    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  Principio contable

    .row.mb-5
      .col-lg-7
        p.mb-4  En contabilidad se conoce los <b>PCGA</b> como los Principios de Contabilidad Generalmente Aceptados, estos son un conjunto de reglas y normas generales que sirven de guía contable para formular criterios de medición e información de elementos patrimoniales y económicos de la unidad productiva.
        .cajon.color-acento-contenido.p-4.mb-4(data-aos='flip-up')
          p.mb-0  Estos principios contables deben ser razonables y prácticos en su aplicación, generar resultados equitativos y comprensibles, se deben observar uniformemente, comparable entre periodos y aplicable bajo diferentes circunstancias.
        p(data-aos='fade-up') A continuación, se mencionan algunos principios fundamentales y básicos para el cumplimiento de los objetivos contables:
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t4-i5.svg' alt='imagen decorativa')   

    .row.mb-5.justify-content-center
      .col-lg-9
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t4-info1.svg', alt='Principios contables')
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="47%" y="0%" numero='')
            p Es el principio fundamental que debe orientar la acción del profesional contable en todo momento (sinónimo de imparcialidad y justicia).
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="78%" y="8%" numero='')
            p Los hechos económicos y jurídicos de la empresa se expresan en forma cabal aplicando sistemas contables que registran los dos aspectos de cada acontecimiento, cambios en el activo y en el pasivo (participaciones) que dan lugar a la ecuación contable (debe y haber).
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="88%" y="21%" numero='')
            p Los estados financieros se refieren siempre a un ente, donde el elemento subjetivo o propietario es considerado como tercero. El concepto de ente es distinto del de persona, ya que una misma persona puede producir estados financieros de varios entes de su propiedad.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="100%" y="37%" numero='')
            p Son bienes materiales e inmateriales que poseen valor económico y por ende, susceptibles de ser valuados en términos monetarios (se registra en los libros todo bien de intercambio que tenga valor).
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="97%" y="55%" numero='')
            p Se utiliza como denominador común la moneda que tiene curso legal en el país en que funciona el ente. En el Perú, de conformidad con dispositivos legales, la contabilidad se lleva en moneda nacional (aquí es importante tener presente la inflación de la moneda común).
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="98%" y="70%" numero='')
            p Se refiere a todo organismo económico cuya existencia temporal tiene plena vigencia y proyección.  
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="89%" y="84%" numero='')
            p El valor de costo, adquisición o producción, constituye el criterio principal y básico de valuación, que establece la formulación de los estados financieros.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="70%" y="95%" numero='')
            p Es indispensable medir el resultado de la gestión de tiempo en tiempo, ya sea para satisfacer razones de administración, legales, fiscales o para cumplir con compromisos financieros. El lapso que media entre una fecha y otra se llama periodo. Para los efectos del Plan Contable General, este periodo es de doce meses y recibe el nombre de Ejercicio.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="24%" y="95%" numero='')
            p Las variaciones patrimoniales que se deben considerar para establecer el resultado económico, son los que corresponden a un ejercicio sin entrar a distinguir si se han cobrado o pagado durante dicho periodo.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="12%" y="84%" numero='')
            p Los cambios en el activo, pasivo y en la expresión contable del patrimonio neto, se deben reconocer formalmente en los registros contables. 
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="4%" y="70%" numero='')
            p Los resultados económicos se registran cuando son realizados, aquí los aspectos de compra son fundamentales. 
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="0%" y="55%" numero='')
            p Cuando se deba elegir entre dos valores para un elemento del activo, normalmente, se debe optar por el más bajo y la participación del propietario sea baja. 
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="2%" y="37%" numero='')
            p Implica que las empresas una vez que hayan decidido la aplicación de una norma o método contable, todas las operaciones siguientes deberán ser tratadas en la misma forma.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="8%" y="21%" numero='')
            p Está dirigido complementariamente a dos aspectos principales de la contabilidad: en primer lugar, la cuantificación o medición del patrimonio y en segundo lugar, la exposición de partidas en los estados financieros.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="18%" y="8%" numero='')
            p Implica formular los estados financieros en forma comprensible para los usuarios. Tiene relación directa con la presentación adecuada de los rubros contables que agrupan los saldos de las cuentas, para una correcta interpretación de los hechos registrados.



</template>

<script>
export default {
  name: 'Tema4',
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
