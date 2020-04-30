<template>
  <div id="app" ref="app" v-bind:style="{height:screenHeight+'px'}">
    <!--<img src="./assets/logo.png">-->
    <transition :name="animateName">
      <router-view/>
    </transition>
    <!--<keep-alive>-->
    <!--<router-view v-if="$route.meta.keepAlive"/>-->
    <!--</keep-alive>-->
    <!--<router-view :key="$route.path" v-if="!$route.meta.keepAlive"/>-->
  </div>
</template>

<script>
  import {requestError,requestFail,screenHeight,screenWidth} from "./utils/common";


export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
