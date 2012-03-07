beforeEach(function() {
  this.addMatchers({
    toHaveMethod: function(expected) {
      var actual = this.actual.method;
      this.message = function() { return "Expected request to be " + expected + " but was " + actual };
      return actual === expected;
    },

    toBeAsync: function() {
      var actual = this.actual.async;
      this.message = function() { return "Expected request to be async" };
      return actual;
    },

    toHaveUrl: function(expected) {
      var actual = this.actual.url;
      this.message = function() { return "Expected request to have url " + expected + " but was " + actual };
      return actual === expected;
    }
  });
});
