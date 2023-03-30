import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  deleteUserModal: false,
  deletingId: "",
};

const usersSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    handleDeleteUserModal: (state, action) => {
      state.deleteUserModal = action.payload.isOpen;
      state.deletingId = action.payload._id;
    },
  },
});

export const { handleDeleteUserModal } = usersSlice.actions;
export default usersSlice.reducer;
