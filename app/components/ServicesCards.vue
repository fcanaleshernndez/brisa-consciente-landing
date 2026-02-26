<template>
  <div>
    <div class="flex flex-wrap justify-center gap-4 mb-16">
      <button 
        v-for="cat in categorias" 
        :key="cat.id"
        @click="categoriaActiva = cat.id"
        :class="[
          'px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 border',
          categoriaActiva === cat.id 
            ? 'bg-softGreen text-white border-softGreen shadow-lg scale-105' 
            : 'bg-white text-gray-500 border-gray-100 hover:border-pastelGreen hover:text-softGreen'
        ]"
      >
        {{ cat.nombre }}
      </button>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      <div v-for="(s, i) in serviciosFiltrados" :key="i"
          class="bg-white rounded-[2.5rem] shadow-sm overflow-hidden flex flex-col hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 group">
          
          <!-- Header -->
          <div class="h-36 bg-pastelGreen/40 flex items-center justify-center group-hover:bg-pastelGreen transition-colors duration-500">
              <div class="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center group-hover:rotate-6 transition-all duration-500">
                  <component :is="s.icono" class="w-8 h-8 text-softGreen" />
              </div>
          </div>

          <!-- Contenido -->
          <div class="p-8 flex-1 flex flex-col">
              <h3 class="text-xl font-bold text-gray-800 mb-1">{{ s.titulo }}</h3>
              <p class="text-sm text-pastelBlue font-medium mb-4 uppercase tracking-widest">{{ s.subtitulo }}</p>
              <p class="text-gray-400 text-sm leading-relaxed mb-6 flex-1 font-light">{{ s.descripcion }}</p>

              <ul class="space-y-2 mb-6">
                  <li v-for="(item, j) in s.items" :key="j" class="flex items-center gap-2 text-sm text-gray-500">
                      <CheckCircleIcon class="w-4 h-4 shrink-0 text-softGreen" />
                      {{ item }}
                  </li>
              </ul>

              <a :href="whatsappUrl(s.whatsapp)" target="_blank" rel="noopener noreferrer"
                  class="block w-full py-3 text-center text-sm font-medium text-black/50 bg-pastelGreen/20 rounded-xl hover:bg-softGreen hover:text-white transition-all duration-300">
                  Click para agendar
              </a>
          </div>
      </div>
    </div>

    <div v-if="serviciosFiltrados.length === 0" class="text-center py-20 text-gray-400">
      No hay servicios disponibles en esta categoría.
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    HeartIcon, 
    HomeIcon, 
    FaceSmileIcon, 
    GlobeAltIcon, 
    PencilIcon, 
    UsersIcon, 
    CheckCircleIcon, 
    ScaleIcon,
    AcademicCapIcon
} from '@heroicons/vue/24/outline'

const WHATSAPP_NUMBER = '56946306546'

const categorias = [
  { id: 'psicologia', nombre: 'Psicología' },
  { id: 'educacion', nombre: 'Educación' }
]

const categoriaActiva = ref('psicologia')

const servicios = [

    {
        categoria: 'psicologia',
        icono: HeartIcon,
        titulo: 'Terapia Individual',
        descripcion: 'Sesiones personalizadas enfocadas en tus necesidades específicas, en un espacio seguro y confidencial.',
        whatsapp: 'Hola, me interesa la Terapia Individual',
        items: ['Ansiedad y estrés', 'Depresión', 'Autoestima', 'Duelo y pérdida', 'Desarrollo personal']
    },
    {
        categoria: 'psicologia',
        icono: HomeIcon,
        titulo: 'Parentalidad y Dinámica Familiar',
        descripcion: 'Acompañamiento en Labores Parentales: Seguimiento especializado para padres y cuidadores, enfocado en fortalecer el vínculo, la comunicación y la organización de la dinámica familiar desde un enfoque sistémico.',
        whatsapp: 'Hola me interesa Parentalidad y Dinámica Familiar',
        items: ['Comunicación efectiva', 'Resolución de conflictos', 'Psicoeducación familiar', 'Herramientas prácticas', 'Gestión de desafíos del desarrollo y convivencia en el hogar.']
    },
    {
        categoria: 'psicologia',
        icono: FaceSmileIcon,
        titulo: 'Sesión de Orientación y Consulta Única',
        descripcion: 'Esta modalidad está diseñada para personas que requieren orientación profesional frente a una duda específica o una situación particular que no necesariamente requiere un proceso psicoterapéutico a largo plazo.',
        whatsapp: 'Hola, me interesa Sesión de Orientación y Consulta Única',
        items: ['Espacio de claridad y resolución puntual', 'Organización de pensamientos', 'Centrado en soluciones', 'Identificación de recursos', 'Procesos emocionales específicos']
    },
    {
        categoria: 'psicologia',
        icono: GlobeAltIcon,
        titulo: 'Sesión de Mapeo de Pensamientos',
        descripcion: 'Un espacio breve y estructurado (de 1 a 3 sesiones) diseñado para personas que se sienten abrumadas.',
        whatsapp: 'Hola, me interesa Sesión de Mapeo de Pensamientos',
        items: ['Recursos visuales', 'Organización mental', 'Clarificar ideas', 'Priorización de necesidades', 'Reducción del ruido mental']
    },
    {
        categoria: 'psicologia',
        icono: PencilIcon,
        titulo: 'Intervención Psicoeducativa',
        descripcion: 'Dirigido a instituciones educativas o personas naturales con intereses del área educativa.',
        whatsapp: 'Hola, me interesa Intervención Psicoeducativa',
        items: ['Bienestar dentro del entorno educativo', 'Escuela para padres', 'Visualización del aprendizaje emocional']
    },
    {
        categoria: 'psicologia',
        icono: UsersIcon,
        titulo: 'Talleres y Grupos',
        descripcion: 'Participa en talleres grupales sobre temas específicos de salud mental y desarrollo personal.',
        whatsapp: 'Hola, me interesa Talleres y Grupos',
        items: ['Manejo de emociones', 'Habilidades sociales', 'Autoconocimiento', 'Resiliencia', 'Crecimiento personal']
    },
    {
        categoria: 'educacion',
        icono: AcademicCapIcon,
        titulo: 'Intervención Psicoeducativa',
        descripcion: 'Dirigido a instituciones educativas o personas naturales con intereses del área educativa.',
        whatsapp: 'Hola, me interesa Intervención Psicoeducativa',
        items: ['Bienestar dentro del entorno educativo', 'Escuela para padres', 'Visualización del aprendizaje emocional']
    },
    {
        categoria: 'educacion',
        icono: PencilIcon,
        titulo: 'Sesión de Educación Diferencial',
        descripcion: 'Dirigido a estudiantes que requieran apoyo en el proceso de aprendizaje y enseñanza.',
        whatsapp: 'Hola, me interesa Sesión de Educación Diferencial',
        items: ['Reforzamiento en el ámbito educativo', 'Estrategias de aprendizaje','Potenciación de habilidades en la educación']
    }
]

const serviciosFiltrados = computed(() => {
  return servicios.filter(s => s.categoria === categoriaActiva.value)
})

function whatsappUrl(mensaje) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`
}
</script>