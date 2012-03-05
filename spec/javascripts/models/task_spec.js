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

  describe('#getName', function() {
    it('should be defined', function() {
      expect(task.getName).toBeDefined();
    });

    it('should return task id', function() {
      stub = sinon.stub(task, 'get').returns('Task name');

      expect(task.getName()).toEqual('Task name');
      expect(stub.calledWith('name')).toBeTruthy();
    });
  });

  describe('#getComplete', function() {
    it('should be defined', function() {
      expect(task.getComplete).toBeDefined();
    });

    it('should return task id', function() {
      stub = sinon.stub(task, 'get').returns(false);

      expect(task.getComplete()).toEqual(false);
      expect(stub.calledWith('complete')).toBeTruthy();
    });
  });

  describe('validations', function() {
    it('should validate presence of name', function() {
      var invalidNames = [null, ""];
      _.each(invalidNames, function(invalidName) {
          spy = sinon.spy();
          task.set({ name: invalidName }, { error: spy });
          expect(spy.calledWith(task, "Task name can't be blank")).toBeTruthy();
      });

      spy = sinon.spy();
      task.set({ name: 'Valid name' }, { error: spy });
      expect(spy.called).toBeFalsy();
    });
  });

});