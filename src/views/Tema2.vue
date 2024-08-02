<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido.mb-lg-0
      .titulo-principal__numero
        span 2
      h1 Bioseguridad

    .row.align-items-end 
      .col-lg-9.mb-4.mb-lg-0
        .row
          .col-lg-5.pe-lg-0
            figure
              img.mx-auto(src="@/assets/curso/temas/24.svg")
          .col-lg-7.ps-lg-0
            .fondo-color-sistema-m.p-4.py-lg-3.h-100.align-content-center
              p.mb-0 La bioseguridad es el conjunto de medidas preventivas destinadas a mantener el control de factores de riesgos laborales o en el desempeño de alguna actividad que lo requiera, nocivos, asegurando que el desarrollo o el producto final de dichos procedimientos no atenten contra la salud y la seguridad del personal de salud, pacientes, visitas y todos quienes influyan en los diferentes eventos.
      .col-lg-3
        figure
          img.mx-auto(src="@/assets/curso/temas/25.png",style="max-width: 295px;")
    
    Separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Principios de bioseguridad
    
    p.mb-0 Los principios de bioseguridad son fundamentales para garantizar la protección tanto de los pacientes como de los profesionales de la salud en cualquier entorno clínico. Estos principios se basan en la universalidad y el uso de barreras para minimizar el riesgo de transmisión de infecciones.

    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Universalidad
    
    .row.align-items-center 
      .col-lg-4
        figure.mb-4.mb-lg-0
          img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 403px;")
      .col-lg-8
        p.mb-4 Todos los pacientes y sus fluidos corporales, independientemente del diagnóstico o motivo de atención, deben considerarse como potencialmente infectantes. Por ello, es esencial tomar las precauciones necesarias para prevenir la transmisión de enfermedades. Según este principio, las medidas de bioseguridad deben aplicarse en la atención de todos los pacientes que impliquen contacto directo con sangre o fluidos corporales, sin importar si se conoce o no algún proceso infeccioso o enfermedad.

        .tarjeta-per-2.p-4
          .row.align-items-center 
            .col-md-auto
              figure.mb-4.mb-md-0
                img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 91px;")
            .col 
              p.mb-0 Los líquidos considerados como potencialmente infectantes incluyen sangre, semen, secreción vaginal, líquido cefalorraquídeo, líquido pleural, líquido amniótico, líquido peritoneal, líquido pericárdico, heces, orina, secreción nasal, esputo y vómito.
    
    .titulo-decorativo.my-5
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Uso de barreras
    
    p.mb-4 El uso de barreras tiene como objetivo evitar la exposición directa a la sangre y otros fluidos contaminantes mediante #[span.fw-bold.c-color-primario la utilización de dispositivos diseñados para interponerse entre la piel del personal de salud y los fluidos contaminantes del paciente.] Aunque el uso de barreras como los guantes no elimina por completo los accidentes de exposición a estos fluidos, sí reduce significativamente la posibilidad de exposición directa. Los equipos de protección personal mínimos adecuados para la atención de un lesionado incluyen:

    .borde-20.overflow-hidden.mb-4
      .row 
        .col-lg-6.pe-lg-0
          .tarjeta-per-1.no-shadow.no-hover.no-borde.p-4.h-100.text-start
            figure.mb-4
              img(src="@/assets/curso/temas/28.svg",style="max-width: 126px;")
            img.fig-1.posi-1(src="@/assets/curso/temas/12.png")
            h2.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Guantes
            p.mb-0.pb-4 Acompañar al lesionado hasta que llegue personal médico o un familiar.
        .col-lg-6.ps-lg-0
          .tarjeta-per-1.no-shadow.no-hover.no-borde.color-per-2.p-4.h-100.text-start
            figure.mb-4
              img(src="@/assets/curso/temas/29.svg",style="max-width: 126px;")
            img.fig-1.posi-1(src="@/assets/curso/temas/12.png")
            h2.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 Monogafas y tapabocas
            p.mb-0.pb-4 Proteger las membranas mucosas de ojos, nariz y boca durante procedimientos que generen aerosoles.
    
    p.mb-0 Implementar y adherirse a estos principios de bioseguridad es esencial para mantener un entorno seguro y saludable en el ámbito de la atención médica, protegiendo tanto a los pacientes como a los profesionales de posibles #[span.c-color-primario.fw-bold infecciones y contaminaciones.]

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Medios de eliminación de material contaminado

    p.mb-4 Procedimientos para eliminar el material contaminado con cualquier fluido corporal después de realizar la atención. Algunos elementos para este fin son:
    
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
