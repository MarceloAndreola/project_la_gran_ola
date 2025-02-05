  // src/plugins/vuetify.js
  import { createVuetify } from 'vuetify'
  import 'vuetify/styles' // Importar estilos de Vuetify
  import { aliases, mdi } from 'vuetify/iconsets/mdi' // Soporte para Material Design Icons (MDI)
  import * as components from 'vuetify/components'
  import * as directives from 'vuetify/directives'
  import '@mdi/font/css/materialdesignicons.css'; // Asegúrate de que esta línea está presente para cargar los iconos

  
  
  
  
  
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'myCustomTheme', // Define tu tema personalizado
      themes: {
        myCustomTheme: {
          dark: false, // Establece si el tema es oscuro o claro
          colors: {
            primary: '#ee44aa',
            secondary: '#424242',
            accent: '#82B1FF',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
            golden: '#FFD700',
            fontGrey: '#ECEFF1',
            azul: '#1B4F72',

          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },
  })
  
  export default vuetify
  
  
