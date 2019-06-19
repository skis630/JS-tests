let assert = require("chai").assert;
import {getCandy, getPrice, addCandy, buy, candyStore} from "../../web/Basic JS/Objects/Ex3";

describe("Test getCandy function", function() {
    it("Should return the candy with the specified id", function() {
        assert.equal(getCandy(candyStore, "as12f"), {name: "mint gum",id: "as12f",price: 2,amount: 2},
        "candy with id 'as12f'");
    });

    it("Should return the candy's specified id amount in stock", function() {
        assert.equal(getCandy(candyStore, "as12f").amount, 2, "candy's amount in stock");
    });
});

describe("Test the getPrice function", function() {
    it("Should return the candy with the specified id price", function() {
        assert.equal(getPrice(candyStore, "5hd7y"), 5, "Price of candy with id '5hd7y");
    });
});

describe("Test the buy function", function() {
    buy(candyStore, "as12f");
    it
})