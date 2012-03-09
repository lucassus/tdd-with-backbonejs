//= require todo_list
//= require sinon

//= require_self
//= require_tree .

window.itShouldBePOST = function() {
  it('should be POST', function() {
    expect(this.request).toHaveMethod('POST');
  });
};

window.itShouldBePUT = function() {
  it('should be PUT', function() {
    expect(this.request).toHaveMethod('PUT');
  });
};

window.itShouldBeAsync = function() {
  it('should be async', function() {
    expect(this.request).toBeAsync();
  });
};

window.itShouldHaveUrl = function(url) {
  it('should have url ' + url, function() {
    expect(this.request).toHaveUrl(url);
  });
};
