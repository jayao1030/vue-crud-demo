<template>
  <div id="app">
    <Navbar />
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from './components/Navbar';

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
body {
  background: #f2f2f2;
}
.btn-success {
  background: #02c874;
  border: none;
}
.btn-success:hover {
  background: #01b468;
}
</style>
