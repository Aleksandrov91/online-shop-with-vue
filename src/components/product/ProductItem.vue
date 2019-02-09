<template>
<router-link :to="'/details/' + product._id" class="card" style="width: 18rem;">
    <img class="card-img-top" :src="product.image" alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">{{product.name}}</h5>
      <h5 class="card-title">{{product.price}}</h5>
      <a href="#" class="col-md-12 btn btn-primary">Add to Card</a>
    </div>
  </router-link>
</template>

<script>
import ProductButton from './ProductButton';

export default {
  name: 'product-item',
  props: ['product'],
  components: {
    'product-button': ProductButton,
  },
};
</script>
