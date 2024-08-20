<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Llamar a la línea de emergencia

    .fondo-personalizado-1.f4
      .fondo-personalizado-1__contenido.pt-5.pb-4
        p.mb-4(data-aos="fade") Lo primero que se debe realizar al identificar la escena es #[span.fw-bold.c-color-sistema-j la llamada a la línea de emergencia local], con el objetivo de que el personal entrenado llegue a la escena con los recursos necesarios lo más pronto posible.

        .row.mb-4 
          .col-lg-5(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 505px;")
          .col-lg-7(data-aos="fade-left")
            .fondo-color-secundario.p-4.h-100.align-content-center.borde-15
              .row.align-items-center 
                .col-md-auto.text-center
                  .fondo-color-sistema-k.rounded-circle.p-3.d-inline-flex.mb-4.mb-md-0
                    figure
                      img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 44px;")
                .col 
                  p.mb-0.c-color-sistema-l Si en la escena se encuentran más personas, se debe solicitar ayuda por medio de la llamada a la línea de emergencias, en la cual proporcione información relevante del evento.
        
        p.mb-0(data-aos="fade-up") La manera adecuada para hacer la llamada de emergencia es:

    .fondo-personalizado-1.f2(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4
          PasosB.pasos-personalizado-1
            .row.mb-5.pt-3(titulo="Paso 1")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Solicitar ayuda
                p.mb-0 Pedir ayuda a cualquier persona que se encuentre en la escena y esté dispuesta a colaborar.
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/6.png",style="max-width: 403px;")
            .row.mb-5.pt-3(titulo="Paso 2")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Informar el número de emergencia
                p.mb-0 Asegurarse de que la persona conozca el número de la línea de emergencia local. 
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/7.png",style="max-width: 403px;")
            .row.mb-5.pt-3(titulo="Paso 3")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Confirmar llamada
                p.mb-0 Si la persona debe retirarse para hacer la llamada, pedirle que regrese para confirmar que la realizó.
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/8.png",style="max-width: 403px;")
            .row.mb-5.pt-3(titulo="Paso 4")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Realizar la llamada 
                p.mb-0 Si se está solo con el lesionado, realizar primero la llamada antes de comenzar la atención. 
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/9.png",style="max-width: 403px;")
            .row.mb-5.pt-3(titulo="Paso 5")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Explicar al lesionado
                p.mb-0 Informar al lesionado que primero se hará la llamada antes de iniciar la atención.
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/10.png",style="max-width: 403px;")
            .row.mb-5.pt-3(titulo="Paso 6")
              .col-lg-6.mb-4.mb-lg-0.ps-lg-5
                h4.mb-4 Capacidad de respuesta
                p.mb-0 Activar la línea de emergencia en eventos que superen la capacidad de respuesta.
              .col-lg-6
                figure
                  img.mx-auto(src="@/assets/curso/temas/11.png",style="max-width: 403px;")
    
    Separador

    #t_1_1.titulo-segundo.color-acento-contenido.mb-0(data-aos="fade-right")
      h2 1.1 Proporcionar cuidado al lesionado
    
    .fondo-personalizado-1.f5
      .fondo-personalizado-1__contenido.pt-5.pb-4
        p.mb-4(data-aos="fade-down") Cuando se identifique que la escena está segura tanto para el lesionado como para la persona que presta la primera atención, se debe garantizar el acompañamiento al lesionado, hasta que llegue una persona cercana, ya sea familiar o el personal de salud que ha sido asignado a la escena.

        .row.justify-content-center
          .col-lg-4.col-md-6.mb-4(data-aos="fade-right")
            .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
              .text-center
                .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
                  figure
                    img(src="@/assets/curso/temas/13.svg",style="max-width: 58px;")
              img.fig-1(src="@/assets/curso/temas/12.png")
              h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Evaluar la seguridad de la escena
              p.mb-0.pb-1 Asegurarse de que la escena sea segura tanto para el lesionado como para el socorrista.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-up")
            .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
              .text-center
                .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
                  figure
                    img(src="@/assets/curso/temas/14.svg",style="max-width: 58px;")
              img.fig-1(src="@/assets/curso/temas/12.png")
              h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Acompañamiento
              p.mb-0.pb-1 Acompañar al lesionado hasta que llegue personal médico o un familiar.
          .col-lg-4.col-md-6.mb-4(data-aos="fade-left")
            .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
              .text-center
                .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
                  figure
                    img(src="@/assets/curso/temas/15.svg",style="max-width: 58px;")
              img.fig-1(src="@/assets/curso/temas/12.png")
              h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Evaluación de riesgos
              p.mb-0.pb-1 Considerar riesgos eléctricos, químicos y biológicos en el lugar de la emergencia.

    Separador.pt-1

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 1.2 Evaluación de riesgos
    
    p.mb-4(data-aos="fade") Al evaluar los riesgos en el lugar de la emergencia, se debe tener en cuenta los siguientes:

    figure(data-aos="zoom-in-up")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/SqlRrZ6Aj18?si=v8jmfLACguVHGzeZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
      figcaption Video. Evaluación de riesgos
    
    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in-out")
      h2 1.3 Aseguramiento específico del área

    p.mb-0(data-aos="fade-left") En situaciones de emergencia, el aseguramiento específico del área es una prioridad crucial para proteger a los involucrados y facilitar las labores de rescate. #[b Este proceso varía según el tipo de incidente, requiriendo medidas adaptadas a las circunstancias particulares de cada caso.]

    .titulo-decorativo.my-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Accidente de tránsito
    
    p.mb-4(data-aos="fade-up") La gestión de un accidente de tránsito requiere una serie de pasos específicos para asegurar el área y minimizar riesgos adicionales. A continuación, se detallan las medidas fundamentales que deben tomarse para proteger a los involucrados y garantizar la seguridad en la escena:

    .fondo-personalizado-1.f3(data-aos="flip-down")
      .fondo-personalizado-1__contenido
        .row.align-items-center 
          .col-lg-4
            figure.mb-4.mb-lg-0.pt-4.pt-lg-5
              img.mx-auto(src="@/assets/curso/temas/20.svg",style="max-width: 400px;")
          .col-lg-8
            SlyderF.slider-personalizado-1(columnas="col-lg-6")
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  .text-center
                    .fondo-color-secundario.p-2.borde-12.d-inline-flex.mb-4
                      figure
                        img(src="@/assets/curso/temas/16.svg",style="max-width: 83px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 01
                  p.mb-0 Antes de ingresar al vehículo, asegure la escena desconectando la batería de los carros involucrados en el accidente.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  .text-center
                    .fondo-color-secundario.p-2.borde-12.d-inline-flex.mb-4
                      figure
                        img(src="@/assets/curso/temas/52.svg",style="max-width: 83px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 02
                  p.mb-0 Verifique si existe derrame de combustible, si es así, debe señalizarlo y cubrirlo con tierra, aserrín o arena.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.h-100.p-4.pb-5
                  .text-center
                    .fondo-color-secundario.p-2.borde-12.d-inline-flex.mb-4
                      figure
                        img(src="@/assets/curso/temas/17.svg",style="max-width: 83px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 03
                  p.mb-0 La señalización y la iluminación en la escena son importantes para evitar que ocurra otro accidente.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.h-100.p-4.pb-5
                  .text-center
                    .fondo-color-secundario.p-2.borde-12.d-inline-flex.mb-4
                      figure
                        img(src="@/assets/curso/temas/18.svg",style="max-width: 83px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 04
                  p.mb-0 Controlar el flujo en el exterior del equipo de carreteras, permanecer a distancia prudente mientras se descarga el agente extintor.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.h-100.p-4.pb-5
                  .text-center
                    .fondo-color-secundario.p-2.borde-12.d-inline-flex.mb-4
                      figure
                        img(src="@/assets/curso/temas/19.svg",style="max-width: 83px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 05
                  p.mb-0 Si está en un lugar de mayor tránsito de carros, se le informe que debe disminuir la velocidad antes de llegar a la escena, para prevenir otro accidente.
    
    .titulo-decorativo.my-4(data-aos="fade")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Incendio
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/21.png')})`}"
      )
      .bloque-texto-g__texto.p-4.p-lg-5(data-aos="fade-left")
        p.mb-0 Incendios de mayor proporción le corresponden al cuerpo de bomberos de la localidad hacer el control con su maquinaria; se deben extremar las medidas de seguridad con elementos de protección personal.

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
