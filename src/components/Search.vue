<template>
  <div class="search">
    <div class="searchbox-container">
      <div class="searchbox">
        <h1>Case sensitive!</h1>
        <form v-on:submit.prevent="getEmployeesFiltered(query)">
          <input type="text" v-model="query" placeholder="Search for an employeee name:"/>
        </form>
      </div>
    </div>
    <div class="results-container">
      <Employee
        v-for='result in filteredResults'
        :key='result.id'
        v-bind:employeeImage='result.profile_image'
        v-bind:employeeName='result.employee_name'
        v-bind:employeeAge='result.employee_age'
        v-bind:employeeSalary='result.employee_salary'
      >
      </Employee>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import { vue, Component } from 'vue-property-decorator'
import axios from 'axios'
import Employee from './Employee.vue'

export default Vue.extend({
  components: {
    Employee
  },
  name: 'Search',
  data () {
    return {
      marked: false,
      query: '',
      results: []
    }
  },
  computed: {
    filteredResults: function () {
      return this.results.filter((result) => {
        return result.employee_name.match(this.query)
      })
    }
  },
  methods: {
    getEmployeesFiltered (query) {
      //  axios config constructor
      axios
        .get('https://dummy.restapiexample.com/api/v1/employees')
        .then(response => {
          console.log(response.data.data)
          this.results = response.data.data
        }).catch(e => console.log(e))
    }
  },
  mounted () {
    axios
      .get('https://dummy.restapiexample.com/api/v1/employees')
      .then(response => {
        console.log(response.data.data)
        this.results = response.data.data
      }).catch(e => console.log(e))
  }
})
// @Component
// export default class Search extends Vue {
//   @Prop() private msg!: string;
//   @Prop() private query!: string;
//   @Prop() private results!: string;

//   getEmployeeList () {
//     const axiosInstance = axios({
//       method: 'get',
//       url: 'http://dummy.restapiexample.com/api/v1/employees/',

//     })
//     axiosInstance.then(response => {
//       this.results = response.data.data
//     }).catch(e => {
//       console.log(e)
//     })
//   }

// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700;800;900&display=swap');
.searchbox-container {
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 50px;
}
.searchbox {

}
.results-container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
}

</style>
