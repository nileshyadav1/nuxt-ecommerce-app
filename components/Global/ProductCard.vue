<template>
  <div>
    <nuxt-link :to="`/shop/${Product.id}`" class="productLink">
    <div class="product__item mb-2 " style="cursor:pointer;">
        <div class="product__img">
              <LazyImage 
 :src="require(`~/assets/images/${Product.imgUrl}`)"
 :key="'Arm-Chair-1'"
            :alt="'Arm-Chair-1'"
            :title="'Arm-Chair-1'"
            class="rounded"
 />
        </div>

            <div class="p-2 product__info">
                <h3 class="product__name">{{Product.productName}}</h3>
        <span >{{Product.category}}</span>
            </div>
        
        <div class="product__card-bottom d-flex align-items-center justify-content-between p-2">
            <span class="price">
                    ${{Product.price}}
            </span>
            <span>
                <i class="ri-add-line"></i>
            </span>
        </div>
    </div>
    </nuxt-link>
  </div>
</template>

<script>
export default {
    // props:['Product']
props:{
    Product:{
        type:Object
    }
}
}
</script>

<style scoped>

.productLink:hover{
    color: inherit;
    text-decoration: none;
}

.product__img:hover{
    scale:0.9
}

.product__info h3{
    font-size:1.2rem;
    color: var(--primary-color);
    font-weight:600;
    margin-top: 15px;
}

.product__info span{
    font-size:0.9rem;
}

.product__card-bottom .price{
    color:var(--primary-color);
    font-size:1.3rem;
    font-weight: 500;
}

.product__card-bottom span i{
    font-size: 1.2rem;
    padding: 5px;
    background: var(--primary-color) ;
    color: #fff;
    border-radius: 50px;
}


@media only screen and (max-width:992px){
  .product__info h3{
    font-size:1.1rem;
}
}
@media only screen and (max-width:768px){
  .product__info h3{
    font-size:1rem;
}

.product__card-bottom span i{
    font-size: 1rem;
}

}
</style>