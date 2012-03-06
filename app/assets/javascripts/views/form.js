TodoList.Views.Form = Backbone.View.extend({

  events: {
    'click submit.button': 'submit'
  },

  submit: function(event) {
    if (event) event.preventDefault();

    var attributes = this.getAttributes();

    var self = this;
    this.collection.create(attributes, {
      success: function() {
        self.$("input[name='task[name]']").val('');
      }
    });
  },

  getAttributes: function() {
    return {
      name: this.$("input[name='task[name]']").val()
    };
  }
});
