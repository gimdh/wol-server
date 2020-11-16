# wol-server

Wake-On-LAN Web UI server powered by **Node.js** backend and **Vue.js** frontend.

* * *

## Install procedure
1. Install and build wol-front
```bash
cd wol-front
npm install
npm run build
```

2. Install and run wol-back
```bash
cd wol-back
npm install
npm start
``` 

## Configure server
### Edit client list
Client list is loaded from `/wol-front/src/config.json`. Keep in mind you need to recomple frontend after edit.

Following is an example configuration. If you are not sure, broadcast IP of 255.255.255.255 will do the job.

```JSON
[
  {
    "Name": "Main Desktop",
    "Broadcast": "192.168.1.255",
    "MAC": "AA:AA:AA:AA:AA:AA"
  },
  {
    "Name": "Samsung Laptop",
    "Broadcast": "192.168.1.255",
    "MAC": "BB:BB:BB:BB:BB:BB"
  }
]
```

### Edit port binding
Port binding can be configured from `/wol-back/bin/www`. You can edit `3000` part with port of your choice at following line.

```js
var port = normalizePort(process.env.PORT || '3000');
```

## Credits
[nodejs/node](https://github.com/nodejs/node)

[vuejs/vue](https://github.com/vuejs/vue)

[vuetifyjs/vuetify](https://github.com/vuetifyjs/vuetify)

[song940/wake-on-lan](https://github.com/song940/wake-on-lan)
