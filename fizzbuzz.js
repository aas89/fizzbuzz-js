

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    var i;
    for (i = 0; i <= 100; i++) {
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        } else if (i % 3 == 0){
            //break
            console.log('Fizz');
        } else if (i % 5 == 0){
            //break
            console.log('Buzz');
            //break
        } else {
            console.log(i);
        }

    }
    
}

// Now we run the main function...
fizzbuzz();
