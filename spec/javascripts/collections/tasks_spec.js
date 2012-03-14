describe('TodoList.Collections.Tasks', function() {
  it('should be defined', function() {
    expect(TodoList.Collections.Tasks).toBeDefined();
  });

  it('can be instantiated', function() {
    var tasks = new TodoList.Collections.Tasks();
    expect(tasks).not.toBeNull();
  });

  beforeEach(function () {
    this.tasks = new TodoList.Collections.Tasks();
  });

  describe('#fetch', function() {
    beforeEach(function () {
      this.server = sinon.fakeServer.create();
    });

    afterEach(function() {
      this.server.restore();
    });

    describe('request', function() {
      beforeEach(function () {
        this.tasks.fetch();
        this.request = this.server.requests[0];
      });

      itShouldBeGET();
      itShouldBeAsync();
      itShouldHaveUrl('/tasks.json');
    });
  });
});
