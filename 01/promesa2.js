
let usuarios = [{
    id:1,
    nombre:'cristian'
},
{
     id: 2,
     nombre: 'david'
}];

let telefonos = [{
   id:1,
   telefono:333 
},
{
  id:2,
  telefonos:555
}]

const obtenerUsuario = id =>{
    return new Promise((resolve,reject)=>{
        if(usuarios.find(usuario => usuario.id === id)){
            console.log('usuario   ENCONTRADO');
            resolve(obtenerNumero(id))
        }else{
            reject('usuario no encontrado')
        }

    });

};

const obtenerNumero = id =>{
    return new Promise((resolve, reject)=>{
        if (telefonos.find(telefono=> telefono.id === id)) {
            resolve('telefono encontrado');
        }else{
            reject('el telefono no se ha podido encontrar')
        }

    })

};

obtenerUsuario(2)
    .then(res =>{
       return res;

    })
    .then(mensaje => {
        console.log(mensaje)
    })
    .catch(er =>{
        console.error(er)
    });