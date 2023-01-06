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

function pickNumber(){
  var pickedElement = document.getElementById(bingoNumbers[0]);
  pickedElement.classList.add('picked');
  bingoNumbers.splice(0, 1);
}
