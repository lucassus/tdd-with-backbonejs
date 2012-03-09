describe('TodoList.Views.List', function () {

  it('should be defined', function() {
    expect(TodoList.Views.List).toBeDefined();
  });

  var collection, view;

  beforeEach(function () {
    collection = new Backbone.Collection();
    view = new TodoList.Views.List({ collection: collection });
  });

  describe('collection', function () {
    var event = { preventDefault: function() {} };

    describe('on reset event', function () {
      it('should call render', function() {
        var spy = sinon.spy(collection, 'on');
        view.initialize();

        expect(spy.called).toBeTruthy();
        expect(spy.calledWith(event, view.render, view));
      });
    });

    describe('on add event', function () {
      it('should call render', function() {
        var spy = sinon.spy(collection, 'on');
        view.initialize();

        expect(spy.called).toBeTruthy();
        expect(spy.calledWith(event, view.appendTask, view));
      });
    });
  });

  describe('#render', function() {
    it('should render tasks', function() {
      var tasks = [
        new TodoList.Models.Task({id: 11, name: 'First task', complete: true}),
        new TodoList.Models.Task({id: 12, name: 'Second task', complete: false})
      ];

      collection.models = tasks;

      var $el = view.render().$el;

      expect($el).toContain('table.table.table-striped');
      expect($el.find('tr').length).toEqual(tasks.length);

      expect($el.find('tr:nth(0) td:nth(1)')).toHaveText('First task');
      expect($el.find('tr:nth(1) td:nth(1)')).toHaveText('Second task');
    });
  });

});
