/*
function squareDigits(num){
  let num_string = num.toString();
  let num_array = [];
  for(let i = 0; i < num_string.length; i++){
    num_array.push((Number(num_string[i]))**2);
  }
  let new_array = num_array.join('');
  return Number(new_array);
}

squareDigits(2111);
*/

/*
function countSheeps(arrayOfSheep) {
  let num = 0;
  for(let i = 0; i < arrayOfSheep.length; i++){
    if(arrayOfSheep[i] == true){
      num = num + 1;
    } else{
      continue;
    }
  }
  return num
}

var array1 = [true,  true,  true,  false,
              true,  true,  true,  true ,
              true,  false, true,  false,
              true,  false, false, true ,
              true,  true,  true,  true ,
              false, false, true,  true ];


countSheeps(array1);
*/

/*
function removeExclamationMarks(s) {
  let without = [];
  for(let i in s){
    if(s[i] != '!'){
      without.push(s[i]);
    }
  }
  let withoutExclaim = '';
  return without.join(withoutExclaim)
}

let word = 'Hello!';

removeExclamationMarks(word);
*/

/*
const binaryArrayToNumber = arr => {
  let arrString = arr.join().replace(/,/g,'');
  return parseInt(arrString, 2);
};

binaryArrayToNumber([0,1,1,0])
*/

/*
function bmi(weight, height) {
  let theBMI = weight/(height*height);
  let message = null;
  if(theBMI <= 18.5){
    message = 'Underweight';
  } else if(theBMI <= 25.0){
    message = 'Normal';
  } else if(theBMI <= 30.0){
    message = 'Overweight';
  } else{
    message = 'Obese';
  }
  return message;
}

bmi(100, 154)
*/

/*
function correct(string)
{
	console.log(string.split('').map( a => {
    if(a === '5'){a = 'S'}
    else if(a === '0'){a = 'O'}
    else if(a === '1'){a = 'I'}
    return a;
  } ).join('')
)}

correct('H5ello')
*/

/*
function abbrevName(name){
  let nameSplits = name.split(' ')
  let firstAbbrev = nameSplits[0][0].toUpperCase()
  let lastAbbrev = nameSplits[1][0].toUpperCase()
  console.log(`${firstAbbrev}.${lastAbbrev}`)
}

abbrevName('Sam Harris')
*/

/*
function minMax(arr){
  let arrSort = arr.sort((a,b) => {return a - b});
  console.log([arrSort[0],arrSort[(arrSort.length-1)]])
}

minMax([4,10,1,3,2])
*/

// Using Switch Statement
/*
function switchItUp(number){
  switch(number){
      case 0:
        number = 'Zero';
        break;
      case 1:
        number = 'One';
        break;
      case 2:
        number = 'Two';
        break;
      case 3:
        number = 'Three';
        break;
      case 4:
        number = 'Four';
        break;
      case 5:
        number = 'Five';
        break;
      case 6:
        number = 'Six';
        break;
      case 7:
        number = 'Seven';
        break;
      case 8:
        number = 'Eight';
        break;
      default:
        number = 'Nine';
  }
  
  return number;
}*/

/*
function sum (numbers) {
  let nums = numbers != '' ?numbers.reduce((a,b) => { c = a + b; return c}) : 0;
    console.log(nums)
};

sum([])
*/

/*

Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321


function descendingOrder(n){
 return (Number(n.toString().split('').map(a => {return Number(a);}).sort((a,b) => {return a - b;}).reverse().join('')))
}

descendingOrder(0)

*/

/*
function duplicateCount(text){
  let textCount = text.split('')
  let count = 0
  textCount.map((a,b) => {
    if(a === b){
      count += 1;
    }
  });
  console.log(count)
}

duplicateCount("aaabbbcccdd")
*/

/*
function rentalCarCost(d) {
  let num = 0
  if(d > 1 && d < 3){
    num = 40 * d
  } else if(d >= 3 && d < 7){
    num = (40 * d) - 20
  } else if(d >= 7){
    num = (40 * d) - 50
  } else{
    num = 40
  }
  console.log(num)
}

rentalCarCost(10000)
*/

/*
var min = function(list){
    list.sort((a,b) => { return a - b})
    return list[0];
}

var max = function(list){
    list.sort((a,b) => { return a - b})
    let length = list.length
    return (list[(length-1)]);
}

max([1,22,3,4,0,6,7,8])
*/

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'

