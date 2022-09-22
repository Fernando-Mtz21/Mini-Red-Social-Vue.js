import { defineStore } from 'pinia'

const useUsuario = defineStore('usuario', {
  state: () => {
    return {
        nombre: '',
        cuenta: '',
        imagen: '',
        descripcion: ''
    }
  },
  actions: {
    setUsuario(nombre, cuenta, imagen, descripcion) {
        this.nombre = nombre;
        this.cuenta = cuenta;
        this.imagen = imagen;
        this.descripcion = descripcion;
    },
    cerrarSesion(){
        this.nombre = '';
        this.cuenta = '';
        this.imagen = '';
        this.descripcion = '';
    }
  },
});

const usePublicaciones = defineStore('publicaciones', {
    state: () => {
      return {
          publicaciones: []
      }
    },
    actions: {
      setPublicaciones(publicacion) {
        this.publicaciones.push(publicacion);
      },
    },
});

export {useUsuario, usePublicaciones}