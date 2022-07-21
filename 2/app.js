// let obj = {
//     username: 'John',
//     folowers: [
//     {
//         username:'John',
//     },
//     {
//         username: 'Joe'
//     },
//     {
//         username: 'Jack',
//     },
//     {
//         username: [
//             {
//                 age:18
//             },
//             {
//                 age: 10
//             },
//             {
//                 age: [
//                     {
//                         number: 29
//                     },
//                     {
//                         number: [
//                             {
//                                 color: 'red'
//                             },
//                             {
//                                 color: 'black'
//                             }
//                         ]
//                     }
//                 ]
//             }
//         ]
//     }
//     ]
// }

// console.log(obj.folowers[3].username[2].age[1].number[0].color);

// let i = 0; //i++

// i = i + 1

// let arr = [
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
     
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     },
//     {
//         username: 'John',
//         last_name: 'Golt',
//     }
// ]

// for(let i = 2; i < arr.length; i++){
//     console.log(arr[i].username, arr[i].last_name);
// }

// for(let i = 0; i < arr.length; i++){
//     if(i == 2) {
//         break;
//     } else {
//         console.log(arr[i])
//     }
// }


// FOR OF

// for(let user of arr){
//    console.log(user)
// }

// FOR IN 

// let obj = {
//     key1: 'a1',
//     key1: 'a1',
//     key1: 'a1',
//     key1: 'a1',
// }

// for(let item in obj){
//     console.log(obj[item])
// }

// let i = 10;
// while(i > -3){
//     console.log("Hello", i)
//     i--
// }

// let i = 0;

// while(i < 7){
//     console.log("Hello"),
//     i++
// }

// let a = 5;
// let A = "второе значение. не одно и тоже";  

// console.log(a)

const users = [
    {
        username: 'Misha',
        salary: 500
    },
    {
        username: 'Andrei',
        salary: 5000
    },
    {
        username: 'Olya',
        salary: 10000
    }
]

const filteredUser = [];

for(let users of users){
    if(user.salary > 500){
        filteredUser.push(user)
    }
}
console.log(filteredUser)

const filtered = users.filter(user => user.salary > 500)
console.log(filtered)