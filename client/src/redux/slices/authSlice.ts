import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define types for initial state
interface InitialState {
    user: any | null; // Define type for user
    isSidebarOpen: boolean;
}

// Initial state
const initialState: InitialState = {
    user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,

    isSidebarOpen: false,
};

// Create auth slice
const authSlice = createSlice ({
    name: "auth",
    initialState,
    reducers :{
        // Set user credentials action
        setCredentials: (state, action: PayloadAction<string | null>) => {
            state.user = action.payload;
            if (action.payload) {
            localStorage.setItem("userInfo", JSON.stringify(action.payload));
            } else {
                localStorage.removeItem("userInfo");
            }
        },
        // Logout action
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("userInfo");
        },
        // Set sidebar open action
        setOpenSidebar: (state, action: PayloadAction<boolean>) => {
            state.isSidebarOpen = action.payload;
        },
    },
});

// Export action creators and reducer
export const { setCredentials, logout, setOpenSidebar } = authSlice.actions;


export default authSlice.reducer;