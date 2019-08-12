function ProductOfMultiple(array){
    
    let product = 1;  
    for (let i of array){
        product = i * product;
    }
    return product;
}