<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <img src="src/assets/logo.svg" alt="">
        <p class="text-h4">Vuetify 3 - Form Components</p>
        <p class="text-subtitle-2">Testing Page For Excel Data Filler - V4</p>
      </v-col>
      <v-col cols="12">
        <v-text-field
          v-model="fd.name"
          label="First name"
          name="full_name"
          required
        ></v-text-field>
        <v-select
          v-model="fd.country"
          label="Country"
          name="country"
          :items="[
            'India',
            'UK',
            'US',
            'Russia',
          ]"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fd: {
      name: "",
      country: "",
    },
  }),
};
</script>
