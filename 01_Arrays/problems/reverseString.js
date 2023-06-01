const reversedString = (str) => {
    if (!str || str.length < 2) return 'Not a valid string';
    return str.split('').reverse().join('');
};

console.log(reversedString('I am Jamil'));

const reversedString2 = (str) => {
    const arr = [];
    // console.log(str.length);
    for (let i = str.length - 1; i >= 0; i--) {
        // console.log(str[i]);
        arr.push(str[i]);
    }
    console.log(arr.join(''));
};

reversedString2('I am Jamil');
