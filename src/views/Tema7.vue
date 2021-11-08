<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Presupuesto

    .row.mb-5
      .col-lg-7
        p.mb-3  Toda unidad productiva en sus etapas de inicio y en desarrollo de sus actividades es primordial que cuente con financiación y para eso deben realizar un presupuesto, a continuación, se va a conocer qué es y sus características. 
        p.mb-3  Un presupuesto se considera un plan operacional y de recursos de la unidad productiva, su fin es lograr los objetivos propuestos por administración y se expresa en términos monetarios. En otras palabras, se entiende como la planeación para lo que se quiere en el futuro con la unidad productiva y expresarlo en dinero.  
        .cajon.color-acento-contenido.p-4
          p.mb-0  Por otra parte, el presupuesto hace referencia a la cantidad de dinero que se necesita para cubrir una serie de gastos necesarios para la realización de un proyecto. Se puede entender también como una cifra anticipada que estima el coste que se necesita para el cumplimiento de un objetivo.

      .col-lg-5
        figure.slideInLeft
          img(src='@/assets/curso/t1-i1.jpg' alt='imagen decorativa')

    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t7-i2.svg' alt='imagen decorativa')
      .col-lg-7
        p.mb-4 La importancia de un presupuesto recae en los siguiente:
        ul.lista-ul
          li
            i.fas.fa-check
            p Es una estimación del coste que conlleva la realización de un proyecto.
          li
            i.fas.fa-check
            p Tiene en cuenta los ingresos y gastos que se prevén y permite seguimiento de estos.
          li
            i.fas.fa-check
            p Una de sus funciones principales es el control financiero, control de gastos y de planificación.
          li
            i.fas.fa-check
            p Es de tipo adaptable y flexible ante cambios en el entorno.
          li
            i.fas.fa-check
            p Es de tipo periódico, se elaboran en un tiempo determinado.
          li
            i.fas.fa-check
            p Es interdisciplinar, se puede aplicar en finanzas doméstica y finanzas públicas.

    p.mb-5  A continuación, se van a conocer algunas de las características de un presupuesto:
    .row.mb-5.justify-content-center
      .col-lg-6
        figcaption.customCaption <b>Figura</b> Características de un presupuesto
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t7-i3.svg' alt='imagen decorativa')
        figcaption  Nota. SENA (2021).

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Tipos de presupuesto
    p.mb-5  Si se tiene en cuenta la fusión con la que se realiza el presupuesto, se tienen los siguientes:
    .row.mb-5
      .col-lg-4
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t7-i4.svg' alt='imagen decorativa')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Presupuesto maestro")
            .col-md-12.mb-4.mb-md-0
              p Este recoge casi el de todos los departamentos o áreas de la unidad productiva. Es creado a partir de otros presupuestos, creando una visión global de la unidad productiva.
    
          .row(titulo="Presupuesto operativo")
            .col-md-12.mb-4.mb-md-0
              p Aquí está orientado a las partidas que se relacionan con la actividad ordinaria de la unidad productiva en materia de compras y ventas, y suele darse a corto plazo.
              
          .row(titulo="Presupuesto de flujo de caja")
            .col-md-12.mb-4.mb-md-0
              p Este se encarga de recolectar todos los posibles movimientos que dan en el ejercicio a nivel de flujo de efectivo.

          .row(titulo="Presupuesto de ventas")
            .col-md-12.mb-4.mb-md-0
              p Es una estimación de ingresos por ventas de una empresa en un periodo determinado.
          .row(titulo="Presupuesto de producción")
            .col-md-12.mb-4.mb-md-0
              p Articula y estima el nivel de fabricación de existencias o realización de servicios.

          .row(titulo="Presupuesto de gastos")
            .col-md-12.mb-4.mb-md-0
              p Es una proyección de gastos de la unidad productiva en un tiempo determinado.            
               
          .row(titulo="Presupuesto de ingresos")
            .col-md-12.mb-4.mb-md-0
              p Este documento engloba los ingresos de una unidad productiva en un periodo determinado. Esto se da así sean o no procedentes de la actividad principal de la unidad productiva.   

          .row(titulo="Presupuesto base cero")
            .col-md-12.mb-4.mb-md-0
              p Refleja cuánto y dónde se asignan los recursos de una unidad productiva, su objetivo es alcanzar más rentabilidad y eficiencia mediante la reasignación de las partidas de gastos.

          .row(titulo="Presupuesto de capital")
            .col-md-12.mb-4.mb-md-0
              p Determina la diferencia entre las inversiones futuras y los recursos necesarios para llevar a cabo su objetivo, como previsión financiera. 


    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;Ingreso y egreso
      
    .row.mb-5
      .col-lg-7(data-aos='flip-up')
        p.mb-4  En contabilidad los conceptos de ingreso y egreso son términos opuestos. El primero representa una entrada de dinero y el segundo hace referencia a una salida.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0  Se puede entender ingreso como un aumento en el patrimonio de una persona natural o jurídica, y por otro lado el egreso sería una reducción de este. Por otra parte, al reportar beneficios en un periodo específico, los ingresos deben superar a los egresos. De no ser así, se registrarán pérdidas. Las unidades productivas analizan esto en el estado financiero conocido como cuenta de resultados.
        p.mb-3  Se debe determinar primero el tipo de empresa o actividad económica que desarrolla. A continuación, se verán unos ejemplos de ingresos y egresos (gastos):    
      .col-lg-5
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t7-i5.jpg' alt='imagen decorativa')

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th.h4 Una empresa que se dedica al transporte
                th.h4 Empresa que se dedica a la venta de material deportivo
            tbody
              tr
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p <b>Ingresos:</b> <br>Serían el valor que cobran por prestar el servicio de transporte a los clientes.
                    li
                      i.fas.fa-check
                      p <b>Egresos (Gastos):</b> <br>Sería por ejemplo el mantenimiento del vehículo o gasto de carburante de nuestros vehículos.
                td.bg-softgray 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p <b>Ingresos:</b> <br>Serían las cantidades que se cobran por la venta de los productos a nuestros clientes (camisetas, pantalonetas, etc.).
                    li
                      i.fas.fa-check
                      p <b>Egresos (Gastos):</b> <br>Sería la compra de mercancía a los proveedores.

    p.mb-5  Otros ejemplos de Ingresos y egresos (Gastos) más habituales en las unidades productivas, son:

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5 
          table
            thead
              tr
                th Ingreso 
                th Egreso (gasto)
            tbody
              tr
                td 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p La venta de mercancía a clientes.
                    li
                      i.fas.fa-check
                      p La prestación de servicios a nuestros clientes.
                    li
                      i.fas.fa-check
                      p Beneficio obtenido por la venta de una maquinaría de la empresa.                     
                td.bg-softgray 
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p La nómina de un trabajador.
                    li
                      i.fas.fa-check
                      p Lo que la empresa debe pagar por los seguros sociales de sus trabajadores.
                    li
                      i.fas.fa-check
                      p Los servicios públicos (facturas de agua y luz).
                    li
                      i.fas.fa-check
                      p La gasolina necesaria para realizar el trabajo.
                    li
                      i.fas.fa-check
                      p La indemnización por despido de un trabajador.
                    li
                      i.fas.fa-check
                      p Factura del asesor fiscal.
                    li
                      i.fas.fa-check
                      p Comisiones bancarias.


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