function solution(str){
  return str.split('').reverse().join('')
}
*/

/*
Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".*/


/*
Given an array of integers, return a new array with each value doubled.

For example:

[1, 2, 3] --> [2, 4, 6]

function maps(x){
  return x.map((a) => a+a)
}

*/

/*
function find_average(array) {
  return (array.length != 0 ? (array.reduce((a,b) => {return a+b}))/array.length : 0)
}

find_average([1,1,1])

*/

/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

Examples:(Input --> Output)

121 --> 144
625 --> 676
114 --> -1 since 114 is not a perfect square

function findNextSquare(sq) {
  let num = Math.floor(Math.sqrt(sq)) + 1
  Number.isInteger(Math.sqrt(sq)) ? num = num*num : num = -1
  return num
}

findNextSquare(121)*/

/*

Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
0, in other cases
Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0
*Use Comparison and Logical Operators.
  

function finalGrade (exam, projects) {
  let grade = 0
  if(exam > 90 || projects > 10){
    grade = 100
  } else if(exam > 75 && projects >= 5){
    grade = 90
  } else if(exam > 50 && projects >= 2){
    grade = 75
  } else{
    grade = 0
  }
  return grade
}

finalGrade(85, 5)
*/

/*
A square of squares
You like building blocks. You especially like building blocks that are squares. And what you even like more, is to arrange them into a square of square building blocks!

However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! That's it! You just have to check if your number of building blocks is a perfect square.

Task
Given an integral number, determine if it's a square number:

In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

The tests will always use some integral number, so don't worry about that in dynamic typed languages.

Examples
-1  =>  false
 0  =>  true
 3  =>  false
 4  =>  true
25  =>  true
26  =>  false

var isSquare = function(n){
  let square;
  Number.isInteger(Math.sqrt(n)) ? square = true : square = false
  return square
}

*/

/*
You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

Write a program that returns the girl's age (0-9) as an integer.

Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.

function getAge(inputString){
  return parseInt(inputString)
}

*/

/*

Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
If he doesn't get 10 hoops, return the string "Keep at it until you get it".



function hoopCount (n) {
   return (n >= 10 ? "Great, now move on to tricks" : "Keep at it until you get it")   
}

*/

/*

Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw!
rockpaperscissors



const rps = (p1, p2) => {
  let text = ''
  switch(true){
      case (p1 == 'scissors' && p2 == 'paper'):
      text = 'Player 1 won!'
      break
      case (p1 == 'paper' && p2 == 'rock'):
      text = 'Player 1 won!'
      break
      case (p1 == 'rock' && p2 == 'scissors'):
      text = 'Player 1 won!'
      break
      case (p2 == 'scissors' && p1 == 'paper'):
      text = 'Player 2 won!'
      break
      case (p2 == 'paper' && p1 == 'rock'):
      text = 'Player 2 won!'
      break
      case (p2 == 'rock' && p1 == 'scissors'):
      text = 'Player 2 won!'
      break
      case (p1 === p2):
      text = 'Draw!'
      break
  }
  return text
};

*/


/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.


function findShort(s){
  return (s.split(' ').map(a => {return a.length}).sort((a,b) => {return a-b})[0])
}

findShort("bitcoin take over the world maybe who knows perhaps")

*/


/*
Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24


function grow(x){
  return x.reduce((a,b) => {return a*b})
}
*/

/*
Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

The four operators are "add", "subtract", "divide", "multiply".

A few examples:(Input1, Input2, Input3 --> Output)

5, 2, "add"      --> 7
5, 2, "subtract" --> 3
5, 2, "multiply" --> 10
5, 2, "divide"   --> 2.5
Try to do it without using if statements!


function arithmetic(a, b, operator){
  let result = 0
  switch(operator){
      case 'add':
      result = a + b
      break
      case 'subtract':
      result = a - b
      break
      case 'multiply':
      result = a * b
      break
      case 'divide':
      result = a / b
      break
  }
  return result
}
*/

/*
A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

Return True if yes, False otherwise :)

function hero(bullets, dragons){
  let save = false
  console.log(bullets >= (dragons+dragons) ? save = true : save)
}

hero(0,1)

*/

