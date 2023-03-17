/** @format */
/** @format */
let square = document.querySelector('.square');
let body = document.querySelector('body');
let xAxis = 0;
let yAxis = 0;
let nasobic = 1;

body.addEventListener('keydown', function (event) {
    //
    nasobic = nasobic;
    console.log('global: ' + nasobic);

    if (event.key === 'w' || event.key === 'W') {
        yAxis = yAxis - nasobic;
        square.style.top = yAxis + 'px';
    }
    //
    else if (event.key === 's' || event.key === 'S') {
        yAxis = yAxis + nasobic;
        square.style.top = yAxis + 'px';
    }
    //
    else if (event.key === 'a' || event.key === 'A') {
        xAxis = xAxis - nasobic;
        square.style.left = xAxis + 'px';
    }
    //
    else if (event.key === 'd' || event.key === 'D') {
        xAxis = xAxis + nasobic;
        square.style.left = xAxis + 'px';
    }

    if (event.shiftKey === true) {
        console.log('lokal: ' + nasobic);
        nasobic = 10;
        return nasobic;
    } else {
        nasobic = 1;
    }
});
