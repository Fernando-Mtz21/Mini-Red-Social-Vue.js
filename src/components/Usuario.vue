<script>
import { useUsuario } from '../store/useStore';

export default {
    name: 'Usuario',
    data(){
        return {
            nombre: '',
            cuenta: '',
            imagen: '',
            descripcion: ''
        };
    },
    mounted(){
        const usuario = useUsuario();
        if(usuario.nombre === ''){
            this.$router.push('/');
        }
        this.nombre = usuario.nombre;
        this.cuenta = usuario.cuenta;
        this.imagen = usuario.imagen;
        this.descripcion = usuario.descripcion;
    }
}
</script>
<template>
    <h1>Mi Perf&iacute;l</h1>
    <hr>
    <div class="card mb-3 mt-5" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img v-bind:src="imagen" class="card-img-top" v-bind:alt="cuenta">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">{{nombre}}</h5>
                    <p class="card-text"><small class="text-muted">@{{cuenta}}</small></p>
                    <p class="card-text">{{descripcion}}</p>
                </div>
            </div>
        </div>
    </div>
</template>