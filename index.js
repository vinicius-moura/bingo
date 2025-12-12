var bingoNumbers;

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

window.onload = function createElements() {
  bingoNumbers= Array.from({length: 75}, (_, index) => index + 1);

  bingoNumbers.forEach(element => {
    const newDiv = document.createElement('div');
    const text = document.createElement('p')
    const newContent = document.createTextNode(element);
    
    //identifying div
    newDiv.setAttribute('id', element)
    newDiv.setAttribute('class', 'number')

    //creating structure div -> p
    text.appendChild(newContent);
    newDiv.appendChild(text);
  
    const currentDiv = document.getElementById('numbers-container');

    currentDiv.appendChild(newDiv);
  });

  //shuffle numbers to pick
  shuffle(bingoNumbers);
}

function showLastNumber(picked) {
  var tutorialMessage = document.getElementById('tutorial-message');
  var lastNumber = document.getElementById('actual-number');

  tutorialMessage.style.display = "none";

  lastNumber.innerText = picked;

  lastNumber.classList.remove('active'); 
  void lastNumber.offsetWidth;
  lastNumber.classList.add('active');
  speakNumber(lastNumber.innerText);
}

function pickNumber(){
  if (bingoNumbers.length > 0) {
    showLastNumber(bingoNumbers[0]);
    var pickedElement = document.getElementById(bingoNumbers[0]);
    pickedElement.classList.add('picked');
    bingoNumbers.splice(0, 1);
  }
}

function speakNumber(num) {
    if ('speechSynthesis' in window) {
        const text = createMessage(num);
        const texto = `${text}... Repetindo, ${text}`;
        
        const voice = new SpeechSynthesisUtterance(texto);
        
        // voice configs
        voice.lang = 'pt-BR';
        voice.rate = 1;
        voice.pitch = 1;
        voice.volume = 1;

        window.speechSynthesis.speak(voice);
    } else {
        console.log("Seu navegador não suporta áudio.");
    }
}

function createMessage(num) {
  switch (true) {
    case num < 16:
      return 'B...' + num;
    case num > 15 && num < 31:
      return 'I...' + num;
    case num > 30 && num < 46:
      return 'N...' + num;
    case num > 45 && num < 61:
      return 'G...' + num;
    case num > 60:
      return 'O...' + num;
  }
}