import { productGetters, manufacturerGetters } from './getters'

export default new Vuex.Store({
    strict: true,
    state: {
        // bought items
        cart: [],
        // ajax loader
        showLoader: false,
        // selected product
        product: {},
        // all products
        products: [],
        // all manufacturers
        manufacturers: []
    },

    getters: Object.assign({}, productGetters, manufacturerGetters)
})