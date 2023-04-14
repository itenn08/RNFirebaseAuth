import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

export interface ConfirmationResult {
  verificationId: string | null;
  confirm(verificationCode: string): Promise<any | null>;
}

export interface UserState {
  user: any | null;
  isAuth: boolean;
  phoneConfirmation: ConfirmationResult | null;
}

const initialState: UserState = {
  user: null,
  isAuth: false,
  phoneConfirmation: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    setAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
    setPhoneConfirmation: (
      state,
      action: PayloadAction<ConfirmationResult | null>,
    ) => {
      state.phoneConfirmation = action.payload;
    },
  },
});

export const {setUser, setAuth, setPhoneConfirmation} = userSlice.actions;

export default userSlice.reducer;
