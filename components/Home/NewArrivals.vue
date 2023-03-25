<template>
  <div>
   <section class="trending__products">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="section__title ">
                   New Arrivals
                </h2>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in getNewArrivalsProducts" :key="product.id">
                <ProductCard :Product="product"/>
            </div>
           
        </div>
    </div>
   </section>
  </div>
</template>

<script>
import ProductCard from "~/components/Global/ProductCard.vue"
import Products from "~/assets/data/products"
export default {
    data(){
        return{
            Products: Products
        }
    },
components:{
    ProductCard
},
computed:{

    getNewArrivalsProducts(){
        return this.Products.filter(item=>item.category == 'mobile' || item.category == 'wireless')
    }
}
}
</script>

<style scoped>

</style>