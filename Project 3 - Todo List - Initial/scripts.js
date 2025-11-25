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
    beforeCreate() {
        console.log(this.newTodo)
    },
   Created() {
        console.log(this.newTodo)
    }
}

Vue.createApp(todoApp).mount('#app');