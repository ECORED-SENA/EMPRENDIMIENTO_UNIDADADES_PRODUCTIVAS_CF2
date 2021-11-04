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
        .bloque-texto-g.color-primario.custom-cardBlock.p-3.p-sm-4.p-md-5.slideInUp
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

    TabsA.color-acento-contenido.mb-5
      .tarjeta.color-acento-contenido.p-4(titulo="Ingresos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t5-t1.png' alt='imagen decorativa')
          .col-lg-8
            h4 Ingresos
            p Son incrementos en activos o disminuciones en pasivos.  Las causas de los ingresos son operaciones de ventas de bienes y servicios provenientes de las operaciones de la empresa que se orientan a los objetivos y metas.

      .tarjeta.color-acento-contenido.p-4(titulo="Costos")
        .row
          .col-lg-4
            figure.slideInLeft
              img(src='@/assets/curso/t5-t2.png' alt='imagen decorativa')
          .col-lg-8
            h4 Costos
            p Sacrificios económicos que demanda la adquisición de un bien o servicio con utilidad económica para la empresa. Son las inversiones que hace la entidad para realizar su objetivo. Aquí se encuentran los costos de ventas cantidad que invierte la empresa para lograr su objetivo, es una inversión realizada que influye directamente en el precio del producto o servicio que ofrece la empresa.

      .tarjeta.color-acento-contenido.p-4(titulo="Gastos")
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
    
    .row.mb-5.justify-content-center
      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Identificación del consumidor final
              p.small Clientes objetivo; segmentos; grupos destinatarios; nichos estratégicos; sectores de apoyo.

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center.indicador__container(data-aos="flip-up")
          img(src="@/assets/curso/t5-c2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Tácticas para atraer al consumidor final  
              p.small Los clientes de la competencia. Después de esto se definen tácticas para retener los clientes, ampliar la propuesta planteada y definir estrategias ante una reclamación, entre otras. 
          .indicador--click(v-if="mostrarIndicador")

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Estructurar canales de distribución y venta 
              p.small Definir los canales de distribución efectivos que permita una distribución intensiva y eficaz de las mercancías. 

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c4.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Gestionar canales de venta
              p.small Mantener ventas en los establecimientos; identificar las condiciones de cada canal; gestionar la estimulación y la comunicación, etc.

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c5.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Estimular los canales de distribución
              p.small Planificación y promoción de la distribución entre los participantes del canal, establecer metodologías de ventas en los canales de distribución.

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c6.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Organización de las ventas 
              p.small Estructurar las ventas de la unidad productiva, definir tareas y funciones de la organización para la gestión de ventas (estructura, personal del área de ventas; distribución de las funciones: por territorios, clientes, líneas de productos, etc.).

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c7.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Administración de ventas
              p.small Se debe tener una planificación y control de los empleados; de igual forma generar una contratación, motivación; análisis de las actividades; selección y adaptación (información, evaluación del área o departamento).

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c8.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Gestión de ventas
              p.small Calcular coste de ventas, determinar el gasto en las ventas; establecer los canales de distribución, compras, rentabilidad de las ventas y evaluación de la eficiencia de los empleados.

      .col-md-4.col-lg-3.mb-3
        .nav-holder.align-items-center(data-aos="flip-up")
          img(src="@/assets/curso/t5-c8.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Sistema de ventas
              p.small Se debe realizar de forma periódica una evaluación y ajuste de todo el sistema de ventas (al menos una vez al año).

    p.mb-5  Por otra parte, se encuentra que para que exista una gestión eficaz de las ventas se debe identificar el cliente objetivo, realizar un marketing comercial y gestionar la distribución de los productos. Todo esto determina la estructura de apoyo de las ventas y para su gestión implica: 

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-3 <b>Figura</b> Gestión de Ventas
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-info1.svg' alt='imagen decorativa')      
        br
        figcaption  Nota. SENA (2021). 

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  La administración
    .row.mb-5
      .col-lg-8
        p.mb-3  Toda unidad productiva debe realizar y tener una administración que le permita establecer los procesos, identificar las fortalezas, debilidades y oportunidades que tiene la organización ante las demás en el mercado, pero, además permitirá conocer la situación financiera real de la organización.
        p.mb-3.text-bold  En cuanto a su conceptualización, se puede decir que la administración es el proceso que busca por medio de la planificación, la organización, ejecución y el control de los recursos darles un uso más eficiente para alcanzar los objetivos de la unidad productiva.
        p.mb-3  Según lo planteado anteriormente, el administrador es fundamental en la unidad productiva. Las actividades administrativas se caracterizan por tener una estructura de subordinación o relación de jerarquía, en otras palabras, se trabaja bajo el mando de otro. En la actualidad se puede observar que la administración se puede aplicar en instituciones formales e informales, las formales son aquellas que se rigen por normas y leyes que están escritas para que se pueda dar su funcionamiento como es el caso del Estado, empresa, organización o unidad productiva. Por otra parte, las informales tienen normas, pero no se encuentran escritas, un ejemplo de esto puede ser la familia donde también se administran recursos bajos un objetivo.
        
      .col-lg-4
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-i6.jpg' alt='imagen decorativa')     
    p.mb-5  A continuación, se observa la importancia de la administración: 

    figcaption.customCaption.mb-3 <b>Figura</b> La importancia de la administración
    .row.mb-5.justify-content-center.no-gutters        
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
    figcaption.mb-5  Nota. SENA (2021).

    p.mb-5  Por otra parte, se encuentran las características más importantes de la administración, estas son:
    .tarjeta.p-4.bg-slider.mb-5.shadow-box
      SlyderA
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 La universalidad
            p La administración puede ser utilizada en cualquier tipo de institución, unidad productiva o grupo social. Puede ser una institución formal, informal, privada, pública entre otros. Aquí todas quieren alcanzar sus objetivos usando correctamente los recursos.   
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s1.png' alt='Ejemplo de factura') 

        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Es interdisciplinaria 
            p Se relaciona con cualquier ciencia que use métodos, principios y procesos que utilice los recursos de forma eficiente. 
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s2.png' alt='Ejemplo de factura') 

        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Medio como fin
            p Es un instrumento que se utiliza para lograr un fin determinado, las organizaciones o unidad productiva que la aplica busca alcanzar sus propios objetivos.
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s3.png' alt='Ejemplo de factura') 

        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Tiene jerarquía
            p Su funcionamiento está basado de forma jerárquica, debe haber un jefe que este al mando y una serie de subordinados, el encadenamiento de sus esfuerzos permite cumplir con una meta común.
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s4.png' alt='Ejemplo de factura') 

        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Tiene unidad temporal
            p El proceso administrativo es dinámico puesto que no se realizan de forma aislada, sino que operan de forma simultánea.
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s5.png' alt='Ejemplo de factura') 

        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Su aplicabilidad 
            p Se puede operar en todos los niveles de la organización, donde existe jerarquía. Un ejemplo puede ser una ama de casa, el precedente de una compañía o de un país.
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s6.png' alt='Ejemplo de factura') 
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Es específica
            p La administración se relaciona con otras ciencias y técnicas, pero no puede confundir con otras áreas porque tiene un carácter específico.
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s7.png' alt='Ejemplo de factura') 
        .row
          .col-lg-6.mb-4.mb-md-0
            h3 Es flexible
            p Se puede aplicar en cualquier tipo de organización independientemente del campo al que se dedica y se adaptan a sus necesidades. 
          .col-lg-6
            figure(data-aos='flip-left')
              img(src='@/assets/curso/t5-s8.png' alt='Ejemplo de factura') 
    br
    p.mb-5  Se pueden encontrar diferentes tipos de administración.
    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption.mb-3 Tipos de Administración
        figure(data-aos='flip-left')
            img(src='@/assets/curso/t5-g1.svg' alt='Ejemplo de factura') 
        br
        figcaption  Nota. SENA (2021).


    p.mb-5  Según el tipo de organización en cuestión, pueden ser:

    .row.mb-5.justify-content-center
      .col-md-4.col-lg-4.mb-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-f3.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Pública
              p.small Se encarga de la gestión de las instituciones del Estado.

      .col-md-4.col-lg-4.mb-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-f2.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Privada
              p.small Se dedica a la administración de entidades privadas que no dependen del Gobierno.

      .col-md-4.col-lg-4.mb-3
        .nav-holder.align-items-center(data-aos="flip-left")
          img(src="@/assets/curso/t5-f1.svg", alt="Imagen decorativa")
          .text.p-lg-3.p-4
            .row.px-lg-3.mb-lg-2
              p.h3 Mixta
              p.small Se enfoca en la gestión de instituciones privadas que reciben apoyo del Estado, o de organismos autónomos donde el Gobierno tiene cierta injerencia o participación.


    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.p-4
          p.mb-0  De igual modo, se puede clasificar la administración según la materia que se está gestionando, pudiendo ser financiera (si se trata de capitales), comercial (en el área de marketing), de procesos, de recursos humanos, etc.

    h3.titulo-tercero
      i.fas.fa-angle-right
      | &nbsp;  Logística
    
    .row.mb-5
      .col-lg-8
        p.mb-4  La logística se convierte en un factor fundamental para toda unidad productiva. Antes de hablar un poco más sobre ella se va a conocer su conceptualización.
        .bloque-texto-b.color-primario.p-4.mb-5
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h3.mb-0 La logística es la parte del proceso de la cadena de suministros que planea, lleva a cabo y controla el flujo y almacenamiento eficientes y efectivos de bienes y servicios, así como de la información relacionada, desde el punto de origen hasta el punto de consumo, con el fin de satisfacer los requerimientos de los clientes.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h6.mb-0 - Según el Consejo de Dirección Logística – CML (1962)
        p.mb-3  En el proceso de logística se encuentra la <b>cadena de suministros</b> que enfatiza las interacciones que tienen lugar entre las funciones de marketing, logística y producción en una unidad productiva, y las interacciones que se llevan a cabo entre empresas independientes que se encuentran dentro del canal de flujo del producto. Su funcionamiento abarca todas las actividades relacionadas con el flujo y transformación de bienes, desde la etapa de materia prima (extracción) hasta el usuario o consumidor final, así como los flujos de información relacionados. Por otro parte, los materiales y la información fluyen en sentido ascendente y descendente en la cadena de suministros. La mejora de sus relaciones permite alcanzar una ventaja competitiva sostenible.
      
      .col-lg-4
        figure(data-aos='flip-left')
          img(src='@/assets/curso/t5-i10.jpg' alt='imagen decorativa') 

    .row.mb-5.justify-content-center
      .col-lg-8
        figcaption.customCaption <b>Figura</b> Cadena de suministros
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-i13.svg' alt='imagen decorativa')         
        br
        figcaption  Nota. SENA (2021).

    
    .row.mb-5.justify-content-center
      .col-lg-8
        p.mb-3  A continuación, se conocerán las actividades que conforman la logística de una unidad productiva (proceso de la cadena de suministros) es importante tener en cuenta que estas varían de una empresa a otra, dependiendo de la estructura organizacional de cada una.
        .h4 Las actividades de un sistema típico de logística son:
        p.mb-3  Servicios al cliente, pronóstico de la demanda, comunicaciones de distribución, control de inventarios, manejo de materiales, procesamiento de pedidos, selección de la ubicación de fábricas y almacenamiento (localización), compras, embalaje, manejo de bienes devueltos, eliminación de desperdicios, tráfico, transporte y almacenamiento.
      .col-lg-4
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-i11.jpg' alt='imagen decorativa')      

    .row.mb-5.justify-content-center
      .col-lg-4
        figure(data-aos='flip-up')
          img(src='@/assets/curso/t5-i12.svg' alt='imagen decorativa')           

      .col-lg-8
        .h4 Logística de negocios
        .row
          .col-lg-6
            ul.lista-ul(data-aos='slide-left')
              li
                i.fas.fa-check
                p.mb-0  Transporte
              li
                i.fas.fa-check
                p.mb-0  Mantenimiento de inventario
              li
                i.fas.fa-check
                p.mb-0  Procesamiento de pedidos
              li
                i.fas.fa-check
                p.mb-0  Adquisición
              li
                i.fas.fa-check
                p.mb-0  Embalaje protector
              li
                i.fas.fa-check
                p.mb-0  Almacenamiento
              li
                i.fas.fa-check
                p.mb-0  Manejo de materiales
              li
                i.fas.fa-check
                p.mb-0  Mantenimiento de información
                
          .col-lg-6
            ul.lista-ul(data-aos='slide-right')
              li
                i.fas.fa-check
                p.mb-0  Programación de suministros
              li
                i.fas.fa-check
                p.mb-0  Transporte
              li
                i.fas.fa-check
                p.mb-0  Mantenimiento de inventario
              li
                i.fas.fa-check
                p.mb-0  Procesamiento de pedidos
              li
                i.fas.fa-check
                p.mb-0  Embalaje protector
              li
                i.fas.fa-check
                p.mb-0  Almacenamiento
              li
                i.fas.fa-check
                p.mb-0  Manejo de materiales
              li
                i.fas.fa-check
                p.mb-0  Mantenimiento de información
      
    p.mb-5(data-aos='slide-up')  Estas actividades se organizan, dependiendo del punto donde puedan tener lugar en el canal de suministros.
    p.mb-5(data-aos='slide-up')  Se puede clasificar la lista en actividades clave y actividades de apoyo, en el siguiente cuadro se podrá observar algunas de las decisiones asociadas con cada una.

    .row.mb-5.justify-content-center
      .col-lg-10
        .tabla-a.color-acento-botones.mb-5(data-aos='flip-left') 
          table
            thead
              tr
                th.h4 Actividades clave
                th.h4 Actividades de apoyo
            tbody
              tr
                td.p-4 
                  .h5 Fijación de los estándares de servicio al cliente:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Determinar los requerimientos del cliente en cuanto a la logística de servicio.
                    li
                      i.fas.fa-check
                      p.mb-0  Fijar los niveles de servicio al cliente.
                    li
                      i.fas.fa-check
                      p.mb-0  Medir la respuesta del cliente al servicio.

                  .h5 Manejo de inventarios:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Gestión de stocks de materias primas y productos acabados.
                    li
                      i.fas.fa-check
                      p.mb-0  Estimación de ventas a corto plazo.
                    li
                      i.fas.fa-check
                      p.mb-0  Número, tamaño y localización de los puntos de almacenamiento. 

                  .h5 Transporte:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Selección del modo y servicio de transporte.
                    li
                      i.fas.fa-check
                      p.mb-0  Programación de rutas de los vehículos.
                    li
                      i.fas.fa-check
                      p.mb-0  Tratamiento de quejas.
                    li
                      i.fas.fa-check
                      p.mb-0  Auditorías de tarifas.

                  .h5 Flujos de información:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Métodos de transmisión de información de pedidos y su relación con los stocks.  
                                                                                   
                td.bg-softgray.p-4 
                  .h5 Compras:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Selección de la fuente de suministros.
                    li
                      i.fas.fa-check
                      p.mb-0  Cantidades a comprar y cuándo.

                  .h5 Embalaje de protección:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Diseñado para proteger el producto durante su manejo y almacenamiento.
   
                  .h5 Cooperación con producción y operaciones para:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Programación de suministros para producción.

                  .h5 Manejo de materiales:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Selección del equipo.
                    li
                      i.fas.fa-check
                      p.mb-0  Políticas de renovación de equipos.
                    li
                      i.fas.fa-check
                      p.mb-0  Procedimientos de tramitación de pedidos.

                  .h5 Almacenamiento:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0  Determinación de las superficies necesarias.
                    li
                      i.fas.fa-check
                      p.mb-0  Configuración del almacén.
                    li
                      i.fas.fa-check
                      p.mb-0  Distribución de las existencias.

                  .h5 Información:
                  ul.lista-ul
                    li
                      i.fas.fa-check
                      p.mb-0 Recopilación, almacenamiento y manipulación de la información.
                    li
                      i.fas.fa-check
                      p.mb-0  Análisis de datos.
   







</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({
    mostrarIndicador: true,
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
