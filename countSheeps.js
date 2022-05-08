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