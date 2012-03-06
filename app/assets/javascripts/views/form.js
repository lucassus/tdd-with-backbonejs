TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click button.submit': 'submit'
  },

  submit: function(event) {
    if (event) event.preventDefault();

    var attributes = this.getAttributes();

    var self = this;
    this.collection.create(attributes, {
      success: function() {
        self.$("input[name='task[name]']").val('');
      },
      error: function(task, response) {
        var errors = JSON.parse(response.responseText).errors;
        if (errors.name) {
          alert("Task name " + errors.name);
        }
      }
    });
  },

  getAttributes: function() {
    return {
      name: this.$("input[name='task[name]']").val()
    };
  }
});
