let fnAsync = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Gollum')
        }, 30000)
    })
}


let fnSync = ()=>{

    let subs
    subs.subscribe((error, data)=>{

    })


    setTimeout(()=>{
        console.log('Hola Mundo')
    }, 5000)
}

let fnSincrona = ()=>{
    console.log('Hola Mundo')
}

let fnAsyncrona = (element)=>{
    const callback = ()=>{
        console.log('Gollum:', element)
    }
    setTimeout(callback, 3000)
}

let pasameCallback = (numero, fnCall) => {
    console.log('Numero:', numero)

    fnCall()
}
pasameCallback( 666, fnSincrona)


let ejemplo = async ()=>{

    // crea un array de 100 elementos enteros
    let arr = Array.from({length: 100}, (v, k) => k)

    for (let idx = 0; idx < arr.length; idx++) {
        const element = arr[idx];
        console.log('Elemento-1', element)
        fnSincrona()
        fnAsyncrona(1+element)
        console.log('Elemento-2', element)
    }

    arr.forEach(element=>{
        // console.log('Elemento', element)
    })




}
ejemplo()