
// створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.



function ran(a){
    let hop = []
    for (let i=0;i<a;i++){
        hop.push(Math.floor(Math.random() * 100));
    }
    return hop
}
console.log(ran(10,))

// - Змінти попередню функцію, щоб діапазон можна було визначити через аргументи.

function ranss(a,b){
    let hop = []
    for (let i=0;i<a;i++){
        hop.push(Math.floor(Math.random() * b));
    }
    return hop
}
console.log(ranss(10,40))


// cтворити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
let number =[13,45,67,89,45,6,7,3,90,43]
number.sort(function (a,b){
    return a - b
})
console.log(number);


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, за лишивши тільки парні числа
let hop = [1,2,3,4,5,6,7,8,9,0,10];
let hop2 =hop.filter(function (item){
    return item%2===0
})
console.log(hop2)



// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на срінгові

let rans = [4,6,3,4,8,67,56,45,32,44]
let ran1 = rans.map(function (item){
    return  item + ""
})
console.log(ran1);




// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
// Взяти масив цей  User[] та: Відфільтрувати , залишивши тільки об'єкти з парними id (filter) та Відсортувати його по id. по зростанню (sort)


function User(id,name,surname,email,phone){
    this.id= id
    this.name=name
    this.surname = surname
    this.email= email
    this.phone = phone
}

let user=[
    new User(1,'vasya','kokos','vasya.com',380578743),
    new User(2,'vasya','kokos','vasya.com',380578743),
    new User(6,'vasya','kokos','vasya.com',380578743),
    new User(5,'vasya','kokos','vasya.com',380578743),
    new User(3,'vasya','kokos','vasya.com',380578743),
    new User(4,'vasya','kokos','vasya.com',380578743),
    new User(9,'vasya','kokos','vasya.com',380578743),
    new User(10,'vasya','kokos','vasya.com',380578743),
    new User(7,'vasya','kokos','vasya.com',380578743),
    new User(8,'vasya','kokos','vasya.com',380578743)
];
let user1= user.filter(function (item){
    return  item.id % 2 ===0
});
// console.log(user1)

let user2 = user1.sort(function (a,b){
    return a.id - b.id
});
console.log(user2);



