<script>
import Menu from './components/Menu.vue';

export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<template>
  <Menu />
  <div class="container mt-3">
    <div class="row mt-3 justify-content-center">
      <div class="col-md-7 mt-5">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
