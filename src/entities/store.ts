import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { appReducer } from "@/entities/app";


const rootReducer = combineReducers({
    appReducer,
    // userReducer,
    // [userApi.reducerPath]: userApi.reducer,
})

const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
            .concat(
              // userApi.middleware,
            )
    })
}

export const store = setupStore()

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
