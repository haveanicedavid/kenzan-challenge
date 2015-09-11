var app = require('../app.js');

function invalidEntry (input) {
  var VALID_CHARS  = /[^.p£\d]/g;
  var ONLY_NUMBERS = /\d/;

  if (VALID_CHARS.test(input) || ! ONLY_NUMBERS.test(input)) {
    return true;
  } else {
    return false;
  }
}

app.factory("invalidEntry", function() {
  return invalidEntry;
});