// 1.Use strict
// added in ECMA_ES5
// when you study js(espacially Vanlia JS ).
// 호이스팅이나 순서를 무시하는 미친짓 방지용. 바닐라JS 할때는 항상 써두고시작하자.
'use strict';

// 2. Variable (변수 = 변경될 수 있는 값)
    // let (added in ES6)
    // =========!!! read && write !!!
    let globalScope = 'ohyea';
    {
    // block scope
    let name = 'jinny';
    console.log(`block scope:${name}`);
    console.log(`block scope:${globalScope}`);
    }
    console.log(`global scope:${name}`);
    console.log(`global scope:${globalScope}`);

    //🎃🎃var (before ECMA_ES5)
    // var hoisting
    // 1. why we don't use it? = (move declatation from bottom to top)
    // hoisting (끌어올리다)한다는 의미는 선언을 먼저해야하는데 init 를 나중에 한것이 모든 문서에 적용되기 때문.
    //2. ignore block scope (what the....)
    {
        cheese = 3;
        var cheese;
    }

    console.log(cheese); 

// 3. constant (const) 변함없는, kinds of fixed
// =========read only!!!

    //  immutable data type. => favor immutable data type always!!!!
    // - security :: 보안상의 문제로 방지 값을 변경하지 못하게 한다 
    // - thread safety :: 동시에 값이 변하지 않게 하기 위해서. 한번에 변경을 여러번하면 위험???
    // - reduce human mistakes 

    const constant = 1;


//4. Variable types

//1) primitive = single item =[number, string , boolean, null, undefined, symbol];
//  -> save memory sparatly 데이터 하나가 통째로 저장이된다. 개별저장(directly)
//2) object, box container
//  -> save refernce odj  =  {name :x age: y} name :data, age :data 레퍼런스로 각각 분류되어 된다

//3) function, first-class function 

    //number
    // ex) C data types for number has size int,long, short...etc.
    // but JS don't have. => it's simular like TS but it need to 선언 number.

    const integer = 177;
    const decimalNumber = 17.7;
    console.log(`value: ${integer}, type: ${typeof integer}`);
    console.log(`value:${decimalNumber}, type: ${typeof decimalNumber}`);

    //it doesn't matter same 'number data'!!!

    //🎃🎃🎃number - speicla numeric values : infinity, -infinity, NaN;
    const infinity = 1 / 0;
    const negativeInfinity = -1 /0;
    const nAn = 'not a number' /2;
    console.log(infinity);
    console.log(negativeInfinity);
    console.log(nAn);

    // string
    const char = 'c';
    const brendan = 'brendan';
    const greeting = 'hello ' + brendan;
    console.log(`value: ${greeting}, type: ${typeof greeting}`);
    const helloBob = `hi ${brendan}!`; //template literals (string)
    //빽틱을 템플릿 리터럴이라고함!!!!!!!!!!!!!!!
    console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
    console.log('value: ' + helloBob + ' type: ' + typeof helloBob);

    // boolean
    // false: 0, null, undefined, NaN, ''
    // true: any other value
    const canRead = true;
    const test = 3 < 1; // false
    console.log(`value: ${canRead}, type: ${typeof canRead}`);
    console.log(`value: ${test}, type: ${typeof test}`);

    // null
    let nothing = null; //empty 비어있음 을 뜻함 값이 없음.
    console.log(`value: ${nothing}, type: ${typeof nothing}`);

    // undefined
    let x; //값이 할당되어있지 않음!!!
    console.log(`value: ${x}, type: ${typeof x}`);

    
    //🎃🎃🎃 symbol, create unique identifiers for objects
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(symbol1 === symbol2);  //false  고유한 ID를 부여할때 쓴다.?????????
    const gSymbol1 = Symbol.for('id');
    const gSymbol2 = Symbol.for('id');
    console.log(gSymbol1 === gSymbol2); // true
    console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);
    //symbol은 그냥 출력할수 없다. must be use '.description' 


    // object, real-life object, data structure
    const jinny = { name: 'jinny', feet: 20 };
    jinny.feet = 88;

    
// 5. Dynamic typing: dynamically typed language
// C,JAVA = static type lang 
let text = 'hello';
console.log(text.charAt(0)); //h
console.log(`value: ${text}, type: ${typeof text}`); // string;
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string  숫자가 스트링으로 변함.
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
//console.log(text.charAt(0));  // error dynamic type....it's not string anymore.
//Uncaught TypeError: text.charAt is not a function 