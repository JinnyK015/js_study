'use strict';

  
// 1. String concatenation
    console.log('my' + ' cat');
    console.log('1' + 2);
    console.log(`string literals: 1 + 2 = ${1 + 2}`);
 // 줄바꿈 line enter
 console.log("jinny's \n cake"); //  \n 줄바꿈 \t tab키랑 동일 


 // 2. Numeric operators
    console.log(1 + 1); // add
    console.log(1 - 1); // substract
    console.log(1 / 1); // divide
    console.log(1 * 1); // multiply
    console.log(5 % 2); // remainder
    console.log(2 ** 3); // exponentiation 🎇🎇


// 3. Increment and decrement operators
    let counter = 2;
    const preIncrement = ++counter;
    // counter = counter + 1;
    // preIncrement = counter;

    console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
    const postIncrement = counter++;
    // postIncrement = counter;
    // counter = counter + 1;

    console.log(`postIncrement: ${postIncrement}, counter: ${counter}`);
    const preDecrement = --counter; // 앞에두면 바로 업데이트
    console.log(`preDecrement: ${preDecrement}, counter: ${counter}`);
    const postDecrement = counter--; // 뒤에 두면 다음항목에 업데이트
    console.log(`postDecrement: ${postDecrement}, counter: ${counter}`);


// 4. Assignment operators
    let x = 3;
    let y = 6;
    x += y; // x = x + y;
    x -= y;
    x *= y;
    x /= y; 



// 5. Comparison operators
    console.log(10 < 6); // less than
    console.log(10 <= 6); // less than or equal
    console.log(10 > 6); // greater than
    console.log(10 >= 6); // greater than or equal


// 6. Logical operators: || (or), && (and), ! (not)
    const value1 = true;
    const value2 = 4 < 2;

    // || (or), finds the first truthy value
    console.log(`or: ${value1 || value2 || check()}`);
// 가장 오래걸리는 연산자를 뒤에 밀어두도록한다. reduce time for 연산

    // && (and), finds the first falsy value
    console.log(`and: ${value1 && value2 && check()}`);
//똑같이 heavy 한 연산자는 뒤로 보내서 f가나오면 바로 f를 내보내게한다.


    // often used to compress long if-statement
    // nullableObject && nullableObject.something🎃🎃🎃🎃

    function check() {
    for (let i = 0; i < 10; i++) {
        //wasting time
        console.log('😱');
    }
    return true;
    }

    // ! (not)
    console.log(!value1);


// 7. Equality
    const stringFive = '5';
    const numberFive = 5;

    // == loose equality, with type conversion
    console.log(stringFive == numberFive);
    console.log(stringFive != numberFive);

    // === strict equality, no type conversion 더 엄격함으로 이걸 더 쓰도록...
    console.log(stringFive === numberFive);
    console.log(stringFive !== numberFive);

    
    // object equality by reference
    const ellie1 = { name: 'ellie' };
    const ellie2 = { name: 'ellie' };
    const ellie3 = ellie1;
    console.log(ellie1 == ellie2); // F 값이 같지만 레퍼가 동일하지 않음으로...틀림
    console.log(ellie1 === ellie2); // F
    console.log(ellie1 === ellie3); // TRUE

    // equality - puzzler
    console.log(0 == false); // T 0은 false로 간주된다 고로 T
    console.log(0 === false); // F 타입이 맞지 않음으로 F
    console.log('' == false); // T 
    console.log('' === false); // F  공백문자열은 Boolean이 아님으로 F
    console.log(null == undefined); // T
    console.log(null === undefined); // F



//🍳🍳🍳🧇🧇🧇🥞🥞🥞🌟🧭🧭🌈🌟
// 8. Conditional operators: if
// if, else if, else
const name = 'jinny';
if (name === 'jinny') {
  console.log('Welcome, jinny!');
} else if (name === 'coder') {
  console.log('You like cheese');
} else {
  console.log('unkwnon');
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no');
// 조건문이 맞으면 ?의 first value 아니면 second value



//🍳🍳🍳🧇🧇🧇🥞🥞🥞🌟🧭🧭🌈🌟

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

//if else if else를 반복하게되면 switch를 사용하는게 좋다.
const browser = 'IE';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;  // case 가 조건에 부합하면 아래 명령을 출력하고 break 를만나면 멈춘다.
  case 'Chrome':
  case 'Firefox':
    console.log('love you!'); // 케이스를 연달아쓰면 출력하고 break를 만나멈추기까지하고 케이스를 다시 간다.
    break;
  default:
    console.log('same all!');
    break;
}



// 11. Loops
// while loop, while the condition is truthy,
// body code is executed.
let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

// do while loop, body code is executed first,
// then check the condition.
do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

for (let i = 3; i > 0; i = i - 2) {
  // inline variable declaration
  console.log(`inline variable for: ${i}`);
}

// nested loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}



//break, coutinue
//💜💜💜💜💜💜💜💜Quiz💜💜💜💜💜💜💜💜
// Q1. iterate from 0 to 10 and print only even numbers (use continue)
let even =[];
for(let i = 0; i < 11; i++){
  if (i % 2 === 0) {
    even.push(i);
    console.log(`${i} // ${even}`);
  }
}
// Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)

for(let i =0; i < 11; i++){
  if (i > 8){
    break;
  }
  console.log(i);
}



