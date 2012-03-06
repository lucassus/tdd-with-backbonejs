TodoList.Views.Task = Backbone.View.extend({

  template: JST['task'],
  tagName: 'tr',

  render: function() {
    this.$el.html(this.template({ task: this.model }));
    return this;
  }

});
