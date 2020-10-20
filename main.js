const app = Vue.createApp({
    data: function() {
        return {
            cart: {
                count: 0,
                items: []
            },
            premium: true
        }
    },
    methods: {
        updateCart(variant, quantity)
        {
            this.cart.count += quantity;
            if (quantity > 0) {
                this.cart.items.push(variant);
            } else if (quantity < 0) {
                // this.cart.items.
            }
        }
    },
    computed: {}
})
