<template>
  <div class="dnd-welcome">
    <p> 
      <router-link v-bind:to="{ name: 'DNDWelcome'}">Welcome</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'RaceSelector' }">Race Informer</router-link>
    </p> 
  </div> 
</template>

<script>
import axios from "axios";
import DoubleBounce from "@/components/DoubleBounce";

export default {
  name: "DNDWelcome",
  components: {
    "load-spinner": DoubleBounce
  },
}

// TO DO: Add error message for when user fails to choose a race or chooses more than 2 races.
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  background: #e6e6db;
}
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  background: #7a7362;
  color: white;
}
a {
  color: gold;
}
.results-table {
  background: #7a7362;
  color: #e6e6db;
  text-align: left;
}

table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}

.races {
  display: inline-block;
  padding: 5px;
  margin: 3px;
}
.button {
  background: #df0404;
  margin: 10px;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 15px;
}
</style>
