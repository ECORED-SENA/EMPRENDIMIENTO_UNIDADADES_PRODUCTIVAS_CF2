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

    p.mb-5  Para el estado de resultados es de gran importancia que en cada una de estas áreas: ventas, administración y logística se desarrolle de la mejor forma que le permita a la unidad productiva reflejar al final resultados favorables. A continuación,  se va a conocer en más detalle cada uno de ellos:
    
    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  Ventas
    .row.mb-5
      .col-lg-8
        p.mb-3  El concepto de ventas es muy amplio y se encuentran varios en diferentes bibliografías, pero se entiende las ventas como: las actividades realizadas para incentivar potenciales clientes a realizar una determinada compra. Su gestión, se encarga de realizar actividades de marketing estratégico para la venta de bienes y servicios.
        p.mb-3  El área de ventas de toda unidad productiva debe establecer objetivos tácticos de ventas, desarrollar un plan de acción y supervisión, planificar y gestionar recursos necesarios para soportes de ventas en curso. Para lograr el nivel de ventas esperado, se establecen elementos claves desde las actividades de la administración para la gestión de ventas. A continuación se puede ampliar más al respecto: 
      .col-lg-4
        figure.slideInLeft
          img(src='@/assets/curso/t5-ic5.png' alt='imagen decorativa')
    
    //-- Aqui viene el componente de cards and navs holders

    p.mb-5  Por otra parte, se encuentra que para que exista una gestión eficaz de las ventas se debe identificar el cliente objetivo, realizar un marketing comercial y gestionar la distribución de los productos. Todo esto determina la estructura de apoyo de las ventas y para su gestión implica: 

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption <b>Figura</b> Gestión de Ventas
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-info1.svg' alt='imagen decorativa')      
        figcaption  Nota. SENA (2021). 

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  La administración
    .row.mb-5
      .col-lg-8
        p.mb-3  Toda unidad productiva debe realizar y tener una administración que le permita establecer los procesos, identificar las fortalezas, debilidades y oportunidades que tiene la organización ante las demás en el mercado, pero, además permitirá conocer la situación financiera real de la organización.
        p.mb-3.text-bold  En cuanto a su conceptualización, se puede decir que la administración es el proceso que busca por medio de la planificación, la organización, ejecución y el control de los recursos darles un uso más eficiente para alcanzar los objetivos de la unidad productiva.
        p.mb-3  Según lo planteado anteriormente, el administrador es fundamental en la unidad productiva. Las actividades administrativas se caracterizan por tener una estructura de subordinación o relación de jerarquía, en otras palabras, se trabaja bajo el mando de otro. En la actualidad se puede observar que la administración se puede aplicar en instituciones formales e informales, las formales son aquellas que se rigen por normas y leyes que están escritas para que se pueda dar su funcionamiento como es el caso del Estado, empresa, organización o unidad productiva. Por otra parte, las informales tienen normas, pero no se encuentran escritas, un ejemplo de esto puede ser la familia donde también se administran recursos bajos un objetivo.
        
      .col-lg-5
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-i6.jpg' alt='imagen decorativa')     
    p.mb-5  A continuación, se observa la importancia de la administración: 
    figcaption.customCaption.mb-3 <b>Figura</b> La importancia de la administración
    .row.mb-5.justify-content-center        
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-p1.svg' alt='imagen decorativa')   
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-p2.svg' alt='imagen decorativa')   
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-p3.svg' alt='imagen decorativa')         
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-p4.svg' alt='imagen decorativa')        
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-p5.svg' alt='imagen decorativa')    
    figcaption  Nota. SENA (2021).















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
