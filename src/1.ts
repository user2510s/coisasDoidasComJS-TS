import { v4 as uuidv4 } from 'uuid'



const array = Array.from({length : 5}, () => uuidv4() )


for (let i = 1; i < array.length; i++) {
    for (let x = 0; x < array.length; x++) {
        console.log(i++, Object.assign({}, array))
    }
}

