describe ("Calculator", function(){
    beforeEach(function(){
        calc=new Calculator;
    });
    var calc=new Calculator;
    
    
    describe("Addition tests", function() {
        it("should return 42", function(){
            calc.add(20);
            calc.add(22);
            expect(calc.value).toBe(42);
            });
        it("Should return 19", function(){
            calc.add(10);
            calc.add(9);
            expect(calc.value).toBe(19);
            })
        it("Should return an error if two numbers are not supplied", function(){
            spyOn(window, "alert");
            calc.add("Potato");
            expect(window.alert).toHaveBeenCalledWith("Error!");
        })
    });
});