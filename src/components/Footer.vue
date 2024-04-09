<script>
import Column from './partials/Column.vue';
import { menu } from '../data/db.json';

  export default {
    components:{
      Column,
    },
    data(){
      return{
        menu,
      }
    }
    
  }
</script>

<template>
  <div class="container-fluid">
    <div class="container-xl">
      <div class="row">
        <!-- <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div>
        <div class="col"></div> -->
        <Column v-for="el in this.menu" :key="el.id" :listMenu="el"/>
      </div>
      
    </div>
    
    <div class="container">

    </div>

  </div>
</template>


<style lang="scss" scoped>
.container-fluid{
  background-image: url(../assets/img/demo-takeout.jpg);
  height: 1000px;
  background-size: cover;
  background-position: center;
  .container-xl{
    border: 1px solid white;
    height: 200px;
    padding-top: 100px;
    .col{
      border: 1px solid yellow;
      height: 50px;
    }
  }
}
</style>