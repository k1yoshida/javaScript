// Returns what number is higher, takes 2 numbers

function greaterNum(num1, num2) {
  if (num1 > num2) {
    alert(num1);
  } else {
    alert(num2);
  }
}

// takes one language code, returns a greeting in specific laguage, defaults to EN,
//need double equal sign so it checks, and not reassigns var
function helloWorld(langCode) {
  if (langCode == "es") {
    alert("Hola Mundo");
  } else if (langCode == "de") {
    alert("Hallo Welt");
  } else {
      alert("Hello World");
  }
}


// takes one numscore and returns a message about grade assingment
//cannot define the else with a conditional
function assignGrade(numScore) {
  if (numScore>=90) {
    alert("You got an A!");
  } else if (89<=numScore>=80) {
    alert("You got a B!");
  } else if (79<=numScore>=70) {
    alert("You got a C!");
  } else if (69<=numScore>=60) {
    alert("You got a D!");
  } else {
    alert("Sorry you got an F!");
  }
}

//takes noun and a number and makes the noun plural if the number != 1
function pluralize(noun, number){
  if (number !=1){
    alert (number +" "+ noun + "s");
  }
  else {
    alert (number + " "+ noun);
  }
}


//Pending: takes noun and a number and makes the noun plural if the number != 1 but also considering collective nouns such as geese (nest conditionals)
// https://www.learnacademy.org/current-days/761
function pluralize(noun, number){
  if (number !=1){
      if (noun == "goose"){
      alert (number + " geese");
    } else if (noun == "child"){
      alert (number + " children");
    } else if (noun == "sheep" || noun == "geese" || noun == "species") {
      alert (number + " " + noun);
    } else {
      alert (number + " " + noun + "s");
    }
  } else {
    alert (number + " "+ noun);
  }
}

// From 0 - 15 check if the current number is odd or even, and display a message to the screen. (A while loop will print the last element)
var count = 0;
while (count <= 15) {
  if (count % 2 == 0) {
  console.log(count + " is even");
  } else {
  console.log(count + " is odd");
  }
  count = count + 1;
}

//from 1-100 print iterations, on multiples of 3 print "fizz", multiples of 5 print "buzz" on  multiples of both 3 and 5 print "Fizz Buzz"
function fizzBuzz(count){
  // var count = 1;
  while (count<=100){
    if (count %3 ==0 && count % 5==0){
      console.log("FizzBuzz");
    } else if (count % 5==0){
      console.log("Buzz");
    }else if (count %3==0 ){
      console.log("Fizz");
    }else {
      console.log(count);
    }
    count=count+1;
  }
}

//Function takes assigns a random number and then prompts a user to guess another number until they match
//two ways to assign random number: 1. within the function hiLo (see line 105) 2. or as a separate function see line 99. The separate function needs to assign randomNum variable within the function hiLo (see line 106)
// function to pick a random number
var randomNumber = function pick() {
  return Math.floor(Math.random()*(101));
}

function hiLo(){
//computer needs to pick a number
// var randomNum = Math.floor(Math.random()*(101));
var randomNum = randomNumber()
console.log(randomNum);
  do {
    var guess = prompt("What is your guess?");
    if (guess > randomNum){
      alert("Your guess is too high. Guess again!");
    } else if (guess < randomNum){
      alert("Your guess is too low. Guess again!");
    } else {
      alert("CONGRATULATIONS! YOU WON!");
    }
  } while(guess != randomNum){
    }
}
