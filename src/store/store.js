import {configureStore} from "@reduxjs/toolkit";
import {dataSlice} from "../features/data/dataSlice";
import {idSlice} from "../features/id/idSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        id: idSlice.reducer
    }
})