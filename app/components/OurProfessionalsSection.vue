<template>
  <section class="py-24 px-6 bg-[#F8FBF9]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-sm uppercase tracking-[0.4em] text-softGreen font-bold mb-4">Nuestro Equipo</h2>
        <h3 class="text-4xl font-light text-gray-800">Especialistas en Bienestar</h3>
      </div>

      <div ref="scrollContainer"
        class="flex gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide scroll-smooth md:flex-wrap md:justify-center">
        <div v-for="(p, i) in equipo" :key="p.nombre" class="snap-center shrink-0 w-[85vw] md:w-[30%] md:max-w-[380px]"
          style="perspective: 1000px; min-height: 500px;">

          <div @click="toggle(i)" class="relative w-full h-full cursor-pointer transition-transform duration-700"
            :style="{
              transform: activo === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
              minHeight: '500px'
            }">

            <!-- FRENTE -->
            <div
              class="absolute inset-0 bg-white rounded-[2rem] shadow-md border border-white overflow-hidden flex flex-col"
              style="backface-visibility: hidden;">
              <div class="h-2 w-full bg-gradient-to-r from-pastelGreen to-pastelBlue flex-shrink-0"></div>
              <div class="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <div class="relative mb-4">
                  <div
                    class="absolute inset-0 bg-gradient-to-tr from-pastelGreen to-pastelBlue rounded-full blur-md opacity-30">
                  </div>
                  <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img :src="p.foto" :alt="p.nombre" class="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 class="text-xl font-bold text-gray-800">{{ p.nombre }}</h4>
                <p class="text-sm text-[#60c3e7] italic font-medium mt-1 mb-6">{{ p.especialidad }}</p>
                <p class="text-xs text-softGreen/95 tracking-widest uppercase">Toca para ver perfil</p>
              </div>
            </div>

            <!-- REVERSO -->
            <div
              class="absolute inset-0 bg-white rounded-[2rem] shadow-xl border border-pastelGreen/20 overflow-hidden flex flex-col"
              style="backface-visibility: hidden; transform: rotateY(180deg);">
              <div class="h-2 w-full bg-gradient-to-r from-pastelBlue to-pastelGreen flex-shrink-0"></div>
              <div class="p-6 flex-1 flex flex-col justify-between overflow-y-auto">
                <div class="space-y-4 text-sm">
                  <div class="border-t border-gray-100 pt-3">
                    <h5 class="text-[10px] uppercase tracking-widest text-softGreen font-bold mb-1">Experiencia</h5>
                    <p class="text-gray-500 font-light leading-relaxed text-justify text-xs">{{ p.experiencia }}</p>
                  </div>
                  <div class="border-t border-gray-100 pt-3">
                    <h5 class="text-[10px] uppercase tracking-widest text-softGreen font-bold mb-1">Formación</h5>
                    <p class="text-gray-500 font-light leading-relaxed text-justify text-xs">{{ p.formacion }}</p>
                  </div>
                  <div class="border-t border-gray-100 pt-3">
                    <h5 class="text-[10px] uppercase tracking-widest text-softGreen font-bold mb-1">Enfoque</h5>
                    <p class="text-gray-500 font-light leading-relaxed text-justify text-xs">{{ p.enfoque }}</p>
                  </div>
                </div>
                <button @click.stop="toggle(i)"
                  class="mt-4 text-xs text-softGreen/90 tracking-widest uppercase text-center w-full">
                  ← Volver
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div class="md:hidden mt-6">
        <div class="flex items-center justify-center gap-2 mb-4">
          <svg class="w-4 h-4 text-pastelGreen animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
          <p class="text-xs text-softGreen/80 tracking-widest uppercase">Desliza para ver más</p>
          <svg class="w-4 h-4 text-pastelGreen animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
        <div class="flex justify-center gap-3">
          <button v-for="(p, i) in equipo" :key="p.nombre" @click="goToSlide(i)" class="rounded-full transition-all duration-300"
            :class="cardActual === i
              ? 'w-8 h-3 bg-softGreen shadow-md'
              : 'w-3 h-3 bg-pastelGreen/50 hover:bg-pastelGreen'" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activo = ref(null)
const cardActual = ref(0)
const scrollContainer = ref(null)

