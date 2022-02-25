import * as bundle from './self.js';
import person from './customer.js';



console.log(bundle.data);
bundle.hello();
console.log(person);



class Customer {
    constructor (n, y){
        this.name = n;
        this.addr = y;
    };
    buy(){
        console.log(this.addr);
    }
};
let customer1 = new Customer("tonmoy_customer", "tonmoy_addr");
console.log(customer1);

customer1.buy();