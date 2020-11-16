import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import colors from 'vuetify/es5/util/colors';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.orange.base,
          secondary: colors.lightGreen.base,
          accent: colors.deepOrange.base,
          error: colors.deepPurple.base,
          warning: colors.purple.base,
          info: colors.brown.base,
          success: colors.green.base
        },
      },
    },
  });
  