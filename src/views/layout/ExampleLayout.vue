<script setup>
import { ref } from "vue";

// App Drawer
const isOpenDrawer = ref(false)
</script>

<template>
  <v-app-bar color="primary" prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="isOpenDrawer = !isOpenDrawer"></v-app-bar-nav-icon>
    <v-toolbar-title>Example - EDF 4</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn to="/" variant="text" icon="mdi-home"></v-btn>
  </v-app-bar>
  <v-navigation-drawer v-model="isOpenDrawer" expand-on-hover>
    <v-list density="compact" nav>

      <v-list-group value="Examples">
        <template v-slot:activator="{ props }">
          <v-list-item v-bind="props" prepend-icon="mdi-text" title="Examples"></v-list-item>
        </template>
        <v-list-item title="Examples - 1" to="/example/1"></v-list-item>
      </v-list-group>

      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-download" title="Download Extension" href="https://efiller.netlify.app/" target="_blank"></v-list-item>
    </v-list>
  </v-navigation-drawer>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

