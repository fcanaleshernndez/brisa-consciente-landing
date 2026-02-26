<template>
  <footer class="bg-pastelGreen/20 pt-20 pb-10">
    <div class="max-w-6xl mx-auto px-6">
      
      <!-- Grid Principal: 3 Columnas en Desktop -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-softGreen/20 pb-12 items-center">
        
        <!-- 1. Branding (Izquierda) -->
        <div class="text-center md:text-left">
          <h2 class="text-2xl font-light tracking-[0.3em] text-softGreen uppercase">
            Brisa Consciente
          </h2>
          <p class="text-gray-500 mt-2 font-light text-sm italic">
            Tu espacio de bienestar emocional
          </p>
        </div>

        <!-- 2. Redes Sociales (Centro) -->
        <div class="flex justify-center items-center gap-8">
          <!-- Instagram -->
          <a href="https://www.instagram.com/brisaconsciente" target="_blank" class="group">
            <svg class="w-6 h-6 text-gray-400 group-hover:text-softGreen transition-all duration-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          <!-- TikTok -->
          <a href="https://www.tiktok.com/@ps.angelicaa" target="_blank" class="group">
            <svg class="w-5 h-5 text-gray-400 group-hover:text-softGreen transition-all duration-300" fill="currentColor" viewBox="0 0 448 512">
              <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
            </svg>
          </a>
        </div>

        <!-- 3. Navegación (Derecha) -->
        <div class="flex justify-center md:justify-end gap-8">
          <NuxtLink to="/" class="text-gray-500 hover:text-softGreen transition-colors font-light uppercase tracking-widest text-xs">
            Inicio
          </NuxtLink>
          <NuxtLink to="/services" class="text-gray-500 hover:text-softGreen transition-colors font-light uppercase tracking-widest text-xs">
            Servicios
          </NuxtLink>
        </div>
      </div>

      <!-- Copyright y Créditos -->
      <div class="mt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-gray-400 text-[10px] tracking-[0.2em] uppercase font-light">
          &copy; {{ new Date().getFullYear() }} Brisa Consciente.
        </p>
        
        <a 
          href="https://www.linkedin.com/in/francisco-canales-hernandez"
          target="_blank" 
          class="group flex items-center gap-2 text-gray-400 hover:text-softGreen transition-all duration-300"
        >
          <span class="text-[9px] tracking-[0.3em] uppercase font-light">Desarrollado por</span>
          <span class="text-[10px] font-medium tracking-widest uppercase border-b border-transparent group-hover:border-softGreen">
            {&nbsp;F.C&nbsp;}
          </span>
        </a>
      </div>

    </div>
  </footer>
</template>