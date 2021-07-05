'use strict';

//JavaScript classes
// ES6 start
// prototype-base
//class에는 constructor 와 method로 구성되어있고 따로 쓰기도한다.
//
class person{
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    } 
    // methods
    speak(){
        console.log(`${this.name}: hey!!!!`)
    }
}

const jinny =  new person ('jinny' , 30);
console.log(jinny.name);
console.log(jinny.age);
jinny.speak();




// 2. Getter and setters
//vending mechine...동전 넣어야되는데 말도 안되는거 집어넣을수도있으니 방지.
//자판기뜯어서 커피 종류 바꾸고 그러면 안되니까 프라이빗으로 설정하는것과 동일.
class User {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
    }
  
    get age() {  //게터를 정의하는 순간 this.age는 get을 읽어오게된다.
      return this._age; //
    }
  
    set age(value) {  //값을 설정하는것이라서 밸류라는 값을 받아와야함.
      // if (value < 0) {
      //   throw Error('age can not be negative');
      // } 즉 세터를  = age를 밸류값으로 호출한다. 
      this._age = value < 0 ? 0 : value; // 지정된 밸류를 쓰겠다고 함.
    }
  }
  
  const user1 = new User('Steve', 'Job', -1);
  console.log(user1.age);


  
// 3. Fields (public, private) ==>최근에 추가되었음 알고만 있도록 ㅇㅇ
// Too soon!
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Class_fields
class Experiment {
    publicField = 2;
    #privateField = 0;
  }
  const experiment = new Experiment();
  console.log(experiment.publicField);
  console.log(experiment.privateField);
  

  
// 4. Static properties and methods ==>최근에 추가되었음 알고만 있도록 ㅇㅇ
// Too soon! ===> 타입스크립트에서 많이 씀
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
      this.articleNumber = articleNumber;
    }
  
    static printPublisher() {
      console.log(Article.publisher);
    }
  }
  
  const article1 = new Article(1);
  const article2 = new Article(2);
  console.log(Article.publisher);
  Article.printPublisher();
  



//상속과 다양성.
// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
      this.width = width;
      this.height = height;
      this.color = color;
    }
  
    draw() {
      console.log(`drawing ${this.color} color!`);
    }
  
    getArea() {
      return this.width * this.height;
    }
  }
  
  class Rectangle extends Shape {} //Extend 연장한다 쉐입을 확장? 상속된다.

  class Triangle extends Shape { //overriding 필요한 함수들만 수정할수도 있다.
    draw() {
      super.draw(); //super.draw()를 쓰면 부모의 함수도 사용하면서 추가한것도 사용가능.
      console.log('🔺');
    }
    getArea() {
      return (this.width * this.height) / 2;
    }
  
    toString() {
      return `Triangle: color: ${this.color}`;
    }
  }
  
  const rectangle = new Rectangle(20, 20, 'blue');
  rectangle.draw();
  console.log(rectangle.getArea());
  const triangle = new Triangle(20, 20, 'red');
  triangle.draw();
  console.log(triangle.getArea());
  


// 6. Class checking: instanceOf
console.log(rectangle instanceof Rectangle); //  obj 가  사용되서 만들어 졌는지 아닌지 체크하는 것.
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); // true  object > class
console.log(triangle.toString());

let obj = { value: 5 };
function change(value) {
  value.value = 7;
}
change(obj);
console.log(obj);