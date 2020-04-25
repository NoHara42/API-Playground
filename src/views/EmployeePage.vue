<template>
  <div>
    <div class="employee-container">
      <img class="results-image"
        :src="$route.params.employeeImage"
        v-bind:class="compClasses"
        v-on:mouseover="marked = !marked"
        v-on:mouseleave="marked = !marked"
      />
      <div class="results-text">
        <div>{{$route.params.employeeName}}</div>
        <div class="results-details">{{"Age: "+$route.params.employeeAge }}</div>
        <div class="results-details">{{"Salary: "+$route.params.employeeSalary }}</div>
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
  ]
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
