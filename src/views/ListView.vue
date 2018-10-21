<template>
    <div id="list-view">
        <ToDoList :todos="$store.state.todos"></ToDoList>
        <router-link to="/add-to-do" class="link">+ Add New</router-link>
    </div>
</template>

<script>
	import ToDoList from '../components/ToDoList';

	export default {
		components: {ToDoList},
	}
</script>

<style scoped>
    .link {
        text-decoration: none;
        color: cadetblue;
        font-weight: 500;
    }
</style>
