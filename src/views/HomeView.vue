<template>
  <v-container class="pa-0 ma-0" fluid>
    <v-carousel 
    :show-arrows="true" 
    height="90vh" 
    class="mb-10"
    cycle
    :interval="5000"
    style="filter: brightness(90%)"
    >
    <v-carousel-item
      v-for="(item,i) in img_principal"
      :key="i"
      :src="item.src"
      cover
    ></v-carousel-item>
  </v-carousel>

    <!--TEXTO PRINCIPAL-->
    <v-container class="text-center mb-2 bg-info">
      <v-row>
        <v-col>
          <h1 id="catalogo">Catálogo</h1>
        </v-col>
      </v-row>
    </v-container>


      <!--FILTER-->
      <v-row justify="center">
        <v-col cols="12" class="d-flex justify-center">
          <v-btn class="bg-azul" @click="filtrar=true"> Filtro
            <v-icon class="ml-2">mdi-tune</v-icon>
          </v-btn>
        </v-col>
      </v-row>

      <!--FILTER 2-->
      <v-dialog v-model="filtrar" max-width="400px">
        <v-card>
          <v-card-title>Filtrar por precio</v-card-title>
          <v-card-text>
            <v-select
            v-model="filtroSeleccionado"
            :items="[
              'Precio: de menor a mayor', 
              'Precio: de mayor a menor',
              ]"
            label="Seleccionar un filtro"
            dense
            >
            </v-select>          
          </v-card-text>
          <v-card-actions class="d-flex justify-center">
            <v-btn @click="filtrar = false">Cerrar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>




<!--CARDS CATALOGO-->
<v-row class="row-cards">
  <v-col 
    class="cards_catalogo"
    v-for="(producto, index) in listaProductos" 
    :key="index"
    >
    <v-card 
    class="pt-2" 
    elevation="3" 
    outlined 
    shaped
    rounded="lg"
    >
      <!-- Carousel dentro de la tarjeta -->
      <v-carousel 
        cycle 
        height="40vh" 
        hide-delimiters
        :show-arrows="true" 
        >
        <v-carousel-item
          v-for="(imagen, imgIndex) in producto.imagen"
          :key="imgIndex"
          :src="imagen"
          cover
        ></v-carousel-item>
      </v-carousel>   

      <!-- Título -->
      <v-card-title class="text-center bg-azul">
        <h3>{{ producto.nombre }}</h3>
      </v-card-title>
      
      <!-- Descripción -->
      <v-card-text class="mt-2">
        <p>{{ producto.descripcion }}</p>
      </v-card-text>
      
      <!-- Precio y botón -->
      <v-card-actions>
        <v-row justify="space-between" class="pa-2">
          <v-col cols="6">
            <h3>Precio: {{ producto.precio }}</h3>
          </v-col>
            <v-col cols="6" class="d-flex justify-end">
            <v-btn class="bg-info" @click="abrirGuiaTalles(producto.guiaTalle)">Guía de talles</v-btn>          
          </v-col>
        </v-row>
      </v-card-actions>
      <h5 class="d-flex justify-center" style="color: #BDBDBD;">Consultar por stock y talles disponibles</h5>
    </v-card>
  </v-col>
</v-row>
      
<!-- DIALOG PARA GUIA DE TALLES -->
<v-dialog v-model="dialog" max-width="400px">
  <v-card>
    <v-card-title class="text-center">Guía de talles</v-card-title>
    <v-card-text class="d-flex justify-center">
      <v-img :src="imagenSeleccionada" max-height="400" contain></v-img>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="dialog = false">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>

    <!--TEXTO NUEVOS LANZAMIENTOS-->
    <v-container class="text-center mt-4 mb-4">
      <v-row>
        <v-col>
          <h1 id="nuevosLanzamientos">Nuevos lanzamientos</h1>
        </v-col>
      </v-row>
    </v-container>



