const user = {
    name: "Марина",
    lastname: "Рябинова", 
    email: "mari@mail.ru",
    id: "1",
    about: "Здесь текст",
    avatar: "https://belkacheli.com/upload/iblock/11a/11a288de470af81156eb388895b3d60c.jpg"
};

/*
const users = {
    0: {name: "Татьяна", lastname: "Смирнова", id: 5, email: "smirn@mail.ru", 
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=300&q=80"},
    1: {name: "Надежда", lastname: "Верова", id: 4, email: "verra@ra.ru", 
    avatar: "https://laralitvinova.ru/wp-content/uploads/2018/03/Emotional_Health_1499661832.jpg"},
    2: {name: "Света", lastname: "Дмитрикова", id: 3, email: "svetlana@yandex.ru", avatar: "https://ath2.unileverservices.com/wp-content/uploads/sites/7/2018/02/happy-brunette-brown-long-womens-healthy-hair-min.jpg" },
    3: {name: "Александр", lastname: "Турецкий", id: 8, email: "tureckii@mail.ru", avatar: "https://mykaleidoscope.ru/x/uploads/posts/2022-09/1663311109_35-mykaleidoscope-ru-p-litso-veselogo-cheloveka-vkontakte-37.jpg"},
    4: {name: "Евпатий", lastname: "Коловрат", id: 9, email: "kolovrat@gmail.com", avatar: "https://sun9-69.userapi.com/impf/KrO7VTODkFBT3SbO30bKezsx17cB7-mB_1CgyQ/-OdFYCQIr10.jpg?size=1024x1024&quality=96&sign=840d108793d0e7636c83eacb26372387&c_uniq_tag=yKCQix4F71LGqO98CO4UTKnfYbiOQtLB5Dq9FRJTVLM&type=album"},
};
*/

let users = [];

export function getUser(userId) {
    for(let i = 0; i < Object.keys(users).length; i++){
      if(users[i].id == userId) return users[i];
  }
   return user;
}

export async function getUsers() {
    let response = await fetch("https://0155.napli.ru/getUsers");
    users = await response.json();

    return users;
}