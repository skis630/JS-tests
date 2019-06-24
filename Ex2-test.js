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
    it("should transpose a 2x2 matrix", function() {
        const matrix = [[1,2],[3,4]];
        const transposed = [[1,3],[2,4]];
        expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should transpose a 3x3 matrix", function() {
        const matrix = [[1,2,3],[3, 4, 5],[6, 7, 8]];
        const transposed = [[1, 3, 6],[2, 4, 7],[3, 5, 8]];
        expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should transpose a 3x3 matrix", function() {
        const matrix = [
                            [1, 2, 9],
                            [4, 5, 45],
                            [7, 6, 2]
                        ];
        const transposed = [
                                [1, 4, 7],
                                [2, 5, 6],
                                [9, 45, 2]
                            ];
        expect(transpose(matrix)).to.deep.equal(transposed);
    });
});

describe("Assymetric matrices:", function() {
    it("Should return the transpose matrix:", function() {
        const matrix = [
                            [1, 2, 3],
                            [4, 5]
                        ];
        const transposed = [
                                [1, 4],
                                [2, 5],
                                [3]
                            ];
        expect(transpose(matrix)).to.deep.equal(transposed);
    });
    it("should return the transpose", function() {
        const matrix = [
                            [1,2,3],
                            [4,5],
                            [6,7,8,9]
                        ];
        const transposed = [
                                [1,4,6],
                                [2,5,7],
                                [3, ,8],
                                [ , ,9]
                            ];
        expect(transpose(matrix)).to.deep.equal(transposed);
    });
});




