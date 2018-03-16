<template>
  <div class="dnd-welcome">
    <p> 
      <router-link v-bind:to="{ name: 'DNDWelcome'}">Welcome</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'RaceSelector' }">Race Informer</router-link>
    </p> 
    <p>Dungeons & Dragons (abbreviated as D&D or DnD) is a fantasy tabletop role-playing game (RPG) originally designed by Gary Gygax and Dave Arneson. It was first published in 1974 by Tactical Studies Rules, Inc. (TSR). The game has been published by Wizards of the Coast (now a subsidiary of Hasbro) since 1997. It was derived from miniature wargames with a variation of Chainmail serving as the initial rule system. D&D's publication is commonly recognized as the beginning of modern role-playing games and the role-playing game industry.</p>
    <p>D&D departs from traditional wargaming and assigns each player a specific character to play instead of a military formation. These characters embark upon imaginary adventures within a fantasy setting. A Dungeon Master serves as the game's referee and storyteller while maintaining the setting in which the adventures occur, and playing the role of the inhabitants. The characters form a party that interacts with the setting's inhabitants, and each other. Together they solve dilemmas, engage in battles, and gather treasure and knowledge. In the process the characters earn experience points in order to rise in levels, and become increasingly powerful over a series of sessions.</p>
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
  color: black;
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
