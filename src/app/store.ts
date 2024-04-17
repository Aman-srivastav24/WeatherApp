import { configureStore } from '@reduxjs/toolkit'
import searchReducer from '../features/search/searchSlice'
import saveReducer from '../features/search/savecitySlice'

export const store = configureStore({
  reducer: {
    weatherInfo: searchReducer,
    CityInfomation: saveReducer,
  },
 
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch