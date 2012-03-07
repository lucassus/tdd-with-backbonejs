describe('TodoList.Collections.Tasks', function() {

  it('should be defined', function() {
    expect(TodoList.Collections.Tasks).toBeDefined();
  });

  var tasks;

  beforeEach(function() {
    tasks = new TodoList.Collections.Tasks();
  });

  describe('#fetch', function() {
    var server = null;
    beforeEach(function() {
      server = sinon.fakeServer.create();
    });

    afterEach(function() {
      server.restore();
    });

    describe('request', function() {
      var request;
      beforeEach(function() {
        tasks.fetch();
        request = server.requests[0];
      });

      it('should be GET', function() {
        expect(request).toHaveMethod('GET');
      });

      it('should be async', function() {
        expect(request).toBeAsync();
      });

      it('should have valid url', function() {
        expect(request).toHaveUrl('/tasks.json')
      });
    });

    describe('on success', function() {
      beforeEach(function() {
        var fixtures = { tasks: [
            { id: 11, name: 'First task', complete: false },
            { id: 12, name: 'Second task', complete: true }
          ] };

        server.respondWith('GET', '/tasks.json',
          [
            200,
            { "Content-Type": "application/json" },
            JSON.stringify(fixtures)
          ]
        );

        tasks.fetch();
      });

      it('should parse tasks from the response', function() {
        server.respond();

        expect(tasks.models.length).toEqual(2);
        expect(tasks.get(11).getName()).toEqual('First task');
        expect(tasks.get(11).getComplete()).toEqual(false);
        expect(tasks.get(12).getName()).toEqual('Second task');
        expect(tasks.get(12).getComplete()).toEqual(true);
      });
    });
  });

});
