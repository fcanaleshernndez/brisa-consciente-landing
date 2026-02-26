<template>
  <nav class="sticky top-0 bg-white z-50 border-b border-gray-50">
    <div class="max-w-7xl mx-auto px-6 py-4 grid grid-cols-3 items-center">

      <div class="flex justify-start">
        <NuxtLink to="/">
          <img src="/img/favicon.png" alt="Brisa Consciente"
            class="h-10 w-auto grayscale brightness-0 opacity-70 hover:opacity-100 transition-opacity" />
        </NuxtLink>
      </div>

      <div class="flex justify-center">
        <ul class="flex gap-12">
          <li>
            <NuxtLink to="/"
              class="text-gray-500 text-[16px] font-light hover:text-softGreen transition-all tracking-widest uppercase">
              Inicio
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/services"
              class="text-gray-500 text-[16px] font-light hover:text-softGreen transition-all tracking-widest uppercase">
              Servicios
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>