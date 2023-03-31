import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteUserModal: false,
  deletingId: "",
  page: 1,
  limit: 10,
  sort: "-createdAt",
  role: "",
  userSearchText: "",
};

const usersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleDeleteUserModal: (state, action) => {
      state.deleteUserModal = action.payload.isOpen;
      state.deletingId = action.payload._id;
    },
    handleUserPage: (state, action) => {
      state.page = action.payload;
    },
    handleUserLimit: (state, action) => {
      state.limit = action.payload;
    },
    handleUserSort: (state, action) => {
      state.sort = action.payload;
    },
    handleUserRole: (state, action) => {
      state.role = action.payload;
    },
    handleUserSearchText: (state, action) => {
      state.userSearchText = action.payload;
    },
  },
});

export const {
  handleDeleteUserModal,
  handleUserPage,
  handleUserLimit,
  handleUserSort,
  handleUserRole,
  handleUserSearchText,
} = usersSlice.actions;
export default usersSlice.reducer;
