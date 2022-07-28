// const uers = [
//     {
//         username: 'clown',
//         salary:  5
//     },
//     {
//         username: 'clown2',
//         salary:  4
//     },
//     {
//         username: 'clown3',
//         salary:  5
//     }
// ]

// let obj = {
//     username: 'Aruuke',
//     salary: 5
// }

// console.log(obj.username)

// Создание нового Массива и добаление старых элементов
// Перезаписать на новый Массива

// const newUsers = [];

// for(let user of users){
//     newUsers.push({
//         name: user.username,
//         zarplata: user.salary
//     })
// }
// console.log(newUsers)

// const newUsers2 = users.map(user => ({
//     name: user.username,
//     salary: user.salary
// }))

// console.log(newUsers2)

// Функции

// function имя(параметры){
//     // тело функции (ваш код)
// }

// function showMessage(){
//     alert("Hello world")
//     console.log("Hi from console")
// }

// showMessage();

// локальные и внешние переменные

// let message = "Hii";

// function showMessage(){
//     message = "Привет !!";
//     console.log(message)
// }

// console.log(message)
// showMessage();

// параметры (аргументы)

// function calcSum(numOne = 4, numTwo = 8){
//     console.log("Переменная numOne" + numOne);
//     console.log("Переменная numTwo" + numTwo);

//     let sum = numOne + numTwo;
//     console.log("Сумма" + sum);
// }

// calcSum(70, 7);

// доп.дз. Получить значения от пользователя (numOne и numTwo)

// Функции  колбеки

// function calcSumm(numOne, numTwo, more, less){
//     let sum = numOne + numTwo;

//     if(sum > 3){
//         more();
//     } else {
//         less();
//     }
// }

// function showMoreMessage(){
//     console.log("Больше чем 3")
// }

// function showLessMessage(){
//     console.log("Меньше чем 3")
// }

// calcSumm(0, 10, showMoreMessage, showLessMessage)

// function calcSum(one, two){
//     let sum = one + two;
//     //Возврат
//     //после return код не пишется (он не будет работать)
//     return sum
// }

// let funcResult = calcSum(1, 6)

// console.log("Результат" + funcResult)