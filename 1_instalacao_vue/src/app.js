const MyNameApp = {
    data() {
        return {
            name: "Marcos",
            age: 26,
            input_name: ""
        }
    },
    methods: {
        submitForm(e) {
            e.preventDefault();
        }
    }
}

Vue.createApp(MyNameApp).mount("#app");