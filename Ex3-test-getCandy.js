let assert = require("chai").assert;
let expect = require("chai").expect;


//Arrange
function getCandy(candyStore, id) {
    var candiesArray = candyStore.candies;
    for (i in candiesArray) {
        if (candiesArray[i].id === id) {
            return candiesArray[i];
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
describe("Test getCandy function", function() {
    it("Should return the candy with the specified id", function() {
        expect(getCandy(candyStore, "as12f")).to.deep.equal({name: "mint gum", id: "as12f", price: 2, amount: 2});
    });
    it("Should return the candy's specified id amount in stock", function() {
        assert.equal(getCandy(candyStore, "as12f").amount, 2, "candy's amount in stock");
    });
});

