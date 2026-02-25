<template>
  <footer class="bg-pastelGreen/30 pt-20 pb-10">
    <div class="max-w-6xl mx-auto px-6">
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-softGreen/20 pb-12 gap-8">
        <div>
          <h2 class="text-2xl font-light tracking-[0.3em] text-softGreen uppercase">Brisa Consciente</h2>
          <p class="text-gray-500 mt-2 font-light">Tu espacio de bienestar emocional</p>
        </div>
        <div class="flex gap-12">
          <NuxtLink to="/" class="text-gray-600 hover:text-softGreen transition-colors font-light uppercase tracking-widest text-sm">Inicio</NuxtLink>
          <NuxtLink to="/servicios" class="text-gray-600 hover:text-softGreen transition-colors font-light uppercase tracking-widest text-sm">Servicios</NuxtLink>
        </div>
      </div>
      <div class="mt-10 text-center text-gray-500 text-xs tracking-widest uppercase font-light">
        &copy; {{ new Date().getFullYear() }} Brisa Consciente.
      </div>
    </div>
  </footer>
</template>