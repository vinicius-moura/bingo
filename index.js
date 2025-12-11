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
  var lastNumber = document.getElementById('actual-number')

  switch (true) {
    case picked < 16:
      lastNumber.innerText = 'B ' + picked;
      break;
    case picked > 15 && picked < 31:
      lastNumber.innerText = 'I ' + picked;
      break;
    case picked > 30 && picked < 46:
      lastNumber.innerText = 'N ' + picked;
      break;
    case picked > 45 && picked < 61:
      lastNumber.innerText = 'G ' + picked;
      break;
    case picked > 60:
        lastNumber.innerText = 'O ' + picked;
      break;
  }
}

function pickNumber(){
  if (bingoNumbers.length > 0) {
    var pickedElement = document.getElementById(bingoNumbers[0]);
    showLastNumber(bingoNumbers[0]);
    pickedElement.classList.add('picked');
    bingoNumbers.splice(0, 1);
  }
}
