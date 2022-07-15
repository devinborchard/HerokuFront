import { configureStore } from '@reduxjs/toolkit'
import {counter, user} from './reducers/slices'

export default configureStore({
  reducer: {
    counter,
    user,
  },
})