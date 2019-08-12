describe("Checking simple calculator that multiply 2 numbers", ()=>{
    it ("Returns 0", ()=> {
        var a=0;
        var b=0;
        var answer=ProductOf2(a,b);

        expect(answer).toBe(0);
    })

    it ("Returns 1", ()=> {
        var a=-1;
        var b=-1;
        var answer=ProductOf2(a,b);

        expect(answer).toBe(1);
    })

    it ("Returns 20", ()=> {
        var a=4;
        var b=5;
        var answer=ProductOf2(a,b);

        expect(answer).toBe(20);
    })
})