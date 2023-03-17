/** @format */
let criminals = [
    {
        firstName: 'Arnold',
        secondName: 'Terminator',
        birth: 1954,
        licencePlate: 'AU-927927',
        adress: 'Rakouska 454',
        city: 'Snitzel',
    },
    {
        firstName: 'Sly',
        secondName: 'Stallone',
        birth: 1958,
        licencePlate: 'USA-232734',
        adress: 'Hilton street 23',
        city: 'New York',
    },
    {
        firstName: 'Herman',
        secondName: 'Tjouba',
        birth: 1967,
        licencePlate: 'CZ-423921',
        adress: 'Komendy 76',
        city: 'Ceske Budejovice',
    },
    {
        firstName: 'Lada',
        secondName: 'Samara',
        birth: 1985,
        licencePlate: 'Rus-4647453',
        adress: 'Armedovo 45',
        city: 'Leningrad',
    },
    {
        firstName: 'Jaroslav',
        secondName: 'Bozetech',
        birth: 2001,
        licencePlate: 'RE-235627',
        adress: 'Sovetska 23',
        city: 'Presov',
    },
    {
        firstName: 'Space',
        secondName: 'Engineer',
        birth: 2010,
        licencePlate: 'AI-903847589',
        adress: 'Nekde V Praze 56',
        city: 'Praha',
    },
];

let inputSPZ = document.querySelector('#SPZ');
inputSPZ.addEventListener('input', function (event) {
    let main = document.querySelector('main');

    let search = criminals.filter(function (num) {
        return num.licencePlate
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
    });

    if (search.length === 0) {
        main.innerHTML = '';
        let h1 = document.createElement('h1');
        h1.textContent = 'Nic nenalezeno';
        main.appendChild(h1);
    } else {
        main.innerHTML = '';
        search.forEach(function (num) {
            let ul = document.createElement('ul');
            let liName = document.createElement('li');
            liName.textContent = num.firstName;

            let liSurname = document.createElement('li');
            liSurname.textContent = num.secondName;

            let liBirth = document.createElement('li');
            liBirth.innerHTML = `<span>${num.birth}</span>`;

            let liSPZ = document.createElement('li');
            liSPZ.className = 'liSPZ';
            liSPZ.textContent = num.licencePlate;

            let liAddress = document.createElement('li');
            liAddress.textContent = num.adress;

            let liCity = document.createElement('li');
            liCity.textContent = num.city;

            ul.appendChild(liName);
            ul.appendChild(liSurname);
            ul.appendChild(liBirth);
            ul.appendChild(liSPZ);
            ul.appendChild(liAddress);
            ul.appendChild(liCity);

            main.appendChild(ul);

            if (event.target.value === '') {
                main.innerHTML = '';
            }
        });
    }
});
