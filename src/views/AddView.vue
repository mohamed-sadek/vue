<template>
    <div id="add-view">
        <Add></Add>

        <router-link to="/">Back to List</router-link>
    </div>
</template>

<script>
	import Add from './../components/add';

	export default {
		components: {Add},
	}
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
