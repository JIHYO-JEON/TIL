# Pro-tips

## Converts object to boolean
```JavaScript
Set.prototype.contains = function (value) {
  return !!this[value];
};
```

## Ternary Operator
```JavaScript
// โ Bad Code ๐ฉ
function getResult(score) {
  let result;
  if (score > 5) {
    result = '๐';
  } else if (score <= 5) {
    result = '๐';
  }
  return result;
}

// โ Good Code โจ
function getResult(score) {
  return score > 5 ? '๐' : '๐';
}
```

## Nullish coalescing operator
leftexpr ?? rightexpr

```JavaScript
// โ Bad Code ๐ฉ
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message = 'Nothing to display ๐';
  }
  console.log(message);
}

// โ Good Code โจ
function printMessage(text) {
  const message = text ?? 'Nothing to display ๐';
  console.log(message); // undefined, null ๋ชจ๋ nothing to display๋ก ์ถ๋ ฅ๋จ.
}

// ๐จ Default parameter is only for undefined
function printMessage(text = 'Nothing to display ๐') {
  console.log(text); // undefined๋ nothing to display๋ก ์ถ๋ ฅ๋์ง๋ง, null์ null๋ก ์ถ๋ ฅ๋จ!!!
}

// ๐จ Logical OR operator ||
function printMessage(text) {
  const message = text || 'Nothing to display ๐';
  console.log(message); //  text๊ฐ ๊ฑฐ์ง์ธ ๊ฒฝ์ฐ, false, 0, -0, NaN, '', ``, "" ๋ชจ๋ Nothing to display๋ก ์ถ๋ ฅ๋จ!!!!
}
```
```JavaScript
function getInitialState() {
  return null;
}
function fetchFromServer() {
  return 'Hiya from ๐ป';
}

const result = getInitialState() ?? fetchFromServer();

console.log(result); // ์ด๋ ๊ฒ ํจ์ ๊ฒฐ๊ณผ๊ฐ์ ์ด์ฌ์ธํ  ๋๋ ์ฌ์ฉํ  ์ ์์!
```

## Object Destructuring
```JavaScript
const person = {
  name: 'Julia',
  age: 20,
  phone: '0107777777',
};

// โ Bad Code ๐ฉ
function displayPerson(person) {
  displayAvatar(person.name);
  displayName(person.name);
  displayProfile(person.name, person.age);
}

// โ Bad Code ๐ฉ
function displayPerson(person) {
  // local var์ ์ด์ฉํ ๋ฐฉ๋ฒ...
  const name = person.name;
  const age = person.age;
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}

// โ Good Code โจ
function displayPerson(person) {
  const { name, age } = person; // ํค์ ๋์ผํ ์ด๋ฆ์ผ๋ก ์ค์ ํ๊ฒ ๋๋ฉด ์ค๋ธ์ ํธ์ ์๋ ๊ฒ๋ค์ด ์๋์ผ๋ก ํ ๋น๋์ด์ง.
  displayAvatar(name);
  displayName(name);
  displayProfile(name, age);
}
```

## Spread Syntax - Object
Spread Syntax๋ array ๋ฟ๋ง ์๋๋ผ, object์๋ ์ฌ์ฉํ  ์ ์๋ค!
๊ทธ๋ฆฌ๊ณ  mutate๋ ํจ์ฌ ์ฝ๋ค!

```JavaScript
const item = { type: '๐', size: 'M' };
const detail = { price: 20, made: 'Korea', gender: 'M' };

// โ Bad Code ๐ฉ
item['price'] = detail.price; // manually 
// ํ์ง๋ง ์ค๋ธ์ ํธ๋ฅผ mutationํ๋ ๊ฒ์ ์ข์ง ์๋ค.โ

// โ Bad Code ๐ฉ
const newObject = new Object();
newObject['type'] = item.type;
newObject['size'] = item.size;
newObject['price'] = detail.price;
newObject['made'] = detail.made;
newObject['gender'] = detail.gender;

// โ Bad Code ๐ฉ
const newObject2 = {
  type: item.type,
  size: item.size,
  price: detail.price,
  made: detail.made,
  gender: detail.gender,
};

// โ Good Code โจ
const shirt0 = Object.assign(item, detail);

// โ Better! Code โจ
const shirt1 = { ...item, ...detail}; // ์ด๋ ๊ฒ ํ๋ฉด object assign๊ณผ ๊ฐ์ ๊ฒฐ๊ณผ๋ฅผ ์ป์ ์ ์๊ณ ,
const shirt = { ...item, ...detail, price: 30 }; // ์ด๋ ๊ฒ overwriteํ  ๊ฒ๋ ๋ฐ๋ก ์ถ๊ฐํด์ค ์ ์์.
```

```JavaScript
let arr = ['apple', 'banana', 'orange'];
// push
arr = [...arr, 'newitem'];
// unshift
arr = ['newitem', ...arr]
```

## Optional Chaining
```JavaScript
const bob = {
  name: 'Julia',
  age: 20,
};
const anna = {
  name: 'Julia',
  age: 20,
  job: {
    title: 'Software Engineer',
  },
};

// โ Bad Code ๐ฉ
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// โ Good Code โจ
function displayJobTitle(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// โ Good Code โจ
function displayJobTitle(person) {
  const title = person.job?.title ?? 'No Job Yet ๐ฅ';
  console.log(title);
}
```

## Loops
```JavaScript
// Looping
const items = [1, 2, 3, 4, 5, 6];

// โ Bad Code ๐ฉ
function getAllEvens(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    if (items[i] % 2 === 0) {
      result.push(items[i]);
    }
  }
  return result;
}

function multiplyByFour(items) {
  const result = [];
  for (let i = 0; i < items.length; i++) {
    result.push(items[i] * 4);
  }
  return result;
}

function sumArray(items) {
  let sum = 0;
  for (let i = 0; i < items.length; i++) {
    sum += items[i];
  }
  return sum;
}

const evens = getAllEvens(items);
const multiple = multiplyByFour(evens);
const sum = sumArray(multiple);
console.log(sum);

// โ Good Code โจ
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

// โ Good Code โจ
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);
console.log(result);
```