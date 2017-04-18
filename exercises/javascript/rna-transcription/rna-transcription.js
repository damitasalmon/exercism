var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna = function(dna) {
    var rna;
    var replacements = {
      A: 'U',
      T: 'A',
      C: 'G',
      G: 'C'
    };
    
    dna = dna.split('');
    return dna.map(translate).join('');


function translate(nucleotide) {
  return replacements[nucleotide];
    } 
}
module.exports = DnaTranscriber; 