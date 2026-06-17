// Задание 1.
// Дан массив пользователей:

// Добавьте в конец массива двух пользователей:
// { name: 'Ann', age: 19, isAdmin: false },
// { name: 'Jack', age: 43, isAdmin: true }

const users = [
  { name: "Alex", age: 24, isAdmin: false },
  { name: "Bob", age: 13, isAdmin: false },
  { name: "John", age: 31, isAdmin: true },
  { name: "Jane", age: 20, isAdmin: false },
];

users.push(
  { name: "Ann", age: 19, isAdmin: false },
  { name: "Jack", age: 43, isAdmin: true },
);

// Задание 2.
// Используя массив пользователей users из предыдущего задания, напишите функцию getUserAverageAge(users), которая возвращает средний возраст пользователей.

const getUserAverageAge = users => {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
  }
  return sum / users.length;
};
const averegeAge = getUserAverageAge(users);
console.log(averegeAge);

// Задание 3.
// Используя массив пользователей users из предыдущего задания, напишите функцию getAllAdmins(users), которая возвращает массив всех администраторов.

const getAllAdmins = users => {
  const admins = [];

  for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === true) {
      admins.push(users[i]);
    }
  }
  return admins;
};

const adminsList = getAllAdmins(users);
console.log(adminsList);

// Задание 4.
// Напишите функцию first(arr, n), которая возвращает первые n элементов массива. Если n == 0, возвращается пустой массив [], если n == undefined, то возвращается массив с первым элементом.

const first = (arr, n) => {
  if (n === 0) {
    return [];
  }
  if (n === undefined) {
    return arr.slice(0, 1);
  }
  return arr.slice(0, n);
};

const users2 = ["1", "2", "3", "4", "5", "6"];

console.log(first(users2, 6));
console.log(first(users2, 0));
console.log(first(users2));
console.log(first(users2, 1));
