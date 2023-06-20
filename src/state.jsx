const user = {
    name: "Марина",
    lastname: "Рябинова", 
    email: "mari@mail.ru",
    id: "1",
    about: "Здесь текст",
    avatar: "https://belkacheli.com/upload/iblock/11a/11a288de470af81156eb388895b3d60c.jpg"
};

const users = {
    0: {name: "Татьяна", lastname: "Смирнова"},
    1: {name: "Надежда", lastname: "Верова"},
    2: {name: "Света", lastname: "Дмитрикова"},
    3: {name: "Александр", lastname: "Турецкий"},
    4: {name: "Евпатий", lastname: "Коловрат"},
};

export function getUser() {
    return user;
}

export function getUsers() {
    return users;
}