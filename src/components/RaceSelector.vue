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
                  <label :for="result.name">{{result.name}}</label>
                </div>
              </form>  
                 <button type="submit">Compare</button> 
            <load-spinner v-if="showLoading"></load-spinner>
                  <div class="results-display">
                        <!-- document.getElementById('name').innerHTML = response.data.map(function (
                              <li class="row"> +
                              <div <a href="http://dnd5eapi.co/api/races" + "race.name" + "race.alignment"</a></div>
                          </li><br/> -->
                           <ul id="race-container">
                              <li class="races" v-for="(result, index) in results" :key="index" >
                                <p><strong>{{result.name}}</strong></p>
                                <p><strong>{{result.url}}</strong></p>
                              </li>
                        </ul>
                    </div>
        </div>
  </div>      
</template>

<script>
import axios from "axios";
// import DoubleBounce from "@/components/DoubleBounce"
export default {
  name: "RaceSelector",
  // components: {
  //   'load-spinner': DoubleBounce
  // },
  data() {
    return {
      results: null,
      showLoading: false,
      checkedRaces: [],
      errors: []
    };
  },
  created() {
    let self = this;
    axios
      .get("http://www.dnd5eapi.co/api/races")
      .then(response => {
        // this.showSpinner = false;
        self.results = response.data.results;
      })
      .catch(e => {
        // this.showSpinner = false;
        this.errors.push(e);
      });
  },
   methods: {
    compareRaces: function() {
          axios
            .get('http://www.dnd5eapi.co/api/races/index', {
            })
            .then( response => {
              self.results = response.data.results;
            })
            .catch( error => {
             this.errors.push(e);
            }) 
     }
    
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
  background: #7A7362;
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
