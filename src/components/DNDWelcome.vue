<template>
  <div class="dnd-welcome">
    <p> 
      <router-link v-bind:to="{ name: 'DNDWelcome'}">Welcome</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'RaceSelector' }">Race Informer</router-link>
    </p> 
    <p>Hello! My name is Carly and I play Dungeons & Dragons, or how it is more commonly referred to, D&D. I started playing a few years ago. I like playing because it allows me to think outside the box and be creative. If you are unfamiliar with D&D I recommend you read this article: <a href="https://en.wikipedia.org/wiki/Dungeons_%26_Dragons" target="_blank">D&D Article</a>. For me, one of the most challenging parts of the game is creating a new character. 
       When designing or "building" a character you choose a "race" and a "class". I designed this site as a easy way to compare the different characteristics associated with each race. Eventually, I would like to make the site more robust, so you can use it to reference other aspects of character creation like "classes", "spells", and "equipment". 
    </p> 
    <h2>Enjoy!</h2>
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

body p {
  padding-left: 50px;
  padding-right: 50px;
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
  color: black;
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
