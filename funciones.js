/*
Estas 4 formas de declarar una función son exactamente
iguales

//*/

function nombreFn (param1){
    return true
}

const nombreFn2 = function blahblahblah(param1){
    return true
}

const nombreFn3 = function (param1){
    return true
}

// ARROW Function = >
const nombreFn4 = (param1) => {
    return true
}



/*
    Como manejar parametros en funciones
//*/

const func1 = (param1, param2) => {
    console.log('param1:', param1)
    console.log('param2:', param2)
}

const func2 = (param1, param2, param3) => {
    console.log('param1:', param1)
    console.log('param2:', param2)
    console.log('param3:', param3)
    //func1(param1, param3)
}

const cosasDelDirecto = () => {

    const var1 = 'PARAM-1'
    const var2 = 'PARAM-2'
    const var3 = 'PARAM-3'

    func1(var1, var2)
    func1(var1)
    func1()

    func2(var1, var3)


    // crea un array con nombres del 1 a 100
    let nombres = []
    for (let idx = 1; idx <= 100; idx++) {
        nombres.push("Name-"+idx)
    }

    const printName = (name)=>{
        console.log(name)
    }

    // Recorre todos lo elementos del array sin alterarlos
    nombres.forEach((element, indice, array)=>{
        console.log(element)
    })
    nombres.forEach(printName)

    // Cambia el contenido del array por el objeto que devolvamos por return
    const otrosNombres = nombres.map((element, indice, array)=>{
        return 'Cosa-Rara-Chico-'+indice
    })

    const cambiaNombres = (element, indice) => {
        if(indice % 2 == 0){
            return 'PAR: '+element
        }
        return 'IMPAR: '+element

    }

    const nuevoNombre = cambiaNombres('Pepe', 1)

    const nombresPares = nombres.map((element, indice) => {
        if(indice % 2 == 0){
            return 'PAR: '+element
        }
        return 'IMPAR: '+element

    })


    // Filta los elementos pares y los mete en filtrado
    const filtrado = nombres.filter((element, indice, array)=>{
        return (indice % 2 == 0)
    })

    console.log(nombres)
    console.log(otrosNombres)
    console.log(filtrado)

}
cosasDelDirecto()
