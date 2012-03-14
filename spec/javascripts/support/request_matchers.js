beforeEach(function() {
  this.addMatchers({
    toBeGET: function() {
      var actual = this.actual.method;
      return actual === 'GET';
    },
    toBePOST: function() {
      var actual = this.actual.method;
      return actual === 'POST';
    },
    toBePUT: function() {
      var actual = this.actual.method;
      return actual === 'PUT';
    },
    toHaveUrl: function(expected) {
      var actual = this.actual.url;
      this.message = function() {
        return "Expected request to have url " + expected + " but was " + actual
      };
      return actual === expected;
    },
    toBeAsync: function() {
      var actual = this.actual.async;
      return actual;
    }
  });
});


