var a =  [-10,9,2,-1,1]

function AddMultiple(array) {
    let sum = 0;
    for (let i in array) {
      sum = sum + array[i];
      
    }
    return sum;
}

console.info('Func AddMulti',AddMultiple(a))