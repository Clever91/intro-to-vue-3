app.component('review-form', {
    template:
    /*html*/
    `<form class="review-form" @submit.prevent="onSubmit">
        <h3>Leave a review </h3>
        <label for="name">Name: </label>
        <input type="text" id="name" v-model="name">

        <label for="review">Review:</label>
        <textarea id="review" cols="30" rows="10" v-model="review"></textarea>

        <label for="rating"></label>
        <select id="rating" v-model.number="rating">
            <option>5</option>
            <option>4</option>
            <option>3</option>
            <option>2</option>
            <option>1</option>
        </select>

        <input type="submit" class="button" value="Submit">
    </form>`,
    data: function () {
        return {
            name: '',
            review: '',
            rating: null
        }   
    },
    methods: {
        onSubmit() {
            console.log(this.name, this.review, this.rating)
            this.$emit('review-submitted', {
                name: this.name,
                review: this.review,
                rating: this.rating
            })
            this.name = ''
            this.review = ''
            this.rating = null
        }
    }
})