<!--CARDS NUEVO LANZAMIENTO-->
<v-row class="row-cards">
  <v-col 
    class="cards_nuevas" 
    v-for="(prodNew, index) in prodNuevos" 
    :key="index"
    >
    <v-card 
    elevation="3" 
    outlined 
    shaped
    rounded="lg"
    >
      <!-- Carousel dentro de la tarjeta -->
      <v-carousel 
        cycle 
        height="40vh" 
        hide-delimiters
        :show-arrows="true" 
        >
        <v-carousel-item
          v-for="(imagen, imgIndex) in prodNew.imagen"
          :key="imgIndex"
          :src="imagen"
          cover
        ></v-carousel-item>
      </v-carousel>      
      
      <!-- Título -->
      <v-card-title class="text-center bg-azul">
        <h3>{{ prodNew.nombre }}</h3>
      </v-card-title>
      
      <!-- Descripción -->
      <v-card-text class="mt-2">
        <p>{{ prodNew.descripcion }}</p>
      </v-card-text>
      <!-- Botón de "Nuevo" -->
     <v-btn 
        color="red" 
        class="text-white position-absolute" 
        style="top: 10px; right: 10px;" 
        rounded="lg"
        small
      >
        Nuevo
      </v-btn>
      
      <!-- Precio y botón -->
      <v-card-actions>
        <v-row justify="space-between" class="pa-2">
          <v-col cols="6">
            <h3>Precio: {{ prodNew.precio }}</h3>
          </v-col>
          <v-col cols="6" class="d-flex justify-end">
            <v-btn class="bg-info" @click="abrirGuiaTalles(prodNew.guiaTalle)">Guía de talles</v-btn>          
          </v-col>
        </v-row>
      </v-card-actions>
      <h5 class="d-flex justify-center" style="color: #BDBDBD;">Consultar por stock y talles disponibles</h5>
    </v-card>
  </v-col>
</v-row>
      
      
<!-- DIALOG PARA GUIA DE TALLES -->
<v-dialog v-model="dialog" max-width="400px">
  <v-card>
    <v-card-title class="text-center">Guía de talles</v-card-title>
    <v-card-text class="d-flex justify-center">
      <v-img :src="imagenSeleccionada" max-height="400" contain></v-img>
    </v-card-text>
    <v-card-actions class="d-flex justify-center">
      <v-btn @click="dialog = false">Cerrar</v-btn>
    </v-card-actions>
  </v-card>
