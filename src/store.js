import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		todos: [
			{
				text: 'Item 1',
				status: false
			},
			{
				text: 'Item 2',
				status: false
			}
		]
	},
	mutations: {
		ADD_TODO(state, todo) {
			state.todos.push({
				text: todo,
				status: false
			});
		},

		CHANGE_STATUS(state, todo) {
			todo.status = !todo.status;
		},

		DELETE_TODO(state, todo) {
		 	let todos = state.todos;
		 	todos.splice(todos.indexOf(todo), 1);
		}
	},
	actions: {
		addTodo({commit}, todo) {
			commit('ADD_TODO', todo);
		},
		changeStatus({commit}, todo) {
			commit('CHANGE_STATUS', todo);
		},

		deleteTodo({commit}, todo) {
			commit('DELETE_TODO', todo);
		}
	}
})
