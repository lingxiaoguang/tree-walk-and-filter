import data from './data'
import { dfsFilter } from '../index'

const copy = dfsFilter(data,(name, depth) => {}, (name) => {
    return name.indexOf('1') === -1
})

console.log(copy)