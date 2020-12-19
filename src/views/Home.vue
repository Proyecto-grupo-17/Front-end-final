<template>
  <div class="home">
    
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <v-carousel>
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

      <QuienesSomos />
      <servicios></servicios>
      
  </div>
  
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import QuienesSomos from '@/components/QuienesSomos.vue'
import Servicios from '../components/Servicios.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    QuienesSomos,
    Servicios,
  },
  data: () => ({
    items: [
        {
          src: require('@/assets/CARRUSEL1.png'),
        },
        {
          src: require('@/assets/CARRUSEL2.png'),
        },
        {
          src: require('@/assets/CARRUSEL3.png'),
        },
    ],
    items2: [
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me' },
      { title: 'Click Me 2' },
    ],
  }),
  methods:{
    async GoLogin() {
      this.$router.push('../login');
    }
  }
}
</script>
