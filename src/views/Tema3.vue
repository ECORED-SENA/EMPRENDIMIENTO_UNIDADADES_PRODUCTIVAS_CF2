<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Previsión de ventas
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Toda unidad productiva debe tener presente la previsión de las ventas, es aquí donde se proyecta y se aproxima las ventas e ingresos por medio de una estimación del nivel de ventas. Es preciso resaltar que el conocimiento y la información son fundamentales en este proceso. Para esto se estudiará la cuota de mercado, el histórico de las ventas y las expectativas futuras. 



    #t_3_1.titulo-segundo.color-secundario
      h2 3.1  Cuota de ventas

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-ic1.svg' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  La cuota de mercado direcciona la estrategia de marketing y ventas. <b>Cuando se habla de cuota de ventas, se hace referencia a la participación y posición que alcanza la unidad productiva en el mercado.</b> Aquí se puede encontrar que las ventas son las metas fijas de los vendedores para cumplir con una cuota, por otra parte, se da un pronóstico de las ventas que hace referencia la previsión de lo que se venderá en un periodo determinado.

    p.mb-5  Para determinar una cuota de ventas se parte de criterios como:

    .row.mb-5.justify-content-center
      .col-lg-6
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figcaption.customCaption <b>Figura</b> Criterios para determinar una cuota de ventas
            figure
              img(src='@/assets/curso/t3-info1.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="20%" y="18%" numero='')
            p Volumen de ventas de una línea de productos en determinada zona geográfica, entre un tipo de cliente a través de un canal de venta.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="82%" y="18%")
            p Zona geográfica, región, municipio, barrio.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="97%" y="65%")
            p Categorías, líneas, tipos de productos. 
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="4%" y="65%")
            p Pequeños, medianos y grandes.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="50%" y="99%")
            p Venta directa, minorista, mayorista.
        
        figcaption Nota. SENA (2021).

    p.mb-5  Por otra parte, se pueden identificar algunas características de la cuota de ventas, entre estas se encentran:
    .row.mb-5.justify-content-center
      .col-lg-10
        ImagenInfografica.color-acento-contenido
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t3-info2.svg', alt='Texto que describa la imagen')
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="14%" y="40%" numero='')
            p Nos indica los conceptos y las diferentes formas que existen según la norma de consolidar una empresa o unidad productiva.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="50%" y="40%" numero='')
            p Se establece en función del histórico de ventas y pronóstico (datos objetivos y no subjetivos). 
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="86%" y="40%" numero='')
            p Debe ser clara y fácil de entender.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="14%" y="98%" numero='')
            p Se aplican mecanismos de control y seguimiento.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="50%" y="98%" numero='')
            p Debe permitir ajustes ante posibles cambios en las condiciones del mercado.
          .tarjeta.color-acento-contenido.p-3.shadow-box(x="86%" y="98%" numero='')
            p Debe estar en términos relativos y no absoluto.

    Separador
    br
    br

    #t_3_2.titulo-segundo.color-secundario
      h2 3.2  Histórico de ventas y expectativas futuras

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-ic2.svg' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  El objetivo de hacer una proyección de ventas de una unidad productiva es identificar la viabilidad que tendrá el negocio en un período determinado. para esto es importante hacer uso de información contundente como lo es el histórico de ventas de la compañía. 
        p.mb-3  Para la proyección de ventas existen varios métodos, a continuación, se describen algunas proyecciones:
    
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Análisis de un resultado ya ocurrido" :icono="require('@/assets/curso/t3-ico1.svg')")
        .row
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t3-i2.jpg' alt='imagen decorativa')            
          .col-md-6.mb-4.mb-md-0
            h4 Análisis de un resultado ya ocurrido
            p Consiste en el análisis de un resultado que ya ocurrió. Se deben analizar los ingresos y cantidades de ventas pasadas. Se puede obtener la misma cantidad de ingresos en los siguientes meses si se mantiene la misma estructura, inversión y condiciones en general. Aquí es importante saber que siempre van a existir nuevos competidores o se puede presentar alguna eventualidad externa que afecte el negocio.
      
      .py-4.py-md-5(titulo="Acciones de la empresa" :icono="require('@/assets/curso/t3-ico2.svg')")
        .row
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t3-im3.jpg' alt='imagen decorativa')            
          .col-md-6.mb-4.mb-md-0
            h4 Acciones de la empresa
            p.mb-3 Se fundamenta en las acciones que una empresa puede forjar para aprovechar adecuadamente las ventas. Para que sea eficiente se debe tener presente las expectativas de ventas y que sea permisible al cambio o modificación en cualquier momento.
            p.mb-3  Este método promueve los productos y servicios de una unidad productiva, determina la cantidad de clientes alcanzables, permite conocer nuevos productos o servicios del negocio y, por último, réplica estrategias, que ya han dado buenos resultados.

      .py-4.py-md-5(titulo="Proyección del mercado" :icono="require('@/assets/curso/t3-ico3.svg')")
        .row
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t3-im4.jpg' alt='imagen decorativa')            
          .col-md-6.mb-4.mb-md-0
            h4 Proyección del mercado
            p Se realiza un análisis del mercado y de los potenciales competidores con el fin de conocer el camino que debe tomar la unidad productiva. Se debe estimar la proyección de las ventas mediante información contundente que permita tener una descripción real de las necesidades y características del mercado. El resultado de este análisis nos permite conocer la factibilidad de poder abrir o no el negocio o unidad productiva.

      .py-4.py-md-5(titulo="Punto de equilibrio" :icono="require('@/assets/curso/t3-ico4.svg')")
        .row
          .col-lg-5
            figure.slideInLeft
              img(src='@/assets/curso/t3-im5.jpg' alt='imagen decorativa')            
          .col-md-6.mb-4.mb-md-0
            h4 Punto de equilibrio
            p Se centra en un análisis del punto de equilibrio de la unidad productiva, aquí se tiene en cuenta los productos o servicios, el precio de venta y las proyecciones de ventas. Además, se deben considerar los costos fijos o directos. Es así, como se llega al punto de equilibrio y se tiene una proyección de venta estratégica para la unidad productiva. 

















</template>

<script>
export default {
  name: 'Tema3',
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
