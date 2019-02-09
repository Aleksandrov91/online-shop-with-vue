<template>
  <div class="title">
    <h1>This is Admin/Edit/{{$route.params.id}}</h1>
  </div>
</template>

<script>
import ProductForm from '../../components/product/ProductForm';

export default {
  created() {
    if (!this.model.name) {
      console.log('dispatched');
      this.$store.dispatch('productById', this.$route.params.id);
    }

    if (this.manufacturers.length === 0) {
      this.$store.dispatch('allManufacturers');
    }
  },
  computed: {
    manufacturers() {
      return this.$store.getters.manufacturers;
    },
    model() {
      const productById = this.$store.getters.productById(this.$route.params.id);
      return Object.assign({}, productById);
    },
  },
  methods: {
    updateProduct(model) {
      console.log('model', model);
      this.$store.dispatch('updateProduct', model);
    },
  },
  components: {
    'product-form': ProductForm,
  },
};
</script>
