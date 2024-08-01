<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Llamar a la línea de emergencia

    p.mb-4 Lo primero que se debe realizar al identificar la escena es #[span.fw-bold.c-color-sistema-j la llamada a la línea de emergencia local], con el objetivo de que el personal entrenado llegue a la escena con los recursos necesarios lo más pronto posible.

    .row.mb-4 
      .col-lg-5
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/3.png",style="max-width: 505px;")
      .col-lg-7
        .fondo-color-secundario.p-4.h-100.align-content-center.borde-15
          .row.align-items-center 
            .col-md-auto.text-center
              .fondo-color-sistema-k.rounded-circle.p-3.d-inline-flex.mb-4.mb-md-0
                figure
                  img.mx-auto(src="@/assets/curso/temas/4.svg",style="max-width: 44px;")
            .col 
              p.mb-0.c-color-sistema-l Si en la escena se encuentran más personas, se debe solicitar ayuda por medio de la llamada a la línea de emergencias, en la cual proporcione información relevante del evento.
    
    p.mb-4 La manera adecuada para hacer la llamada de emergencia es:

    .fondo-personalizado-1.f2
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

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Proporcionar cuidado al lesionado
    
    p.mb-4 Cuando se identifique que la escena está segura tanto para el lesionado como para la persona que presta la primera atención, se debe garantizar el acompañamiento al lesionado, hasta que llegue una persona cercana, ya sea familiar o el personal de salud que ha sido asignado a la escena.

    .row.justify-content-center
      .col-lg-4.col-md-6.mb-4
        .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
          .text-center
            .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
              figure
                img(src="@/assets/curso/temas/13.svg",style="max-width: 58px;")
          img.fig-1(src="@/assets/curso/temas/12.png")
          h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Evaluar la seguridad de la escena
          p.mb-0.pb-1 Asegurarse de que la escena sea segura tanto para el lesionado como para el socorrista.
      .col-lg-4.col-md-6.mb-4
        .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
          .text-center
            .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
              figure
                img(src="@/assets/curso/temas/14.svg",style="max-width: 58px;")
          img.fig-1(src="@/assets/curso/temas/12.png")
          h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Acompañamiento
          p.mb-0.pb-1 Acompañar al lesionado hasta que llegue personal médico o un familiar.
      .col-lg-4.col-md-6.mb-4
        .tarjeta-per-1.p-4.p-lg-5.pt-lg-4.h-100
          .text-center
            .fondo-color-secundario.p-2.borde-5.d-inline-flex.mb-4
              figure
                img(src="@/assets/curso/temas/15.svg",style="max-width: 58px;")
          img.fig-1(src="@/assets/curso/temas/12.png")
          h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Evaluación de riesgos
          p.mb-0.pb-1 Considerar riesgos eléctricos, químicos y biológicos en el lugar de la emergencia. 

      
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
