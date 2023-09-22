import Optional from "./monads/option"

const sum = (value : number) => (other : number) => value + other

const value = new Optional<number>(4)
const result = value.bind(sum(3)).bind(sum(4))
console.log(result.isSome())