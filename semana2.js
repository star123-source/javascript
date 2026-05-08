    


    const adicionar = (lista) => {
        lista.push(frutas)
        return lista

    }
let frutas = ["Uva", "Limão"]
frutas = adicionar(frutas, "Abacaxi")
console.log(frutas)

const remover = (lista) => {
        lista.shift(frutas)
        return lista

    }

const ordemUltimoParaPrimeiro = (lista) => {
    let temp = lista[0]
    lista[0] = lista[-1] = temp
    return lista
}


let frutas = ["Uva", "Limão", "Abacaxi"]
frutas = remover(frutas, "Uva")
console.log(frutas)
shift()


