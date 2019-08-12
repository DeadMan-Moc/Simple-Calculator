describe("Simple calculator that add multiple numbers in the array", ()=>{
    it ("The answer is 0", ()=> {
        var a=[0,0];
        
        var answer=AddMultiple(a);

        expect(answer).toBe(0);
    })
    it ("The answer is 2", ()=> {
        var a=[-1,-1,0,4];
        
        var answer=AddMultiple(a);

        expect(answer).toBe(2);
    })
    
    it ("The answer is 10", ()=> {
        var a = [1,2,3,4];
        
        
        var answer=AddMultiple(a);

        expect(answer).toBe(10);
    })
})