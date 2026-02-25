<template>
  <section class="py-20 flex justify-center">
    <!-- Card Principal: Sin bordes duros, con sombra profunda pero suave -->
    <div class="max-w-4xl w-full bg-white/70 backdrop-blur-sm rounded-[3rem] shadow-2xl shadow-pastelGreen/20 border border-white overflow-hidden relative">
      
      <!-- Decoración de fondo sutil (opcional) -->
      <div class="absolute top-0 right-0 w-32 h-32 bg-pastelBlue/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
      <div class="absolute bottom-0 left-0 w-32 h-32 bg-pastelGreen/10 rounded-full -ml-16 -mb-16 blur-3xl"></div>

      <div class="px-8 py-16 md:px-20 flex flex-col items-center">
        
        <!-- Foto Central: Protagonista absoluta -->
        <div class="relative mb-10 group">
          <!-- Halo decorativo detrás de la foto -->
          <div class="absolute inset-0 bg-gradient-to-tr from-pastelGreen to-pastelBlue rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
          
          <div class="relative w-56 h-56 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img 
              src="/img/psicologa-angelica-image1.jpeg" 
              alt="Ps. Angélica Illesca" 
              class="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
            />
          </div>
        </div>

        <!-- Identidad -->
        <div class="text-center mb-12">
          <h2 class="text-sm uppercase tracking-[0.3em] text-softGreen font-semibold mb-4">Profesional Fundadora</h2>
          <h3 class="text-4xl md:text-5xl font-bold text-gray-800 mb-3">Ps. Angélica Illesca</h3>
          <p class="text-xl text-pastelBlue font-medium italic">
            Psicóloga Clínica | Enfoque Sistémico Integrativo
          </p>
        </div>

        <!-- Contenido en bloques limpios -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 w-full text-center md:text-left">
          
          <div class="space-y-3">
            <h4 class="text-softGreen font-bold uppercase tracking-widest text-xs">Experiencia</h4>
            <p class="text-gray-600 leading-relaxed text-sm font-light">
              Especialista en el acompañamiento terapéutico desde una mirada integrativa y reconocimiento emocional.
            </p>
          </div>

          <div class="space-y-3 border-y md:border-y-0 md:border-x border-gray-100 py-6 md:py-0 md:px-8">
            <h4 class="text-softGreen font-bold uppercase tracking-widest text-xs">Formación</h4>
            <p class="text-gray-600 leading-relaxed text-sm font-light">
              Licenciada por la Univ. Alberto Hurtado, con formación en enfoques sistémicos y Arte Terapia.
            </p>
          </div>

          <div class="space-y-3">
            <h4 class="text-softGreen font-bold uppercase tracking-widest text-xs">Enfoque</h4>
            <p class="text-gray-600 leading-relaxed text-sm font-light">
              Prioriza los recursos propios del consultante para reorganizar la historia personal y el bienestar.
            </p>
          </div>

        </div>

        <!-- Cierre sutil -->
        <div class="mt-16 pt-8 border-t border-gray-50 w-full text-center">
          <p class="text-gray-400 italic text-sm tracking-wide">
            Próximamente más profesionales se unirán a nuestro equipo...
          </p>
        </div>

      </div>
    </div>
  </section>
</template>