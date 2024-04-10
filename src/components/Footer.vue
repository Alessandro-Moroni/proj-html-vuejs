<script>
import Column from './partials/Column.vue';
import Columnthree from './partials/Columnthree.vue';
import Columnfour from './partials/Columnfour.vue';
import Columnfive from './partials/Columnfive.vue';
import { menu } from '../data/db.json';
import { store } from '../data/store';

  export default {
    components:{
      Column,
      Columnthree,
      Columnfour,
      Columnfive,
    },
    data(){
      return{
        menu,
        store,
      }
    }
    
  }
</script>

<template>
  <div class="container-fluid back">
    

      <div class="container-xl">
        <img class="apple" src="../assets/img/app-store-badge-200x67.png" alt="">
        <img class="play-store" src="../assets/img/play-store-badge-200x67.png" alt="">
        <div class="row">
          
          <Column v-for="el in this.menu" :key="el.id" :listMenu="el"/>

          <Columnthree />
         
          <Columnfour />
         
          <Columnfive />
          
  
        </div>
        
      </div>
      
      <div class="container">
  
      </div>
      
      <div class="container text-center down-footer">
        <img src="../assets/img/takeout-logo.png" alt="">
        <h3>Stay In The Loop</h3>
        <p>
          Sing up to receive up to date news and offers directly in your inbox:
        </p>
        
        <div>

          <input type="text" placeholder="you@email.com">
        </div>

        <button type="button" class="btn btn-danger">Subscribe</button>

        <div class="d-flex justify-content-center ">
          <nav>
            <ul class="d-flex">

              <li v-for="el in this.store.footerFont" :key="el">
                <a href="">
                  <i :class="el"></i>
                </a>
              </li>

              
            </ul>
          </nav>
        </div>

        <p><span>@Copyright 2012-2020 | Avada There by </span>ThemeFusion <span>| All Rights Reserved | Powered by </span>WordPress</p>
      </div>
    


  </div>
</template>


<style lang="scss" scoped>
.back{
  background-image: url(../assets/img/pizza.jpg);
  background-image: linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,.9) 60%), url(../assets/img/pizza.jpg);
  height: 1000px;
  background-size: cover;
  background-position: center;
  
  .container-xl{
    color: white;
    padding-top: 100px;
    position: relative;

    .apple{
      position: absolute;
      left: 550px;
      top: 260px;
    }
    .play-store{
      position: absolute;
      left: 550px;
      top: 340px;
    }
    .col{
      li{
        list-style: none;
        margin: 5px 0;
        a{
          text-decoration: none;
          color: white;
          &:hover{
          color: rgb(249, 218, 66);
        }
          span{
            color: rgb(217, 157, 11);
          }
        }
      }
      h4{
        margin-bottom: 30px;
        font-size: 1rem;
      }
      img{
        width: 180px;
      }
    }
    
  }
 

  .down-footer{
    margin-top: 100px;
    color: white;
    h3{
      color: rgb(249, 218, 66);
      font-size: 3rem;
      margin: 30px 0 20px 0;
    }
    input{
      width: 600px;
      height: 50px;
      border-radius: 25px;
      padding: 10px;
      margin-bottom: 20px;
    }
    .btn-danger{
      width: 600px;
      height: 50px;
      border-radius: 25px;
      margin-bottom: 40px;
      background-color: rgb(206, 26, 38);
      &:hover{
        background-color: rgb(170, 19, 29);
      }
    }
    li{
      list-style: none;
      margin: 0 20px;
      a{
        text-decoration: none;
        color: white;
        &:hover{
          color: rgb(249, 218, 66);
        }

      }
    }
    span{
      color:  rgb(249, 218, 66);
    }
    
  }
}
</style>