describe('TodoList.Models.Task', function() {

  it('should be defined', function() {
    expect(TodoList.Models.Task).toBeDefined();
  });

  it('should have correct default values', function() {
    var task = new TodoList.Models.Task();

    expect(task.id).toBeUndefined();
    expect(task.get('name')).toEqual('');
    expect(task.get('complete')).toBeFalsy();
  });

});
