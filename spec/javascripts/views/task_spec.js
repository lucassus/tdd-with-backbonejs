describe('TodoList.Views.Task', function () {
  it('should be defined', function() {
    expect(TodoList.Views.Task).toBeDefined();
  });

  var task, view;

  beforeEach(function () {
    task = { id: 11, getName: function() {} };
    view = new TodoList.Views.Task({ model: task });
  });

  describe('render', function() {
    it('should render the task', function() {
      sinon.mock(task).expects('getName').returns('Some task name');

      var $el = view.render().$el;

      expect($el).toBeDefined();
      expect($el).toBe('tr');

      expect($el.find('td').length).toEqual(3);
      expect($el.find('td:nth(0)')).toHaveText('#11');
      expect($el.find('td:nth(1)')).toHaveText('Some task name');
    });
  });
});
