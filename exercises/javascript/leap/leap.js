//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function() {};

Year.prototype.isLeap = function(input) {
//
// YOUR CODE GOES HERE
//
if (input/4) {
    if (input/400 == 0 && input/100) {
        return true
    } else {
        return false
    }
} else {
    return false
}

};

module.exports = Year;
