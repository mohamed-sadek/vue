<template>
    <li class="to-do-item"  v-bind:class="{'is-done': todo.status}">
        <input type="checkbox" @change="changeStatus(todo)" />
        <label>{{ todo.text }}</label>
        <button class="delete-done" v-if="todo.status" type="button" @click="deleteTodo(todo)">Delete</button>
    </li>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
    	name: 'ToDoItem',
        props: {
    		todo: Object,
        },
        methods: {
	        ...mapActions(['changeStatus', 'deleteTodo'])
        },
    }
</script>

<style scoped>
    .to-do-item {
        list-style:  none;
        display: flex;
        align-items: center;
        margin: 4px 0;
        padding: 0;
    }

    label {
        padding-left: 8px;
    }

    .is-done label {
        color: green;
        text-decoration: line-through;
    }

    .delete-done {
        text-decoration: none;
    }


</style>