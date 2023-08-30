import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/users");
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/users", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    user: [],
    userActive: [],
    error: null,
  },

  extraReducers: {
    // Fetch Users
    [fetchUsers.pending]: (state) => {
      state.error = null;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
    [fetchUsers.rejected]: (state, action) => {
      state.error = action.payload;
    },

    // Register User
    [registerUser.pending]: (state) => {
      state.error = null;
    },
    [registerUser.fulfilled]: (state, action) => {
      console.log(action);
      state.user = action.payload;
    },
    [registerUser.rejected]: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
