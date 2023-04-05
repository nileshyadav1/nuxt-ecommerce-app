<template>
  <div>
    <CommonSection :title="'Clothing at HandyCart'" />
    <section class="clothing-main">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="collection-filter" :class="isMobileFilterOpen ? 'openFilterBar' : null">
            <div class="collection-mobile-back">
              <span class="filter-back" @click="isMobileFilterOpen = !isMobileFilterOpen">
                <i class="ri-arrow-left-line"></i>
                Back
              </span>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title" @click="isCategoryOpen = !isCategoryOpen">Category</h3>

                  <i
                    v-if="isCategoryOpen"
                    class="ri-arrow-drop-up-line d-none d-lg-block"
                    @click="isCategoryOpen = !isCategoryOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line d-none d-lg-block"
                    @click="isCategoryOpen = !isCategoryOpen"
                  ></i>
                </div>
                <div
                  class="collection-collapse-block-content"
                  v-if="isCategoryOpen"
                >
                  <div class="collection-filter-inside">
                    <ul class="mb-0 pl-0 filter-list">
                      <li
                        v-for="(category, index) in categories"
                        :key="index"
                        @click="changeCategory(category)"
                        :class="
                          category == selectedCategory
                            ? 'font-weight-bold'
                            : null
                        "
                        style="cursor:pointer;"
                      >
                        {{ category }}
                      </li>
                    </ul>

                    <p @click="selectedCategory = null" class="text-center mt-3 mt-lg-0" style="cursor:pointer"><small class="filterText">Reset Filter</small></p>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title" @click="isBrandOpen = !isBrandOpen">Brand</h3>

                  <i
                    v-if="isBrandOpen"
                    class="ri-arrow-drop-up-line d-none d-lg-block"
                    @click="isBrandOpen = !isBrandOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line d-none d-lg-block"
                    @click="isBrandOpen = !isBrandOpen"
                  ></i>
                </div>
                <div
                  class="collection-collapse-block-content"
                  v-if="isBrandOpen"
                >
                  <div class="collection-filter-inside pl-2">
                    <b-form-checkbox
                      v-for="option in brands"
                      v-model="selectedBrands"
                      :key="option"
                      :value="option"
                      class="filterText"
                    >
                      {{ option }}
                    </b-form-checkbox>

                     <p @click="selectedBrands = []" class="text-center mt-3 mt-lg-0" style="cursor:pointer"><small class="filterText">Reset Filter</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title"  @click="isColorOpen = !isColorOpen">Colors</h3>

                  <i
                    v-if="isColorOpen"
                    class="ri-arrow-drop-up-line d-none d-lg-block"
                   @click="isColorOpen = !isColorOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line d-none d-lg-block"
                    @click="isColorOpen = !isColorOpen"
                  ></i>
                </div>
                <div
                  class="collection-collapse-block-content"
                  v-if="isColorOpen"
                >
                  <div class="collection-filter-inside pl-2">
                    <b-form-checkbox
                      v-for="option in colors"
                      v-model="selectedColors"
                      :key="option"
                      :value="option"
                      class="filterText"
                    >
                      {{ option }}
                    </b-form-checkbox>
                      <p @click="selectedColors = []" class="text-center mt-3 mt-lg-0" style="cursor:pointer"><small class="filterText">Reset Filter</small></p>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title"  @click="isSizeOpen = !isSizeOpen">Size</h3>

                  <i
                    v-if="isSizeOpen"
                    class="ri-arrow-drop-up-line d-none d-lg-block"
                   @click="isSizeOpen = !isSizeOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line d-none d-lg-block"
                    @click="isSizeOpen = !isSizeOpen"
                  ></i>
                </div>
                <div
                  class="collection-collapse-block-content"
                  v-if="isSizeOpen"
                >
                  <div class="collection-filter-inside pl-2">
                    <b-form-checkbox
                      v-for="option in size"
                      v-model="selectedSize"
                      :key="option"
                      :value="option"
                      class="filterText"
                    >
                      {{ option }}
                    </b-form-checkbox>
                    <p @click="selectedSize = []" class="text-center mt-2 mt-lg-0" style="cursor:pointer"><small class="filterText">Reset Filter</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-12 col-lg-9">
         <div class="row">
          <div class="col-12 d-block d-lg-none">
            <button class="btn FilterToggleBtn" @click="isMobileFilterOpen = !isMobileFilterOpen"> <i class="ri-filter-fill"></i> Filter</button>
          </div>
          <div class="col-12 col-sm-6 col-md-6 col-lg-4" v-for="product in getClothingProducts" :key="product.id">
                <ProductCard :Product="product"/>
            </div>
         </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonSection from "~/components/Global/CommonSection.vue";
import ProductCard from "~/components/Global/ProductCard.vue"
import Products from "~/assets/data/products"
export default {
  components: { CommonSection ,ProductCard},
  data() {
    return {
      isMobileFilterOpen:false,
      isCategoryOpen: false,
      isBrandOpen: false,
      isColorOpen: false,
      isSizeOpen: false,
      selectedBrands: [],
      selectedColors: [],
      selectedSize: [],
      brands: ["test", "hello", "world"],
      colors: ["black", "red", "green"],
      size: ["xs", "s", "m", "l", "xl","xxl"],
      selectedCategory: null,
      categories: ["Men", "Women", "Kids"],
       Products: Products,
    };
  },
  methods: {
    changeCategory(value) {
      this.selectedCategory = value;
    },
  },
  computed:{

    getClothingProducts(){
        return this.Products
    }
}
};
</script>

<style scoped>
.clothing-main {
  padding-left: 5%;
  padding-right: 5%;
}


</style>
