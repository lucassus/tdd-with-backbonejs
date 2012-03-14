//= require todo_list
//= require sinon
//= require_self
//= require_tree .

window.itShouldBeGET = function() {
  it('should be POST', function() {
    expect(this.request).toBeGET();
  });
};

window.itShouldBePOST = function() {
  it('should be POST', function() {
    expect(this.request).toBePOST();
  });
};

window.itShouldBePUT = function() {
  it('should be PUT', function() {
    expect(this.request).toBePUT();
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
