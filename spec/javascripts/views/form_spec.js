describe('TodoList.Views.Form', function() {

  it('should be defined', function() {
    expect(TodoList.Views.Form).toBeDefined();
  });

  var view, $formFixture;

  beforeEach(function() {
    loadFixtures('form-fixture.html');
    $formFixture = $('#form-fixture');

    view = new TodoList.Views.Form({ el: $formFixture });
  });

  describe('events', function() {
    it('should handle click event on submit button', function() {
      expect(view.events['click submit.button']).toEqual('submit');
    });
  });

  describe('#getAttributes', function () {
    it('should be defined', function() {
      expect(view.getAttributes).toBeDefined();
    });

    it('should return valid attributes', function () {
      $formFixture.find('input').val('Do something');
      var attributes = view.getAttributes();

      expect(attributes).toBeDefined();
      expect(attributes.name).toBeDefined();
      expect(attributes.name).toEqual('Do something');
    });
  });

  describe('#submit', function() {
    it('should be defined', function() {
      expect(view.submit).toBeDefined();
    });

    it('should prevent default action', function() {
      var event = { preventDefault: function() {} };
      var mock = sinon.mock(event).expects('preventDefault').once();
      view.submit(event);
      mock.verify();
    });
  });

});
