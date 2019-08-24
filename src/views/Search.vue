<template>
<v-container v-if="loading">
    <div class="text-xs-center">
      <v-progress-circular
        indeterminate
        :size="150"
        :width="8"
        color="green">
      </v-progress-circular>
    </div>
  </v-container>
  <v-container v-else-if="noData">
    <div class="text-xs-center">
      The search for "{{ this.term}}" returned no results
    </div>
  </v-container>
<v-container v-else grid-list-xl>
    <v-layout wrap>
      <v-flex xs4
        v-for="(item, index) in movieData"
        :key="index"
        mb-2>
        <v-card>
          <v-img
            :src="item.Poster"
            aspect-ratio="1"
          ></v-img>
<v-card-title primary-title>
            <div>
              <h2>{{item.Title}}</h2>
              <div>Year: {{item.Year}}</div>
              <div>Type: {{item.Type}}</div>
              <div>IMDB-id: {{item.imdbID}}</div>
            </div>
          </v-card-title>
<v-card-actions class="justify-center">
            <v-btn text
              color="green"
              @click="singleMovie(item.imdbID)"
              >View</v-btn>
          </v-card-actions>
</v-card>
      </v-flex>
  </v-layout>
  </v-container>
    
</template>
<script>
import axios from 'axios'
import movieApi from '../services/MovieApi'
export default {
props:['term'],
data() {
    return {
        movieData:[],
        loading:true,
        noData:false
    }
},
mounted() {
    axios.get('http://www.omdbapi.com/?apikey=d5eaeb65&page=1&type=movie&Content-Type=application/json&s='+this.term)
    .then(response=>{
        if(response.data.Response === 'False'){
            this.noData = true
            this.loading = false
        } else {
            this.movieData = response.data.Search
            this.loading= false
            this.noData = false
        }
        
    })
    .catch(error=>{

        console.log(error)
    })
},
methods: {
    singleMovie(id){
        this.$router.push('/movie/'+id)
    }
    
},
watch:{
  term(newVal){
    axios.get('http://www.omdbapi.com/?apikey=d5eaeb65&page=1&type=movie&Content-Type=application/json&s='+this.newVal)
    .then(response=>{
        if(response.data.Response === 'False'){
            this.noData = true
            this.loading = false
        } else {
            this.movieData = response.data.Search
            this.loading= false
            this.noData = false
        }
        
    })
    .catch(error=>{

        console.log(error)
    })

  }
}
    
}
</script>
<style lang="stylus" scoped>

</style>
