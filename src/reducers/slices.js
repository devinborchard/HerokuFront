import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
})

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      value: {},
    },
    reducers: {
      setUser: (state, newData) => {
        state.value = newData
      },
      removeUser: (state) => {
        state.value = {}
      }
    },
  })

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions
export const { setUser, removeUser } = userSlice.actions

const counter = counterSlice.reducer
const user = userSlice.reducer

export {counter, user}