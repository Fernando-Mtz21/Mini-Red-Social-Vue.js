<script>
import { useUsuario, usePublicaciones } from '../store/useStore';

export default {
    name: 'Publicar',
    data(){
        return {
            publicacion: '',
            autor: {}
        };
    },
    mounted(){
        const usuario = useUsuario();
        if(usuario.nombre === ''){
            this.$router.push('/');
        }
    },
    methods: {
        publicar(){
            const usuario = useUsuario();
            this.autor = {
                nombre: usuario.nombre,
                cuenta: usuario.cuenta,
                imagen: usuario.imagen
            }
            const publicaciones = usePublicaciones();
            publicaciones.setPublicaciones({publicacion: this.publicacion.trim(), autor: this.autor});
            this.$router.push('/publicaciones');
        }
    }
}
</script>

<template>
    <h1>Comparte algo con el mundo</h1>
    <form v-on:submit.prevent="publicar">
        <div class="mb-3">
            <div class="form-floating">
                <textarea v-model="publicacion" class="form-control" placeholder="Publica algo..." id="floatingTextarea2" style="height: 100px; resize: none; scroll-behavior: auto;"></textarea>
                <label for="floatingTextarea2">Publica algo...</label>
            </div>
        </div>
        <button v-if="publicacion.trim().length > 0" type="submit" class="btn btn-primary">Publicar</button>
        <button v-else type="submit" class="btn btn-secondary disabled">Publicar</button>
    </form>
</template>