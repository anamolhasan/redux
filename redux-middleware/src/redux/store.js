
import { configureStore } from '@reduxjs/toolkit'
// import todoReducer from './features/todos/todosSlice'
import todoReducer from '../redux/features/todos/todosSlice'
import { thunk } from 'redux-thunk'
import {createLogger} from 'redux-logger'


// create a logger middleware
const logger = createLogger()

const store =  configureStore({
  reducer: {
    todo:todoReducer
  },
  middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(thunk, thunk)
})

export default store