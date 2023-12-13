import {configureStore} from "@reduxjs/toolkit";
import {dataSlice} from "../features/data/dataSlice";
import {idSlice} from "../features/id/idSlice";
import {namesSlice} from "../features/names/namesSlice";
import {imgSlice} from "../features/img/imgSlice";
import {titleSlice} from "../features/title/titleSlice";


export const store = configureStore({
    reducer: {
        data: dataSlice.reducer,
        id: idSlice.reducer,
        fullName: namesSlice.reducer,
        imageUrl:imgSlice.reducer,
        title:titleSlice.reducer
    }
})