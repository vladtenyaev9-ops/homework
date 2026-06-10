
// Задача 1.
// Создайте объект person с несколькими свойствами, содержащими информацию о вас. Затем выведите значения этих свойств в консоль.

const person = {
  name: "Tema",
  surname: "Petrov",
  age: 21,
  number: "+79115643232",
  isStudent: true,
};

// Задача 2.
// Создайте функцию isEmpty, которая проверяет является ли переданный объект пустым. Если объект пуст - верните true, в противном случае false.

const emptyObject = {
  name: "Ivan",
}

const isEmpty = key => {
  for (let key in emptyObject) {
    return true;
  }
  return false;
};
console.log(isEmpty());




// Задача 3.
// Создайте объект task с несколькими свойствами: title, description, isCompleted.
// Напишите функцию cloneAndModify(object, modifications), которая с помощью оператора spread создает копию объекта и применяет изменения из объекта modifications.
// Затем с помощью цикла for in выведите все свойства полученного объекта.


const task = {
  title: " Lorem, ipsum dolor.",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, esse.",
  isCompleted: true,
}
const task3 = {
  title: " Lorem",
  description:"amet consectetur adipisicing elit. Neque, esse.",
  isCompleted: false,
}

const modifications = {
  year: 2020,
}
const modifications2 = {
  year: 2019,
}

const cloneAndModify = (object, modifications) => {
const task2 = {...object,...modifications}
for(let key in task2){
  console.log(task2[key])
}
}

cloneAndModify(task3,modifications2)

// Задача 4.
// Создайте функцию callAllMethods, которая принимает объект и вызывает все его методы.

// Пример использования:
// const myObject = {
//     method1() {
//         console.log('Метод 1 вызван');
//     },
//     method2() {
//         console.log('Метод 2 вызван');
//     },
//     property: 'Это не метод'
// };
// callAllMethods(myObject);

const myObject = {
    method1() {
        console.log('Метод 1 вызван');
    },
    method2() {
        console.log('Метод 2 вызван');
    },
    property: 'Это не метод'
};

const callAllMethods = object => {
for (let key in object){
  console.log(object[key]())
}

}

callAllMethods(myObject);