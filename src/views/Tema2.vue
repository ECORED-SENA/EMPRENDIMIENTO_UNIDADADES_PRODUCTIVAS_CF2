<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Técnicas de ventas

    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t3-ic2.svg' alt='imagen decorativa')
      .col-lg-10
        p.mb-3  En una unidad productiva cuando se ejecuta una técnica de planificación de ventas, no consiste en predecir y prepararse para el futuro sino en ordenar los recursos para que sea favorable el futuro. A continuación, se mencionan siete pasos que se deben tener en cuenta para ejecutar en el plan de ventas: 

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Recopilación de información")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t1.png' alt='imagen decorativa')
          .col-lg-8
            h4 Recopilación de información
            p La información es crucial para generar un pronóstico y proyección de las ventas.
      .tarjeta.color-acento-contenido.p-4(titulo="Fijar objetivos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t2.png' alt='imagen decorativa')
          .col-lg-8
            h4 Fijar objetivos
            p Estos objetivos deben ser específicos, medibles, alcanzables, relevantes y temporales.
      .tarjeta.color-acento-contenido.p-4(titulo="Desarrollo de estrategias")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t3.png' alt='imagen decorativa')
          .col-lg-8
            h4 Desarrollo de estrategias
            p Con el propósito de alcanzar los objetivos, aquí se decide qué hacer, cómo y cuándo.
            
      .tarjeta.color-acento-contenido.p-4(titulo="Desarrollo de políticas")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t4.png' alt='imagen decorativa')
          .col-lg-8
            h4 Desarrollo de políticas
            p Aquí se toman decisiones más cruciales para los asuntos estratégicos con el fin de lograr los objetivos.

      .tarjeta.color-acento-contenido.p-4(titulo="Desarrollo de programas")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t5.png' alt='imagen decorativa')
          .col-lg-8
            h4 Desarrollo de programas
            p Aquí se debe identificar los pasos posibles mediante los programas que cumplan con los objetivos y estrategias planteadas en la unidad productiva.            

      .tarjeta.color-acento-contenido.p-4(titulo="Procedimientos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t5.png' alt='imagen decorativa')
          .col-lg-8
            h4 Procedimientos
            p Son programas de acción ajustados que se refieren a asuntos tácticos recurrentes. Aquí se busca la forma eficiente y uniforme de desempeñar las actividades.    

      .tarjeta.color-acento-contenido.p-4(titulo="Presupuesto")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t2-t6.png' alt='imagen decorativa')
          .col-lg-8
            h4 Presupuesto
            p Aquí se asignan los recursos a los programas establecidos para cumplir con los objetivos de la unidad productiva, cuando se habla de recursos se hace referencia al capital, personal de trabajo e información.    


    p.mb-5  A continuación, se estudiará algunas técnicas de ventas:


    #t_2_1.titulo-segundo.color-secundario
      h2 2.1  Aida
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-primario.p-4.p-md-5.mb-3
          .row.m-0.align-items-center.justify-content-between
            .col-lg-9
              .bloque-texto-a__texto.p-4.shadow-box
                p Este modelo fue mencionado por <b>Paul Lazarsfeld</b> (1901-1976) y establece una serie de secuencias de estados por el que se debe llevar al cliente para cumplir con el objetivo comercial: <b>Atención, Interés, Deseo y Acción (AIDA)</b>. A continuación, se puede observar la secuencia de los estados AIDA:

            .col-lg-3.mb-4.mb-lg-0
              figure.slideInLeft
                img.nW.centered(src='@/assets/curso/t2-ic2.svg' alt='imagen decorativa')
    
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption Técnica AIDA
        figure
          img.nW.centered(src='@/assets/curso/t2-i1.svg' alt='imagen decorativa')
        figcaption  Nota. SENA (2021).
    
    .row.mb-5.justify-content-center
      .col-lg-2
        figure.slideInLeft
          img.nW.centered(src='@/assets/curso/t2-ic3.png' alt='imagen decorativa')
      .col-lg-10   
        p.mb-3  Como se pudo observar, en primer lugar, se necesita la atención del cliente. Aquí es importante buscar que el cliente se quede a escuchar y esto se puede hacer mediante una pregunta en relación con su actividad o interés. Posteriormente debe despertar el interés del cliente, aquí es importante tener definido el mensaje clave que logre conseguir el interés de los clientes y genere ese deseo de compra. Después de tener el interés del potencial cliente, se debe definir un mensaje clave con varios argumentos que despierte ese deseo de compra o reunirse para cerrar la compra, y de esta forma se establece la acción de compra del cliente.



    Separador
    br
    br
    #t_2_2.titulo-segundo.color-secundario
      h2 2.2  <i>Spin</i>
    p.mb-5  Este modelo se categoriza por los diferentes tipos de preguntas que se le pueden realizar a un potencial cliente y de esta forma potenciar y desarrollar una oportunidad de negocio. Es muy utilizado en entornos de ventas complejas. Su estructura está definida de la siguiente forma: 

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-3  Técnica SPIN
        ImagenInfografica.color-secundario.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/t2-i2.svg', alt='Texto que describa la imagen')

          .tarjeta.color-acento-contenido.shadow-box.p-3(x="12%" y="24%" numero="1")
            p Que nos dan información sobre el negocio del cliente y su modo de trabajar. 

          .tarjeta.color-acento-contenido.shadow-box.p-3(x="62%" y="24%" numero="3")
            p Que evidencien las consecuencias que estos problemas tienen para el cliente, magnificándolos, y busque la necesidad de resolverlos.

          .tarjeta.color-acento-contenido.shadow-box.p-3(x="37%" y="76%" numero="2")
            p Que requieren un mayor conocimiento del sector, su objetivo es buscar que el cliente exprese problemas que su producto puede resolver y así logre avanzar con la venta.  Es importante que se conozca a fondo los problemas que puede llegar a resolver nuestros productos.

          .tarjeta.color-acento-contenido.shadow-box.p-3(x="88%" y="68%" numero="4")
            p Aquí se debe tener la capacidad de ayudar al cliente a expresar cuales serían los beneficios de resolver los problemas identificados y genere esa necesidad de resolverlos. 
        figcaption  Nota. SENA (2021).


    Separador
    br
    br
    #t_2_3.titulo-segundo.color-secundario
      h2 2.3  <i>Elevator Pitch</i>

    .row.mb-5
      .col-lg-7
        p.mb-4  Esta técnica consiste en una forma de presentar las ideas de negocio ante potenciales clientes o personas interesadas, son discursos breves, intensos, eficaces y con un mensaje claro.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0  Antes de empezar a describir la técnica es importante conocer la definición de su nombre, <b>su término <i>pitch</i> hace referencia a una presentación en lugar de una conversación</b>, aquí tiene un papel fundamental los medios audiovisuales a diferencia del discurso. <b>Cuando se unifican los dos términos: <i>Elevator Pitch</i> el tiempo de este formato no puede superar los dos minutos.</b>
        p.mb-3  Para dar una idea más clara y entender de una forma mejor la técnica se ve el siguiente ejemplo:
      .col-lg-5
        figure
          img.nW.centered(src='@/assets/curso/t2-i3.jpg' alt='imagen decorativa')

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/nRyOFMUA_S0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4.mb-4
          p.mb-0  Por último, se debe cerrar el discurso o exposición y este debe adaptarse al estilo de su unidad productiva o proyecto.   

    Separador
    br
    br
    #t_2_4.titulo-segundo.color-secundario
      h2 2.4  Comunicación comercial

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t2-i4.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4.shadow-box
            p.mb-0 <b>Toda unidad productiva debe contar con diferentes equipos comerciales que cuenten con diferentes herramientas de <i>marketing</i> para poder facilitar y aumentar las ventas.</b> Entre estas herramientas se destaca la comunicación, siendo esta una disciplina que todo vendedor y profesional debe dominar. Su principal objetivo es <b>conocer las necesidades del cliente o del interlocutor para poder satisfacer de forma plena con los argumentos de venta.</b>

    p.mb-5  Se puede resaltar que la comunicación comercial utiliza la fuerza de las ventas para conseguir que el mercado adquiera un producto determinado. Para lograr esto se utiliza el contacto directo, oral y simultáneo con el cliente. Lo anterior se puede llevar a buen término si el mensaje que debe existir en toda comunicación es comprendido y aceptado, estos elementos son:

    .row.mb-5.justify-content-center
      .col-lg-4
        figure
          img.nW(src='@/assets/curso/t2-i5.svg' alt='imagen decorativa')
      .col-lg-6
        LineaTiempoD.color-primario
          .text-small(numero="1" titulo="Emisor") 
            p Se entiende como la persona que abre el proceso y cuenta con la información suficiente, aquí se puede hacer referencia al vendedor. Este debe tener en cuenta aspectos como:
            ul.lista.ul
              li
                i.fas.fa-check  
                | &nbsp;El contenido sea transmisible.
              li
                i.fas.fa-check
                | &nbsp;Despertar el interés al receptor.
              li
                i.fas.fa-check
                | &nbsp;Utilizar un lenguaje que se adapte al tipo de receptor.
              li
                i.fas.fa-check
                | &nbsp;Que la ocasión promueve otras actividades.

          .text-small(numero="2" titulo="Receptor") 
            p Es el destinatario del mensaje. Hace referencia al cliente, para que la comunicación se realice eficazmente, el receptor habrá que tener una actitud previa de proactividad.
                
          .text-small(numero="3" titulo="Contenido") 
            p Es el mensaje que se quiere transmitir, se considera como los argumentos de venta del producto o servicio.

          .text-small(numero="4" titulo="Código") 
            p Aquí se destacan las distintas formas y estilos que tiene el vendedor de transmitir el mensaje.

          .text-small(numero="5" titulo="Canal de transmisión") 
            p Es el medio por el cual se canaliza el mensaje codificado.

          .text-small(numero="6" titulo="Feedback") 
            p Es la variable que mide la efectividad del proceso de comunicación. Se puede decir que la comunicación es eficaz cuando el receptor responde. Es aquí donde se da la comunicación y el emisor pasa a receptor y viceversa.         

    p.mb-5  Por otra parte, se pueden observar varias etapas entre el mensaje que quiere dar a conocer el emisor y el que realmente capta el receptor. Es aquí donde aparecen diferentes interferencias o barreras que pueden modificar el mensaje y disminuir la eficacia de la comunicación. Entre algunas de estas interferencias están:

    figcaption.customCaption.mb-3  Interferencias de la comunicación
    ImagenInfografica.color-secundario.mb-5(data-aos='fade-up')
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t2-i6.svg', alt='Interferencias de la comunicación')

      .tarjeta.color-acento-contenido.shadow-box.p-3(x="8%" y="24%" numero="1")
        p Se relaciona con factores psicológicos por parte del receptor como los valores, las necesidades, la personalidad, las opiniones, etc.
    
      .tarjeta.color-acento-contenido.shadow-box.p-3(x="25%" y="78%" numero="2")
        p Según estas dos variables, el receptor actuará de una u otra manera.

      .tarjeta.color-acento-contenido.shadow-box.p-3(x="42%" y="24%" numero="3")
        p Aquí se tiene en cuenta el estado emocional del receptor.

      .tarjeta.color-acento-contenido.shadow-box.p-3(x="58%" y="78%" numero="4")
        p Conocer los rasgos de personalidad facilita la tarea del emisor, al dar un trato más personalizado al receptor.

      .tarjeta.color-acento-contenido.shadow-box.p-3(x="75%" y="24%" numero="5")
        p Aquí, la formación y experiencia influyen en el proceso de comunicación.

      .tarjeta.color-acento-contenido.shadow-box.p-3(x="92%" y="78%" numero="6")
        p El receptor puede percibir un mensaje o efecto contrario al que quiere producir el emisor, esto se debe al uso de palabras, gestos, argumentos o situaciones que no son las adecuadas y que vayan en sintonía con la idea principal de la comunicación.
    figcaption  Nota. SENA (2021).

    Separador
    br
    br
    #t_2_5.titulo-segundo.color-secundario
      h2 2.5  Post venta
    .row.mb-5
      .col-lg-8
        p.mb-4(data-aos='fade-left')  Las post ventas se entienden como el conjunto de procesos posteriores a la venta, como mantener contacto por <i>email</i>, generar cupones para cumpleaños, descuentos en la segunda compra o para ocasiones especiales, entre otros. Aquí es importante transformar el cliente en un comprador recurrente de nuestra unidad productiva. Un ejemplo sería cuando después de la compra el cliente recibe un correo donde se le aconseja la mejor utilización del producto adquirido, esto hace que el cliente se sienta importante para la empresa y puede posibilitar que vuelva a comprar o elogiar su experiencia con la marca o negocio. 
        .cajon.color-acento-contenido.p-4(data-aos='slide-left')
          p.mb-0  La importancia de aplicar postventa recae en lograr fidelizar al cliente, puesto que buscar nuevos clientes implica una serie de acciones que demoran más en sufrir efecto y exige una inversión más alta, caso contrario en mantener al cliente satisfecho y hacerle saber que es importante para la empresa. De esa forma se convierte en un cliente constante de la marca o de los productos de la unidad productiva.
      .col-lg-4
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i7.png', alt='imagen decorativa')        
    p.mb-5  Para realizar post venta se puede tener presente algunos consejos, como:
    .row.mb-5
      .col-lg-3
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t2-i8.png', alt='imagen decorativa')  
      .col-lg-9
        ul.lista-ul(data-aos='flip-right')
          li
            i.fas.fa-check
            p.mb-0 Pedir la opinión a los compradores.
          li
            i.fas.fa-check
            p.mb-0 Ofrecer descuentos.
          li
            i.fas.fa-check
            p.mb-0 Tener contacto en fechas especiales.
          li
            i.fas.fa-check
            p.mb-0 Enviar contenido relevante al consumidor. 
          li
            i.fas.fa-check
            p.mb-0 Mantener informado al potencial cliente por medio de <i>email</i> – <i>marketing</i>.
          li
            i.fas.fa-check
            p.mb-0 Promocionar los lanzamientos a los clientes.
          li
            i.fas.fa-check
            p.mb-0 Un servicio de atención al cliente eficiente.





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
