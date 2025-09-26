// defining constants
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const ADD_USER = 'ADD_USER'



// state
const initialCountState = {
    count:0,
}
const initialUserState = {
    count:[
        {name:'anamol hasan'}
    ]
}

// action - object - type, payload
// INCREMENt COUNTER
const incrementCounter = () => {
    return {
            type:INCREMENT
        }
}
const addUserj = () => {
    return {
            type:ADD_USER
        }
}










// DECREMENT COUNTER
{
    type:DECREMENT
}