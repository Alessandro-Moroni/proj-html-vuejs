<script>
  export default {
    props:{
      listMenu: Object,
    },
    
  }
</script>

<template>
  <div class="col">
    <nav>
      <ul>
        <li v-for="el in this.listMenu" :key="el">
          <a href="">{{ el.list }}</a>
        </li>
      </ul>
    </nav>

  </div>
</template>


<style lang="scss" scoped>

</style>