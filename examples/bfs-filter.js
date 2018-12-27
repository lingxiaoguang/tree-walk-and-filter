import data from './data'
import { bfsFilter } from '../index'

const copy = bfsFilter(data,(name, depth) => {}, (name) => {
    return name.indexOf('1') === -1
})

console.log(copy)