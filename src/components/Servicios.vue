<template>
<div>
    
    <v-container
    class="primary--background"
    >
        <h1 class="text-center text--text"
        >SERVICIOS</h1>
        <p class="text-justify">Ofrecemos soluciones en diseño y fabricación de empaques seguros, contamos con tecnología de punta para el envasado y empacado de sus productos, somos expertos en metodologías lean manufacturing y en el control de las operaciones logísticas.</p>
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
    name: 'Servicios',
    data: () => ({
    cards: [
      { title: 'Diseño y fabricación', src: require('@/assets/SERVICIOS1.png'), flex: 3, subtitle: "Contamos con un grupo de expertos diseñadores e ingenieros que lo asesoran para brindarle soluciones acordes a sus necesidades."},
      { title: 'Envasado y empacado', src: require('@/assets/SERVICIOS2.png'), flex: 3, subtitle: "Bajo el más cuidadoso proceso y con elevados estándares de calidad empacamos su producto para la presentación final." },
      { title: 'Operación logística', src: require('@/assets/SERVICIOS3.png'), flex: 3, subtitle: "Ejecutamos la logística de embalaje y transporte seguros para que tus productos lleguen en excelentes condiciones  a su destino." },
    ],
    }),
}
</script>