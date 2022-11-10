<script setup>
import { ref } from 'vue';
import { useMeta } from 'vue-meta'

// Meta Tags
useMeta({
  title: 'Vuetify 3 Testing',
  htmlAttrs: { lang: 'en', amp: true }
});
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center">
      <div class="align-center mb-5" style="display: inline-flex;">
        <div class="ma-4">
          <v-img width="100" :aspect-ratio="1" src="src/assets/logo.svg"></v-img>
        </div>
        <div class="text-h4 text-blue-accent-1">+</div>
        <div class="ma-4">
          <v-img width="100" :aspect-ratio="1" src="src/assets/512x512.png"></v-img>
        </div>
      </div>
      <h1 class="text-h3 font-weight-bold">Vuetify 3 - Testing</h1>
      <div class="text-subtitle-2 font-weight-light mt-3">Testing Form Page For <a href="https://efiller.netlify.app/" target="_blank">Excel Data Filler - V4</a></div>
      <div class="py-6" />
      
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-table>
            <thead>
              <tr>
                <th class="text-left">Example</th>
                <th class="text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <router-link to="/example/1">Example - 1</router-link>
                </td>
                <td>Basic Form Components</td>
              </tr>
            </tbody>
          </v-table>
        </v-col>
      </v-row>
      
    </v-responsive>
  </v-container>
</template>