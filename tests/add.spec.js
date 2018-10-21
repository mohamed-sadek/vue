import { shallowMount,createLocalVue } from '@vue/test-utils'
import Add from './../src/components/add';
import Vuex from 'vuex'
const localVue = createLocalVue();
localVue.use(Vuex);

describe('Add.vue', () => {
	let store;
	let actions;
	let state = {
		todos: []
	};

	actions = {
		addTodo: jest.fn()
	};
	store = new Vuex.Store({
		state,
		actions
	});

	const wrapper = shallowMount(Add, {
		propsData: {
			todoText: '',
			errors: []
		},
		store,
		localVue
	});

	it('renders an input field', () => {
		expect(wrapper.find('input')).toBeDefined();
	});

	it('Should throw an error if submitted with an empty input', () => {
		wrapper.find('form').trigger('submit');
		expect(wrapper.vm.errors.length).toBe(1);

	});

	it('Should update value when entered through input', () => {
		const toDoText = 'A New To-Do';

		wrapper.find('input').setValue(toDoText);
		wrapper.find('form').trigger('submit');
		expect(wrapper.vm.errors.length).toBe(0);
		expect(wrapper.vm.todoText).toBe(toDoText);

	});
});