import transpose from "./Ex2-function";
let expect = require("chai").expect;

it("should return transpose", function() {
    expect(transpose([
        [1, 2],
        [3, 4]
    ]).to.equal([
        [1, 3],
        [2, 4]
    ]));
});

it("should return transpose", function() {
    expect(transpose([
        [1, 2, 3],
        [4, 5]
    ]).to.equal([
        [1, 4],
        [2, 5],
        [3]
    ]));
});

it("should return transpose", function() {
    expect(transpose([
        [1, 2, 9],
        [4, 5, 45],
        [7, 6, 2]
    ]).to.equal([
        [1, 4, 7],
        [2, 5, 6],
        [9, 45, 2]
    ]));
});