</v-dialog>
     
  </v-container>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

  data(){
    return{
      dialog: false,
      filtrar: false,
      filtroSeleccionado: '',
      imagenSeleccionada: '',
      img_principal: [
          {
            src: '/imagenes/banners/imagen-carousel-2.jpg',
          },
          {
            src: '/imagenes/banners/img-carousel-5.jpg',
          },
          {
            src: '/imagenes/banners/img-carousel-6.jpg',
          },
          {
            src: '/imagenes/banners/img-carousel-8.jpg',
          },
          {
            src: '/imagenes/banners/img-carousel-9.jpg',
          },
          {
            src: '/imagenes/banners/img-carousel-11.jpg',
          }
        ],
      productos: [
        {
          nombre: 'Remera oversize Hula negra',
          precio: 25000,
          descripcion: 'Remera oversize negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-negra-ula-1.jpg',
            '/imagenes/catalogo/remera-negra-ula-2.jpg',
            '/imagenes/catalogo/remera-negra-ula-modelo-1.jpg',
            '/imagenes/catalogo/remera-negra-ula-modelo-2.jpg',
            '/imagenes/catalogo/remera-negra-ula-modelo-3.jpg'
            ],
            guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'
        },
        {
          nombre: 'Remera oversize Hula tiza',
          precio: 25000,
          descripcion: 'Remera oversize tiza 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-blanca-ula-1.jpg',
            '/imagenes/catalogo/remera-blanca-ula-2.jpg',
            '/imagenes/catalogo/remera-blanca-ula-modelo-1.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'

        },
        {
          nombre: 'Remera oversize Hula verde',
          precio: 25000,
          descripcion: 'Remera oversize verde 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-verde-ula-1.jpg',
            '/imagenes/catalogo/remera-verde-ula-2.jpg',
            '/imagenes/catalogo/remera-verde-ula-modelo-1.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'

        },
        {
          nombre: 'Remera oversize surfer negra',
          precio: 25000,
          descripcion: 'Remera oversize negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-negra-surfer-1.jpg',
            '/imagenes/catalogo/remera-negra-surfer-2.jpg',
            '/imagenes/catalogo/remera-negra-surfer-modelo-1.jpg',
            '/imagenes/catalogo/remera-negra-surfer-modelo-2.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'

        },
        {
          nombre: 'Remera oversize surfer verde',
          precio: 25000,
          descripcion: 'Remera oversize verde 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-verde-surfer-1.jpg',
            '/imagenes/catalogo/remera-verde-surfer-2.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'

        },
        {
          nombre: 'Remera oversize surfer tiza',
          precio: 25000,
          descripcion: 'Remera oversize tiza 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-blanca-surfer-1.jpg',
            '/imagenes/catalogo/remera-blanca-surfer-2.jpg',
            '/imagenes/catalogo/remera-blanca-surfer-modelo-1.jpg',
            '/imagenes/catalogo/remera-blanca-surfer-modelo-2.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remeras-oversize.jpg'

        },
        {
          nombre: 'Musculosa La Gran Ola negra',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen: [
            '/imagenes/catalogo/musculosa-negra-la-gran-ola.jpg',
            '/imagenes/catalogo/musculosa-negra-la-gran-ola-modelo-1.jpg',
            '/imagenes/catalogo/musculosa-negra-la-gran-ola-modelo-2.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'

        },
        {
          nombre: 'Musculosa La Gran Ola marron',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen: [
            '/imagenes/catalogo/musculosa-marron-la-gran-ola.jpg',
            '/imagenes/catalogo/musculosa-marron-la-gran-ola-modelo-1.jpg',
            '/imagenes/catalogo/musculosa-marron-la-gran-ola-modelo-2.jpg',
            '/imagenes/catalogo/musculosa-marron-la-gran-ola-modelo-3.jpg',
            '/imagenes/banners/img-carousel-5.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'
        },
        {
          nombre: 'Remera básica negra Shark',
          precio: 25000,
          descripcion: 'Remera básica negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-negra-shark-1.jpg',
            '/imagenes/catalogo/remera-negra-shark-2.jpg',
            '/imagenes/catalogo/musculosa-negra-la-gran-ola-modelo-3.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica blanca Shark',
          precio: 25000,
          descripcion: 'Remera básica blanca 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
          '/imagenes/catalogo/remera-blanca-shark-1.jpg',
          '/imagenes/catalogo/remera-blanca-shark-2.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica negra LGO',
          precio: 25000,
          descripcion: 'Remera básica negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
          '/imagenes/catalogo/remera-negra-lgo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica blanca LGO',
          precio: 25000,
          descripcion: 'Remera básica blanca 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-blanca-lgo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Musculosa LGO negra',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen : [
            '/imagenes/catalogo/musculosa-lgo-negra-1.jpg',
            '/imagenes/catalogo/musculosa-lgo-negra-2.jpg',
            '/imagenes/catalogo/musculosa-lgo-negra-modelo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'
        },
        {
          nombre: 'Musculosa LGO blanca',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen : [
            '/imagenes/catalogo/musculosa-lgo-blanca-1.jpg',
            '/imagenes/catalogo/musculosa-lgo-blanca-2.jpg',
            '/imagenes/catalogo/musculosa-lgo-blanca-modelo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'
        }

      ],
      prodNuevos: [
        {
          nombre: 'Remera básica negra Shark',
          precio: 25000,
          descripcion: 'Remera básica negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-negra-shark-1.jpg',
            '/imagenes/catalogo/remera-negra-shark-2.jpg',
            '/imagenes/catalogo/musculosa-negra-la-gran-ola-modelo-3.jpg'
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica blanca Shark',
          precio: 25000,
          descripcion: 'Remera básica blanca 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
          '/imagenes/catalogo/remera-blanca-shark-1.jpg',
          '/imagenes/catalogo/remera-blanca-shark-2.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica negra LGO',
          precio: 25000,
          descripcion: 'Remera básica negra 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
          '/imagenes/catalogo/remera-negra-lgo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Remera básica blanca LGO',
          precio: 25000,
          descripcion: 'Remera básica blanca 100% algodón peinado 24/1, perfecta para quienes buscan comodidad y calidad. Ideal para tu día a día con diseños únicos.',
          imagen: [
            '/imagenes/catalogo/remera-blanca-lgo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-remera-corte-basico.jpg'
        },
        {
          nombre: 'Musculosa LGO negra',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen : [
            '/imagenes/catalogo/musculosa-lgo-negra-1.jpg',
            '/imagenes/catalogo/musculosa-lgo-negra-2.jpg',
            '/imagenes/catalogo/musculosa-lgo-negra-modelo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'
        },
        {
          nombre: 'Musculosa LGO blanca',
          precio: 20000,
          descripcion: 'Musculosa algodón peinado 30/1. Súper liviana y fresca. Con nuestros diseños únicos.',
          imagen : [
            '/imagenes/catalogo/musculosa-lgo-blanca-1.jpg',
            '/imagenes/catalogo/musculosa-lgo-blanca-2.jpg',
            '/imagenes/catalogo/musculosa-lgo-blanca-modelo-1.jpg',
          ],
          guiaTalle: '/imagenes/banners/talles-musculosas.jpg'
        }
      ]
      
    };
  },
  computed: {
    listaProductos(){
      let listProductos = [...this.productos];

      if(this.filtroSeleccionado === 'Precio: Menor a Mayor'){
        listProductos.sort((a,b) => a.precio - b.precio);
      } else if (this.filtroSeleccionado === 'Precio: Mayor a Menor'){
        listProductos.sort((a,b) => b.precio - a.precio)
      }
      return listProductos;
    }
},
methods: {
  abrirGuiaTalles(imagen) {
      this.imagenSeleccionada = imagen;
      this.dialog = true;
    }
},

});
</script>

<style>

  .row-cards{
    display: flex;
    flex-wrap: wrap;
    margin: 0 2px;
  }

  
@media (max-width: 576px) {
  body {
    font-size: 12px;
  }
  
  .cards_nuevas{
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  .cards_catalogo {
    flex: 0 0 100% !important;
    max-width: 100% !important;
}


}

@media (min-width: 577px) and (max-width: 768px) {
  body {
    font-size: 16px;
  }

  .cards_nuevas{
    flex: 0 0 100% !important;
    max-width: 100% !important;
  }

  .cards_catalogo {
    flex: 0 0 100% !important;
    max-width: 100% !important;
}


}

@media (min-width: 769px) and (max-width: 992px) {
  body {
    font-size: 18px;
  }

  .cards_nuevas{
    flex: 0 0 50% !important;
    max-width: 50% !important;
  }

  .cards_catalogo {
    flex: 0 0 50% !important;
    max-width: 50% !important;
}

  .row-cards{
    margin-left: 2%;
  }

}

@media (min-width: 993px) and (max-width: 1200px) {
  body {
    font-size: 20px;
  }

  .cards_nuevas{
    flex: 0 0 40% !important;
    max-width: 40% !important;
  }

  .cards_catalogo {
    flex: 0 0 40% !important;
    max-width: 40% !important;
    justify-content: center !important;
}

  .row-cards{
    margin-left: 15%;
  }
}

@media (min-width: 1201px) {
  body {
    font-size: 22px;
  }
  
  .cards_nuevas{
    flex: 0 0 30% !important;
    max-width: 30% !important;
  }

  .cards_catalogo {
    flex: 0 0 30% !important;
    max-width: 30% !important;
    justify-content: center !important;

}

  .row-cards{
    margin-left: 15%;
  }

}
</style>
