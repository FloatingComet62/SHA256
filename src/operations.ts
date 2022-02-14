const stringToBinary = (string: string) => {
    return string
        .split(``)
        .map((char) => char
                        .charCodeAt(0)
                        .toString(2))
        .join(``)
}
const binaryToString = (binary: string) => {
    return binary
        .split(``)
        .map(bin => String
                        .fromCharCode(parseInt(bin, 2)))
                        .join(``)
}
const numberToBinary = (number: number) => {
    if(number >= 0) return number.toString(2)
    else return (~number).toString(2)
}
const binaryToNumber = (string: string) => {
    return parseInt(string, 2)
}
const rightShift = (word: string, shiftHowFar: number) => {
    let binaryWord = stringToBinary(word)
    let binaryWordArray = binaryWord.split(``)

    for(let i = 0; i<shiftHowFar; i++){
        binaryWordArray.pop()
        binaryWordArray = [ `0`, ...binaryWordArray ]
    }

    binaryWord = binaryWordArray.join(``)

    return binaryWord
}
const rightRotate = (word: string, shiftHowFar: number) => {
    let binaryWord = stringToBinary(word)
    let binaryWordArray = binaryWord.split(``)

    for(let i = 0; i<shiftHowFar; i++){
        const popedItem = binaryWordArray.pop() || ``
        binaryWordArray = [ popedItem, ...binaryWordArray ]
    }

    binaryWord = binaryWordArray.join(``)

    return binaryWord
}
const exclusiveOr = (...args: Array<string>) => {
    let numberOfOnes = 0

    args.filter((value) => {if(value == `1`) numberOfOnes++})
    
    if (numberOfOnes==1) return 1
    else return 0
}
const addBinary = (...args: Array<string>) => {
    const argsInt = args.map((value)=> binaryToNumber(value))
    let sum = 0

    for(let i=0; i<argsInt.length; i++){
        const arg = argsInt[i]

        sum += arg
    }

    return numberToBinary(sum)
}
const modulo = (number: number, powInt: number) => {
    const maxInt = Math.pow(2, powInt)
    let output = 0

    if(maxInt < number) output = number - maxInt

    return output
}

export default {
    stringToBinary,
    binaryToString,
    numberToBinary,
    binaryToNumber,
    rightShift,
    rightRotate,
    exclusiveOr,
    addBinary,
    modulo,
}