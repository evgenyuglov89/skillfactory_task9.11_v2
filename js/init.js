
const generate = document.querySelector('#generate');
const clear = document.querySelector('#clear');

generate.addEventListener('click', () => {
    const initPerson = personGenerator.getPerson();
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    if(initPerson.gender == 'Мужчина'){
        document.querySelector('.card-header').style.background = 'blue';
    }else{
        document.querySelector('.card-header').style.background = 'fuchsia';
    }
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#birthdayOutput').innerText = initPerson.birthday;
    document.querySelector('#patronymicOutput').innerText = patronymicGenerator.getPatronymic(initPerson.gender);
    document.querySelector('#profession').innerText = initPerson.profession;
});

clear.addEventListener('click', () => {
    document.querySelector('#firstNameOutput').innerText = '';
    document.querySelector('#genderOutput').innerText = '';
    document.querySelector('#surnameOutput').innerText = '';
    document.querySelector('#birthdayOutput').innerText = '';
    document.querySelector('#patronymicOutput').innerText = '';
    document.querySelector('#profession').innerText = '';
    document.querySelector('.card-header').style.background = '#27282c';
});

