<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de ventas



    #t_2_1.titulo-segundo.color-secundario
      h2 2.1  Aida




    Separador
    br
    br
    #t_2_2.titulo-segundo.color-secundario
      h2 2.2  <i>Spin</i>




    Separador
    br
    br
    #t_2_3.titulo-segundo.color-secundario
      h2 2.3  <i>Elevator Pitch</i>





    Separador
    br
    br
    #t_2_4.titulo-segundo.color-secundario
      h2 2.4  Comunicación comercial





    Separador
    br
    br
    #t_2_4.titulo-segundo.color-secundario
      h2 2.4  Post venta











</template>

<script>
export default {
  name: 'Tema2',
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
