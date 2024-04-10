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
  

  

  <div class="col text-center" >
           
           <h4>{{ store.fivecolumn[0].title }}</h4>
                    
           <img :src="store.fivecolumn[0].logo" alt="">
 
           <p>{{ store.fivecolumn[0].listone}}</p>

           <h3>{{ store.fivecolumn[0].listtwo}}</h3>

           <span>{{ store.fivecolumn[0].listthree}}</span>
 
         </div>


  

  
</template>


<style lang="scss" scoped>
.col{
  h4{
  font-size: 1rem;
  }
  img{
    margin: 20px 0 20px 0;
    width: 200px;
    height: 200px;
  }
  p{
    font-weight: bold;
    margin-bottom: 0;

  }
  h3{
    color: rgb(255, 225, 52);
    margin-bottom: 0;
    font-weight: bold;
  }
  span{
    font-weight: bold;

  }
}
</style>