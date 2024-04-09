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
  <div class="container-fluid back">
    <div class="container-fluid gradient">

      <div class="container-xl">
        <img class="apple" src="../assets/img/app-store-badge-200x67.png" alt="">
        <img class="play-store" src="../assets/img/play-store-badge-200x67.png" alt="">
        <div class="row">
          
          <Column v-for="el in this.menu" :key="el.id" :listMenu="el"/>
         
          <div class="col" >
            <nav>
              <ul>
                <h4>OPENING HOURS</h4>
  
              </ul>
              <ul>
                <li>
                  <a href="">Mon-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Tue-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Wed-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Thur-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Fri-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Sat-<span>10AM to 11PM</span></a>
                </li>
                <li>
                  <a href="">Sun-<span>11AM to 10PM</span></a>
                </li>
                
              </ul>
            </nav>
  
          </div>
  
          <div class="col text-center last-col" >
           
            <h4>VOUCHER</h4>
                     
            <img src="../assets/img/footer-coupon.png" alt="">
  
            <span>JustUseTheCode</span>
            <h3>FIRSTORDER</h3>
            <span>AtCheckout</span>
  
          </div>
  
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
              <li><a href="">
                <i class="fa-brands fa-facebook-f"></i>
              </a></li>

              <li><a href="">
                <i class="fa-brands fa-twitter"></i>
              </a></li>

              <li><a href="">
                <i class="fa-brands fa-instagram"></i>
              </a></li>

              <li><a href="">
                <i class="fa-brands fa-linkedin-in"></i>
              </a></li>

              <li><a href="">
                <i class="fa-solid fa-wifi"></i>
              </a></li>

              <li><a href="">
                <i class="fa-brands fa-youtube"></i>
              </a></li>

              <li><a href="">
                <i class="fa-regular fa-envelope"></i>
              </a></li>
            </ul>
          </nav>
        </div>

        <p><span>@Copyright 2012-2020 | Avada There by </span>ThemeFusion <span>| All Rights Reserved | Powered by </span>WordPress</p>
      </div>
    </div>


  </div>
</template>


<style lang="scss" scoped>
.back{
  background-image: url(../assets/img/pizza.jpg);
  
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
    .last-col{
      img{
        margin-bottom: 20px;
      }
      h3{
        color: rgb(255, 225, 52);
        margin-bottom: 0;
      }
    }
  }
  .gradient{
    height: 100%;
    background: rgb(14, 14, 14, .5);
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
    }
    li{
      list-style: none;
      margin: 0 20px;
      a{
        text-decoration: none;
        color: white;
      }
    }
    span{
      color: rgb(249, 218, 66);
    }
  }
}
</style>