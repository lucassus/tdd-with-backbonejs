TodoList.Models.Task = Backbone.Model.extend({

  defaults: {
    name: '',
    complete: false
  },

  url: function() {
    if (this.isNew()) {
      return "/tasks.json";
    } else {
      return "/tasks/" + this.id + ".json";
    }
  },

  toJSON: function() {
    return { task: this.attributes };
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
