<script>
import { fourcolumn } from '../../data/fourcolumn.js';
  export default {
    props:{
      
    },
    data(){
      return{
        fourcolumn: fourcolumn,
        
      }
    },
    
  }
</script>

<template>
  

  
<div class="col" >
  <nav>
    <ul>
      <h4>OPENING HOURS</h4>
  
    </ul>
    <ul>

      <li v-for="el in fourcolumn" :key="el.id" :listMenu="el">
        <a href="">{{ el.day }}-<span>{{ el.hour }}</span></a>
      </li>
      
                
    </ul>
  </nav>
  
</div>
  

  
</template>


<style lang="scss" scoped>
h4{
  margin-bottom: 30px;
  font-size: 1rem;
}
li{
  list-style: none;
  margin: 10px 0;
  a{
      text-decoration: none;
      color: white;
      &:hover{
          color: rgb(249, 218, 66);
      
        }
        span{
      color: rgb(249, 218, 66);
    }
  }
}

</style>