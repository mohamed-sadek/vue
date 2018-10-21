<template>
    <form @submit="checkForm">
        <div v-if="errors.length">
            <b>Please correct the following error(s):</b>
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
        </div>

        <input type="text" v-model="todoText" placeholder="Add New Todo" />
        <button type="submit">Add</button>
    </form>
</template>

<script>
    export default {
    	name: 'addTodo',
        data: () => {
    		return {
    			todoText: '',
                errors: []
            }
        },
        methods: {
    		checkForm () {
                if (!this.todoText) {
                	this.errors.push('Please Enter a Todo!');
                } else {
                	this.errors = [];
                }

                if (!this.errors.length) {
                    this.addTodo();
                }
            },
            addTodo () {
            	this.$store.dispatch('addTodo', this.todoText).then(() => {
		            // this.$router.push({name: 'list'}); // Disabled for the sake of testing
                }).catch((error) => {
                	console.log(error);
                });
            },
        },
    }
</script>

<style scoped>

</style>