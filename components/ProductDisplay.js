app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: 
    /*html*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image" :alt="desc" :class="{'out-of-stock-img': !inStock}">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p>{{ desc }}</p>
                <p>Shipping: {{ shipping }}</p>
                <p v-if="inStock">In Stock ({{ quantityInStock }})</p>
                <p v-else>Out Stock ({{ quantityInStock }})</p>
                <p v-show="onSale">On Sale</p>
                <product-details :items="details"></product-details>
                <div v-for="(variant, index) in variants" v-on:mouseover="updateVariant(index)"
                v-bind:style="{backgroundColor: variant.color}" class="color-circle"></div>
                <div v-for="item in sizes" :key="item.id"><b>Size:</b> {{ item.size }}</div>
                <button class="button" @click="addToCart" v-bind:disabled="!inStock" :class="{disabledButton: !inStock}">Add</button> 
                <button class="button" @click="removeToCart" v-bind:disabled="!inStock" :class="{disabledButton: !inStock}">Decrement</button> 
            </div>
        </div>

        <review-list v-if="reviews.length" :reviews="reviews"></review-list>

        <review-form @review-submitted="addReview"></review-form>
    </div>`,
    data: function() {
        return {
            cart: 0,
            product: 'Socks',
            band: 'Vue Mastery',
            desc: "This is description",
            selectedIndex: 0,
            onSale: true,
            details: ["50% cotton", "30% wool", "20% polyester"],
            variants: [
                {id: 2223, color: "green", image: "./assets/images/socks_green.jpg", quantity: 0},
                {id: 2224, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 65},
            ],
            sizes: [
                {id: 1122, size: 45},
                {id: 1123, size: 46}
            ],
            reviews: []
        }
    },
    methods: {
        addToCart() {
            this.$emit('update-to-cart', this.variants[this.selectedIndex], 1)
        },
        removeToCart()
        {
            this.$emit('update-to-cart', this.variants[this.selectedIndex], -1)
        },
        updateVariant(index) {
            this.selectedIndex = index
        },
        addReview(review) {
            this.reviews.push(review)
        }
    },
    computed: {
        title() {
            return this.band + " " + this.product + (this.onSale ? ' is on sale' : '')
        },
        image() {
            return this.variants[this.selectedIndex].image
        },
        inStock() {
            return this.variants[this.selectedIndex].quantity
        },
        quantityInStock() {
            return this.variants[this.selectedIndex].quantity
        },
        shipping() {
            if (this.premium)
                return "Free";
            return 9.99
        }
    }
})