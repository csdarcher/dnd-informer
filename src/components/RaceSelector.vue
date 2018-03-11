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
                 <button type="submit">Compare</button> 
            <!-- <load-spinner v-if="showLoading"></load-spinner> -->
                <ul class="races" v-if="results && results.length > 0 ">
                    <li v-for="(item,index) in results" :key="index" class="item">
                      <p><strong>{{ checkedRaces.name }}</strong></p>
                      <p>{{ checkedRaces.alignment }}</p>
                    </li>
                </ul> 
            </form>  
        </div>
  </div>      
</template>

<script>
import axios from "axios";
import DoubleBounce from "@/components/DoubleBounce"

export default {
  name: "RaceSelector",
  components: {
    'load-spinner': DoubleBounce
  },

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
        self.results = results.data;
      })
      .catch(e => {
        // this.showSpinner = false;
        this.errors.push(e);
      });
  },
  
  methods: {
    compareRaces: function() {
          axios
            .get('http://www.dnd5eapi.co/api/races/name', {
            })
            .then( response => {
              this.results = response.data;
            })
            .catch( error => {
              this.errors.push(error);
            }) 
     }
   } 
}


// TO DO: Add error message for when user fails to choose a race or chooses more than 2 races.
</script>

<!-- Added "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
}
a {
  color: #42b983;
}
.form-container {
  border: 2px;
  border-color: #7a7362;
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
