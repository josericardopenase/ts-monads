import Maybe from "./monads/option"

const sum = (value : number) => (other : number) => new Maybe(value + other)

const value = Maybe.just(4)
const result = value.bind((x) => new Maybe(x + 4)).bind(sum(4))
console.log(result.unwrap())
console.log(result.isSome())

