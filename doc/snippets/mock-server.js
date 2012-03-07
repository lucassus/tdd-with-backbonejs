var server;

beforeEach(function () {
    server = sinon.fakeServer.create();

    var fixtures = {};

      server.respondWith('POST', '/tasks.json',
          [
            200,
            { "Content-Type": "application/json" },
            JSON.stringify(fixtures)
          ]
      );
});

afterEach(function() {
    server.restore();
});

it('should do something via ajax', function() {
    collection.fetch();
    server.respond();
    // some expectations here
});
