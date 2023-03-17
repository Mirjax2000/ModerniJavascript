/** @format */
let a = document.querySelector('a');
a.addEventListener('click', function () {
    location.reload();
});

let numGer = function () {
    let ger = Math.floor(Math.random() * 2);
    return ger;
};

let ai = function () {
    if (numGer() === 0) {
        return false;
    } else {
        return true;
    }
};

// let seznam = [
//     { task: 'Vynest kos', completion: ai() },
//     { task: 'Nakrmit kocku', completion: ai() },
//     { task: 'Nakrmit psa', completion: ai() },
//     { task: 'Zapnout pocitac', completion: ai() },
//     { task: 'Umyt nadobi', completion: ai() },
//     { task: 'Uvarit obed', completion: ai() },
//     { task: 'Javascript', completion: ai() },
//     { task: 'HTML a CSS', completion: ai() },
// ];

let seznam = [
    { task: 'Vynest kos', completion: false },
    { task: 'Nakrmit kocku', completion: false },
    { task: 'Nakrmit psa', completion: false },
    { task: 'Zapnout pocitac', completion: false },
    { task: 'Umyt nadobi', completion: false },
    { task: 'Uvarit obed', completion: false },
    { task: 'Javascript', completion: false },
    { task: 'HTML a CSS', completion: false },
];

let runIt = function () {
    let mainList = document.querySelectorAll('.mainList');
    mainList.forEach(function (num) {
        num.remove();
    });

    let falseList = document.querySelectorAll('.falseList');
    falseList.forEach(function (num) {
        num.remove();
    });

    let trueList = document.querySelectorAll('.trueList');
    trueList.forEach(function (num) {
        num.remove();
    });

    // vypis hlavniho seznamu
    seznam.forEach(function (num) {
        let li = document.createElement('li');
        li.textContent = num.task;
        li.className = 'mainList';
        document.querySelector('.main').appendChild(li);
    });

    document.querySelector('.span').textContent = seznam.length;

    // vytvoreni pole podle hodnoty false
    let taskfalse = seznam.filter(function (num) {
        return !num.completion;
    });

    // vytvoreni pole podle hodnoty true
    let taskTrue = seznam.filter(function (num) {
        return num.completion;
    });

    // vypis hodnoty nesplnenych ukolu do span elementu
    let spanFalse = document.querySelectorAll('.nesplneno');
    spanFalse.forEach(function (num) {
        num.textContent = taskfalse.length;
    });

    // vypis obsahu pole
    taskfalse.forEach(function (num) {
        let li = document.createElement('li');
        li.className = 'falseList';
        li.textContent = num.task;
        document.querySelector('.false').appendChild(li);
    });

    // vypis hodnoty splnenych ukolu do span elementu
    let spanTrue = document.querySelectorAll('.splneno');
    spanTrue.forEach(function (num) {
        num.textContent = taskTrue.length;
    });

    // vypis obsahu pole
    taskTrue.forEach(function (num) {
        let li = document.createElement('li');
        li.className = 'trueList';
        li.textContent = num.task;
        document.querySelector('.true').appendChild(li);
    });
};

runIt();

falseListPlick = function () {
    let falseListClick = document.querySelectorAll('.falseList');
    falseListClick.forEach(function (num) {
        num.addEventListener('click', function (event) {
            let search = seznam.findIndex(function (mun) {
                return mun.task === event.target.textContent;
            });
            seznam[search].completion = true;
            runIt();
            trueListPlick();
            falseListPlick();
        });
    });
};

trueListPlick = function () {
    let trueListClick = document.querySelectorAll('.trueList');
    trueListClick.forEach(function (num) {
        num.addEventListener('click', function (event) {
            let search = seznam.findIndex(function (mun) {
                return mun.task === event.target.textContent;
            });
            seznam[search].completion = false;
            runIt();
            falseListPlick();
            trueListPlick();
        });
    });
};
falseListPlick();
trueListPlick();
console.log(seznam)
