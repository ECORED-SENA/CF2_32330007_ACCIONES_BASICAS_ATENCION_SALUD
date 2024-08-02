<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5.pb-0.pb-md-0
  
    .titulo-principal.color-acento-contenido.mb-0(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .fondo-personalizado-1.f1
      .fondo-personalizado-1__contenido.py-5
        .row.align-items-center.mb-4
          .col-md-auto(data-aos="fade-right")
            .fondo-color-primario.borde-8.p-1.pb-0.mb-4.mb-md-0
              figure
                img.mx-auto(src="@/assets/curso/temas/1.svg",style="max-width: 70px;")
          .col(data-aos="fade-left")
            p.mb-0 La atención inmediata y adecuada en situaciones de emergencia es crucial para preservar la vida y la integridad de las personas afectadas. Este componente formativo ha sido diseñado para proporcionar una guía completa sobre las acciones básicas que deben tomarse para asegurar la escena de un incidente y brindar los primeros auxilios de manera segura y efectiva. Siguiendo estos protocolos, se puede garantizar una respuesta rápida y eficiente ante cualquier eventualidad.
        
        .row.align-items-center 
          .col-lg-7.mb-4.mb-lg-0
            .fondo-color-sistema-i.p-4.mb-4.borde-14(data-aos="fade-up")
              p.mb-0.py-1 En primer lugar, es fundamental valorar la escena del incidente para identificar posibles riesgos y amenazas. Esto incluye la evaluación de riesgos eléctricos, químicos, biológicos y estructurales, así como la identificación de amenazas de incendio o explosión. La seguridad del rescatador y del lesionado es prioritaria, y debe asegurarse el uso de equipos de protección personal para evitar la exposición a fluidos corporales y otros contaminantes.
            
            p.mb-0(data-aos="fade") Finalmente, el componente formativo destaca la importancia de la bioseguridad en la atención de emergencias. Se abordan los principios de universalidad y uso de barreras, así como los procedimientos para la eliminación de materiales contaminados. #[b Este enfoque integral garantiza que tanto el personal de atención como los pacientes y el público en general estén protegidos, minimizando los riesgos de transmisión de infecciones y otros peligros asociados a las emergencias.]
          .col-lg-5(data-aos="fade-left")
            figure
              img.mx-auto(src="@/assets/curso/temas/2.svg",style="max-width: 505px;")
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
