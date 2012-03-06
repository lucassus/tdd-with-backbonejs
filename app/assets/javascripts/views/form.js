TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click submit.button': 'submit'
  },

  submit: function(event) {
    event.preventDefault();
  }

});
