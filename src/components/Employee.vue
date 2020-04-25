<template>
  <div class="employee-container">
    <router-link :to="{ path:'/employee-page/'+employeeName+'/'+employeeAge+'/'+employeeSalary+'/'+employeeImage, params: { employeeName, employeeAge, employeeSalary, employeeImage } }">
      <img class="results-image"
        width="150"
        height="150"
        :src="imageDefault"
        v-bind:class="compClasses"
        v-on:mouseover="marked = !marked"
        v-on:mouseleave="marked = !marked"
      />
      <div class="results-text">
        <div>{{this.employeeName}}</div>
        <div class="results-details">{{"Age: "+this.employeeAge }}</div>
        <div class="results-details">{{"Salary: "+this.employeeSalary }}</div>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import Image from '@/assets/default-profile-picture.svg'

export default Vue.extend({
  components: {
  },
  props: [
    'employeeImage',
    'employeeName',
    'employeeAge',
    'employeeSalary'
  ],
  data () {
    return {
      marked: false,
      result: [],
      name: this.employeeName,
      age: this.employeeAge,
      salary: this.employeeSalary,
      image: this.employeeImage
    }
  },
  computed: {
    compClasses: function () {
      return {
        marked: this.marked
      }
    },
    imageDefault: function () {
      if (this.employeeImage === '') {
        console.log('employee image empty: ' + this.employeeImage)
        return 'https://cdn0.iconfinder.com/data/icons/elasto-online-store/26/00-ELASTOFONT-STORE-READY_user-circle-512.png'
      } else {
        console.log('employee image set: ' + this.employeeImage)
        return this.employeeImage
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
  width: auto;
  max-height: 100%;
  margin: 50px;
}

.results-image {
  border-radius: 50%;
  filter: invert(16%) sepia(25%) saturate(2056%) hue-rotate(137deg) brightness(70%) contrast(99%);
}
.results-item {
}
.results-text {
  font-size: 15px;
  font-family: "Maven Pro";
  text-align: center;

  word-wrap: normal;
}
.results-details {
  display: none;
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
