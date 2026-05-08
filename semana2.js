    


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
let frutas = ["Uva", "Limão", "Abacaxi"]
frutas = remover(frutas, "Uva")
console.log(frutas)
shift()


