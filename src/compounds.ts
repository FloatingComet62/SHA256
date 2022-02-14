import operations from './operations'

const sigma0 = (input: string) => {
    const action1 = operations.rightRotate(input, 7)
    const action2 = operations.rightRotate(input, 18)
    const action3 = operations.rightRotate(input, 3)

    return operations.exclusiveOr(action1, action2, action3)
}
const sigma1 = (input: string) => {
    const action1 = operations.rightRotate(input, 17)
    const action2 = operations.rightRotate(input, 19)
    const action3 = operations.rightRotate(input, 10)

    return operations.exclusiveOr(action1, action2, action3)
}
const Sigma0 = (input: string) => {
    const action1 = operations.rightRotate(input, 2)
    const action2 = operations.rightRotate(input, 13)
    const action3 = operations.rightRotate(input, 22)

    return operations.exclusiveOr(action1, action2, action3)
}
const Sigma1 = (input: string) => {
    const action1 = operations.rightRotate(input, 6)
    const action2 = operations.rightRotate(input, 11)
    const action3 = operations.rightRotate(input, 25)

    return operations.exclusiveOr(action1, action2, action3)
}
const choice = (...args: Array<string>) => {
    const decider = args[0].split(``)
    const choice1 = args[1].split(``)
    const choice2 = args[2].split(``)
    let output = ""

    if(decider.length!=choice1.length || decider.length!=choice2.length) throw "The choices should be of the same length as the decider"

    for(let i=0; i<decider.length; i++){
        const deciderChar = decider[i]
        const choice1Char = choice1[i]
        const choice2Char = choice2[i]

        if(deciderChar=="0") output += choice1Char
        if(deciderChar=="1") output += choice2Char
    }

    return output
}

export default {
    sigma0,
    sigma1,
    Sigma0,
    Sigma1,
}