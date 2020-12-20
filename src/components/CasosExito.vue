<template>
<div>
    
    <v-container
    class="primary--background"
    >
        <h1 class="text-center text--text"
        >CASOS DE ÉXITO</h1>
        <p class="text-justify">Algunos ejemplos de nuestras soluciones implementadas con éxito:</p>
    </v-container>

    <v-container
    class="fill-height"
    fluid
    style="min-height: 434px"
  >
    <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="6">
          <v-card>
            <v-img
              src= "../assets/CASOSDEEXITO1.png"
              max-width="800px"
              contain
              class="white"
            ></v-img>
            <h2 class="text--text text-center">
             Victor, Gerente de la empresa Metal Mecánica Matamoros, recibió a tiempo los materiales y repuestos que había solicitado para entregar sus pedidos.
            </h2>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src= "../assets/CASOSDEEXITO2.png"
              max-width="800px"
              contain
              class="grey darken-4"
            ></v-img>
            <h2 class="text--text text-center">
              Material de empaque diseñado para la empresa Neothek, para enviar los obsequios navideños a sus clientes.
            </h2>
          </v-card>
        </v-col>

        <v-col cols="6">
          <v-card>
            <v-img
              src= "../assets/CASOSDEEXITO3.png"
              max-width="800px"
              contain
              class="grey darken-4"
            ></v-img>
            <h2 class="text--text text-center">
             Recibieron sus productos lácteos, en empaques fabricados con materiales que conservan la cadena de frío y transportados en nuestros vehículos con sistemas de refrigeración.
            </h2>
          </v-card>
        </v-col>

        <v-col cols="6">

         <h1>Compártanos su opinión</h1>
<v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
            v-model="name"
            :rules="nameRules"
            label="Nombre"
            required
            ></v-text-field>

            <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
            ></v-text-field>
            <v-text-field
            v-model="message"
            outlined
            clearable
            label="Mensaje"
            type="text"
          >
            <template v-slot:append>
              <v-fade-transition leave-absolute>
                <v-progress-circular
                  v-if="loading"
                  size="24"
                  color="info"
                  indeterminate
                ></v-progress-circular>
              </v-fade-transition>
            </template>
            <template v-slot:append-outer>
              <v-menu
                style="top: -12px"
                offset-y
              >
              <v-card>
                  <v-card-text class="pa-6">
                    <v-btn
                      large
                      flat
                      color="primary"
                      @click="clickMe"
                    >
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-menu>
            </template>
          </v-text-field>

            <v-checkbox
            v-model="checkbox"
            :rules="[v => !!v || 'Debe aceptar nuestra política de tratamiento de datos!']"
            label="Acepto politica de tratamiento de datos"
            required
            ></v-checkbox>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
             @click="validate"
            >
            Enviar
            </v-btn>
        </v-form>
        </v-col>
      </v-row>
    </v-fade-transition>
  </v-container>
</div>
</template>

<script>
export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'El nombre es requerido',
        v => (v && v.length <= 20) || 'El nombre debe tenr menos de 20 caracteres',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail es requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail debe ser válido',
      ],
      select: null,
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
    },
  }
</script>
