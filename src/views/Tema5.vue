<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Estado de resultados
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-botones.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t5-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 El estado de resultados es el informe que presenta los resultados financieros de la empresa en un periodo determinado. Al final del ejercicio la empresa hace un corte para determinar si ha ganado o perdido, entre otros aspectos financieros. 

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  Activos, pasivos y patrimonio    
    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-ic1.png' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  El activo es lo que se posee, es decir, los bienes poseídos y los derechos que se convertirán en cosas poseídas en un futuro.
        p.mb-3  El pasivo y el patrimonio neto suponen cómo financiar aquello que se desea poseer, mediante deudas, préstamos, aportaciones de los propietarios, etc., como se muestra a continuación:

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption  <b>Figura</b> Estructura económica y financiera de la unidad productiva.
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i2.svg' alt='imagen decorativa')        
        figcaption  Nota. SENA (2021).


    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  Ingresos, gastos y costos

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-ic2.png' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  En toda contabilidad de una unidad productiva se debe identificar y tener claro los conceptos relacionados a gastos y costos. La diferencia entre estos, recae en que los costos son considerados inversiones que se identifican directamente con los ingresos, mientras que los gastos no se asocian con el retorno de la venta del producto o servicio de la unidad productiva. En pocas palabras, los costos se consideran activos, mientras que los gastos no. A continuación, se conocerá un poco más de estos conceptos: 

    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones.p-4(titulo="Ingresos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t5-t1.png' alt='imagen decorativa')
          .col-lg-8
            h4 Ingresos
            p Son incrementos en activos o disminuciones en pasivos.  Las causas de los ingresos son operaciones de ventas de bienes y servicios provenientes de las operaciones de la empresa que se orientan a los objetivos y metas.

      .tarjeta.color-acento-botones.p-4(titulo="Costos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t5-t2.png' alt='imagen decorativa')
          .col-lg-8
            h4 Costos
            p Sacrificios económicos que demanda la adquisición de un bien o servicio con utilidad económica para la empresa. Son las inversiones que hace la entidad para realizar su objetivo. Aquí se encuentran los costos de ventas cantidad que invierte la empresa para lograr su objetivo, es una inversión realizada que influye directamente en el precio del producto o servicio que ofrece la empresa.

      .tarjeta.color-acento-botones.p-4(titulo="Gastos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t5-t3.png' alt='imagen decorativa')
          .col-lg-8
            h4 Gastos
            p Es todo aquel desembolso de dinero que hace la entidad para lograr su objetivo, sin embargo, a diferencia del costo, estos desembolsos no incurren en el precio del producto o servicio que ofrece la entidad.





    #t_5_1.titulo-segundo.color-secundario
      h2 5.1  Ventas, administración y logística


























</template>

<script>
export default {
  name: 'Tema5',
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
