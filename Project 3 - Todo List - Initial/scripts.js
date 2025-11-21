var todos = [
    {
        text: 'Aprender HTML, CSS e Javascript',
        done: true
    },

    {
        text: 'Aprender o básico de Vue JS',
        done: false
    }
]

const todoApp = {
    data() {
        return {
            todo: window.todos
        }
    }
}

Vue.createApp(todoApp).mount('#app')