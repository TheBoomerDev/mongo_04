let fnAsync = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('Gollum')
        }, 3000)
    })
}

let fnSync = ()=>{
    setTimeout(()=>{
        console.log('Hola Mundo')
    }, 1000)
}

let ejemplo = async ()=>{

    let ar = [1,2,3,4,5,6,7,8,9,10]

    ar.forEach(item=>{
        fnAsync().then(res=>{
            console.log('Resultado:', res)
        }).catch(err=>{})
        console.log(item)
        fnSync()
    })

}
ejemplo()