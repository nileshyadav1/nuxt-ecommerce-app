<template>
  <div>
    <CommonSection :title="'Clothing at HandyCart'" />
    <section class="clothing-main">
      <div class="row">
        <div class="col-12 col-md-3">
          <div class="collection-filter">
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title">Category</h3>

                  <i
                    v-if="isCategoryOpen"
                    class="ri-arrow-drop-up-line"
                    @click="isCategoryOpen = !isCategoryOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line"
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
                      >
                        {{ category }}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title">Brand</h3>

                  <i
                    v-if="isBrandOpen"
                    class="ri-arrow-drop-up-line"
                    @click="isBrandOpen = !isBrandOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line"
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
                      class="text-white"
                    >
                      {{ option }}
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title">Colors</h3>

                  <i
                    v-if="isColorOpen"
                    class="ri-arrow-drop-up-line"
                    @click="isColorOpen = !isColorOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line"
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
                      class="text-white"
                    >
                      {{ option }}
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
            </div>
            <div class="collection-filter-block">
              <div class="collection-collapse-block">
                <div class="collapse-block-top">
                  <h3 class="collapse-block-title">Size</h3>

                  <i
                    v-if="isSizeOpen"
                    class="ri-arrow-drop-up-line"
                    @click="isSizeOpen = !isSizeOpen"
                  ></i>
                  <i
                    v-else
                    class="ri-arrow-drop-down-line"
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
                      class="text-white"
                    >
                      {{ option }}
                    </b-form-checkbox>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-9 bg-dark">
          <div>right section</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CommonSection from "~/components/Global/CommonSection.vue";
export default {
  components: { CommonSection },
  data() {
    return {
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
    };
  },
  methods: {
    changeCategory(value) {
      this.selectedCategory = value;
    },
  },
};
</script>

<style scoped>
.clothing-main {
  padding-left: 5%;
  padding-right: 5%;
}

.collection-filter-block {
  background-color: var(--primary-color);
  margin-bottom: 30px;
  border-width: 1px;
  border-style: solid;
  border-color: var(--primary-color);
  border-image: initial;
  padding: 0px 30px;
}

.collection-collapse-block {
  padding-bottom: 24px;
}

.collapse-block-top {
  position: relative;
}
.collapse-block-top i {
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  display: block;
  font-family: FontAwesome;
  position: absolute;
  right: -3px;
  top: -17px;
}

.collection-collapse-block .collapse-block-title {
  color: #fff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;

  text-transform: uppercase;
  margin: 30px 0px 0px;
}

.collection-collapse-block-content {
  max-height: 500px;
  transition-duration: 0.5s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.collection-filter-inside {
  margin-top: 30px;
  max-height: 170px;
  overflow-y: auto;
}
.collection-filter-inside .filter-list li {
  display: flex;
  font-size: 16px;
  line-height: 18px;
  text-transform: capitalize;
}
.collection-filter-inside .filter-list li {
  display: flex;
  font-size: 16px;
  line-height: 18px;
  text-transform: capitalize;
  color: #fff;
  padding-bottom: 10px;
}

.collection-filter-inside
  >>> .custom-control-input:checked
  ~ .custom-control-label::before {
  border-color: #fff !important;
  background-color: var(--primary-color) !important;
}
</style>
