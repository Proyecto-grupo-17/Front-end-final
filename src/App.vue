<template>
<div>

  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    > 
      <div class="d-flex align-center">
        <v-img
          alt="DHAMS Logo"
          class="shrink mr-2"
          contain
          src="./assets/Logo2.png"
          transition="scale-transition"
          width="150"
          @click.prevent="GoHome"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        @click.prevent="GoLogin"
        target="_blank"
        text
      >
        <span class="mr-2 text--text">Iniciar sesión</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
      <template v-slot:extension>
          <v-tabs align-with-title>
           | <v-tab class="text--text" href="#quien">QUIÉNES SOMOS</v-tab> 
            <v-tab class="text--text">SERVICIOS</v-tab>
            <v-tab class="text--text">CASOS DE ÉXITO</v-tab>
            <v-tab class="text--text" href="../scr/components/Home.vue/#a">DESARROLLADORES </v-tab>
          </v-tabs>
        </template>
     </v-app-bar>
     <v-main>
        <router-view/>
    <div>

    </div>
     </v-main>

      <v-footer
        color="color1"
        >

        <v-row>
          <v-col>
            <v-card color="color1">
              <div class= "text-center">
                <v-btn rounded color="red" blue href="https://github.com/Proyecto-grupo-17/semana-4-17" target="_blank">
                  <v-icon>Repositorio GITHUB</v-icon>
                </v-btn>
              </div>
            </v-card>
            <v-card
              class="flex"
              flat
              tile
              color="color1"
              >
              <v-card-title class="teal">
                <strong class="subheading">Manténgase conectado con nuestras redes sociales!</strong>
                <v-spacer></v-spacer>
                <v-btn
                  v-for="icon in icons"
                  :key="icon"
                  class="mx-4"
                  dark
                  icon
                  >
                  <v-icon size="24px">
                    {{ icon }}
                  </v-icon>
                </v-btn>
              </v-card-title>
              <v-card-text class="py-2 white--text text-center">
                {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-footer>
    </v-app>
  </div>
</template>


<script>

export default {
  components: { home },
  methods:{
    async GoLogin() {
      this.$router.push('../login');
    },
    async GoHome() {
      this.$router.push('/');
    }
  }
}
</script>
<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>