<template>
  <div class="post">
    <div class="form-container">
      <h1>Create post request:</h1>
      <div class="inputs-container">
        <div class="searchbox">
          <form >
            <input type="text" v-model="postFormEmployeeName" placeholder="Type employee name here."/>
          </form>
        </div>
        <div class="searchbox">
          <form >
            <input type="text" v-model="postFormEmployeeAge" placeholder="Type employee age here."/>
          </form>
        </div>
        <div class="searchbox">
          <form >
            <input type="text" v-model="postFormEmployeeWage" placeholder="Type employee wage here."/>
          </form>
        </div>
        <div class="searchbox">
          <form >
            <input type="text" v-model="postFormEmployeeImageURL" placeholder="Type employee image URL here."/>
          </form>
        </div>
        <button type="button" v-on:click="submitForm(postFormEmployeeName, postFormEmployeeAge, postFormEmployeeWage, postFormEmployeeImageURL)" class="submit-button">
          Submit
        </button>
        <Employee
          v-if="submitClicked"
          v-bind:employeeImage='this.imageURL'
          v-bind:employeeName='this.name'
          v-bind:employeeAge='this.age'
          v-bind:employeeSalary='this.wage'
        >
      </Employee>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Employee from '@/components/Employee.vue'
  import axios from 'axios'

export default Vue.extend({
  name: 'Post',
  components: {
    Employee
  },
  data () {
    return {
      result: [],
      submitClicked: false,
      getResult: {},
      id: Number,
      name: String,
      age: String,
      wage: String,
      imgURL: String,
    }
  },
  computed: {
  
  },
  methods: {
    submitForm (postFormEmployeeName, postFormEmployeeAge, postFormEmployeeWage, postFormEmployeeImageURL) {
      this.submitClicked = true
      this.name = postFormEmployeeName
      this.age = postFormEmployeeAge
      this.wage = postFormEmployeeWage
      this.imageURL = postFormEmployeeImageURL
      console.log(this.name)
      /* Below are my attempts to do this purely via POST and GET requests through the API. */
      /* ---------------------------------------------- */
      console.log("Form submitted")
      this.id = 999
      console.log("Debug: "+postFormEmployeeName+" "+postFormEmployeeAge+" "+postFormEmployeeWage+" "+postFormEmployeeImageURL)
      
      axios.post('https://dummy.restapiexample.com/api/v1/create', {
        name: postFormEmployeeName,
        salary: postFormEmployeeWage,
        age: postFormEmployeeAge
        // image: postFormEmployeeImageURL
      })
      .then(response => {
        console.log("Response1: "+response.status+" "+response.statusText)
        this.result = response.data
        console.debug("Result: "+this.result)
      })
      .catch(function (error) {
        console.log(error)
      })

      axios.get('https://dummy.restapiexample.com/api/v1/employee/1')
      .then(response => {
        console.log("Response2: "+response.status+" "+response.statusText)
        this.getResult = response.data
        console.log("getResult: "+this.getResult)
        this.id = response.data.id + 1
      })
      .catch(function (error) {
        console.log(error)
      })
    }
  }
})
</script>

<style scoped>
.form-container {
  font-family: "Maven Pro";
  color: #013535;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.inputs-container {
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
.searchbox {
  margin: 5px;
}
.submit-button {
  margin: 30px;
  font-family: "Maven Pro";
  height: 50px;
  width: 150px;
}
</style>