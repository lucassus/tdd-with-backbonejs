TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click submit.button': 'submit'
  },

  submit: function(event) {
    if (event) event.preventDefault();

    var attributes = this.getAttributes();
    this.collection.create(attributes);
  },

  getAttributes: function() {
    return {
      name: this.$("input[name='task[name]']").val()
    };
  }
});
