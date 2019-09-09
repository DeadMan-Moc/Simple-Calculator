describe("Simple calculator for functon add", ()=>{
    it ("The answer is 0", ()=> {
        expect(add(0,0)).toBe(0);
    })
    it ("The answer is 2", ()=> {
        expect(add(0,4)).toBe(4);
    })
    
    it ("The answer is 10", ()=> {
        expect(add(1,2,3,4)).toEqual(10);
    })
})

// describe("Checking simple calculator that add 2 numbers", ()=>{
//     it ("Returns 0", ()=> {
//         var a=0;
//         var b=0;
//         var answer=add2Numbers(a,b);

//         expect(answer).toBe(0);
//     })

//     it ("Returns -2", ()=> {
//         var a=-1;
//         var b=-1;
//         var answer=add2Numbers(a,b);

//         expect(answer).toBe(-2);
//     })

//     it ("Returns 9", ()=> {
//         var a=4;
//         var b=5;
//         var answer=add2Numbers(a,b);

//         expect(answer).toBe(9);
//     })
// })