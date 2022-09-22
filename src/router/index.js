import {createRouter, createWebHashHistory} from 'vue-router';
import IniciarSesion from '../components/IniciarSesion.vue';
import Publicar from '../components/Publicar.vue';
import Publicaciones from '../components/Publicaciones.vue';
import Usuario from '../components/Usuario.vue';

const routes = [
    { path: '/', component: IniciarSesion },
    { path: '/publicar', component: Publicar },
    { path: '/publicaciones', component: Publicaciones },
    { path: '/usuario', component: Usuario },
  ]
  
export const router = createRouter({
    history: createWebHashHistory(),
    routes,
  })