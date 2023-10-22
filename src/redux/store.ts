import { configureStore } from "@reduxjs/toolkit";

const storeSecond = configureStore({
    reducer: {}
})

export default storeSecond

export type RootState = ReturnType<typeof storeSecond.getState>
export type AppDispatch = typeof storeSecond.dispatch