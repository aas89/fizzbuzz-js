

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    // Put your code here...
    for (let i = 1; i <= 256; i++) {
        let print_out = "";

        if (i % 3 == 0){
            print_out += 'Fizz';

        } if (i % 13 == 0){            
            print_out += 'Fezz';
            
        } if (i % 5 == 0){            
            print_out += 'Buzz';
            
        } if (i % 7 == 0){            
            print_out += 'Bang';
            
        } if (i % 11 == 0){
            if (i % 13 == 0){
                print_out = 'FezzBong'
            } else {
                print_out = 'Bong';
            }
            
        } if (i % 17 == 0){
            print_out += " ";
            let new_print_out = "";
            for (let n = 1; n <= (print_out.length / 4); n++) {
                new_print_out += print_out.slice(-4*n-1, -4*(n-1)-1);
            }          
            print_out = new_print_out;
            
        } else {
            ;
        }

        if (print_out != "") {
            console.log(print_out);
        } else {
        console.log(i);
        }

    }
    
}

// Now we run the main function...
fizzbuzz();