const equipoOriginal = [
  {
    nombre: 'Fernanda Cerda',
    especialidad: 'Psicóloga Clínica | Enfoque Psicodinámico',
    foto: '/img/psicologa-fernanda-cerda-image1.jpeg',
    experiencia: 'Acompañamiento y tratamiento terapéutico a adolescentes (+ 15 años), adultas y adultos. Experiencia de más de 5 años abordando temáticas como depresión, melancolía, duelo, ansiedad, crisis de pánico, violencia, traumas, conflictos vinculares, entre otros.',
    formacion: 'Titulada de Psicóloga en la Universidad Alberto Hurtado. Diplomada en Psicoanálisis y salud mental en la Pontificia Universidad Católica. Formada en atención con enfoque de género.',
    enfoque: 'Trabajo terapéutico desde una orientación psicodinámica, acompañando a las personas a analizar, comprender y elaborar el sentido de su malestar subjetivo para encontrar el alivio.'
  },
  {
    nombre: 'Bárbara Muñoz',
    especialidad: 'Educadora Diferencial',
    foto: '/img/ed-diferencial-barbara-munoz-image1.jpeg',
    experiencia: 'Educadora Diferencial con trayectoria transversal en el acompañamiento de estudiantes con desafíos en el neurodesarrollo, desde el nivel parvulario hasta capacitación laboral. Especialista en el diseño de apoyos individuales y estrategias para trastornos del lenguaje (TEL), espectro autista y limitaciones motoras, bajo una mirada inclusiva, funcional y centrada en la comunicación.',
    formacion: 'Licenciada en educación, Universidad Central de Chile. Profesora de educación diferencial mención trastornos específicos del lenguaje y discapacidad intelectual, Universidad Central de Chile.',
    enfoque: 'La metodología de trabajo prioriza la valoración de la neurodiversidad y el desarrollo de la autonomía funcional de cada estudiante. A través de la implementación de sistemas de comunicación y apoyos personalizados, se facilita un entorno inclusivo que potencia las fortalezas individuales, promoviendo el bienestar y la participación activa en sus diversos contextos de vida.'
  },
  {
    nombre: 'Nazhla Gómez',
    especialidad: 'Abogada Familiar',
    foto: '/img/abogada-nazhla-gomez-image1.jpeg',
    experiencia: 'Abogada con trayectoria en la representación integral ante Tribunales de Familia, destacando en la litigación de causas de alta complejidad. Mi experiencia abarca desde la protección especializada de derechos de NNA y Violencia Intrafamiliar (VIF), hasta materias de derecho de familia general como divorcios, cuidado personal, pensiones de alimentos, reconocimiento de paternidad y relación directa y regular.',
    formacion: 'Abogada (título otorgado por la Excma. Corte Suprema) y Licenciada en Ciencias Jurídicas (Universidad Andrés Bello). Especialista en Derecho de Familia, Medidas de Protección y VIF.',
    enfoque: 'Profesional con un marcado perfil litigante y estratégico. Mi objetivo es proporcionar soluciones legales integrales y personalizadas, ya sea en la protección de la infancia o en la resolución de conflictos familiares complejos.'
  }
]

const equipo = ref([])

function shuffleArray(array) {
  const shuffled = [...array]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

function toggle(i) {
  activo.value = activo.value === i ? null : i
}

function goToSlide(index) {
  const container = scrollContainer.value
  if (!container) return

  const cards = container.children
  if (!cards[index]) return

  const cardLeft = cards[index].offsetLeft
  const containerPadding = 24
  container.scrollTo({
    left: cardLeft - containerPadding,
    behavior: 'smooth'
  })

  cardActual.value = index
}

function onScroll() {
  const container = scrollContainer.value
  if (!container) return
  const cards = Array.from(container.children)
  const scrollLeft = container.scrollLeft + container.clientWidth / 2

  let closest = 0
  let minDist = Infinity
  cards.forEach((card, i) => {
    const center = card.offsetLeft + card.offsetWidth / 2
    const dist = Math.abs(center - scrollLeft)
    if (dist < minDist) {
      minDist = dist
      closest = i
    }
  })
  cardActual.value = closest
}

onMounted(() => {
  equipo.value = shuffleArray(equipoOriginal)
  scrollContainer.value?.addEventListener('scroll', onScroll)
})

onUnmounted(() => {
  scrollContainer.value?.removeEventListener('scroll', onScroll)
})
</script>
