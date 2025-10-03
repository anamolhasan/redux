
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './features/todos/todosSlice'
// import todoReducer from '../redux/features/todos/todosSlice'

const store =  configureStore({
  reducer: {
    todo:todoReducer
  }
})

export default store