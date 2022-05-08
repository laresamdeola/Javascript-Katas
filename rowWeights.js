Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.



function rowWeights(array){
  let rows = []
  let otherRows = []
  for(let i = 0; i < array.length; i++){
    if(i % 2 == 0){
      rows.push(array[i])
    }else{
      otherRows.push(array[i])
    }
  }
  let newRows = rows.reduce((a, b) => {return a + b},0)
  let newOtherRows = otherRows.reduce((a, b) => {return a + b},0)
  return [newRows, newOtherRows]
}