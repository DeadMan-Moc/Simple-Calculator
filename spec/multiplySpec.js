it ("The answer is 0", ()=> {
    expect(multiply(0,0)).toBe(0);
})
it ("The answer is 2", ()=> {
    expect(multiply(-1,-1,0,4)).toBe(8);
})

it ("The answer is 10", ()=> {
    expect(multiply(1,2,3,4)).toBe(24);
})