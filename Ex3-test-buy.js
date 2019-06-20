let assert = require("chai").assert;
let expect = require("chai").expect;


//Arrange
function buy(candyStore, id) {
    var candiesArray = candyStore.candies;
    for (i in candiesArray) {
        if (candiesArray[i].id === id && candiesArray[i].amount > 0) {
            candiesArray[i].amount -= 1;
            candyStore.cashRegister += candiesArray[i].price;
        }
    }
}

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


//test
describe("Testing the buy function by invoking it and checking amount afterwards", function() {   
    it("Should have one less item of the specified id in stock.", function() {
        buy(candyStore, "as12f");
        assert.equal(getCandy(candyStore, "as12f").amount, 1, "Amount of mint gum after buy");
        assert.equal(candyStore.cashRegister, 202, "Amount of cash after buy");
    });

    it("Should have no items in stock (cannot substract items from zero amount of stock", function() {
        buy(candyStore, "as12f");
        buy(candyStore, "as12f");
        assert.equal(getCandy(candyStore, "as12f").amount, 0, "Amount of mint gum after buy");
        assert.equal(candyStore.cashRegister, 204, "Amount of cash after buy");
    }); 
    
    it("Should have one less item of the specified id in stock.", function() {
        buy(candyStore, "5hd7y");
        assert.equal(getCandy(candyStore, "5hd7y").amount, 3, "Amount of twix after buy");
        assert.equal(candyStore.cashRegister, 209, "Amount of cash after buy");
    });
});

