<template>
  <div>

    <section class="services">
        <div class="container">
            <div class="row">
                <div class="col-12 col-sm-6  col-md-6 col-lg-3 " v-for="(service,index) in servicesData" :key="index">
                    <div class="service__item" :style="`background:${service.bg};`">
                        <span>
                           
                            <i :class="service.icon"></i>
                        </span>
                        <div>
                            <h3>{{service.title}}</h3>
                            <p>{{service.subtitle}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
export default {
    data(){
        return {
        servicesData:    [
  {
    icon: "ri-truck-line",
    title: "Free Shipping",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#fdefe6",
  },
  {
    icon: "ri-refresh-line",
    title: "Easy Returns",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#ceebe9",
  },
  {
    icon: "ri-secure-payment-line",
    title: "Secure Payment",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#e2f2b2",
  },
  {
    icon: "ri-exchange-dollar-line",
    title: " Back Guarantee",
    subtitle: "Lorem ipsum dolor sit amet.",
    bg: "#d6e5fb",
  },
]
        }
    },

}
</script>

<style scoped>
    .service__item{
        padding:20px;
        /* background: var(--card-bg-01); */
        display: flex;
        align-items: center;
        column-gap: 0.7rem;
        border-radius: 5px;
        cursor: pointer;
    }
    .service__item:hover{
        scale:1.1 ;
    }

    .service__item span i{
        font-size:2.2rem;
        background: var(--primary-color);
        padding: 10px;
        border-radius: 50px;
        color:#fff;
        font-weight: 400 !important;
    }
    .service__item h3{
        color:var(--primary-color);
        font-size:1rem;
        font-weight: 600;
    }
    .service__item p{
        font-size: 0.9rem;
        margin-top: 5px;
        color: #222;
    }

    @media only screen and (max-width:992px){
  .service__item span i{
   font-size: 1.8rem;
   padding: 5px;
  }
  .service__item h3{
   font-size: 1rem;
  }
  .service__item{
        padding:10px;
        margin-bottom: 1.5rem;
    }
}
    @media only screen and (max-width:768px){

     .service__item span i{
   font-size: 1.5rem;
   padding: 5px;
  }
 
}
    @media only screen and (max-width:576px){

  .service__item{
        padding: 20px;
    }
 
 
}

</style>