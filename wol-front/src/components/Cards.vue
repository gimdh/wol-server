<template>
  <v-row class="fill-height overflow-auto" id="container">
    <v-col
      v-for="item in items"
      :key="item.Name"
      :cols="(12/itemsPerRow)"
      class="py-2"
    > 
      <Card :elem="item"/>
    </v-col>
  </v-row>
</template>

<script>
  import Card from './Card'
  import config from '../config.json'

/* eslint-disable no-fallthrough */
  export default {
    name: 'Cards',

    computed: {
      itemsPerRow () {
        var items = 0

        switch (this.$vuetify.breakpoint.name) {
          case 'xs': 
          case 'sm': 
          case 'md': 
          case 'lg': items++
          case 'xl': items++
        }

        return items
      }
    },
    
    components: {
      Card
    },

    data: () => ({
      items: config
    }),
  }
</script>



