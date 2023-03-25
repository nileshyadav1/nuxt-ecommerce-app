<template>
 <div>
    


 <section class="hero_section ">
  <div class="container">
    <div class="row ">
      <div class="col-12 col-md-6 col-lg-6 pt-0 pt-md-5">
        <div class="hero__content">

          <p class="m-0 hero__subtitle">Trending products in {{getCurrYear}}</p>
            <h2>Choose , Shop , Wear as per your need</h2>
            <p class="m-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci quis dolor, officiis facere illum voluptate excepturi incidunt expedita possimus enim!</p>

            <button class="buy__btn"> <NuxtLink class="" to="/shop" >SHOP NOW</NuxtLink></button>
        </div>
      </div>
      <div class="col-12 col-md-6 col-lg-6 pt-0 pt-md-5">
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
 <TrendingProducts />
 <BestSellers/>
 <TimerCount/>
 <NewArrivals  />
 <PopularCategory  />
  </div>
</template>

<script>
import Services from "~/components/Home/Services.vue"
import TrendingProducts from "~/components/Home/TrendingProducts.vue"
import BestSellers from "~/components/Home/BestSellers.vue"
import TimerCount from "~/components/Home/TimerCount.vue"
import NewArrivals from "~/components/Home/NewArrivals.vue"
import PopularCategory from "~/components/Home/PopularCategory.vue"
export default {
  name: 'Home',
  components:{
    Services,
    TrendingProducts,
    BestSellers,
    TimerCount,
    NewArrivals,
    PopularCategory
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

@media only screen and (max-width:992px){
  .hero__content h2{
    font-size:2rem
  }
}
@media only screen and (max-width:768px){
  .hero__content h2{
    font-size:1.6rem
  }
  .hero__content p{
    font-size:0.9rem;
  }
}
@media only screen and (max-width:576px){
  .hero__content{
    padding-top: 0;
    margin-bottom: 40px;
  }
}


</style>