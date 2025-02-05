<template>
  <v-app>
    <!-- BARRA DE NAVEGACIÓN -->
    <v-app-bar dense flat class="app-bar bg-azul">
      <!-- Ícono de menú -->
      <v-btn icon @click="drawer = !drawer" class="nav-icon">
        <v-icon>mdi-menu</v-icon>
      </v-btn>

      <!-- Contenedor del logo y el título -->
      <div class="logo-title">
        <!-- Imagen del logo redondeada -->
        <v-img
          src="/imagenes/logos/logo_principal.svg"
          alt="Logo de La Gran Ola"
          class="logo-img"
        ></v-img>
        <!-- Título -->
        <span class="app-title">La gran ola</span>
      </div>

      <v-spacer></v-spacer>

      <!-- Botón Home -->
      <v-btn text to="/" class="nav-btn">Home</v-btn>
    </v-app-bar>

    <!-- BARRA LATERAL -->
    <v-navigation-drawer v-model="drawer">
      <v-row wrap class="mt-2 ml-2 mr-2">
        <v-col 
        cols="12" 
        v-for="(barraLateral, index) in barraLat" 
        :key="index"
        >
        <v-btn
        block
        class="text-uppercase bg-azul"
        @click="scrollTo(barraLateral.to); drawer = false"         
        >
        {{ barraLateral.seleccion }}
        </v-btn>
      </v-col>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn @click="drawer = false" class="bg-info">
            cerrar
            <v-icon class="ml-2">mdi-reply</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-navigation-drawer>

<!-- BOTÓN FLOTANTE PARA SUBIR -->
<v-btn
  fab
  color="blue"
  class="scroll-to-top"
  @click="scrollToTop"
  rounded="xl"
>
  <v-icon>mdi-chevron-up</v-icon>
</v-btn>

    <v-main>
      <router-view />
    </v-main>


    <!--FOOTER-->
    <v-footer class="bg-azul">
      <v-row>
        <v-col 
        cols="12" 
        v-for="(redes,index) in redesSociales" 
        :key="index"
        class="bg-azul"
        >
          <v-btn 
          class="bg-info"
          :href="redes.link" 
          target="_blank"
          > {{ redes.nombres }}
            <v-icon> {{ redes.iconos }}</v-icon>
          </v-btn>
        </v-col>
        <v-col class="text-center">
          <span>© 2025 La gran ola | Todos los derechos reservados | Hecho por: Marcelo Andreola</span>
        </v-col>
      </v-row>
    </v-footer>

  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      redesSociales: [
        {
          nombres: 'Instagram',
          iconos: 'mdi-instagram',
          link: 'https://www.instagram.com/'
        },
        {
          nombres: 'Gmail',
          iconos: 'mdi-gmail',
          link: 'https://workspace.google.com/intl/es-419_ar/gmail/'
        }
      ],
      barraLat: [
      {
        seleccion: 'Catalogo',
        to: '#catalogo',
      },
      {
        seleccion: 'Nuevos lanzamientos',
        to: '#nuevosLanzamientos',
      },      
      ]
    };
  },
  methods: {
    scrollTo(target) {
      const section = document.querySelector(target); // Busca el elemento por ID (#catalogo, #nuevos-lanzamientos)
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' }); // Desplazamiento suave
      }
    },
    scrollTo(target) {
    const section = document.querySelector(target);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    }
};
</script>

<style scoped>
/* Asegura que la barra use un diseño compacto */
.app-bar {
  padding: 0 8px; /* Reduce el padding interno */
  display: flex;
  align-items: center;
  gap: 8px; /* Control estricto del espacio entre elementos */
  background-color: #fff; /* Fondo para ver mejor los ajustes */
}

/* Botón del ícono de menú */
.nav-icon {
  margin: 0; /* Sin márgenes adicionales */
  padding: 0; /* Reduce cualquier padding interno */
}

/* Contenedor del logo y título */
.logo-title {
  display: flex;
  align-items: center;
  gap: 4px; /* Control del espacio mínimo entre logo y título */
}

/* Logo redondeado */
.logo-img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0; /* Sin márgenes adicionales */
}

/* Título de la barra */
.app-title {
  font-size: 16px; /* Tamaño compacto del texto */
  margin: 0; /* Sin márgenes adicionales */
  white-space: nowrap; /* Evita saltos de línea */
}

/* Botón de navegación */
.nav-btn {
  margin-right: 8px;
  font-size: 14px;
}

.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 16px;
  z-index: 1000;
}

</style>
