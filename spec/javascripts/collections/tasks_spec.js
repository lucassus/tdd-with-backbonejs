describe('TodoList.Collections.Tasks', function() {
  it('should be defined', function() {
    expect(TodoList.Collections.Tasks).toBeDefined();
  });

  it('can be instantiated', function() {
    var tasks = new TodoList.Collections.Tasks();
    expect(tasks).not.toBeNull();
  });
});
