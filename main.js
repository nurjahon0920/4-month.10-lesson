////////_Object-1_//////////
/*
function separateNumberToClasses(num) {
    let obj = {};
    let strNum = num.toString();
    let numberClasses = [
        "birlar",
    "minglar",
    "millionlar",
    "milliardlar",
    "trillionlar",
];
let j = 0;
  for (let i = strNum.length; i >= 0; i -= 3) {
      let firstIndex = i >= 3 ? i - 3 : i - 1;
    let lastIndex = i === 0 ? i + 1 : i;
    obj[numberClasses[j]] = strNum.slice(firstIndex, lastIndex);
    j++;
  }
  
  return obj;
}
console.log(separateNumberToClasses(8945472985629));
*/
////////_Object-2_//////////
/*
let books = [
  {
    title: "Halqa",
    author: "Akrom Malik",
    alreadyRead: false,
  },
  {
    title: "Dunyo ishlari",
    author: "O'tkir Hoshimov",
    alreadyRead: true,
  },
  {
    title: "Vaqtning qadri",
    author: "Abdulfattoh Abu G'udda",
    alreadyRead: false,
  },
];

for (let i = 0; i < books.length; i++) {
  let book = books[i];
  if (book.alreadyRead) {
    console.log(
      `${i + 1}\) ${book.author}ning "${book.title}" kitobi o'qilgan;`
    );
  } else {
    console.log(
      `${i + 1}\) ${book.author}ning "${book.title}" kitobi o'qilmagan;`
    );
  }
}
*/
////////_Object-3_//////////

////////_Object-4_//////////
////////_Object-5_//////////
////////_Object-6_//////////
////////_Object-7_//////////
////////_Object-8_//////////
////////_Object-9_//////////
/*
let right_answers = {
  1: "B",
  2: "A",
  3: "C",
  4: "D",
  5: "B",
  6: "C",
  7: "A",
  8: "D",
  9: "A",
  10: "B",
};
let my_answers = {
  1: "C",
  2: "A",
  3: "D",
  4: "D",
  5: "B",
  6: "C",
  7: "B",
  8: "C",
  9: "A",
  10: "C",
};
let correctAnswer = 0;
let incorrectAnswer = 0;
for (let count in right_answers) {
  if (right_answers[count] === my_answers[count]) {
    correctAnswer++;
  } else {
    incorrectAnswer++;
  }
}
console.log(`To'g'ri javoblar soni: ${correctAnswer}`);
console.log(`Noto'g'ri javoblar soni: ${incorrectAnswer}`);
*/
////////_Object-10_/////////
/*
function multiplyValues(obj, n) {
  let res = {};
  let keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    let key = keys[i];
    if (obj.hasOwnProperty(key)) {
      res[key] = obj[key] * n;
    }
  }
  return res;
}
let obj = { a: 2, b: 3, c: 4, d: 6 };
let n = +prompt("Son kiriting: ");
let result = multiplyValues(obj, n);
console.log(result);
*/
////////_Object-11_/////////
let product = {
  Name: "Iphone 14",
  company: {
    name: "Apple",
    price: "200 mlrd",
    founder: {
      firstName: "Steve",
      lastName: "Jobs",
      birthDate: 1950,
    },
  },
};

let { Name } = product;
let { name, price } = company;

console.log(Name);
console.log(price);
console.log(name);
////////_Object-12_/////////
////////_Object-13_/////////
////////_Object-14_/////////
////////_Object-15_/////////
