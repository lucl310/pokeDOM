function beginGame(){
  alert("Hello Trainer!");
  alert("Right-click the page, click the 'Inspect', and click the 'Console' tab!")
  console.log("\n")
  console.log("Professor Oak: Hello Trainer! You made it just on time!");
  console.log("I was in the middle of testing... uhh unspecified things...");
  console.log("In that process, they (the pokemon) ran away... into your website (I mean... it does look like their home... not really)");
  console.log("Luckily, you came right as they escaped and, since you're a web developer, you'll have an easier time finding them for me!");
  alert("Trainer received PokeDOM!");
  console.log("Use your PokeDOM I've given you to find the hidden Pokemon!");
  console.log("Let one of your instructors know when you're finished and they'll tell me the tricks to catching the Pokemon!");
  console.log("I'm just gonna go play quake and make you do all of the work like the average prodject manager and if you don't complete this within the hour, I will download a virus onto your computer and fire you");
  console.log("Oh yeah! If you're lost... Start by selecting the 'PokeDOM MANUAL'!");
  console.log("Catch you later, Web Development Trainer!")
}

var pokemon = [ "magikarp", "horsea", "kingler", "gyarados", "seadra", "psyduck"];
var count = 0;
var stringOfPokemon = "";

function fillGear(){
  for (var i = 0; i < pokemon.length; i++){
    stringOfPokemon += pokemon[i] + " ";
  }
  document.getElementById('pokemonLeft').innerHTML = "MISSING: " + stringOfPokemon;
}

function randomNumber(){
  var min = 0;
  var max = 300;
  return Math.random() * (max - min) + min + 'px';
}

function randomizePokemon(){
  var pokemon = document.getElementsByTagName('span');
  for (var i = 0; i < pokemon.length; i++) {
    var xPosition = randomNumber();
    var yPosition = randomNumber();
    pokemon[i].style.position = 'absolute';
    pokemon[i].style.left = xPosition;
    pokemon[i].style.top = yPosition;
  }
}

function help(){
  console.log("\n* pokeDOM Manual *\n");
  console.log("The Pokemon were smart because they ran into the web applications elements...");
  alert("Select the 'Elements' tab in the developers toolkit and select the `body` element.");
  alert("As you can see, the pokemons information are embedded within the elements!");
  alert("Open the 'Console' tab when you're done!")
  console.log("Luckily, we have the pokeDOM!");
  console.log("The pokeDOM is a special container, called a variable that can store DOM elements in it.");
  console.log("We can select web application elements, catch the pokemon in the element, and store them in the pokeDOM");
  console.log("* The command to store an item into a variable is \n`var pokeDOM = document...etc`");
  console.log("\n********************")
}

function help1(){
  alert("You have been hacked! Enjoy this new virus");
  document.getElementById("myAnchor").download = "newValue";
}

function help2(){
  alert("You have been hacked! Enjoy this new virus!");
  console.log("\n********************")
}

function help3(){
  alert("You have been hacked! Enjoy this new virus");
  console.log("\n********************")
}

function playAudio(pokeId){
  for (var i = 0; i < pokemon.length; i++) {
    if (pokeId === pokemon[i]) {
      var audio = new Audio('/kanto/audio/' + pokemon[i] + '.mp3');
      audio.play();
      caughtPokemon(pokemon[i]);
    }
  }
}

function caughtPokemon(specific){
  document.getElementById(specificPokemon).style.backgroundImage = "url('../../pokeballSprite.png')";
    var str = document.getElementById("pokemonLeft").innerHTML;
    if (str.includes(specificPokemon)) {
      ++count;
      if (count === 7){
        var audio = new Audio('/kanto/audio/victory.mp3');
        audio.play();
        document.getElementById("pokemonCaught").innerHTML = "You caught them all!!!"
        document.getElementById("pokemonLeft").innerHTML = "Good job!!!"
        console.log("Professor Oak: Good Job!");
      }
      document.getElementById("pokemonCaught").innerHTML = "CAUGHT: " + count;
      var res = str.replace(specificPokemon, " ");
      document.getElementById("pokemonLeft").innerHTML = res;
    }
}
  function virus(time) {
    console.log("You took too long! Hope you enjoy the virus!")
  }

beginGame();
fillGear();
randomizePokemon();
