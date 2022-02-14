import operations from './operations'
import constants from './constants'
import compounds from './compounds'

const input = "abc"
const message = operations.stringToBinary(input)
const pad = operations.pad(message, 512)
const messageSchedule =  operations.scheduleSplit(pad, 32)
// operations.scheduleSplit(operations.pad(operations.stringToBinary("abc"), 512), 32)