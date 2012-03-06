//= require jquery
//= require jquery_ujs
//= require underscore
//= require backbone

//= require_self

//= require_tree ../templates
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
    new TodoList.Views.Form({ el: $form, collection: collection });

    var list = new TodoList.Views.List({ collection: collection });
    $('#tasks-list').html(list.render().el);

    collection.fetch();
  }
};
