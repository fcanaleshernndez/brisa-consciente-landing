<template>
  <section class="py-32 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pastelBlue/30 via-pastelBlue/10 to-transparent">
    <div class="max-w-6xl mx-auto px-6">
      <h2 class="text-4xl font-light tracking-[0.3em] uppercase text-center text-softGreen mb-20">Nuestros Valores</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(valor, index) in valores" :key="index" 
          class="p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 group border border-white/50 flex flex-col items-center text-center">
          
          <div class="w-16 h-16 bg-pastelGreen/20 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-softGreen group-hover:rotate-6 transition-all duration-500">
            <component :is="valor.icono" class="w-8 h-8 text-softGreen group-hover:text-white transition-colors" />
          </div>

          <h3 class="text-xl font-bold text-gray-800 mb-4 tracking-tight">{{ valor.titulo }}</h3>
          <p class="text-gray-500 leading-relaxed font-light text-sm">
            {{ valor.descripcion }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { 
  UserGroupIcon, 
  ShieldCheckIcon, 
  FingerPrintIcon, 
  SparklesIcon 
} from '@heroicons/vue/24/outline'

const valores = [
  { 
    titulo: 'Conexión Humana', 
    descripcion: 'Construimos vínculos basados en una escucha auténtica, reconociendo la experiencia individual.',
    icono: UserGroupIcon
  },
  { 
    titulo: 'Excelencia Ética', 
    descripcion: 'Mantenemos los más altos estándares de calidad, asegurando una práctica responsable.',
    icono: ShieldCheckIcon
  },
  { 
    titulo: 'Integridad', 
    descripcion: 'Garantizamos un entorno de absoluta reserva donde la intimidad es nuestra prioridad.',
    icono: FingerPrintIcon
  },
  { 
    titulo: 'Presencia Plena', 
    descripcion: 'Promovemos un estado de observación activa para vivir con mayor intención y equilibrio.',
    icono: SparklesIcon
  }
]
</script>