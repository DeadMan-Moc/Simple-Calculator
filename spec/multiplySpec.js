describe("Simple calculator spec for functon multiply", ()=>{
    it ("Should multiply two numbers", ()=> {
        expect(multiply(0,0)).toBe(0);
    })
    it ("Should multiply two numbers", ()=> {
        expect(multiply(1,2)).toBe(2);
    })
    it ("Should multiply two numbers", ()=> {
        expect(multiply(1,2,0)).toBe(0);
    })
    it ("Should multiply two numbers", ()=> {
        expect(multiply(1,4)).toBe(4);
    })
    it ("Should multiply multiple numbers", ()=> {
        expect(multiply(1,2,3,4)).toEqual(24);
    })

    it ("Should multiply multiple numbers", ()=> {
        expect(multiply(1,2,6)).toEqual(12);
    })

    it ("Should multiply multiple numbers", ()=> {
        expect(multiply(1,2,3,4,10)).toEqual(240);
    })
})