<template>
  <div>
   <div class="header">
    <div class="container ">
      <div class="row">
        <div class="nav__wrapper w-100 ">
          <div class="logo">
           <LazyImage 
 :src="require(`~/assets/images/eco-logo.png`)"
 :key="'HandyCart Logo'"
            :alt="'HandyCart Logo'"
            :title="'HandyCart Logo'"
            class="rounded"
 />
 <div>
  <h1 class="m-0">HandyCart</h1>
  <!-- <p class="m-0">Since 2022</p> -->
 </div>
          </div>


          <div class="navigation">
            <ul class="menu">
              <li class="nav__item">
                 <NuxtLink class="" to="/" exact>Home</NuxtLink>
              </li>
              <li class="nav__item">
                 <NuxtLink class="" to="/shop" >Shop</NuxtLink>
              </li>
            </ul>
          </div>


          <div class="nav__icons">
            <span class="cart__icon">
              <BIconBag/>
            </span>
            <span class="cart__icon">
              <BIconBag/>
            </span>
            <span class="cart__icon">
              <BIconBag/>
            </span>
             </div>


             <!-- Mobile Menu -->
             <div class="mobile__menu">
              <span> <BIconThreeDotsVertical/></span>
             </div>
        </div>
      </div>
    </div>
   </div>
  </div>
</template>

<script>

import { BIconBag,BIconThreeDotsVertical} from "bootstrap-vue";
export default {
  components: { BIconBag,BIconThreeDotsVertical},

}
</script>

<style scoped>
</style>