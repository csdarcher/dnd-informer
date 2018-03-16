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
        <h2> Select 2 races below to compare.</h2>
              <form v-on:submit.prevent="compareRaces"> 
                <div class="races" v-for="(result,index) in results" :key="index">
                  <input type="checkbox" :id="result.name" :value="result.url" :disabled="totalSelected ==2" v-model="checkedRaces">
                  <label :for="result.name">{{ result.name }}</label>
                </div>
                <input class="button" type="submit" :disabled="totalSelected <2" value="Compare">
              </form>  
            <load-spinner v-if="showLoading"></load-spinner>
                  <div class="results-table" v-if="result1 && result2">
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
      errors: [],
      result1: [],
      result2: []
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
      axios
        .all([axios.get(url1), axios.get(url2)])
        .then(
          axios.spread((choice1response, choice2response) => {
            this.result1 = choice1response.data;
            this.result2 = choice2response.data;
            this.checkedRaces = [];
            console.log(choice1response, choice2response);
          })
        )

        .catch(error => {
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
