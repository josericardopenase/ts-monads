interface Logged<T>{
    value : T,
    logs : string[]
}

function startTracking<T>(value : T) : Logged<T>{
    return {
        value : value,
        logs : []
    }
}

function runWithLogs<T>(input : Logged<T>, transform : (_ : T) => Logged<T>) : Logged<T>{

    const transformed = transform(input.value)

    return {
        value : transformed.value,
        logs: input.logs.concat(transformed.logs)
    }
}

function sum2(value : number) : Logged<number>{
    return {
        value : value + 2,
        logs: ['summed 2 to the value']
    }
}

function multiply4(value : number) : Logged<number>{
    return {
        value : value + 2,
        logs: ['multiplied 4 to the value']
    }
}


const value = startTracking(4)
const final_result = runWithLogs(runWithLogs(value, sum2), multiply4)

console.log(final_result)