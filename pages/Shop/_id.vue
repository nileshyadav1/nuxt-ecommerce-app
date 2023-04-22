<template>
  <div>
    <CommonSection :title="getSelectedProduct.productName" />

    <section class="pt-0">
      <div class="container">
        <div class="row">
          <div class="col-12 col-lg-6">
            <LazyImage
              :src="require(`~/assets/images/${getSelectedProduct.imgUrl}`)"
              :key="getSelectedProduct.id"
              :alt="getSelectedProduct.productName"
              :title="getSelectedProduct.productName"
              class="rounded img-fluid bg-img"
            />
          </div>
          <div class="col-12 col-lg-6">
            <div class="product__details">
              <h2>{{ getSelectedProduct.productName }}</h2>
              <div class="product__rating d-flex align-items-center gap-5 mb-3">
                <div class="d-flex mr-3">
                  <div v-for="i in 5" :key="i">
                    <i
                      v-if="i <= Math.floor(getSelectedProduct.avgRating)"
                      class="ri-star-s-fill text-warning"
                    ></i>
                    <i
                      v-else-if="
                        i === Math.ceil(getSelectedProduct.avgRating) &&
                        getSelectedProduct.avgRating % 1 !== 0
                      "
                      class="ri-star-half-s-line text-warning"
                    ></i>
                    <i v-else class="ri-star-line text-warning"></i>
                  </div>
                </div>
                <p>
                  ( <span>{{ getSelectedProduct.avgRating }}</span> ratings)
                </p>
              </div>

              <p>{{ getSelectedProduct.shortDesc }}</p>

              <button class="buy__btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>

      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="tab__wrapper d-flex align-items-center gap-5">
              <h6 class="mr-5" :class="selectedTab == 'desc'? 'active__tab':null" @click="toggleTab('desc')" >Description</h6>
              <h6 :class="selectedTab == 'rev'? 'active__tab':null" @click="toggleTab('rev')">Reviews ({{getSelectedProduct.reviews.length}})</h6>
            </div>

            <div class="tab__content mt-5" v-if="selectedTab == 'desc'">
              <p>{{getSelectedProduct.description}}</p>
            </div>
            <div v-else class="product__review mt-5">
              <div class="review__wrapper">
                <ul class="ml-5">
                  <li v-for="(review,index) in getSelectedProduct.reviews" :key="index" class="mb-4">
                    <h6>{{review.userName}}</h6>
                    <span>{{review.rating}} (rating)</span>
                    <p>{{review.text}}</p>
                  </li>
                </ul>

                <div class="review__form">
                  <h4>Leave your experience</h4>
                  <form action="">
                    <div class="form__group">
                      <input type="text" placeholder=" Enter name">
                    </div>
                      <div class="form__group d-flex align-items-center rating__group">
                     <span class="mr-2 mr-md-3"  v-for="i in 5" :key="i"   @click="setRating(i)">{{i}} <i class="ri-star-s-fill" :style="userRating == i ? 'text-decoration:underline;':null"></i> </span>
                     
                    </div>
                      <div class="form__group">
                      <textarea rows="4" type="text" placeholder="Review Message..." />
                    </div>

                    <button type="submit" class="buy__btn">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 mt-5">
            <h2 class="related__title">You might also like</h2>
          </div>

          <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="(product ,index) in getRelatedProduct" v-show="index <6" :key="product.id">
                <ProductCard :Product="product"/>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonSection from "~/components/Global/CommonSection.vue";
import Products from "~/assets/data/products";

import ProductCard from "~/components/Global/ProductCard.vue"
export default {
  components: { CommonSection,ProductCard },
  data(){
    return {
      selectedTab:'desc',
      userRating:null
    }
  },
  methods:{
    toggleTab(value){
      if(value){
        this.selectedTab = value
      }
    },
    setRating(value){
      if(value){
        this.userRating = value
      }
    }
  },
  computed: {
    getSelectedProduct() {
      return Products.find((item) => item.id == this.$route.params.id);
    },
    getRelatedProduct(){
      return Products.filter((item)=>item.category == this.getSelectedProduct.category && item.id !== this.getSelectedProduct.id)
    }
  },
};
</script>

<style scoped>
.product__details {
  margin-top: 70px;
}
.product__details h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
}
.product__rating span i {
  color: coral;
}
.product__rating p span {
  color: coral;
  font-weight: 500;
}

.tab__wrapper {
color:var(--primary-color);
font-weight:500;
font-size:1rem;
cursor: pointer;
}
.tab__content p{
line-height: 30px;
}
.active__tab{
  font-weight: 600;
}

.review__wrapper ul li span{
color: coral;
font-weight:600;
}
.review__wrapper ul li p{
margin-top:10px;
}

.review__form{
  width: 70%;
  margin: auto;
  margin-top: 50px;
}
.review__form h4{
font-size:1.2rem;
font-weight:600;
margin-bottom:30px;
}

.form__group input , .form__group textarea{
  width: 100%;
  border:1px solid var(--primary-color);
  border-radius: 5px;
  padding:8px 20px;
}
.form__group input:focus, .form__group textarea:focus{
outline: none;
}
.form__group {
margin-bottom: 30px;
}

.form__group span{
  display: flex;
  align-items: center;
  column-gap: 5px;
  color: coral;
  font-weight: 600;
  cursor: pointer;
}

.related__title{
  font-size:1.2rem;
  font-weight: 600;
  margin-top:30px;
}

@media only screen and (max-width: 768px) {
  .product__details h2{
    font-size: 1.3rem;
  }

  .rating__group{
    column-gap: 0.5rem !important;
  }
}

</style>
