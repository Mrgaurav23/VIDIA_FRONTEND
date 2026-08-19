import { createSlice } from '@reduxjs/toolkit'
import reducer from './authSlice'

const initialState = {
  isSidebarOpen : false,
  activeRoute : "/home"
}

const sidebarSlice = createSlice({
  name : "sidebar",
  initialState,
  reducers : {
    toggleSidebar : (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
    },

    setActiveRoute : (state,action) => {
      state.activeRoute = action.payload
    }
  }
})

export const { toggleSidebar,setActiveRoute } = sidebarSlice.actions;
export default sidebarSlice.reducer;