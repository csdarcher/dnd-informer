<template>
  <div id="app">
    <img src="./assets/Twenty_sided_dice.png">
    <router-view/>
  </div>
</template>

<script>
import DNDWelcome from './components/DNDWelcome'
import RaceSelector from './components/RaceSelector'
import DoubleBounce from './components/DoubleBounce'

export default {
  name: 'App',
  components: {
    DNDWelcome
  }
}
</script>

<style>
#app { 
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
body {
  background: #E6E6DB;
}

</style>


