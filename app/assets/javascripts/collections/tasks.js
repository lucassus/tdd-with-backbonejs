TodoList.Collections.Tasks = Backbone.Collection.extend({
    url: '/tasks.json',
    model: TodoList.Models.Task,

    parse: function(response) {
        return response.tasks;
    }
});
