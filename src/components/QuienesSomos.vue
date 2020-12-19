<template>
<div id="quien">
    
    <v-container
    class="primary--background"
    >
        <h1 class="text-center text--text"
        >QUIÉNES SOMOS</h1>
        <p class="text-justify">Somos un grupo de profesionales en diseño, ingeniería y logítica, que brinda soluciones de empaque y embalaje para todo tipo de productos, salvaguardamos tu bien más preciado, los productos que fabricas para tus clientes</p>
    </v-container>
    <v-container fluid>
        <v-row
        justify="space-around">
          <v-col
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
            md="3"
          >
            <v-card height="440px">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="300px"
              >
                <!-- <v-card-title v-text="card.title"></v-card-title> -->
                
              </v-img>
                <v-card-title 
                v-text="card.title"
                class="text--text text-center"
                ></v-card-title>
                <v-card-subtitle v-text ="card.subtitle"></v-card-subtitle>
              <!-- <v-card-actions>
                <v-spacer></v-spacer>
  
                <v-btn icon>
                  <v-icon>mdi-heart</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-bookmark</v-icon>
                </v-btn>
  
                <v-btn icon>
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-card-actions> -->
              
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</div>
</template>

<script>
export default {
    name: 'QuienesSomos',
    data: () => ({
    cards: [
      { title: 'Tecnología', src: require('@/assets/QUIENES_SOMOS1.png'), flex: 4, subtitle: "Trabajamos con tecnología de punta para garantizar la mejor calidad y eficiencia en nuestras entregas."},
      { title: 'Nuestro equipo', src: require('@/assets/QUIENES_SOMOS2.png'), flex: 4, subtitle: "Brindamos a nuestros colaboradores las condiciones más favorables para que ejecuten su trabajo con empeño y entusiasmo." },
      { title: 'Instalaciones', src: require('@/assets/QUIENES_SOMOS3.png'), flex: 4, subtitle: "Contamos con amplios espacios adecuados bajo normativas bioseguras para garantizar el mejor tratamiento para sus productos." },
    ],
    }),
}
</script>