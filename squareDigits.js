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