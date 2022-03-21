<template>
  <v-app>
    <v-main>
      <v-page-form />
    </v-main>
  </v-app>
</template>

<script>
import VPageForm from './components/pages/VPageForm.vue';

export default {
  name: 'App',

  components: {
    VPageForm,
  },

  data: () => ({
    
  }),
};
</script>
