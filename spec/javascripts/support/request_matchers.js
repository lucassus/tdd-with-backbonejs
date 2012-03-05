beforeEach(function() {
  this.addMatchers({
    toHaveMethod: function(expected) {
      var actual = this.actual.method;
      this.message = function() { return "Expected request to be " + expected + " but was " + actual };
      return actual === expected;
    }
  });
});
