// console.log("Promise"); 

// try{ 
//   let a = 10; 
//   let a = 30; 
//   console.log("Hello world");
// } catch(e){
//   console.log(e); 
// }


// console.log('start1');
// setTimeout(() => {
//   console.log('start2');
// },3000); 
// console.log('start3');
/*function go(){
  console.log("Go!");
}


const avante = (callback) => {
  setTimeout(() => {
    console.log('아반떼');
    callback();
  },3000);
}

const sonata = (callback) => {
  setTimeout(() => {
    console.log('소나타');
    callback();
  },1000);
}

const grandeur = (callback) => {
  setTimeout(() => {
    console.log('그랜져');
    callback();
  },2000);
}

avante();
sonata();
grandeur();




*/


/*
const pr = new Promise( (resolve, reject) => { 


      resolve
      reject
} )


{
  state:pending ( 대기 ),
  result:undefined
}

{
  state:fulfilled ( 이행 ) 
  result: "" 
}

{
  state: rejected ( 거부 ) 
  result 

}

*/ 

/*
const pr = new Promise((resolve,reject) => {
  setTimeout(()=>{
    reject('성공!');
  },3000); 

}); 


//then(callback) 이행되었을 떄 then 콜백함수 실행. 
pr.then( (result)=>{ //이행되었을 때 실행. 
  console.log(result); 
}).catch((error)=>{
  console.log(error);
})

*/

const avante = () =>{ 
  return new Promise((resolve,reject) => {
    setTimeout( () => {
      resolve('아반떼^^');
    }, 3000);
  })
}
const sonata = () =>{ 
  return new Promise((resolve,reject) => {
    setTimeout( () => {
      resolve('소나타^^');
    }, 2000);
  })
}
const grandeur = () =>{ 
  return new Promise((resolve,reject) => {
    setTimeout( () => {
      resolve('그랜져^^');
    }, 1000);
  })
}
/* 
//Promise 
console.time('x');
avante().then( (result) => {
  console.log(result); 
  return sonata(); 
}).then( (result) => {
  console.log(result); 
  return grandeur(); 
}).then( (result) => {
  console.log(result);  
}).catch((error) => {
  console.log(error);
}).finally(() => {
  console.log('End');
  console.timeEnd('x'); 
})

*/
//new 함수를 -> 객채로 변환함. 

//Promise.all(배열)  //병렬처리. 
console.time('x');

Promise.all([avante(), sonata(), grandeur()]).then((result) => {
  console.log(result); 
  console.timeEnd('x'); 
})



//try .. catch문  = 예외처리문 


//async  
//반환 값이 프로미스 객체로 나옴. 
// 프로미스 객체란?  상태값과 리절트값 
//{ status:?, result:? }
//return 안에 있는 값은 Promise 객체 안에 있는 result에 값을 넣어 준다. 
async function Car(name){ // function 앞에 async 를 붙이면 결과가 프로미스로 나옴. 
  
  return Promise.reject(name); 
}

Car('avante').then(result => { 
  console.log(result); 
}).catch((error)=>{
  console.log(error); 
})

//await 
