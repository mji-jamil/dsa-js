const arr = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(arr[2]);

// Push
arr.push('g'); // O(1)
console.log(arr);

// Pop
arr.pop(); // O(1)
console.log(arr);

// Unshift
arr.unshift('x'); // O(n)
console.log(arr);

// Splice
arr.splice(2, 0, 'jamil'); // O(n)
console.log(arr);
