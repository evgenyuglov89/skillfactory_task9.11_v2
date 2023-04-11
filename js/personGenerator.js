const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Анастасия",
            "id_3": "Елена",
            "id_4": "Екатерина",
            "id_5": "Наталья",
            "id_6": "Татьяна",
            "id_7": "Вера",
            "id_8": "Надежда",
            "id_9": "Любовь",
            "id_10": "Юлия"
        }
    }`,
    professionMaleJson: `{
        "count": 10,
        "list":{
            "id_1": "Шахтёр",
            "id_2": "Дальнобойщик",
            "id_3": "Военный",
            "id_4": "Президент",
            "id_5": "Слесарь",
            "id_6": "Строитель",
            "id_7": "Шпалоукладчик",
            "id_8": "Каскадёр",
            "id_9": "Вулканолог",
            "id_10": "Дровосек"
        }
    }`,
    professionFemaleJson: `{
        "count": 10,
        "list":{
            "id_1": "Повар",
            "id_2": "Швея",
            "id_3": "Учитель",
            "id_4": "Секретарь",
            "id_5": "Бухгалтер",
            "id_6": "Проводница",
            "id_7": "Уборщица",
            "id_8": "Модель",
            "id_9": "Няня",
            "id_10": "Администратор"
        }
    }`,
    monthsJson: `{
        "count": 12,
        "list":{
            "id_1": "января",
            "id_2": "февраля",
            "id_3": "марта",
            "id_4": "апреля",
            "id_5": "мая",
            "id_6": "июня",
            "id_7": "июля",
            "id_8": "августа",
            "id_9": "сентября",
            "id_10": "октября",
            "id_11": "ноября",
            "id_12": "декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

    randomFirstName: function(gender) {
        if(gender == this.GENDER_MALE){
            return this.randomValue(this.firstNameMaleJson);
        }else{
            return this.randomValue(this.firstNameFemaleJson);
        }
    },


    randomSurname: function(gender) {
        if(gender == this.GENDER_MALE){
            return this.randomValue(this.surnameJson);
        }else{
            return this.randomValue(this.surnameJson) + 'а';
        }
    },

    randomGender: function() {

        return this.randomIntNumber() ? this.GENDER_MALE : this.GENDER_FEMALE;
    },

    randomeYear: function () {
        return this.randomIntNumber(2023, 1950);
    },

    randomProfession: function(gender) {
        if(gender == this.GENDER_MALE){
            return this.randomValue(this.professionMaleJson);
        }else{
            return this.randomValue(this.professionFemaleJson);
        }
    },

    randomBirthday: function() {
        const obj = JSON.parse(this.monthsJson);
        const prop = this.randomIntNumber(obj.count, 1);
        if([1, 3, 5, 7, 8, 10, 12].includes(prop)){
            day = this.randomIntNumber(31, 1);
        } else if(prop == 2){
            day = this.randomIntNumber(28, 1);
        } else{
            day = this.randomIntNumber(30, 1);
        }
        return day + ' ' + obj.list[`id_${prop}`];
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName(this.person.gender);
        this.person.surName = this.randomSurname(this.person.gender);
        this.person.birthday = this.randomBirthday() + ' ' + this.randomeYear();
        this.person.profession = this.randomProfession(this.person.gender);
        return this.person;
    }
};

const patronymicGenerator = {
    patronymicMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александрович",
            "id_2": "Владимирович",
            "id_3": "Георгиевич",
            "id_4": "Иванович",
            "id_5": "Евгеньевич",
            "id_6": "Анатольевич",
            "id_7": "Максимович",
            "id_8": "Степанович",
            "id_9": "Петрович",
            "id_10": "Палыч"
        }
    }`,
    patronymicFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Петровна",
            "id_2": "Тимофеевна",
            "id_3": "Геннадиевна",
            "id_4": "Валерьевна",
            "id_5": "Егоровна",
            "id_6": "Львовна",
            "id_7": "Тарасовна",
            "id_8": "Платоновна",
            "id_9": "Юрьевна",
            "id_10": "Эдуардовна"
        }
    }`,
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;
        return obj.list[prop];
    },

    getPatronymic: function (gender) {
        if(gender == this.GENDER_MALE){
            return this.randomValue(this.patronymicMaleJson);
        }else{
            return this.randomValue(this.patronymicFemaleJson);
        }
    }
};
