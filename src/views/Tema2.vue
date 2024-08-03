<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
    .titulo-principal.color-acento-contenido.mb-lg-0
      .titulo-principal__numero
        span 2
      h1 Bioseguridad

    .row.align-items-end(data-aos="fade-up")
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

    #t_2_1.titulo-segundo.color-acento-contenido.mb-2(data-aos="fade-left")
      h2 2.1 Principios de bioseguridad

    .fondo-personalizado-1.f7
      .fondo-personalizado-1__contenido.py-5
        p.mb-0(data-aos="fade") Los principios de bioseguridad son fundamentales para garantizar la protección tanto de los pacientes como de los profesionales de la salud en cualquier entorno clínico. Estos principios se basan en la universalidad y el uso de barreras para minimizar el riesgo de transmisión de infecciones.

        .titulo-decorativo.my-5(data-aos="fade-right")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Universalidad
        
        .row.align-items-center 
          .col-lg-4(data-aos="fade-right")
            figure.mb-4.mb-lg-0
              img.mx-auto(src="@/assets/curso/temas/26.png",style="max-width: 403px;")
          .col-lg-8
            p.mb-4(data-aos="fade-down") Todos los pacientes y sus fluidos corporales, independientemente del diagnóstico o motivo de atención, deben considerarse como potencialmente infectantes. Por ello, es esencial tomar las precauciones necesarias para prevenir la transmisión de enfermedades. Según este principio, las medidas de bioseguridad deben aplicarse en la atención de todos los pacientes que impliquen contacto directo con sangre o fluidos corporales, sin importar si se conoce o no algún proceso infeccioso o enfermedad.

            .tarjeta-per-2.p-4(data-aos="fade-up")
              .row.align-items-center 
                .col-md-auto
                  figure.mb-4.mb-md-0
                    img.mx-auto(src="@/assets/curso/temas/27.svg",style="max-width: 91px;")
                .col 
                  p.mb-0 Los líquidos considerados como potencialmente infectantes incluyen sangre, semen, secreción vaginal, líquido cefalorraquídeo, líquido pleural, líquido amniótico, líquido peritoneal, líquido pericárdico, heces, orina, secreción nasal, esputo y vómito.
        
        .titulo-decorativo.my-5(data-aos="fade-left")
          .cont-figura
            img(src="@/assets/curso/temas/img-tit-dec.svg")
          .cont-text 
            h3 Uso de barreras
        
        p.mb-4(data-aos="fade-left") El uso de barreras tiene como objetivo evitar la exposición directa a la sangre y otros fluidos contaminantes mediante #[span.fw-bold.c-color-primario la utilización de dispositivos diseñados para interponerse entre la piel del personal de salud y los fluidos contaminantes del paciente.] Aunque el uso de barreras como los guantes no elimina por completo los accidentes de exposición a estos fluidos, sí reduce significativamente la posibilidad de exposición directa. Los equipos de protección personal mínimos adecuados para la atención de un lesionado incluyen:

        .borde-20.overflow-hidden.mb-4(data-aos="flip-up")
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
        
        p.mb-0(data-aos="fade-left") Implementar y adherirse a estos principios de bioseguridad es esencial para mantener un entorno seguro y saludable en el ámbito de la atención médica, protegiendo tanto a los pacientes como a los profesionales de posibles #[span.c-color-primario.fw-bold infecciones y contaminaciones.]

    Separador.pt-1

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Medios de eliminación de material contaminado

    p.mb-4(data-aos="fade") Procedimientos para eliminar el material contaminado con cualquier fluido corporal después de realizar la atención. Algunos elementos para este fin son:
    
    .fondo-personalizado-1.f2.mb-4(data-aos="flip-up")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4
          SlyderA.slider-personalizado-2.pt-lg-2(tipo="b")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Recipientes rojos
                p.mb-0 Para material contaminado con secreciones humanas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/30.png",style="max-width: 403px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Recipientes metálicos rígidos
                p.mb-0 Para materiales peligrosos como termómetros rotos, reactivos y fármacos.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/31.png",style="max-width: 403px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Guardines
                p.mb-0 Para depositar material cortopunzante.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/32.png",style="max-width: 403px;")
    
    p.mb-4(data-aos="fade-up") #[span.fw-bold Lavarse las manos antes y después] de atender a una persona es una manera de prevenir la transmisión de infecciones.

    p.mb-4(data-aos="fade-down") #[span.fw-bold.c-color-primario A continuación, se explica paso a paso cómo se lavan las manos con agua y jabón corriente:]

    .fondo-personalizado-1.f6(data-aos="flip-up")
      .fondo-personalizado-1__contenido.pb-4
        .row.align-items-center 
          .col-lg-4
            figure.mb-4.mb-lg-0.pt-1
              img.mx-auto(src="@/assets/curso/temas/33.png",style="max-width: 395px;")
          .col-lg-8
            SlyderF.slider-personalizado-1(columnas="col-lg-6")
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/34.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 01
                  p.mb-0 Abre el grifo y moja tus manos con agua.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/35.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 02
                  p.mb-0 Aplica una cantidad suficiente de jabón para cubrir todas las superficies de tus manos.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/36.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 03
                  p.mb-0 Frota las palmas de tus manos entre sí, asegurándote de cubrir toda la superficie.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/37.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 04
                  p.mb-0 Frota el dorso de cada mano con la palma de la mano opuesta.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/38.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 05
                  p.mb-0 Entrelaza los dedos y frota el espacio entre ellos.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/39.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 06
                  p.mb-0 Frota el dorso de los dedos de una mano contra la palma de la otra, manteniendo los dedos entrelazados.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/40.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 07
                  p.mb-0 Frota cada pulgar con la otra mano, realizando movimientos rotatorios.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/41.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 08
                  p.mb-0 Frota las puntas de los dedos y las uñas contra la palma de la mano opuesta.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/42.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 09
                  p.mb-0 Enjuaga tus manos con agua, eliminando todo el jabón.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/43.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 10
                  p.mb-0 Seca tus manos con una toalla desechable o un paño limpio.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/44.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 11
                  p.mb-0 Utiliza la misma toalla desechable para cerrar el grifo, evitando así volver a contaminar tus manos.
              .px-4.py-4.px-lg-0.h-100
                .tarjeta-per-1.bg-white.p-4.pb-5.h-100
                  figure.mb-4
                    img.mx-auto(src="@/assets/curso/temas/45.svg",style="max-width: 123px;")
                  h4.mb-4.fondo-color-acento-contenido.d-inline-flex.px-2.py-1 12
                  p.mb-0 Ahora tus manos están limpias y libres de gérmenes.

    .titulo-decorativo.my-5.mb-4(data-aos="fade-right")
      .cont-figura
        img(src="@/assets/curso/temas/img-tit-dec.svg")
      .cont-text 
        h3 Mecanismos de transmisión
    
    p.mb-4(data-aos="fade") La transmisión de microorganismos se hace a través de varios mecanismos:

    .fondo-personalizado-1.f2(data-aos="zoom-in-out")
      .fondo-personalizado-1__contenido.py-5
        .bg-white.borde-20.p-4
          SlyderA.slider-personalizado-2.pt-lg-2(tipo="b")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Contacto directo e indirecto
                p.mb-0 Transmisión a través del contacto con fluidos corporales del paciente infectado.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/47.png",style="max-width: 403px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Gotas
                p.mb-0 Transmisión cuando el paciente tose, estornuda o habla, y las secreciones entran en contacto con mucosas.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/48.png",style="max-width: 403px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Aerosoles o inhalación
                p.mb-0 Transmisión por pequeñas gotas evaporadas y micropartículas que viajan grandes distancias.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/49.png",style="max-width: 403px;")
            .row.justify-content-center.pt-lg-4
              .col-lg-6.mb-4.mb-lg-0
                h4.mb-4 Inoculación
                p.mb-0 Transmisión por contacto directo con objetos cortopunzantes contaminados.
              .col-lg-5
                figure
                  img.mx-auto(src="@/assets/curso/temas/50.png",style="max-width: 403px;")


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
