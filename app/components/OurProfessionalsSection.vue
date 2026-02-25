<template>
  <section class="py-24 px-6 bg-[#F8FBF9]">
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-16">
        <h2 class="text-sm uppercase tracking-[0.4em] text-softGreen font-bold mb-4">Nuestro Equipo</h2>
        <h3 class="text-4xl font-light text-gray-800">Especialistas en Bienestar</h3>
      </div>

      <!-- Contenedor scroll con ref -->
      <div
        ref="scrollContainer"
        @touchstart="onTouchStart"
        @touchend="onTouchEnd"
        class="flex md:grid md:grid-cols-3 gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 scrollbar-hide scroll-smooth"
      >
        <div v-for="(p, i) in equipo" :key="i"
          class="snap-center shrink-0 w-[85vw] md:w-auto"
          style="perspective: 1000px; min-height: 500px;">

          <!-- Contenedor que gira -->
          <div @click="toggle(i)"
            class="relative w-full h-full cursor-pointer transition-transform duration-700"
            :style="{
              transform: activo === i ? 'rotateY(180deg)' : 'rotateY(0deg)',
              transformStyle: 'preserve-3d',
              minHeight: '500px'
            }">

            <!-- FRENTE -->
            <div class="absolute inset-0 bg-white rounded-[2rem] shadow-md border border-white overflow-hidden flex flex-col"
              style="backface-visibility: hidden;">
              <div class="h-2 w-full bg-gradient-to-r from-pastelGreen to-pastelBlue flex-shrink-0"></div>
              <div class="p-8 flex-1 flex flex-col items-center justify-center text-center">
                <div class="relative mb-4">
                  <div class="absolute inset-0 bg-gradient-to-tr from-pastelGreen to-pastelBlue rounded-full blur-md opacity-30"></div>
                  <div class="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <img :src="p.foto" :alt="p.nombre" class="w-full h-full object-cover" />
                  </div>
                </div>
                <h4 class="text-xl font-bold text-gray-800">{{ p.nombre }}</h4>
                <p class="text-sm text-[#60c3e7] italic font-medium mt-1 mb-6">{{ p.especialidad }}</p>
                <p class="text-xs text-softGreen/50 tracking-widest uppercase">Toca para ver perfil</p>
              </div>
            </div>

            <!-- REVERSO -->
            <div class="absolute inset-0 bg-white rounded-[2rem] shadow-xl border border-pastelGreen/20 overflow-hidden flex flex-col"
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
                <button @click.stop="toggle(i)" class="mt-4 text-xs text-softGreen/60 tracking-widest uppercase text-center w-full">
                  ← Volver
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Indicadores de puntos (solo mobile) -->
      <div class="flex md:hidden justify-center gap-3 mt-6">
        <button
          v-for="(p, i) in equipo"
          :key="i"
          @click="goToSlide(i)"
          class="rounded-full transition-all duration-300"
          :class="cardActual === i
            ? 'w-6 h-2 bg-softGreen'
            : 'w-2 h-2 bg-pastelGreen/40 hover:bg-pastelGreen/70'"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activo = ref(null)
const cardActual = ref(0)
const scrollContainer = ref(null)
let intervalo = null
let pausado = false

function toggle(i) {
  activo.value = activo.value === i ? null : i
}

// Ir a un slide específico
function goToSlide(index) {
  const container = scrollContainer.value
  if (!container) return

  const cards = container.children
  if (!cards[index]) return

  // Calcular posición de la card dentro del contenedor
  const cardLeft = cards[index].offsetLeft
  const containerPadding = 24 // px-6 = 24px
  container.scrollTo({
    left: cardLeft - containerPadding,
    behavior: 'smooth'
  })

  cardActual.value = index
}

// Avanzar al siguiente slide en bucle
function nextSlide() {
  if (pausado) return
  const siguiente = (cardActual.value + 1) % equipo.length
  goToSlide(siguiente)
}

// Detectar qué card está visible al hacer scroll manual
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

// Pausar al tocar
function onTouchStart() {
  pausado = true
}

// Reanudar 3s después de soltar
function onTouchEnd() {
  setTimeout(() => { pausado = false }, 5000)
}

function startAutoScroll() {
  // Solo en mobile (< 768px)
  if (window.innerWidth >= 768) return
  intervalo = setInterval(nextSlide, 5500)
}

function stopAutoScroll() {
  if (intervalo) clearInterval(intervalo)
}

onMounted(() => {
  scrollContainer.value?.addEventListener('scroll', onScroll)
  startAutoScroll()
})

onUnmounted(() => {
  stopAutoScroll()
  scrollContainer.value?.removeEventListener('scroll', onScroll)
})

const equipo = [
  {
    nombre: 'Ps. Fernanda Cerda',
    especialidad: 'Psicóloga Clínica | Enfoque Psicodinámico',
    foto: '/img/psicologa-fernanda-cerda-image1.jpeg',
    experiencia: 'Acompañamiento y tratamiento terapéutico a adolescentes (+ 15 años), adultas y adultos. Experiencia de más de 5 años abordando temáticas como depresión, melancolía, duelo, ansiedad, crisis de pánico, violencia, traumas, conflictos vinculares, entre otros.',
    formacion: 'Titulada de Psicóloga en la Universidad Alberto Hurtado. Diplomada en Psicoanálisis y salud mental en la Pontificia Universidad Católica. Formada en atención con enfoque de género.',
    enfoque: 'Trabajo terapéutico desde una orientación psicodinámica, acompañando a las personas a analizar, comprender y elaborar el sentido de su malestar subjetivo para encontrar el alivio.'
  },
  {
    nombre: 'Próximamente',
    especialidad: 'Especialidad por confirmar',
    foto: '/img/placeholder.jpg',
    experiencia: 'Información disponible próximamente.',
    formacion: 'Información disponible próximamente.',
    enfoque: 'Información disponible próximamente.'
  },
  {
    nombre: 'Próximamente',
    especialidad: 'Especialidad por confirmar',
    foto: '/img/placeholder.jpg',
    experiencia: 'Información disponible próximamente.',
    formacion: 'Información disponible próximamente.',
    enfoque: 'Información disponible próximamente.'
  }
]
</script>