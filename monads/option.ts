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


export default class Maybe<T>{

    value ?: T | null

    constructor(value ?: T | null){
        this.value = value
    }

    bind(f : (_ : T) => Maybe<T>){
        if(this.value == null){
            return new Maybe<T>(null)
        }

        return f(this.value)

    }

    static just<U>(value : U) : Maybe<U>{
        return new Maybe<U>(value)
    }

    static nothing<U>() : Maybe<U>{
        return new Maybe<U>()
    }

    unwrap(){
        return this.value
    }

    isSome(){
        if (this.value) return true
        else return false
    }
}


