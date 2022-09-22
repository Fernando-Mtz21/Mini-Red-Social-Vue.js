<script>
import { useUsuario, usePublicaciones } from '../store/useStore';

export default {
    name: 'Publicaciones',
    data(){
        return {
            publicaciones: []
        };
    },
    mounted(){
        const usuario = useUsuario();
        if(usuario.nombre === ''){
            this.$router.push('/');
        }
        const publicaciones = usePublicaciones();
        this.publicaciones = publicaciones.publicaciones;
    }
}
</script>

<template>
    <h1>Publicaciones</h1>
    <hr>
    <div v-if="publicaciones.length == 0">
        <h1>No hay publicaciones</h1>
    </div>
    <div v-else>
        <div v-for="publicacion of publicaciones.slice().reverse()" v-bind:key="publicacion">
            <div class="card mt-4">
                <div class="card-header">
                    <div class="row">
                        <div class="col-md-2">
                            <img v-bind:src="publicacion.autor.imagen" style="width: 50px; height: 50px;" v-bind:alt="publicacion.autor.cuenta">
                        </div>
                        <div class="col">
                            <h5 class="card-title">{{publicacion.autor.nombre}}</h5>
                            <h6 class="card-subtitle mb-2 text-muted">@{{publicacion.autor.cuenta}}</h6>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
                <div class="card-body">
                    <p class="card-text">{{publicacion.publicacion}}</p>
                </div>
            </div>
        </div>
    </div>
</template>