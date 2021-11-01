<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Planificación de ventas

    .row.mb-5
      .col-lg-7.slideInUp
        p.mb-3  En el contexto actual, donde cada día surgen nuevos competidores y cambian las formas como los consumidores satisfacen sus necesidades, es primordial que toda unidad productiva maneje una planificación de las ventas y esté en constante estudio de los factores que influyen en el mercado. A continuación, se estudiarán las características de un plan de ventas y el análisis del mercado. 
        p.mb-3  El plan de venta estratégico de una unidad productiva establece una proyección aproximada de las ventas, <b>en este plan se definen los puntos clave, los objetivos y estrategias de ventas</b>. Incluye también el estudio del volumen de las ventas, presupuesto, ventas del año anterior, las metas fijas y las previsiones de ventas. 
        p.mb-3  El plan de ventas debe ser táctico, progresivo y gradual para poder abarcar varios periodos futuros debido a que la demanda puede variar en el tiempo, es por esta razón que se debe establecer la planificación de las ventas.
      .col-lg-5
        figure.slideInLeft
          img(src='@/assets/curso/t1-i1.jpg' alt='imagen decorativa')

    p.mb-5  La realización de un plan de ventas tiene beneficios para la unidad productiva, entre estos se encuentran:

    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t1-i1.jpg' alt='imagen decorativa')
      .col-lg-7
        ul.lista-ul(data-aos='slide-left')
          li
            i.fas.fa-check
            p La comunicación en las áreas de la unidad productiva mejora. 
          li
            i.fas.fa-check
            p Mejor sincronización en los procesos.
          li
            i.fas.fa-check
            p Disminución de costos operativos, menos inventarios, entregas a tiempo en la producción y menos gastos innecesarios.
          li
            i.fas.fa-check
            p Mayor control del inventario y surtido de productos en puntos de venta o almacenes.
          li
            i.fas.fa-check
            p Mayor rentabilidad.
          li
            i.fas.fa-check
            p Detección y previsión de dificultades a través de escenarios hipotéticos.
          li
            i.fas.fa-check
            p Mejor desempeño e incursión de productos.
          li
            i.fas.fa-check
            p Promociones y estrategias de lanzamiento.
          li
            i.fas.fa-check
            p Mayor satisfacción de los clientes o consumidores a través de un mejor servicio. 


    p.mb-5  Por otra parte, para poder ejecutar un plan de ventas es necesario que exista un consenso sobre los planes de demanda y producción por medio de cinco etapas:
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)









    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
