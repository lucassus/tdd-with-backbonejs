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

    describe('on success', function() {
      var responseFixture = { tasks: [
          { id: 11, name: 'First task', complete: false },
          { id: 12, name: 'Second task', complete: true }
      ] };

      beforeEach(function () {
        this.server.respondWith('GET', '/tasks.json', [
            200,
            { "Content-Type": "application/json" },
            JSON.stringify(responseFixture)
        ]);

        this.tasks.fetch();
        this.server.respond();
      });

      describe('loaded tasks collection', function() {
        it('loads all tasks', function() {
          expect(this.tasks.models.length).toEqual(2);
        });

        it('parses tasks from the response', function() {
          expect(this.tasks.get(11).getName()).toEqual('First task');
          expect(this.tasks.get(11).getComplete()).toEqual(false);

          expect(this.tasks.get(12).getName()).toEqual('Second task');
          expect(this.tasks.get(12).getComplete()).toEqual(true);
        });
      });
    });
  });
});
