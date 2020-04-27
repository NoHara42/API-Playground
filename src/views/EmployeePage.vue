<template>
  <div>
    <div class="employee-container">
      <img class="results-image"
        :src="checkDefault($route.params.employeeImage)"
        v-bind:class="compClasses"
        v-on:mouseover="marked = !marked"
        v-on:mouseleave="marked = !marked"
      />
      <div class="results-text">
        <div>{{$route.params.employeeName}}</div>
        <div class="results-details">{{"Age: "+$route.params.employeeAge }}</div>
        <div class="results-details">{{"Salary: "+$route.params.employeeSalary }}</div>
        <div class="searchbox">
          <form >
            <input type="text" v-model="postFormEmployeeName" placeholder="Change Employee salary here."/>
          </form>
        </div>
      </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: [
    'employeeImage',
    'employeeName',
    'employeeAge',
    'employeeSalary'
  ],
  data () {
    return {
      salary: String
    }
  },
  computed: {
  },
  methods: {
    checkDefault(routedParam: string) {
      if (routedParam === undefined) {
        console.log('employeePage image empty: ' + routedParam)
        return 'https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-512.png'
      } else {
        console.log('employeePage image set: ' + routedParam)
        return routedParam
      }
    }
  }
})
</script>

<style scoped>
.employee-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin: 50px;
  height: 100%;
}

.results-image {
  border-radius: 50%;
  margin-bottom: 100px;
  height: 500px;
  width: 500px;
  border-radius: 50%;
  filter: invert(16%) sepia(25%) saturate(2056%) hue-rotate(137deg) brightness(60%) contrast(99%);
}
.results-text {
  font-size: 30px;
  font-family: "Maven Pro";
  text-align: center;

  word-wrap: normal;
}
.results-details {

}
.marked {
  animation: lighten 0.3s ease-in-out 0s forwards;
}
@keyframes lighten{
  0%{
    opacity: 100%;
  }
  100%{
    opacity: 50%;
  }
}

</style>
