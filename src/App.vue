<template>
  <div id="app">
    <nav class="main-nav">
      <div class="logo">Ned O'Hara - Employee Page API</div>
      <Burger></Burger>
    </nav>
    <Sidebar>
      <ul class="sidebar-panel-nav">
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/post">Send POST Form</router-link>
        </li>
      </ul>
    </Sidebar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Burger from './components/nav/Burger.vue'
import Sidebar from './components/nav/Sidebar.vue'

export default Vue.extend({
  name: 'app',
  components: {
    Burger,
    Sidebar
  }
})
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');

  html {
    height: 100%;
    background: #013535;
    background: radial-gradient(at 33% 60%, white, lightgrey);
    background: repeat-y;
  }

 body {
   border: 0; margin: 0; padding: 0;
   font-family: 'Maven Pro';
   height: 100%;
 }

 .logo {
   align-self: center;
   color: white;
   font-size: 23px;
   font-weight: 400;
   font-family: 'Maven Pro';

 }
  nav {
    background: radial-gradient(at 0% 80%, #014949, #013535);
  }
 .main-nav {
   display: flex;
   justify-content: space-between;
   padding: 0.5rem 0.8rem;
 }

 ul.sidebar-panel-nav {
   list-style-type: none;
 }

 ul.sidebar-panel-nav > li > a {
   color: #fff;
   text-decoration: none;
   font-size: 1.5rem;
   display: block;
   padding-bottom: 0.5em;
 }
</style>
