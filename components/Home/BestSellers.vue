<template>
  <div>
   <section class="best__sales">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h2 class="section__title text-center">
                    Best Seller
                </h2>
            </div>
            <div class="col-12 col-sm-6 col-md-4 col-lg-3" v-for="product in getBestSalesProducts" :key="product.id">
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

    getBestSalesProducts(){
        return this.Products.filter(item=>item.category == 'sofa')
    }
}
}
</script>

<style scoped>

</style>