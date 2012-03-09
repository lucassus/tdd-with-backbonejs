describe('TodoList.Models.Task', function() {

  it('should be defined', function() {
    expect(TodoList.Models.Task).toBeDefined();
  });

  var task;

  beforeEach(function() {
    task = new TodoList.Models.Task();
  });

  it('should have correct default values', function() {
    expect(task.id).toBeUndefined();
    expect(task.get('name')).toEqual('');
    expect(task.get('complete')).toBeFalsy();
  });

  describe('#getId', function() {
    it('should be defined', function() {
      expect(task.getId).toBeDefined();
    });

    it('should return task id', function () {
      var stub = sinon.stub(task, 'get').returns(11);

      expect(task.getId()).toEqual(11);
      expect(stub.calledWith('id')).toBeTruthy();
    });
  });

  describe('#getName', function() {
    it('should be defined', function() {
      expect(task.getName).toBeDefined();
    });

    it('should return task name', function() {
      var stub = sinon.stub(task, 'get').returns('Task name');

      expect(task.getName()).toEqual('Task name');
      expect(stub.calledWith('name')).toBeTruthy();
    });
  });

  describe('#getComplete', function() {
    it('should be defined', function() {
      expect(task.getComplete).toBeDefined();
    });

    it('should return task id', function() {
      var stub = sinon.stub(task, 'get').returns(false);

      expect(task.getComplete()).toEqual(false);
      expect(stub.calledWith('complete')).toBeTruthy();
    });
  });

  describe('#save', function() {
    var server = null;

    beforeEach(function() {
      server = sinon.fakeServer.create();
    });

    afterEach(function() {
      server.restore();
    });

    it('should send valid data', function() {
      task.save({name: 'New task to do'});
      var request = server.requests[0];

      var params = JSON.parse(request.requestBody);
      expect(params.task).toBeDefined();
      expect(params.task.name).toEqual('New task to do');
      expect(params.task.complete).toBeFalsy();
    });

    describe('request', function() {
      beforeEach(function() {
        task.set({ name: 'New task to do' });
      });

      describe('on create', function() {
        beforeEach(function() {
          task.set({ id: null });
          task.save();
          this.request = server.requests[0];
        });

        itShouldBePOST();
        itShouldBeAsync();
        itShouldHaveUrl('/tasks.json');
      });

      describe('on update', function() {
        beforeEach(function() {
          task.id = 66;
          task.save();
          this.request = server.requests[0];
        });

        itShouldBePUT();
        itShouldBeAsync();
        itShouldHaveUrl('/tasks/66.json');
      });
    });
  });

});
