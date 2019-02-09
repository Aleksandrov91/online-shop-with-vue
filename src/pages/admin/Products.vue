<template>
  <div class="table-responsive">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.7.1/css/all.css"
      integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr"
      crossorigin="anonymous"
    >
    <table class="table table-striped">
      <thead>
        <th scope="row">Name</th>
        <th scope="row">Price</th>
        <th scope="row">Manufacturer</th>
        <th scope="row"></th>
        <th scope="row"></th>
      </thead>
      <tbody>
        <tr v-for="product in products" v-bind:key="product._id">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.manufacturer}}</td>
          <td>
            <router-link :to="'/admin/edit' + product._id">
              <i class="fas fa-edit"></i>
            </router-link>
          </td>
          <td :key="product._id">
            <a @click="deleteProduct(product._id)">
              <i class="fa fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  computed: {
    products() {
      return this.$store.getters.allProducts;
    },
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch('allProducts');
    }
  },
  methods: {
    deleteProduct(id) {
      this.$store.dispatch('removeProduct', id);
    },
  },
};
</script>
