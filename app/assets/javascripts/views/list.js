TodoList.Views.List = Backbone.View.extend({

  template: JST['list'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.appendTask, this);
  },

  render: function() {
    this.$el.html(this.template());

    var self = this;
    this.collection.each(function(task) {
      self.appendTask(task);
    });

    return this;
  },

  appendTask: function(task) {
    var view = new TodoList.Views.Task({ model: task });
    this.$('table tbody').append(view.render().el);
  }

});
