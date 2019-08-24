<template>
<div>
    <div v-if="loading">
        Loading  
    </div>
    <div v-else-if="error">
        There is an error  
    </div>
    <div v-else>

        {{testData.Title}}

    </div>

</div>
    
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            loading:true,
            error:false,
            testData:''
        }
    },
    mounted(){
        axios
      .get('http://www.omdbapi.com/?apikey=d5eaeb65&i=tt0097576&Content-Type=application/json')
      .then(response => {
        
        this.testData = response.data
        this.loading=false
      })
      .catch(error => {
        console.log(error)
      })
     
    }
}
</script>
<style lang="stylus">

</style>
