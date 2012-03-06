describe('TodoList.Views.Form', function() {

  it('should be defined', function() {
    expect(TodoList.Views.Form).toBeDefined();
  });

  var view, $formFixture, collection;

  beforeEach(function() {
    loadFixtures('form-fixture.html');
    $formFixture = $('#form-fixture');
    collection = new TodoList.Collections.Tasks();

    view = new TodoList.Views.Form({ el: $formFixture, collection: collection });
  });

  describe('events', function() {
    it('should handle click event on submit button', function() {
      expect(view.events['click button.submit']).toEqual('submit');
    });
  });

  describe('#getInputFor', function () {
    it('should return form input for given name', function () {
      expect(view.getInputFor('name')).toBe($formFixture.find('input'));
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

    var server;
    beforeEach(function () {
      server = sinon.fakeServer.create();
    });

    afterEach(function() {
      server.restore();
    });

    it('should prevent default action', function() {
      var event = { preventDefault: function() {} };
      var mock = sinon.mock(event).expects('preventDefault').once();
      view.submit(event);
      mock.verify();
    });

    describe('sent request', function () {
      it('should send valid attributes to the server', function () {
        $formFixture.find('input').val('New task name');
        view.submit();

        var request = server.requests[0];
        expect(request).toHaveMethod('POST');
        expect(request).toHaveUrl('/tasks.json');

        var attributes = JSON.parse(request.requestBody);

        expect(attributes.task).toBeDefined();
        expect(attributes.task.name).toBeDefined();
        expect(attributes.task.name).toEqual('New task name');
      });
    });

    describe('on success', function () {
      beforeEach(function () {
        var fixtures = {};
        server.respondWith('POST', '/tasks.json',
            [
              200,
              { "Content-Type":"application/json" },
              JSON.stringify(fixtures)
            ]
        );
      });

      it('should clear the form input', function () {
        var $nameInput = $formFixture.find('input');
        $nameInput.val('New task name');

        view.submit();
        expect($nameInput).toHaveValue('New task name');

        server.respond();
        expect($nameInput).toHaveValue('');
      });
    });

    describe('on error', function () {
      beforeEach(function () {
        server.respondWith('POST', '/tasks.json',
            [
              422,
              { "Content-Type":"application/json" },
              JSON.stringify({ errors: { name: "can't be blank" } })
            ]
        );
      });

      it('should display validation messages', function () {
        var $nameInput = $formFixture.find('input');
        $nameInput.val('');

        var mock = sinon.mock(window).expects('alert').withArgs("Task name can't be blank");

        view.submit();
        server.respond();

        mock.verify();
      });
    });
  });

});
