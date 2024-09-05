import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ToastType } from "@/entities/app";
import { v1 } from "uuid"

interface AppState {
  toasts: ToastType[]
  traceIds: string[]
  isShownMobileSidebar: boolean
}

const TRACE_ID_ARR_SIZE = 20

const initialState: AppState = {
  toasts: [],
  traceIds: [],
  isShownMobileSidebar: false
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setToast(state, action: PayloadAction<ToastType>) {
      state.toasts.push({...action.payload, id: v1()})
    },
    removeToast(state, action: PayloadAction<string>) {
      state.toasts = state.toasts.filter(x => x.id !== action.payload)
    },
    addTraceId(state, action: PayloadAction<string>) {
      state.traceIds.unshift(action.payload)

      if (state.traceIds.length > TRACE_ID_ARR_SIZE) {
        state.traceIds.pop()
      }
    },
    showMobileSidebar(state, action: PayloadAction<boolean>) {
      state.isShownMobileSidebar = action.payload
    },
  }
})

export default appSlice.reducer
