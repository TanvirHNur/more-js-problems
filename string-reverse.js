/*  let greatings = 'Hello, How are you?'
 function reverseStrins (text){
    let reverse = '';
    for (const letter of text){
        // console.log(letter);
    reverse =  letter  + reverse;
    }
 }

 let reversed = reverseStrins(greatings);
 console.log(reversed); */

 let greatings = 'Hello, How are you?'
 function reverseString (greatings){
    return greatings.split("").reverse().join("");
 }

 let reversed = reverseString(greatings);
 console.log(reversed);

 let myName = 'niassoH rivnaT';
 function reverseString (myName){
    return myName.split("").reverse().join("")
 }
 console.log('Name: ', reverseString(myName))

