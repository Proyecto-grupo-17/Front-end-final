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
            <v-tab class="text--text">CONTACTO</v-tab>
          </v-tabs>
        </template>
     </v-app-bar>
     <v-main>
        <router-view/>

     </v-main>
    <v-footer
      primary
    >
      <v-card
        class="flex"
      >
        <v-card-title>
          <a href="https://github.com/Proyecto-grupo-17/semana-4-17" class="text--text">Repositorio GITHUB</a>
          <!-- <strong class="subheading">Get connected with us on social networks!</strong> -->
  
          <v-spacer></v-spacer>
  
        </v-card-title>
  
        <v-card-text class="py-2 text--text text-center">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  </v-app>
  </div>
</template>

<script>
import home from "./views/Home.vue";
export default {
  components: { home },
  name: 'App',

    data () {
      return {
      drawer: false,
      estado:1
      }
    },

  computed:{
    logueado(){
      return this.$store.state.usuario;
    },
  },
  created(){
    this.$store.dispatch("");
  },
  methods:{
    async GoLogin() {
      this.$router.push('../login');
    },
    async GoHome() {
      this.$router.push('/');
    },
    salir(){
      this.$store.dispatch("salir");
      this.estado=1
    },

    ingresar(){
      this.estado=0
    },

    home(){
      this.estado=1

    }
  }
}
</script>
