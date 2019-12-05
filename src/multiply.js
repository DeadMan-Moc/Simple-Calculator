function multiply() {
    let i = 0;
    product = 1;
    for (; i < arguments.length; i++){
        product *= arguments[i];
    }
    return product;
}

module.exports = multiply