<template>
  <div class = "race-selector">  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
    </div>
    <div class="link-container">
    <p> 
      <router-link v-bind:to="{ name: 'DNDWelcome'}">Welcome</router-link>
      &bull;
      <router-link v-bind:to="{ name: 'RaceSelector' }">Race Informer</router-link>
    </p> 
    </div> 
      <div class="form-container"> 
        <!-- List of races user can choose from -->
        <h2> Select 2 races below to compare.</h2>
              <form v-on:submit.prevent="compareRaces"> 
                <div class="races" v-for="(result,index) in results" :key="index">
                  <input type="checkbox" :id="result.name" :value="result.url" :disabled="totalSelected ==2" v-model="checkedRaces">
                  <label :for="result.name">{{ result.name }}</label>
                </div>
                <input class="button" type="submit" :disabled="totalSelected <2" value="Compare">
              </form>
              <transition-group name="slideDown" tag="div" appear> 
                <!-- Table of data for chosen races --> 
                  <div class="results-table" v-if="result1 && result2" v-bind:key="result1.name">
                    <spinner v-if="showLoading"></spinner>
                    <table style="width:100%">
                        <tr>
                          <th> Name </th>
                          <th> {{ result1.name }} </th> 
                          <th> {{ result2.name }} </th>
                        </tr>
                        <tr>
                          <td>Speed</td>
                          <td> {{ result1.speed }} </td> 
                          <td> {{ result2.speed }}</td>
                        </tr>
                        <tr>
                          <td>Alignment</td>
                          <td>{{ result1.alignment }}</td> 
                          <td>{{ result2.alignment }}</td>
                        </tr>
                        <tr>
                          <td>Age</td>
                          <td>{{ result1.age }}</td> 
                          <td>{{ result2.age }}</td>
                        </tr>
                         <tr>
                          <td>Size</td>
                          <td>{{ result1.size }}</td> 
                          <td>{{ result2.size }}</td>
                        </tr>
                      </table>
                  </div> 
              </transition-group>
        </div>
  </div>      
</template>

<script>
import axios from "axios";
import DoubleBounce from "@/components/DoubleBounce";
// Note: vue2-animate is added using the require statement because it is a CSS file
require('vue2-animate/dist/vue2-animate.min.css');

export default {
  name: "RaceSelector",
  components: {
    "spinner": DoubleBounce
  },

  data() {
    return {
      results: null,
      showLoading: false,
      checkedRaces: [],
      errors: [],
      result1: null,
      result2: null
    };
  },

  computed: {
    totalSelected: function() {
      return this.checkedRaces.length;
    }
  },

  // Pull information from API for checkbox labels
  created() {
    let self = this;
    axios.get("http://www.dnd5eapi.co/api/races")
      .then(response => {
        self.results = response.data.results;
      })
      .catch(e => {
        this.errors.push(e);
      });
  },

  // Pull information from API for race comparison
  methods: {
    compareRaces: function() {
      if (this.checkedRaces.length < 2)
        this.errors.push("Please choose at least 2 races.");
      let url1 = this.checkedRaces[0];
      let url2 = this.checkedRaces[1];
      console.log(url1, url2);
      
      // Show spinner when API request begins.
      this.showSpinner = true;
      axios.all([axios.get(url1), axios.get(url2)])
        .then(
          axios.spread((choice1response, choice2response) => {
            this.showSpinner = false;
            this.result1 = choice1response.data;
            this.result2 = choice2response.data;
            this.checkedRaces = [];
            console.log(choice1response, choice2response);
          })
        )

        .catch(error => {
          // turn off spinner
          this.showSpinner = false;
          console.log(error);
        });
    }
  }
};

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
  border-spacing: 5px;
}

 table, th, td {
    border: 1px solid black;
    padding: 10px;
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
