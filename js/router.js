Todos.Router.map(function() {
	this.resource('todos', { path: '/' }, function() {
		// additional child routes will go there later
		this.route('active');
		this.route('completed');
	});
});

Todos.TodosRoute = Ember.Route.extend({
	model: function() {
		return this.store.find('todo');
	}
});

Todos.TodosActiveRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo){
			return !todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller){
		this.render('todos/index', {controller: controller});
	}
});

Todos.TodosCompletedRoute = Ember.Route.extend({
	model: function() {
		return this.store.filter('todo', function(todo) {
			return todo.get('isCompleted');
		});
	},
	renderTemplate: function(controller) {
		this.render('todos/index', {controller: controller});
	}
});