angular.module('TodoDirective', []).dirctive('todoTable', function() {
	return {
		restrict: 'EA', // EA -> element/attribute
		templateUrl: 'templates/directives/todo-table.html'
	};
});