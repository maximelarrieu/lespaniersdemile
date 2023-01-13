<template>
    <NavBar />
    <div class="mt-5">
      <h1 class="text-center text-uppercase">Nos contrats</h1>
      <h2 class="text-center">Les paniers d'Émile</h2>
    </div>
    <TheBase />
    <TheFooter />
  </template>
  
  <script setup>
    import NavBar from './NavBar.vue';
    import TheBase from './contracts/TheBase.vue';
    import TheFooter from './TheFooter.vue';
  </script>