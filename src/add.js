function add(){
    
    let sum = 0;
    

    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

// console.warn(add(1,3));