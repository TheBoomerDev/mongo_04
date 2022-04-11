// genera un array de objetos al azar con la estrtura de: {"name":"nombreXX", "valor":0-12}
let arr = Array.from({length: 100}, (v, k) => {
    return {
        name: 'nombre'+k,
        valor: Math.floor(Math.random()*13)
    }
})

let masGrande = {"name":"", "valor":0}

for (let idx = 0; idx < arr.length; idx++) {
    const item = arr[idx];
    if(item.valor > masGrande.valor){
        masGrande = item
    }
}