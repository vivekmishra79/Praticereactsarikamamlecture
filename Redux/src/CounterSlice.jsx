import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  courses: [{ id: new Date(), name: 'React ', fees: 100, duration: '3h' }]
}

export const counterSlice = createSlice({
  name: 'counter',

  initialState,
  reducers: {
    increment: (state) => {
      
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    addcourse:(state, c)=>{
            console.log(c);
            
            state.courses.push(c.payload)
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount,addcourse } = counterSlice.actions

export default counterSlice.reducer