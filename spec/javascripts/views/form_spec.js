describe('TodoList.Views.Form', function() {

  it('should be defined', function() {
    expect(TodoList.Views.Form).toBeDefined();
  });

  var view;

  beforeEach(function() {
    view = new TodoList.Views.Form();
  });

  describe('events', function() {
    it('should handle click event on submit button', function() {
      expect(view.events['click submit.button']).toEqual('submit');
    });
  });

  describe('#submit', function() {
    it('should be defined', function() {
      expect(view.submit).toBeDefined();
    });

    it('should prevent default action', function() {
      var event = { preventDefault: function() {} };
      mock = sinon.mock(event).expects('preventDefault').once();
      view.submit(event);
      mock.verify();
    });
  });

});
