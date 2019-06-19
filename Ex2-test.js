let expect = require("chai").expect;


//Arrange
function transpose(matrix) {
    let tMatrix = [];

    let maxCols = matrix.map(function(row) {return row.length;}).
        reduce(function(prev, current) {
            return Math.max(prev, current);
        });

    for (let i = 0; i < maxCols; i++) {
        tMatrix.push([]);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            tMatrix[j][i] = matrix[i][j];
        }
    }

    return tMatrix;
}

describe("Symmetric matrices:", function() {
    it("should return a 2 x 2 transpose", function() {
        expect(transpose([
                            [1, 2],
                            [3, 4]
                        ])).to.deep.equal([
                                        [1, 3],
                                        [2, 4]
                                    ]);
    });
    it("should return a 3 x 3 transpose", function() {
        expect(transpose([
                            [1, 2, 3],
                            [3, 4, 5],
                            [6, 7, 8]
                        ])).to.deep.equal([
                                        [1, 3, 6],
                                        [2, 4, 7],
                                        [3, 5, 8]
                                    ]);
    });
    it("should return a 3 x 3 transpose", function() {
        expect(transpose([
                            [1, 2, 9],
                            [4, 5, 45],
                            [7, 6, 2]
                        ])).to.deep.equal([
                                        [1, 4, 7],
                                        [2, 5, 6],
                                        [9, 45, 2]
                                    ]);
    });
});

describe("Assymetric matrices:", function() {
    it("should return transpose", function() {
        expect(transpose([
                            [1, 2, 3],
                            [4, 5]
                        ])).to.deep.equal([
                                        [1, 4],
                                        [2, 5],
                                        [3]
                                    ]);
                                });
    it("should return transpose", function() {
        expect(transpose([
                            [1,2,3],
                            [4,5],
                            [6,7,8,9]
                        ])).to.deep.equal([
                                            [1,4,6],
                                            [2,5,7],
                                            [3, ,8],
                                            [ , ,9]
                                        ]);
    });
});




