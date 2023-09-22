interface Option<T>{
    value ?: T | null
}


function Some<T>(value : T | null) : Option<T>{
    return {
        value: value
    }
}

function run<T>(current : Option<T>, transformation : (_ : T) => Option<T>) : Option<T>{

    if (current.value == null){
        return Some<T>(null)
    }

    return {
        value : transformation(current?.value).value
    }
}

function sumTimes(value : number) : (number : number) => Option<number>{
    return (number) => ({
        value : value + number
    })
}

function divide(value : number) : (number : number) => Option<number>{
    return (number) => ({
        value : number / value 
    })
}


export default class Optional<T>{

    value ?: T | null

    constructor(value ?: T | null){
        this.value = value
    }

    bind(f : (_ : T) => T){
        if(this.value == null){
            return new Optional<T>(null)
        }

        return new Optional(f(this.value))

    }

    unwrap(){
        return this.value
    }

    isSome(){
        if (this.value) return true
        else return false
    }
}


