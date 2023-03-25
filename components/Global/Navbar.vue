<template>
  <div >
   <header class="header" :class="customClass">
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
 </div>
          </div>


          <div class="navigation" ref="Naviagtion" :class="mobileNavToggle? 'active__menu':null">
            <div class="closeSideBar" v-if="mobileNavToggle" @click="mobileNavToggle = !mobileNavToggle" style="cursor:pointer">
              <span><i class="ri-close-line"></i></span>
            </div>
            <ul class="menu ">
              <li class="nav__item">
                 <NuxtLink class="" to="/" exact>Home</NuxtLink>
              </li>
              <li class="nav__item">
                 <NuxtLink class="" to="/shop" >Shop</NuxtLink>
              </li>
              <li class="nav__item">
                 <NuxtLink class="" to="/about" >About</NuxtLink>
              </li>
              <li class="nav__item">
                 <NuxtLink class="" to="/contact" >Contact</NuxtLink>
              </li>
            </ul>
          </div>


          <div class="nav__icons">
            <span class="main__icon">
          <i class="ri-instagram-line"></i>
            </span>
            <!-- <span class="cart__icon">
             <i class="ri-mail-line"></i>
            </span> -->

             <!-- Mobile Menu -->
             <div class="mobile__menu">
              <span @click="mobileNavToggle = !mobileNavToggle" style="cursor:pointer"> <i class="ri-menu-line"></i></span>
             </div>
             </div>


            
        </div>
      </div>
    </div>
   </header>
  </div>
</template>

<script>

export default {
  data(){
    return {
      customClass : 'sticky__header',
      mobileNavToggle:false,
    }
  },
  methods:{
    closeNav(){
      this.mobileNavToggle = false;
    },
      closeNavbar (e) {
        console.log("E",e.target,this.$refs.Naviagtion.contains(e.target))
        if (!this.$refs.Naviagtion.contains(e.target)) {
              if(this.mobileNavToggle){
                  this.closeNav()
              }
      
        } 
      }
  },
   watch: {
    '$route': function (to, from) {
      if (to.path !== from.path) {
        this.closeNav()
      }
    }
  },
    //  created() {
    //   if(process.client){
    //     window.addEventListener('click', this.closeNavbar)
    //   }
        
    // },
    //  beforeDestroy () {
    //     if(process.client){
    //   window.removeEventListener('click', this.closeNavbar)
    //   }
    // }

 

}
</script>

<style scoped>
</style>