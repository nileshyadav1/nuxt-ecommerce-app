<template>
 <div>
    


 <section class="hero_section">
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6 col-lg-6">
        <div class="hero__content">

          <p class="m-0 hero__subtitle">Trending products in {{getCurrYear}}</p>
            <h2>Choose , Shop , Wear as per your need</h2>
            <p class="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis dolor, officiis facere illum voluptate excepturi incidunt expedita possimus enim!</p>

            <button class="buy__btn"> <NuxtLink class="" to="/shop" >SHOP NOW</NuxtLink></button>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6">
        <div class="hero__img">
            <LazyImage 
 :src="require(`~/assets/images/hero-img.png`)"
 :key="'HandyCart Hero image'"
            :alt="'HandyCart Hero image'"
            :title="'HandyCart Hero image'"
            class="rounded"
 />
        </div>
      </div>
    </div>
  </div>

 </section>

 <Services/>
 <TrendingProducts/>
 <BestSellers/>
 <TimerCount/>
  </div>
</template>

<script>
import Services from "~/components/Home/Services.vue"
import TrendingProducts from "~/components/Home/TrendingProducts.vue"
import BestSellers from "~/components/Home/BestSellers.vue"
import TimerCount from "~/components/Home/TimerCount.vue"
export default {
  name: 'Home',
  components:{
    Services,
    TrendingProducts,
    BestSellers,
    TimerCount
  },
  computed:{
    getCurrYear(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>

.hero_section{
  background: var(--hero-bg);
}
.hero__content{
  padding-top: 45px;
}
.hero__content h2{
  color: var(--primary-color);
  font-size:2.5rem;
  font-weight:600px;
  margin:20px 0;
}
.hero__content p{
  color: var(--primary-color);
  line-height: 28px;
}
.hero_section p:nth-child(1){
  font-weight: 500;
}

/* .buy__btn{
  border: none;
  outline: none;
  padding: 8px 20px;
  border-radius: 5px;
  background: var(--primary-color);
  color:#fff;
  cursor: pointer;
  font-size: 1rem;
  margin-top: 40px;
}
.buy__btn a{
  color:inherit
}
.buy__btn a:hover{
  color:inherit;
  text-decoration: none;
} */


</style>