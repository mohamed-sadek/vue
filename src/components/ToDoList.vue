<template>
    <ul class="to-do-list">
        <ToDoItem v-for="todo in todos" :key="todo.id" :todo="todo"></ToDoItem>
    </ul>
</template>

<script>
    import ToDoItem from './ToDoItem';

	export default {
		name: 'ToDoList',
        components: {
			ToDoItem
        },
		props: {
			todos: Array
		}
	}
</script>

<style scoped>
    .to-do-list {
        margin: 0;
        padding: 16px;
        background: #cbf7ff;
        border-radius: 4px;
    }

</style>
