/** @format */
let passLenght = 5;
let data = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
];

for (i = 0; i < 26; i++) {
    data.push(data[i].toUpperCase());
}
for (i = 0; i <= 9; i++) {
    data.push('' + i);
}

let storage = [null, null, null, null];
document.querySelector('a').addEventListener('click', function () {
    let password = [];
    for (i = 0; i < passLenght; i++) {
        password.push(data[Math.floor(Math.random() * data.length)]);
    }

    let oneliner = '';
    for (i = 0; i < passLenght; i++) {
        oneliner = oneliner + password[i];
    }

    document.querySelector('h1').textContent = oneliner;
    storage.push(oneliner);
    storage.shift();
    document.querySelector('.stor1').textContent = storage[2];
    document.querySelector('.stor2').textContent = storage[1];
    document.querySelector('.stor3').textContent = storage[0];
});
console.log(storage);
