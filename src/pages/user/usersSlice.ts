import { createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";

import API  from "../../utils/api";

interface User {
    "id": number,
    "name": string,
    "username": string,
    "email": string,
    "address": {
        "street": string,
        "suite": string,
        "city": string,
        "zipcode": string,
        "geo": {
        "lat": string,
        "lng": string
        }
    },
}

interface UsersState {
    users: User[];
    isLoading: boolean;
    error: string | null;
}

const initialState:  UsersState = {
    users: [],
    isLoading: false,
    error: null,
}

export const fetchUsers = createAsyncThunk<User[]>(
    'users/fetchUsers',
    async () => {
        const response = await API.get('/users');
        return response.data;
    }
);


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.isLoading = false;
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch posts';
            });
    },
});

export default usersSlice.reducer;

export const selectUsers = (state: RootState) => state.users.users;
export const selectUsersLoading = (state: RootState) => state.users.isLoading;
export const selectUsersError = (state: RootState) => state.users.error;