<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center headline font-weight-bold black--text">
        Vue - Wake On LAN
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/gimdh/vue-wake-on-lan/"
        target="_blank"
        text
      >
        <span class="mr-2">Visit GitHub</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Cards/>
    </v-main>
  </v-app>
</template>

<script>
  import Cards from './components/Cards';

  export default {
    name: 'App',

    components: {
      Cards,
    },
  };
</script>
