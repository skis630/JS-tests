function transpose(matrix) {
    let transpose = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            transpose[j][i] = matrix[i][j];
        }
    }

    return transpose;
}

export default transpose;