<script setup>
import HelloWorld from './components/HelloWorld.vue'
import IconsSocial from './components/IconsSocial.vue';
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header class="">
    <div class="flex px-2 items-center justify-between">
        <a href="/">
          <img src="/src/assets/logo.svg" alt="" width="100" height="100">
        </a>
      <div>
        <IconsSocial />
      </div>
    </div>
  </header>
  <main class="p-4">
    <img alt="sem rosto" class="sm:w-[500px] sm:h-[369px]" src="/src/assets/sem-rosto-g.svg" width="300" height="222" />
    <div>
      <HelloWorld />
    </div>
    <TheWelcome />
    <button>ASSISTIR AGORA</button>
    <button>ASSISTIR O TRAILER</button>
  </main>
</template>