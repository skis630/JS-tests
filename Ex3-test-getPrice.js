let assert = require("chai").assert;
let expect = require("chai").expect;


//Arrange
function getPrice(candyStore, id) {
    let candiesArray = candyStore.candies;
    for (i in candiesArray) {
        if (candiesArray[i].id === id) {
            return candiesArray[i].price;
        }
    }
}

let candyStore = {
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


//Test
describe("Test the getPrice function", function() {
    it("Should return the candy with the specified id price", function() {
        assert.equal(getPrice(candyStore, "5hd7y"), 5, "Price of candy with id '5hd7y");
    });
    it("Should return the candy with the specified id price", function() {
        assert.equal(getPrice(candyStore, "as12f"), 2, "Price of candy with id 'as12f'");
    });
});







