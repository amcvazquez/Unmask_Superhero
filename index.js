// we need spiderman, thor, and loki picure from api 
let guessedLetter = []
let letter
let characterList = [] 

const allButtons = document.querySelectorAll('button');
// public key - d4d97531c1e479bbe6e27b6f4139fa7e
// private key - 96dc429b46b326921eb7e42ff32e5d81b6077a2b
// need a function called load characters
var apiMarvel = function() {
    const apiUrl = 'http://gateway.marvel.com/v1/public/characters';
    const apiKey = 'd4d97531c1e479bbe6e27b6f4139fa7e';
    const timestamp = '1';
    const hash = '685498cef61d5c0f1571a0d89fb966a0';
    
    const url = `${apiUrl}?apikey=${apiKey}&ts=${timestamp}&hash=${hash}&name=Thor`;
    console.log(url)
    fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => {
        // Handle the JSON data here
        var name = data.data.results[0].name.toLowerCase();  
        characterList.push(name); 
        console.log(characterList)
         updateWordDisplay();
      })
      .catch(error => {
        // Handle errors here
        console.error('Error:', error);
      });

} 
var updateWordDisplay = function(){ 
console.log("guessedLetter", guessedLetter)
    
    const wordDisplay = document.getElementById("word-display");
        wordDisplay.textContent = characterList[0]
         .split('')
         .map(letter2 => guessedLetter.includes(letter2) ? letter2 : '_')
         .join(' ');
}
var letterCheck = function(){ 
    
     letter = this.textContent.toLowerCase(); 

console.log(letter); 
guessedLetter.push(letter);
if (characterList[0].includes(letter)) { 
    console.log("you are right"); 

    updateWordDisplay(letter);

    // Check if the entire word has been guessed
    if (!characterList[0].split('').some(characterLetter => !guessedLetter.includes(characterLetter))) { 
        console.log("finished game")
        endgame();
    }
} else {
    console.log("wrong"); 
    var wrong = document.querySelector('#wrong'); 
    wrong.textContent += 'X' 
    console.log(wrong); 

}
}

//  this, we nneed function that 
// varialbe that takes the text conent of the button 
// then you would need some, find if the letter is in our string 
var endgame = function(){
    console.log("endgame") 
    location.replace("results.html") 
}
// if it is null or flase 
// then we want incorrect to come up below the image 

// if it is in the word we want it to appear on top of the lines 

//endgame if the lines are all full go to results page 


// do a standard fetch call
// console.log the data

allButtons.forEach(button => {
    button.addEventListener('click', letterCheck)
})
apiMarvel();
// https://gateway.marvel.com/v1/public/characters?ts=1&apikey=d4d97531c1e479bbe6e27b6f4139fa7e&hash=685498cef61d5c0f1571a0d89fb966a0