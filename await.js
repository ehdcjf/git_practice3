function 자동차(name){ 
  return new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve(name);
    },3000)
  })
}


//콜백 -> 프로미스 -> 어씬크 어웨이트. 
async function 자동차리스트(){ 
  const carName1 = await 자동차('구아방'); 
  console.log(carName1); 
  const carName2 = await 자동차('소나타'); 
  console.log(carName2); 
  const carName3 = await 자동차('그랜져'); 
  console.log(carName3); 
}

자동차리스트(); 

function 자동차리스트2(){ 
  const result =  자동차('소나타'); //안기다리고 계속 실행해서 값을 못받음;;  
  console.log(result); 
}

자동차리스트(); 