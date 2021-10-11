// async & await
// clear style of using promise :)

// 1. async
async function fetchUser() { // async라고 쓰면 프로미스로 바뀜.
  // do network reqeust in 10 secs....
  return 'ellie';
}

const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨ 
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple() {
  await delay(2000); // async안에서만 쓸 수 있다. 이거 끝날 때까지 기다려!
  return '🍎';
}

async function getBanana() {
  await delay(1000);
  return '🍌';
}

async function pickFruits() {
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

// 3. useful APIs ✨
function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
  );
}
pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);
}

pickOnlyOne().then(console.log);