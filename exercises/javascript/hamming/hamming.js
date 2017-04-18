var Hamming = function() {};

Hamming.prototype.compute = function(a, b) {
    var difference = 0;
    if (a.length != b.length){
        new Error("Hamming Length can only be determined with strings of the same length");
    } else {
        var i;
        while(i < a.length){
            if(a[i] !== b[i]) {
                difference += 1;
            }
        }
        return difference;
    }
}
    
module.exports = Hamming; 