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
  });

});
