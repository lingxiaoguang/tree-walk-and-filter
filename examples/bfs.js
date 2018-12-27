import data from './data'
import { bfs } from '../index'

bfs(data, (name, depth) => {
    let pre = '';
    for(let i =0; i < depth; i++) {
        pre += '--'
    }
    console.log(pre + name)
})