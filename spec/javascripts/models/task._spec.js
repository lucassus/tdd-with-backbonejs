describe('TodoList.Models.Task', function() {
  it('should be defined', function() {
    expect(TodoList.Models.Task).toBeDefined();
  });

  it('can be instantiated', function() {
    var task = new TodoList.Models.Task();
    expect(task).not.toBeNull();
  });

  beforeEach(function() {
    this.task = new TodoList.Models.Task();
  });

  describe('new instance default values', function() {
    it('has default value for name', function() {
      expect(this.task.get('name')).toEqual('');
    });

    it('has default value for complete flag', function() {
      expect(this.task.get('complete')).toBeFalsy();
    });
  });

  describe('getters', function() {
    describe('#getId', function() {
      it('should be defined', function() {
        expect(this.task.getId).toBeDefined();
      });

      it('returns undefined if id is not defined', function() {
        expect(this.task.getId()).toBeUndefined();
      });

      it("otherwise returns model's id", function() {
        this.task.id = 66;
        expect(this.task.getId()).toEqual(66);
      });
    });

    describe('#getName', function() {
      it('should be defined', function() {
        expect(this.task.getName).toBeDefined();
      });

      it('returns value for the name attribute', function() {
        var stub = sinon.stub(this.task, 'get').returns('Task name');

        expect(this.task.getName()).toEqual('Task name');
        expect(stub.calledWith('name')).toBeTruthy();
      });
    });

    describe('#getComplete', function() {
      it('should be defined', function() {
        expect(this.task.getComplete).toBeDefined();
      });

      it('returns value for the complete attribute', function() {
        var stub = sinon.stub(this.task, 'get').returns(false);

        expect(this.task.getComplete()).toBeFalsy();
        expect(stub.calledWith('complete')).toBeTruthy();
      });
    });
  });

  describe('#save', function() {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
    });

    afterEach(function() {
      this.server.restore();
    });

    it('sends valid data to the server', function() {
      this.task.set({name: 'A new task to do'})
      this.task.save();
      var request = this.server.requests[0];
      var params = JSON.parse(request.requestBody);

      expect(params.task).toBeDefined();
      expect(params.task.name).toEqual('A new task to do');
      expect(params.task.complete).toBeFalsy();
    });

    describe('request', function() {
      beforeEach(function() {
        this.performRequest = function() {
          this.task.save();
          return this.server.requests[0];
        };
      });

      describe('on create', function() {
        beforeEach(function() {
          this.task.id = null;
          this.request = this.performRequest(this);
        });

        itShouldBePOST();
        itShouldBeAsync();
        itShouldHaveUrl('/tasks.json');
      });

      describe('on update', function() {
        beforeEach(function() {
          this.task.id = 66;
          this.request = this.performRequest(this);
        });

        itShouldBePUT();
        itShouldBeAsync();
        itShouldHaveUrl('/tasks/66.json');
      });
    });
  });
});
