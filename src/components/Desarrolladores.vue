<template>
<div>

    <div class="container-fluid">
        <h1 class="text-center text--text" >NUESTROS DESARROLLADORES</h1>
        <div class="row justify-content-center mb-5">
            <div v-for="miembro in team" :key="miembro.codigo" class="col mt-5">
                     <div class="card text-white bg-dark">
                        <div class="d-flex justify-content-center p-2">
                            <img :src="miembro.image" height="220px" align="right">
                        </div>
                        <div class="card-body" align="center">
                            <h5 class="card-title">{{miembro.rol}}</h5>
                            <h5 class="card-title"> {{miembro.nombre}}</h5>
                            <p class="card-text">{{miembro.ciudad}}
                            <br class="card-text">{{miembro.profesion}} 
                            <br class="card-text">{{miembro.universidad}}
                            <br class="card-text">{{miembro.email}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import axios from 'axios';
export default {
     data() {
        return {
            datos: null,
            team: [{
                nombre: 'DANIEL FELIPE MARTÍNEZ VIZCAÍNO',
                ciudad: 'Bogotá',
                profesion: 'Ingeniero Físico',
                universidad: 'Universidad Nacional de Colombia',
                email: 'daniel.22.m@hotmail.com',
                rol: 'Desarrollador backend',
                image: require(`@/assets/Daniel.png`)
            }, {
                nombre: 'STEFANNIE JULIETH MORALES PLAZAS',
                ciudad: 'Bogotá',
                profesion: 'Tecnóloga en Análisis y Desarrollo de Sistemas de Información',
                universidad: 'Servicio Nacional de Aprendizaje - SENA',
                email: 'ztefanny1811@gmail.com',
                rol: 'Desarrollador backend',
                image: require(`@/assets/Stefannie.png`)
            }, {
                nombre: 'MAYRA ALEJANDRA VELÁSQUEZ RAMOS',
                ciudad: 'Bogotá',
                profesion: 'Ingeniera Catastral y Geodesia',
                universidad: 'Universidad Distrital Francisco José de Caldas',
                email: 'dmalveram@gmail.com',
                rol: 'Desarrollador backend',
                image: require(`@/assets/Mayra.png`)
            }, {
                nombre: 'HÉCTOR LEONARDO SOSA PINTO',
                ciudad: 'Cali',
                profesion: 'Ingeniero Mecánico',
                universidad: 'Universidad Nacional de Colombia',
                email: 'hsosa73@yahoo.es',
                rol: 'Desarrollador frontend',
                image: require(`@/assets/Hector.png`)
            },
            {
                nombre: 'ANDRÉS MIGUEL RAMÍREZ PALACIO',
                ciudad: 'Medellin',
                profesion: 'Ingeniero Biomédico',
                universidad: 'Universidad EIA',
                email: 'andrew.ramirez96@hotmail.com',
                rol: 'Desarrollador frontend',
                image: require(`@/assets/Andres.png`)
            },]
        };
    },

    
}
</script>