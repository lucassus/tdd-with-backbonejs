TodoList.Models.Task = Backbone.Model.extend({

  defaults: {
    name: '',
    complete: false
  },

  validate: function(attrs) {
    if (attrs.name === null || attrs.name === "") return "Task name can't be blank";
  },

  getName: function() {
    return this.get('name');
  },

  getComplete: function() {
    return this.get('complete');
  }

});
