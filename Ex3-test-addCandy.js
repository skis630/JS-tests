let assert = require("chai").assert;
let expect = require("chai").expect;


//Arrange
function addCandy(candyStore, id, name, price, amount = 1) {
    var arrayLen = candyStore.candies.length;
    
    candyStore.candies[arrayLen] = {
        id: id,
        name: name,
        price: price,
        amount: amount    
    }

    return candyStore.candies[arrayLen];
}

var candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4
        },
    ],
    cashRegister: 200
   }   


//test
describe("Add a new candy. Verify the new candies array includes the new addition:", function() {
    it("Should contain the new candy 'Bamba'", function() {
        expect(addCandy(candyStore, "hfy46", "Bamba", 4)).
            to.deep.equal({id: "hfy46", name: "Bamba", price: 4, amount: 1});
        assert(candyStore.candies.length, 3, "Number of candy types in store after the new addition");
    });
})

