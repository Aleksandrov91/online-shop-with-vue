<template>
  <div v-if="cart.length > 0">
    <h1>Your Cart</h1>
    <template v-for="product in products">
      <product-details :key="product.id" :product="product"></product-details>
    </template>
  </div>
  <div v-else>
    <h1>Your Cart is empty.</h1>
  </div>
</template>

<script>
import ProductDetails from '../components/product/ProductDetails';

export default {
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  components: {
    'product-details': ProductDetails,
  },
};
</script>
