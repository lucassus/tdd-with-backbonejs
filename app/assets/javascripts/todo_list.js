//= require_self
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views

window.TodoList = {
  Models: {},
  Collections: {},
  Views: {},

  initialize: function() {
    console.log('Initializing TodoList app..');
    var collection = new TodoList.Collections.Tasks();

    var $form = $('form#new-task-form');
    var formView = new TodoList.Views.Form({ el: $form, collection: collection });

    collection.fetch();
  }
};
