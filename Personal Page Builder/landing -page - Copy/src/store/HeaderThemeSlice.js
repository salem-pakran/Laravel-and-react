import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchHeaderTheme = createAsyncThunk(
  "headerTheme/fetchHeaderTheme",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/headerTheme");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const headerThemeSlice = createSlice({
  name: "headerTheme",
  initialState: { contentHeader: [] },
  extraReducers: (builder) => {
    builder.addCase(fetchHeaderTheme.pending, (state, action) => {});
    builder.addCase(fetchHeaderTheme.fulfilled, (state, action) => {
      state.contentHeader = action.payload;
    });
    builder.addCase(fetchHeaderTheme.rejected, (state, action) => {});
  },
});

export default headerThemeSlice.reducer;
