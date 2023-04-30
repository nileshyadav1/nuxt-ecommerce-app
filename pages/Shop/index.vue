<template>
  <div>
    <CommonSection :title="'Shop at HandyCart'" />

    <section class="best_sales">
      <div class="px-5">
        <div class="row">
          <div class="col-12 text-center mb-5">
            <h2 class="section__title text-center">Shop By Category</h2>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <div class="category-banner">
              <div class="bg-div ">
                <LazyImage
                  :src="'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'"
                  :key="'HandyCart Hero image'"
                  :alt="'HandyCart Hero image'"
                  :title="'HandyCart Hero image'"
                  class="rounded img-fluid bg-img"
                />
              </div>
              <div class="category-box">
                <nuxt-link to="/shop/clothing">
                  <h2>Clothing</h2>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <div class="category-banner">
              <div class="bg-div">
                <LazyImage
                  :src="'https://images.unsplash.com/photo-1584609226397-de5612afdfea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'"
                  :key="'HandyCart Hero image'"
                  :alt="'HandyCart Hero image'"
                  :title="'HandyCart Hero image'"
                  class="rounded img-fluid bg-img"
                />
              </div>
              <div class="category-box">
                <nuxt-link to="/shop/clothing">
                  <h2>Footwear</h2>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4 mb-3">
            <div class="category-banner">
              <div class="bg-div">
                <LazyImage
                  :src="'https://images.unsplash.com/photo-1617048931430-5eb626d81e71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'"
                  :key="'HandyCart Hero image'"
                  :alt="'HandyCart Hero image'"
                  :title="'HandyCart Hero image'"
                  class="rounded img-fluid bg-img"
                />
              </div>
              <div class="category-box">
                <nuxt-link to="/shop/clothing">
                  <h2>Accessories</h2>
                </nuxt-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonSection from "~/components/Global/CommonSection.vue";
export default {
  components: {
    CommonSection,
  },
};
</script>

<style scoped>
.category-banner {
  overflow: hidden;
  padding: 0;
  position: relative;
   box-shadow: 0 2px 8px 0 rgba(99,99,99,0.2);
}

.category-box {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

.category-box a {
  text-decoration: none;
}
.category-box a:hover {
  text-decoration: none;
}
.category-box h2 {
  background-color: #fff;
  box-shadow: 0 0 7px #0006;
  display: inline-block;
  margin-bottom: 0;
  padding: 20px 35px;
  transition: 0.5s ease;
  color: var(--primary-color);
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.02em;
  line-height: 1;
  text-transform: uppercase;
}

.category-banner .bg-div{
  max-height:300px;
  
}
.category-banner .bg-div img{
  height:100%;
  width:100%;
 object-fit: cover;
  object-position: center center;

}
 .category-banner:hover img {
    transform: scale(1.1) translate(14px);
    transition: .5s ease;
}

@media only screen and (max-width:768px){
  .category-box h2 {
  
  font-size: 20px;
}
}
</style>
