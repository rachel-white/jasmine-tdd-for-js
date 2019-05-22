describe ("whatCanIDrink(age)", function() {
    it("should return what 2 year old can drink", function() {
        var result = whatCanIDrink(2)
        expect(result).toBe("Drink Toddy");
    })
    it ("should return what someone between age 16 can drink", function(){
        var result = whatCanIDrink(16)
        expect(result).toBe("Drink Coke");
    })
    
    //missing the test for less than 0. How do you test for less than 0?
    
    it ("should return what someone less than 14 can drink", function(){
        var result = whatCanIDrink(7)
        expect(result).toBe("Drink Toddy");
    })
    
    it ("should return what someone less than 18 can drink", function(){
        var result = whatCanIDrink(16)
        expect(result).toBe("Drink Coke");
    })
    
    it ("should return what someone less than 21 can drink", function(){
        var result = whatCanIDrink(19)
        expect(result).toBe("Drink Beer");
    })
    
    it ("should return what someone less than 130 can drink", function(){
        var result = whatCanIDrink(75)
        expect(result).toBe("Drink Whisky");
    })
    
    it ("should return error for other arguments", function(){
        var result = whatCanIDrink(200)
        expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    })
    
    it ("should return error for other arguments", function(){
        var result = whatCanIDrink(-8)
        expect(result).toBe("Sorry. I can’t tell what drink because that age is incorrect!");
    })
});
