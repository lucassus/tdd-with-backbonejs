TodoList.Models.Task = Backbone.Model.extend({
  defaults: {
    name: ''
  },

  url: function() {
    if (this.isNew()) {
      return '/tasks.json';
    } else {
      return '/tasks/' + this.getId() + '.json';
    }
  },

  toJSON: function() {
    return { task: this.attributes };
  },

  getId: function() {
    return this.id;
  },

  getName: function() {
    return this.get('name');
  },

  getComplete: function() {
    return this.get('complete');
  }
});
