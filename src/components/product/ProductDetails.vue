<template>
  <div class="container">
    <img :src="product.image" class="img-fluid">
    <h3>{{product.name}}</h3>
    <p>{{product.description}}</p>
    <div class="form-inline">
      <div>{{product.price}}</div>
      <product-buton :product="product"></product-buton>
    </div>
  </div>
</template>

<script>
import ProductButton from './ProductButton';

export default {
  props: ['product'],
  components: {
    'product-buton': ProductButton,
  },
};
</script>

