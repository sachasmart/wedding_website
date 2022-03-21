<template>
  <v-container>
    <v-organism-app-bar />
    <v-organism-form />
  </v-container>
</template>

<script>
import VOrganismAppBar from '../organisms/VOrganismAppBar.vue'
import VOrganismForm from '../organisms/VOrganismForm.vue'

  export default {
    name: 'VPageForm', 
    components: {
        VOrganismAppBar, 
        VOrganismForm   
    }}
</script>