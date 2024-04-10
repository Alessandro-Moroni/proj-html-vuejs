<script>
import { store } from '../../data/store';
  export default {
    props:{
      
    },
    data(){
      return{
        store,
        
      }
    },
    
  }
</script>

<template>
  

  
<div class="col" >
  <nav>
    <ul>
      <h4>{{ store.threecolumn[0].title }}</h4>
  
    </ul>
    <ul>

      <li>
        <a href="">{{ store.threecolumn[0].listone}}</a>
      </li>
      <li>
        <a href="">{{ store.threecolumn[0].listtwo}}</a>
      </li>
      <li>
        <a href="">{{ store.threecolumn[0].listthree}}</a>
      </li>
      
                
    </ul>
  </nav>
  
  <img :src="store.threecolumn[0].firstlogo" alt="">
  <img :src="store.threecolumn[0].secondlogo" alt="">

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
        
  }
}

img{
  border: 2px solid white;
  border-radius: 20px;
  margin-bottom: 10px;
}

</style>