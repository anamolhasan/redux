import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/features/counter/counterSlice'

const Counter = () => {

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <button  onClick={()=> dispatch(increment)}>+</button>
        <p>{count}</p>
        <button onClick={()=> dispatch(decrement)}>-</button>
    </div>
  )
}

export default Counter