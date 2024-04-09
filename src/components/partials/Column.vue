<script>
  export default {
    props:{
      listMenu: Object,
    },
    
  }
</script>

<template>
  <div class="col" >
    <nav>
      <ul>
        <h4>{{ listMenu.title }}</h4>

        <li v-for="(el, id) in this.listMenu.list" :key="id">
          <a href="">{{ el }}</a>
        </li>
        
      </ul>
      
    </nav>
    <!-- <img :src="`../../assets/img/${listMenu.firstLogo}`" alt="">
    <img :src="`../../assets/img/${listMenu.secondLogo}`" alt=""> -->

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
  }
}
img{
  width: 200px;
  height: 200px;
}
</style>