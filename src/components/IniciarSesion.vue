<script>
import { useUsuario } from '../store/useStore';
import usuarios from '../assets/json/Usuarios.json';

export default {
    name: 'IniciarSesion',
    data() {
        return {
            usuario: '',
            password: '',
            mensaje: '',
            sesion: {
                nombre: '',
                usuario: '',
                img: '',
                descripcion: ''
            }
        };
    },
    mounted(){
        const usuario = useUsuario();
        if(usuario.nombre !== ''){
            this.$router.push('/publicaciones');
        }
    },
    methods: {
        guardarYSeguir(nombre, cuenta, foto, descripcion){
            this.mensaje = '';
            const usuario = useUsuario();
            usuario.setUsuario(nombre, cuenta, foto, descripcion);
            this.$router.push('/publicaciones');
        },
        iniciarSesion(){
            this.sesion = usuarios.find(usuario => (usuario.usuario === this.usuario && usuario.password === this.password));
            this.sesion === undefined ? this.mensaje = 'Usuario o contraseña incorrecta' : this.guardarYSeguir(this.sesion.nombre, this.sesion.usuario, this.sesion.img, this.sesion.descripcion);
        }
    }
}
</script>

<template>
    <form v-on:submit.prevent="iniciarSesion">
        <div class="text-align-center" style="text-align: center;"><h4>Bienvenido a mi proyecto de Vue.js</h4></div>
        <div class="form-text text-align-center" style="color: #dc3545; text-align: center;"><h5>{{mensaje}}</h5></div>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Usuario</label>
            <input type="text" class="form-control" id="exampleInputEmail1" v-model="usuario" required>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Contraseña</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" required>
        </div>
        <button type="submit" class="btn btn-primary">Iniciar Sesi&oacute;n</button>
    </form>
</template>