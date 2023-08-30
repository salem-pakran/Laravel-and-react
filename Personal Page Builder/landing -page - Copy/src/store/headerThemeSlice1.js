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

export const updateHeaderTheme = createAsyncThunk(
  "headerTheme/updateHeaderTheme",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/headerTheme/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

const headerThemeSlice = createSlice({
  name: "headerTheme",
  initialState: {
    contentHeader: [],
    content: null,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHeaderTheme.pending, (state, action) => {});
    builder.addCase(fetchHeaderTheme.fulfilled, (state, action) => {
      state.contentHeader = action.payload;
    });
    builder.addCase(fetchHeaderTheme.rejected, (state, action) => {});

    builder.addCase(updateHeaderTheme.pending, (state, action) => {});
    builder.addCase(updateHeaderTheme.fulfilled, (state, action) => {
      state.content = action.payload;
      state.contentHeader.push(state.content);
    });
    builder.addCase(updateHeaderTheme.rejected, (state, action) => {});
  },
});

export default headerThemeSlice.reducer;
