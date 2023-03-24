<template>
  <div>
   <section class="trending__products">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="section__title text-center">
                    Trending Products
                </h2>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in getTrendingProducts" :key="product.id">
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

    getTrendingProducts(){
        return this.Products.filter(item=>item.category == 'chair')
    }
}
}
</script>

<style scoped>

</style>