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
/*
let obj = { 1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20 };
let result = {};
for (let key in obj) {
  let value = obj[key];
  if (result[value] === undefined) {
    result[value] = [Number(key)];
  } else {
    result[value].push(Number(key));
  }
}
console.log(result);
*/
////////_Object-4_//////////
/*
let obj1 = { a: "aa", d: "dd" };
let obj2 = { b: "bb", c: "cc" };
let result = {};
for (let key in obj1) {
  if (!obj2[key]) result[key] = obj1[key];
}
for (let key in obj2) {
  if (!obj1[key]) result[key] = obj2[key];
}
*/
////////_Object-5_//////////
/*
let products = [
  { name: "Product 1", price: 20000, discount: 10, quantity: 5 },
  { name: "Product 2", price: 10000, discount: 20, quantity: 4 },
  { name: "Product 3", price: 15000, discount: 8, quantity: 10 },
  { name: "Product 4", price: 18000, discount: 5, quantity: 6 },
  { name: "Product 5", price: 5000, discount: 10, quantity: 16 },
];
let sum = 0;
for (let i = 0; i < products.length; i++) {
  let javob = products[i].price * (1 - products[i].discount / 100);
  sum += javob * products[i].quantity;
}
console.log(sum);
*/
////////_Object-6_//////////
////////_Object-7_//////////
/*
let obj = {
  it: 20,
  mushuk: 10,
  sigir: 200,
  tovuq: 2,
};
let arr = [];
for (let key in obj) {
  arr.push(key);
  arr.push(obj[key]);
}
console.log(arr);
*/
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
/*
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
  let { Name } = product;
  let { name, price } = company;
};
console.log(Name);
console.log(price);
console.log(name);
*/
////////_Object-12_/////////
////////_Object-13_/////////
/*
function baxolar() {
  let baxo = parseFloat(prompt("balni kiriting:"));
  if (!isNaN(baxo)) {
    if (baxo >= 90 && baxo <= 100) {
      console.log("5 baxo olibsiz");
    } else if (baxo >= 80 && baxo < 90) {
      console.log("4 baxo olibsiz");
    } else if (baxo >= 70 && baxo < 80) {
      console.log("3 baxo olibsiz");
    } else {
      console.log("2 baxo olibsiz");
    }
  } else {
    console.log("");
  }
}

baxolar();
*/
////////_Object-14_/////////
/*
let isPassed = 70;
let score = +prompt("");
if (score >= isPassed) {
  console.log(true);
} else {
  console.log(false);
}
*/
////////_Object-15_/////////
let isPassed = 70;
let yes = 0;
let no = 0;
let pupils = [
  {
    name: "Elbek",
    protcent: 95,
  },
  {
    name: "Zafar",
    protcent: 78,
  },
  {
    name: "Aziz",
    protcent: 83,
  },
  {
    name: "Jasur",
    protcent: 88,
  },
  {
    name: "Bobur",
    protcent: 66,
  },
  {
    name: "Kamron",
    protcent: 75,
  },
];
for (let i = 0; i < pupils.length; i++) {
  if (pupils[i].protcent >= isPassed) {
    yes++;
  } else {
    no++;
  }
}
console.log(`O'ta olganlar soni ${yes}ta`);
console.log(`O'ta olmaganlar soni ${no}ta`);
