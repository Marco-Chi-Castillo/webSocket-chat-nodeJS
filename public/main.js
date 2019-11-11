var socket = io.connect('http://192.168.43.173:4000', { 'forceNew': true });

socket.on('messages', function (data) {
  console.log(data);
  render(data);
})

function render(data) {
  var html = data.map(function (elem, index) {
    let html_string = string_expresion(elem.text);
    return (`<div class="container-elements">
              <strong class="autor">${elem.author}</strong> 
              <p class="message">${elem.text}</p>
            </div> ${html_string}`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value
  };

  socket.emit('new-message', message);
  return false;
}

let string_expresion = (date) => {
  let uppercase = date.match(/\b[A-Z]/g, ""); //detecta mayusculas
  let notVowels = date.match(/[^aeiou\W\d]\b/g, ""); //detecta string con terminación que no sea vocal
  let string = date.match(/[^\s\d]+/g, ""); //detecta la cantidad de palabras
  let vowels = date.match(/[aeiou]/g, ""); // vocales
  let totalNumbers = date.match(/[\d]/g, ""); //numeros

  return `<p class="results"> Mayusculas: ${size(uppercase)}  |  
          Terminación No Vocal: ${size(notVowels)}  |  
          Palabras: ${size(string)}  |  
          Vocales: ${size(vowels)}  |  
          Numeros: ${size(totalNumbers)}</p>`;
}

let size = (array) => {
  let size = array === null ? 0 : array.length;
  return size;
}
