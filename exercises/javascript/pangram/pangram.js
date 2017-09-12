(function () {
  module.exports = function (str) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var len = alphabet.length;

    this.isPangram = function () {
      str = str.toLowerCase();
      for (var i = 0; i < len; i++) {
        if (!str.includes(alphabet[i])) {
          return false;
        }
      }
      return true;
    }
  };
})();