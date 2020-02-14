/*let x = 1;

const promesa1 = new Promise((resolve, reject)=>{

    if (x == 20) {
        resolve('la variable es 20');
    }else{
        reject('variable no es 20');
    }
});

promesa1.then(res =>{
    console.log('success:'+res);

})
.catch(er => {
    console.log('error '+er);

})*/

//ejemplo 2

let numero = 2;
// con esto espero que termine de resolver para recien empezar el paso 3
const promesa2 = new Promise((resolve,reject)=>{
  

    setTimeout(()=>{

        numero = (numero * 2)*10
        console.log('p2 start')
        resolve(numero)


    },2000)

});
  console.log('p1 start');

  promesa2.then(res => {
      console.log('p3 start '+res)

  });

