<template>
  <!-- Reducimos pt-32 a pt-12 para acercar el logo a la Navbar -->
  <section class="pt-12 pb-24 flex flex-col items-center text-center bg-gradient-to-b from-[#F8FBF9] via-[#B8E6D5] to-[#B8E6D5]">
    
    <!-- Logo con sombra profunda -->
    <div class="w-[320px] h-[320px] md:w-[450px] md:h-[450px] flex items-center justify-center mb-4">
      <img 
        src="/img/logo1.png" 
        alt="Brisa Consciente Logo" 
        class="w-full h-full object-contain drop-shadow-[0_10px_7px_rgba(23,110,90,0.3)]"
      />
    </div>

    <!-- Título en Blanco con sombra -->
    <h1 class="text-4xl md:text-6xl font-bold text-white drop-shadow-[0_2px_4px_rgba(53,110,90,0.4)] mb-4 tracking-tight">
      Brisa Consciente
    </h1>

    <!-- Subtítulo en Blanco con sombra -->
    <p class="text-xl md:text-3xl text-white/90 font-medium max-w-2xl px-6 drop-shadow-[0_1px_3px_rgba(53,110,90,0.3)]">
      Tu espacio de bienestar y crecimiento personal
    </p>

  </section>
</template>