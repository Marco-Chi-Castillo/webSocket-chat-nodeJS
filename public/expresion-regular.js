
let expresion_regular = (date) => {
  let uppercase = date.match(/\b[A-Z]/g, ""); //detecta mayusculas
  let notVowels = date.match(/[^aeiou\W\d]\b/g, ""); //detecta string con terminación que no sea vocal
  let string = date.match(/[^\s\d]+/g, ""); //detecta la cantidad de palabras
  let vowels = date.match(/[aeiou]/g, ""); // vocales
  let totalNumbers = date.match(/[\d]/g, ""); //numeros

  let numberUppercase = uppercase === null ? 0 : uppercase.length;
  let numberNotVowels = notVowels === null ? 0 : notVowels.length;
  let numberString = string === null ? 0 : string.length;
  let numberVowels = vowels === null ? 0 : vowels.length;
  let numbersTN = totalNumbers === null ? 0 : totalNumbers.length;

  return `<p class="results"> Mayusculas: ${numberUppercase} | 
          No Vocal: ${numberNotVowels} | 
          Palabras: ${numberString} | 
          Vocales: ${numberVowels} | 
          Numeros: ${numbersTN}</p>`;

}

module.exports = {
  expresion_regular
}