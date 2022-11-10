<script setup>
import { onMounted, inject } from "vue";
import { RouterLink, RouterView, useRouter } from "vue-router";

</script>

<template>
  <metainfo>
    <template v-slot:title="{ content }">{{ content }} | Excel Data Filler</template>
  </metainfo>
  <v-app>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>


