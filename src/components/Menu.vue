<script>
import { useUsuario } from '../store/useStore';

export default {
    name: 'Menu',
    data(){
        return {
            usuario: {}
        };
    },
    mounted(){
        const usuario = useUsuario();
        this.usuario = usuario;
    },
    methods: {
        cambiarPagina(ruta){
            this.$router.push('/'+ruta);
        },
        cerrarSesion(){
            const usuario = useUsuario();
            usuario.setUsuario('', '', '', '');
            this.$router.push('/');
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <span class="navbar-brand">Proyecto Vue.js</span>
            <button v-if="usuario.nombre !== ''" class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div v-if="usuario.nombre !== ''" class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <router-link v-bind:to="'/publicaciones'" class="nav-link">Publicaciones</router-link>
                    <router-link v-bind:to="'/publicar'" class="nav-link">Publicar</router-link>
                    <router-link v-bind:to="'/usuario'" class="nav-link">Mi cuenta</router-link>
                    <a class="nav-link" v-on:click="cerrarSesion">Cerrar Sesi&oacute;n</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
    .nav-link:hover{
        cursor: pointer;
    }
</style>