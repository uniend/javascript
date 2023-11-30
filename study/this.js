
// this는  런타임 시점에 결정된다. 

// 함수 내부에 실행될경우 

const boy = {
  name: 'mike',
  age: 26,
  job: true,
  sayHello: function(){
    console.log(`hello ${this.name}`)
  }
}
const girl = {
  name: 'jely',
  age: 12,
  job: false,
  sayHello: function(){
    console.log(`hello ${this.name}`)
  }
}

boy.sayHello();
girl.sayHello();


const mom2 = {
  name: 'jane',
  age: 56,
  sayThis: function(){
    console.log(this)
  }
  }


  mom2.sayThis()


//화살표 함수 

const mom = {
  name: 'jane',
  age: 56,
  sayThis: () => {
    console.log(this)
  }
}

mom.sayThis()