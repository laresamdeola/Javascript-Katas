Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"



function peopleWithAgeDrink(old) {
  var text
  if(old < 14){
    text = "drink toddy"
  } else if(old >= 14 && old < 18){
    text = "drink coke"
  } else if(old >= 18 && old < 21){
    text = "drink beer"
  } else if(old >= 21){
    text = "drink whisky"
  }
  return text;
};