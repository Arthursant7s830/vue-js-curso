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
            todo: window.todos,
            newTodo: {
                done: false
            } 
        }
    },
    methods: {
        addTodo: function () {
            if (this.newTodo.text) {

                this.todo.push(this.newTodo)
                this.newTodo = {
                    done: false
                }
            } else {
                alert("To-do text is required!")
            }
        }
    }
}

Vue.createApp(todoApp).mount('#app')