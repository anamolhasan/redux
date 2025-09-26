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
const addUser = () => {
    return {
            type:ADD_USER,
            payload: {name:'shakil'}
        }
}



// 1. state
// 2. dispatch action
// 3. reducer
// 4. store


// create reducer for counter
const counterReducer = (state = incrementCounter, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }

        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
            
    
        default:
          state;
    }
}





// DECREMENT COUNTER
{
    type:DECREMENT
}