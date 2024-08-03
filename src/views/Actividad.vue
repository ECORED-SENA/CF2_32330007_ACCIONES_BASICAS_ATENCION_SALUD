<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Primeros auxilios y bioseguridad en emergencias',
      titulo: 'Cuestionario',
      introduccion:
        'Desarrollar competencias en la valoración de riesgos, procedimientos de emergencia y aplicación de medidas de bioseguridad para asegurar una respuesta efectiva y segura en situaciones de emergencia.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es la primera acción que debe realizarse al identificar la escena de un incidente?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Realizar la llamada de emergencia.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Asegurar la escena del incidente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Proporcionar cuidado al lesionado.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Evaluar los riesgos de la escena.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué riesgo se produce por la caída de cables eléctricos dentro del escenario de emergencia?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          barajarRespuestas: false,
          opciones: [
            {
              id: 'a',
              texto: 'Riesgo químico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Riesgo eléctrico.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Riesgo biológico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Amenaza antrópica.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué elemento se utiliza para evitar la exposición directa a la sangre y otros fluidos contaminantes?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          opciones: [
            { id: 'a', texto: 'Tapabocas.', esCorrecta: false },
            { id: 'b', texto: 'Guantes.', esCorrecta: true },
            { id: 'c', texto: 'Monogafas.', esCorrecta: false },
            { id: 'd', texto: 'Bata protectora.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué tipo de recipiente se utiliza para material contaminado con secreciones humanas?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Recipientes metálicos rígidos.',
              esCorrecta: false,
            },
            { id: 'b', texto: 'Guardines.', esCorrecta: false },
            { id: 'c', texto: 'Bolsas de plástico.', esCorrecta: false },
            { id: 'd', texto: 'Recipientes rojos.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué debe hacer si una persona que presta ayuda debe retirarse de la escena para llamar a emergencias?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Continuar atendiendo al lesionado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Pedirle que regrese para confirmar que realizó la llamada.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Buscar otra persona para que llame.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar a que llegue la ayuda.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Cuál es uno de los principios de bioseguridad mencionados en el documento?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Evitar el contacto con el paciente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Universalidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Uso exclusivo de equipos estériles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mantener una distancia segura.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué se debe hacer antes de ingresar a un vehículo en un accidente de tránsito?',
          imagen: require('@/assets/componentes/pregunta_3.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Proporcionar primeros auxilios.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desconectar la batería de los carros involucrados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Llamar a la policía.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Controlar el tráfico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué acción se recomienda para controlar un derrame de combustible en la escena de un accidente?',
          imagen: require('@/assets/componentes/pregunta_4.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Señalizarlo y cubrirlo con tierra, aserrín o arena.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Llamar a los bomberos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evacuar la escena.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Esperar a los servicios de emergencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué mecanismo de transmisión ocurre cuando el paciente tose, estornuda o habla?',
          imagen: require('@/assets/componentes/pregunta_1.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Transmisión por contacto directo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Transmisión por inoculación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Transmisión por aerosoles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Transmisión por gotas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Cuál es la finalidad de usar monogafas y tapabocas durante la atención de emergencias?',
          imagen: require('@/assets/componentes/pregunta_2.png'),
          opciones: [
            {
              id: 'a',
              texto: 'Proteger contra golpes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proteger las membranas mucosas de ojos, nariz y boca.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Identificar al personal de atención.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Mejorar la comunicación con el paciente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Felicitaciones, has acertado.',
          mensaje_incorrecto:
            'La respuesta es incorrecta. Te sugerimos revisar nuevamente el componente formativo.',
        },
      ],
      mensaje_final_aprobado:
        '¡Excelente! Te felicito, has superado la actividad.',
      mensaje_final_reprobado:
        'Te recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
