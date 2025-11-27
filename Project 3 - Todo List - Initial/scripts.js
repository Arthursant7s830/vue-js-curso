var todos = [

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
                };
                window.localStorage.setItem("todos", JSON.stringify(this.todo));
            } else {
                alert("To-do text is required!");
            }
        }
    },
    created() {
        this.todo = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : this.todo;
    },

    updated() {
        localStorage.setItem("todos", JSON.stringify(this.todo));
        console.log('updated')

    }
}

Vue.createApp(todoApp).mount('#app');