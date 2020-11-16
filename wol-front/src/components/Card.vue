<template>
  <v-card class="card">
    <v-card-title>
        {{ elem.Name }}
    </v-card-title>
    <v-divider></v-divider>
    <v-card-text>
      <v-card outlined>
        Broadcast Address: {{ elem.Broadcast }}
      </v-card>     
      <v-card outlined>
        MAC: {{ elem.MAC }}
      </v-card>        
    </v-card-text> 
    <v-card-actions class="justify-center">
      <v-btn outlined color="accent" @click="wake(elem.Broadcast, elem.MAC)">
        Wake!
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'Card',
    props: {
      elem: {
        type: Object,
        required: true
      }
    },
    methods: {
      wake: async function(broadcast, mac) {
          var data = {br_addr: broadcast, mac_addr: mac}

          const response = await fetch('/api/wake', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data) 
          })

          return await response.json()
      }
    }
  }
</script>
