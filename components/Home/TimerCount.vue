<template>
  <div>
    <section class="timer__count">
        <div class="container">
            <div class="row">
                <div class="col-12 col-md-12 col-lg-6 main-content">
                    <div class="clock__top-content">
                        <h4 class="text-white fs-6 mb-2">Limited Offers</h4>
                        <h5 class="text-white fs-2 mb-3">Quality Armchair</h5>
                    </div>
                    <Clock/>

                    <button class="buy__btn store__btn">
                        <nuxt-link to="/shop">Visit Store</nuxt-link>
                    </button>
                </div>
                <div class="col-12 col-md-12 col-lg-6 counter__img" style="text-align:end;">
                      <LazyImage 
 :src="require(`~/assets/images/counter-timer-img.png`)"
 :key="'HandyCart Timer'"
            :alt="'HandyCart Timer'"
            :title="'HandyCart Timer'"
            class="rounded"
 />
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script>
import Clock from "~/components/Home/Clock.vue"
export default {
components:{
    Clock
}
}
</script>

<style scoped>
.timer__count{
background: var(--primary-color);
height:300px;
}

.timer__count img{
    width:70% !important;
    height: 70% !important;
    object-fit: contain;
}

.store__btn{
    background: #fff;
    color:var(--primary-color);
    font-weight:600;
}
.store__btn a:hover{
    color:var(--primary-color);
    
}

@media only screen and (max-width:992px){
    .counter__img{
        display: none;
    }
    .main-content{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .clock__top-content h4{
        font-size: 0.9rem !important;
    }
    .clock__top-content h3{
        font-size: 1rem !important;
    }

    .store__btn{
        
    }
    
}
</style>