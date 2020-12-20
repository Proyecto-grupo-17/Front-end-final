<template>
  
  <v-container fluid fill-height class="loginOverlay">
          <v-layout flex align-center justify-center>
            <v-flex xs12 sm4 elevation-6>
              <v-toolbar class="pt-0 text">
                <v-toolbar-title class="white--text"><h4>Bienvenido</h4></v-toolbar-title>
              </v-toolbar>
              <v-card>
                <v-card-text class="pt-4">
                  <div>
                      <v-form ref="form">
                        <v-text-field
                          label="Ingrese el email"
                          v-model="email"
                          required
                        ></v-text-field>
                        <v-text-field
                          label="Ingrese su contraseña"
                          v-model="password"
                          min="8"
                          required
                        ></v-text-field>
                        <v-layout justify-space-between>
                            <v-btn @click="ingresar()" :class=" 'text white--text'">Entrar</v-btn>
                            <a href="" class="text--text">Olvido su contraseña</a>
                        </v-layout>
                      </v-form>
                  </div>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
       </v-container>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{

            email:'',
            password:'',
            errorM:null
        }
    },

    methods:{
        ingresar(){
          // console.log(decode(tokenReturn))
            axios.post('usuario/signin',{email: this.email, password: this.password})
            // console.log(this.email)
            // console.log(this.accessToken)
            .then(response =>{
                console.log(response.data);
                return response.data;
            })
            .then(data =>{
                this.$store.dispatch("guardarToken",data.accessToken);
                this.$router.push({name: 'helloworld'});
            })
            .catch(error =>{
                //console.log(eror);
                this.errorM=null;
                console.log(error.response.status);
                if (error.response.status==401){
                    console.log('hola');
                    this.errorM='credenciales son incorrectas.';
                } 
                else if (error.response.status==404){
                    this.errorM='el usuario no existe';
                }
                else{
                    this.errorM='Ocurrió un error con el servidor.';
                }
            });
        }
    }
    
}
</script>