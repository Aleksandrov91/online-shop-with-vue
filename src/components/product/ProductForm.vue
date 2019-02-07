<template>
  <form @submit.prevent="saveProduct">
    <div class="form-group">
      <label>Name</label>
      <input
        type="text"
        placeholder="Name"
        class="form-control"
        v-model="model.name"
        v-validate="'required'"
        name="name"
      >
    </div>

    <div class="form-group">
      <label>Price</label>
      <input
        type="number"
        placeholder="Price"
        class="form-control"
        v-model="model.price"
        v-validate="'required'"
        name="price"
      >
    </div>

    <div class="form-group">
      <label>Manufacturer</label>
      <select type="text" class="form-control" v-model="model.manufacturer" name="manufacturer">
        <template v-for="manufacturer in manufacturers">
          <option
            :key="manufacturer._id"
            :value="manufacturer.name"
            :selected="manufacturer._id == (model.manufacturer && model.manufacturer._id)"
          >{{manufacturer.name}}</option>
        </template>
      </select>
    </div>

    <div class="form-group">
      <label>Image</label>
      <input
        type="text"
        placeholder="Image"
        class="form-control"
        v-model="model.image"
        v-validate="'required'"
        name="image"
      >
    </div>

    <div class="form-group">
      <label>Description</label>
      <input
        type="text"
        placeholder="Description"
        class="form-control"
        v-model="model.description"
        v-validate="'required'"
        name="description"
      >
    </div>

    <button class="btn btn-primary">
      <i class="fa fa-pencil"></i>
      <!-- Conditional rendering for input text -->
      <span v-if="isEditing">Update Product</span>
      <span v-else>Add Product</span>
    </button>
  </form>
</template>

<script>
export default {
  props: ['model', 'manufacturers', 'isEditing'],
  methods: {
    saveProduct() {
      this.$emit('save-product', this.model);
    }
  }
};
</script>

<style>
.form-control.error {
  border-color: #ff3333;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(255, 71, 71, 0.6);
}
</style>