/*
Now you have to write a function that takes an argument and returns the square of it.

const square = (num) => {return num*num}
*/


/*

Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

For example, if this array were passed as an argument:

["Telescopes", "Glasses", "Eyes", "Monocles"]

Your function would return the following array:

["Eyes", "Glasses", "Monocles", "Telescopes"]

All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.


  
function sortByLength (array) {
  console.log(array.sort((a,b) => {return a.length - b.length}))
};

sortByLength(["", "Moderately", "Brains", "Pizza"])

*/

/*
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"


var isAnagram = function(test, original) {
  test = test.toLowerCase()
  original = original.toLowerCase()
  let sortTest = test.split("").sort()
  let sortOriginal = original.split("").sort()
  console.log(sortTest.join('') == sortOriginal.join(''))
};

isAnagram("dumble", "bumble")
*/

/*
In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n. For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

Write a function to calculate factorial for a given input. If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

More details about factorial can be found here.


function factorial(n){
  let nFactors = []
  if(n >= 1 && n <= 12){
    for(let i = 1; i <= n; i++){
      nFactors.push(i)
    }
  } else if(n == 0){
    nFactors.push(1)
  } else{
    throw new Error("RangeError");
  }
  console.log(nFactors.reduce((a,b) => {return a * b}))
}

factorial(1)
*/

/*
Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  return x.toLowerCase() == (x.split('').reverse().join('').toLowerCase())
}


isPalindrome("aba")
*/

/*
Write a function that always returns 5

Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

Good luck :)


function unusualFive() {
  let length = ['a', 'b', 'c', 'd', 'e']
  return length.length
}
*/

/*
All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters. beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. They will not contain numerals.

  
function feast(beast, dish) {
  let beastSplit = beast.split('')
  let dishSplit = dish.split('')
  console.log(beastSplit[0] == dishSplit[0] && beastSplit[(beastSplit.length-1)] == dishSplit[(dishSplit.length-1)])
}

feast("great blue heron", "garlic naan")
*/

/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

var capitals = function (word) {
	let wordSplit = word.split('')
  let caps = []
  wordSplit.map((a) => { if(a == a.toUpperCase()){ caps.push(wordSplit.indexOf(a)) } })
  console.log(caps)
};


capitals('CodEWaRs')
*/

/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []

function solution(nums){
  return nums == null || nums == [] ? [] : nums.sort((a,b) => {return a - b})
}

Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata


function shortcut (string) {
  console.log(string.split('').filter((a) => {if(a != 'a' && a != 'e' && a != 'i' && a != 'o' && a != 'u'){ return a }}).join(''))
}


shortcut('hello')

*/

/*

As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

The input to the function will be an array of three distinct numbers (Haskell: a tuple).

For example:

gimme([2, 3, 1]) => 0
2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

Another example (just to make sure it is clear):

gimme([5, 10, 14]) => 1
10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.



function gimme(triplet){
  let gims = []
  for(let i = 0; i < triplet.length; i++){
    gims.push(triplet[i])
  }
  let sortTriplet = triplet.sort((a,b) => {return a - b})
  console.log(gims.indexOf(sortTriplet[1]))
}


gimme([5, 10, 14])
//gimme([2, 3, 1])

*/

/*

Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.


function take(arr, n) {
  return arr.slice(0, n)
}

*/


/*

Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

Use conditionals to return the proper message:

case	return
name equals owner	'Hello boss'
otherwise	'Hello guest'



function greet (name, owner) {
  return name == owner ? 'Hello boss' : 'Hello guest'
}

*/


/*

function apple(x){
  let xSquared = Math.pow(Number(x), 2)
  return xSquared > 1000 ? 'It\'s hotter than the sun!!' : 'Help yourself to a honeycomb Yorkie for the glovebox.'
}

*/

/*

In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

make as few changes as possible.
if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:

solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
More examples in test cases. Good luck!


function solve(s){
  let lower = 0
  let upper = 0
  s.split('').map((a) => { if(a == a.toLowerCase()){lower += 1}else{ upper += 1 } })
  if(lower > upper || upper < lower){
    return s.toLowerCase()
  } else if(lower < upper || upper > lower){
    return s.toUpperCase()
  } else if(lower == upper){
    return s.toLowerCase()
  }
}

*/
