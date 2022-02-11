
const wordSearch = (letters, word) => {
    const horizontalJoin = letters.map(ls => ls.join(''))
    const verticalJoin = transpose(letters).map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }
    for (v of verticalJoin) {
        if (v.includes(word)) return true
    }
    return false
}

const transpose = (array) => {
    let newArray = [];
    for (let i = 0; i < array[0].length; i++) {
        let innerArray = [];
        for (let j = 0; j < array.length; j++) {
            innerArray.push(array[j][i])
        }
        newArray.push(innerArray);
        
    }
    return newArray
}



// const results = [
//     ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
//     ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
//     ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
//     ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
//     ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
//     ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
//     ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
//     ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L']
// ]

// console.log('transpose', transpose(results))





module.exports = wordSearch