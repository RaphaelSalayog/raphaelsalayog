import { createSlice } from "@reduxjs/toolkit";

export interface IClickHandler {
  isHamburgerMenuSelected: boolean;
  isFormSubmit: boolean;
}

const initialState: IClickHandler = {
  isHamburgerMenuSelected: false,
  isFormSubmit: false,
};

const buttonSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    setIsHamburgerMenuSelected: (state) => {
      state.isHamburgerMenuSelected = !state.isHamburgerMenuSelected;
    },
    setIsFormSubmit: (state) => {
      state.isFormSubmit = !state.isFormSubmit;
    },
  },
});

export const { setIsHamburgerMenuSelected, setIsFormSubmit } =
  buttonSlice.actions;

export default buttonSlice.reducer;
