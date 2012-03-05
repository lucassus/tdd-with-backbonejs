TodoList.Models.Task = Backbone.Model.extend({

  defaults: {
    name: '',
    complete: false
  },

  getName: function() {
    return this.get('name');
  },

  getComplete: function() {
    return this.get('complete');
  }

});
