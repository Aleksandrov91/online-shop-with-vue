<template>
  <div>
    <template v-for="product in products">
      <product-item :product="product" :key="product.id"></product-item>
    </template>
  </div>
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
  name: "product-list",
  created() {
    if (this.products.length === 0) {
      console.log(this.$store);
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    products() {
      return this.$store.getters.allProducts;
    }
  },
  components: {
    "product-item": ProductItem
  }
};
</script>