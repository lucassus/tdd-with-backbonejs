TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click button.submit': 'submit'
  },

  initialize: function() {
    this.collection.on('add', this.resetForm, this);
  },

  submit: function(event) {
    if (event) event.preventDefault();

    var attributes = this.getAttributes();
    var task = new TodoList.Models.Task(attributes);
    task.on('error', this.handleErrors, this);

    this.collection.create(task, { wait: true });
  },

  resetForm: function() {
    this.getInputFor('name').val('');
  },

  handleErrors: function(task, response) {
    var errors = JSON.parse(response.responseText).errors;
    if (errors.name) {
      alert("Task name " + errors.name);
    }
  },

  getAttributes: function() {
    return {
      name: this.getInputFor('name').val()
    };
  },

  getInputFor: function(name) {
    return this.$("input[name='task[" + name + "]']");
  }
});
