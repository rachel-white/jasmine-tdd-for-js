describe ("fizzBuzz()", function() {
    it ("should return 'FizzBuzz'", function(){
        expect(fizzBuzz(15)).toBe('FizzBuzz');
    })
    
    it ("should return 'Fizz'", function(){
        expect (fizzBuzz(6)).toBe('Fizz');
    })
    
    it ("should return 'Buzz'", function(){
        expect (fizzBuzz(10)).toBe('Buzz');
    })
    
    it ("should return number", function(){
        expect (fizzBuzz(8)).toBe(8);
    })
    it ("should return error", function(){
        expect (fizzBuzz('potato')).toBe("Error!");
    })
});
