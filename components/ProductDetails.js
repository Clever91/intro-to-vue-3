app.component('product-details', {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    template: 
    /*html*/
    `<ul>
    <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    computed: {
        details() {
            return this.items;
        }
    }
})