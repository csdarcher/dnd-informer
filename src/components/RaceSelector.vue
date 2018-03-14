<template>
  <div class = "race-selector">  
    <div class="Title">
        <h1>Dungeons and Dragons 5th Edition Race Informer</h1>
    </div>
      <div class="form-container"> 
        <h2> Select 2 races below to compare.</h2>
              <form v-on:submit.prevent="compareRaces"> 
                <div class="races" v-for="(result,index) in results" :key="index">
                  <input type="checkbox" :id="result.name" :value="result.url" v-model="checkedRaces">
                  <label :for="result.name">{{ result.name }}</label>
                </div>
              </form>  
                 <button v-on:click="compareRaces">Compare</button> 
            <load-spinner v-if="showLoading"></load-spinner>
                  <div class="results-display">
                      <p> {{ result1 }} </p>
                      <p> {{ result2 }} </p>
                    </div>
        </div>
  </div>      
</template>

<script>
import axios from "axios";
import DoubleBounce from "@/components/DoubleBounce";

export default {
  name: "RaceSelector",
  components: {
    "load-spinner": DoubleBounce
  },

  data() {
    return {
      results: null,
      showLoading: false,
      checkedRaces: [],
      // resultsArray: [],
      errors: [],
      result1: null,
      result2: null
    };
  },

  // Pull information from API for checkbox labels
  created() {
    let self = this;
    axios
      .get("http://www.dnd5eapi.co/api/races")
      .then(response => {
        this.showSpinner = false;
        self.results = response.data.results;
      })
      .catch(e => {
        this.showSpinner = false;
        this.errors.push(e);
      });
  },

  // Pull information from API for actual race comparison
  methods: {
    compareRaces: function() {
      if (this.checkedRaces.length < 2)
        this.errors.push("Please choose at least 2 races.");
      let url1 = this.checkedRaces[0];
      let url2 = this.checkedRaces[1];

      console.log(url1, url2);

      // axios
      // .get(url1)
      // .then(response => {
      //   this.showSpinner = false;
      //   this.result1 = response.data;
      // })
      // .catch(e => {
      //   this.showSpinner = false;
      //   this.errors.push(e);
      // });
      axios.all([axios.get(url1), axios.get(url2)])
          .then(axios.spread((choice1response, choice2response) => {
              this.result1=choice1response.data
              this.result2=choice2response.data
              //Do something
              console.log(choice1response, choice2response)
          }));
    }
  }
};

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

.race-selector {
  border: 10px;
  border-color: red;
}

.races {
  display: inline-block;
  padding: 5px;
}
button {
  background: #df0404;
  margin: 10px;
  padding: 0.5rem;
  color: #fff;
  border: none;
  font-size: 15px;
}
</style>
