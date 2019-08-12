describe("Simple calculator that multiply multiple numbers in the array", ()=>{
    it ("The answer is 0", ()=> {
        var a=[0,0];
        
        var answer=ProductOfMultiple(a);

        expect(answer).toBe(0);
    })
    it ("The answer is 1", ()=> {
        var a=[-1,-1];
        
        var answer=ProductOfMultiple(a);

        expect(answer).toBe(1);
    })
    
    it ("The answer is 24", ()=> {
        var a = [1,2,3,4];
        
        
        var answer=ProductOfMultiple(a);

        expect(answer).toBe(24);
    })


})