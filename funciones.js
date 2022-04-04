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
    func1(param1, param3)
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

    nombres.forEach(printName)

}
cosasDelDirecto()
