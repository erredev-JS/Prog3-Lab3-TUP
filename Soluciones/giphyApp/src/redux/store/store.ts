import { configureStore } from '@reduxjs/toolkit'
import { giftSlice } from '../store/slices/gift'
// ...

export const store = configureStore({
  reducer: {
    giftSlice: giftSlice.reducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
