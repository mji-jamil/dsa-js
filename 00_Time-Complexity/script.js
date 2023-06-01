const nemo = ['abc', 'bcd', 'def', 'fgh', 'jha', 'add', 'crawdad', 'nemo'];
const findNemo = (array) => {
    let t0 = performance.now();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'nemo') {
            console.log('Found Nemo!');
        }
    }
    let t1 = performance.now();
    console.log(`${t1 - t0} milliseconds`);
};

findNemo(nemo); // O(n) --> Linear Time

const boxes = [0, 1, 2, 3, 4, 5];
const logFirstTwoBoxes = (arr) => {
    console.log(arr[0]);
    console.log(arr[1]);
};

logFirstTwoBoxes(boxes); // O(1) --> Constant Time

function anotherFunction() {
    console.log('Jamil');
}

function funChallenge(input) {
    let a = 10; // O(1)
    a = 50 + 3; // O(1)
    for (let i = 0; i < input.length; i++) { //O(n)
        anotherFunction(); // O(n)
        let stranger = true; // O(n)
        a++; // O(n)
    }
    return a; // O(1)
}

// funChallenge();

// BIG O (3 + 4n)
