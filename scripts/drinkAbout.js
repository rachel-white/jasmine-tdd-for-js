function whatCanIDrink(age){
    if (age>0 && age<14) {
        return ("Drink Toddy")
    } 
    else if (age<18 && age>=14) {
        return ("Drink Coke")
    } 
    else if (age<21 && age>=18) {
        return ("Drink Beer")
    } 
    else if (age<130 && age>=21) {
        return ("Drink Whisky")
    } 
    
    else if (age>130) {
        return ("Sorry. I can’t tell what drink because that age is incorrect!")
    } 
    
    else if (age<0) {
        return ("Sorry. I can’t tell what drink because that age is incorrect!")
    } 
    
    else {
         return "this is the drink you can drink at your age";
    }
    
}


