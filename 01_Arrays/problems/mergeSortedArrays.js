const arr = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const arr3 = [...arr, ...arr2];
function sortedArr(a, b) {
    return a - b;
}

console.log(arr3.sort(sortedArr));
