TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click submit.button': 'submit'
  },

  submit: function(event) {
    event.preventDefault();

    var attributes = this.getAttributes();
  },

  getAttributes: function() {
    return {
      name: this.$("input[name='task[name]']").val()
    };
  }
});
