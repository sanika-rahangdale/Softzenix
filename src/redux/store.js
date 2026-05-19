import { configureStore, createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { user: null, token: localStorage.getItem("token") || null },
  reducers: {
    setAuth: (s, a) => {
      s.user = a.payload.user;
      s.token = a.payload.token;
      if (a.payload.token) localStorage.setItem("token", a.payload.token);
    },
    logout: (s) => {
      s.user = null;
      s.token = null;
      localStorage.removeItem("token");
    },
  },
});

const uiSlice = createSlice({
  name: "ui",
  initialState: { chatOpen: false },
  reducers: {
    toggleChat: (s) => { s.chatOpen = !s.chatOpen; },
    setChatOpen: (s, a) => { s.chatOpen = a.payload; },
  },
});

export const { setAuth, logout } = authSlice.actions;
export const { toggleChat, setChatOpen } = uiSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer, ui: uiSlice.reducer },
});
