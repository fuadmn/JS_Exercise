
 
 function operate(a, b, callbacks){
   return callbacks( a, b)
 }

 function Multiplication(a, b){
   return a * b;
 }

 function division(a, b){
   return a / b
 }

 console.log("Multiplication", operate(20, 2, Multiplication));
 console.log("division", operate(20, 2, division) );
 
 

 