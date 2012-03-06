TodoList.Views.List = Backbone.View.extend({

  template: JST['list'],

  initialize: function() {
    this.collection.on('reset', this.render, this);
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.html(this.template({ tasks: this.collection.models }));
    return this;
  }

});
