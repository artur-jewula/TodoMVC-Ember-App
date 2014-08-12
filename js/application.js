window.Todos = Ember.Application.create();
Todos.ApplicationAdapter = DS.LSAdapter.extend({
	namespace: 'todos-ember.js'
})