import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchNavbarTheme = createAsyncThunk(
  "navbarTheme/fetchNavbarTheme",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch("http://localhost:3005/navbarTheme");
      const data = await res.json();
      return data;
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const updateNavbarTheme = createAsyncThunk(
  "navbarTheme/updateNavbarTheme",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/navbarTheme/${item.id}`, {
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

export const addLinkNavbarTheme = createAsyncThunk(
  "navbarTheme/addLinkNavbarTheme",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/navbarTheme`, {
        method: "POST",
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

export const deleteLinkNavbarTheme = createAsyncThunk(
  "posts/deletePost",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/navbarTheme/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const navbarThemeSlice = createSlice({
  name: "navbarTheme",
  initialState: { links: [], link: null, newLink: null },
  extraReducers: (builder) => {
    builder.addCase(fetchNavbarTheme.pending, (state, action) => {});
    builder.addCase(fetchNavbarTheme.fulfilled, (state, action) => {
      state.links = action.payload;
    });
    builder.addCase(fetchNavbarTheme.rejected, (state, action) => {});

    builder.addCase(updateNavbarTheme.pending, (state, action) => {});
    builder.addCase(updateNavbarTheme.fulfilled, (state, action) => {
      state.link = action.payload;
      state.links.push(state.link);
    });
    builder.addCase(updateNavbarTheme.rejected, (state, action) => {});

    builder.addCase(addLinkNavbarTheme.pending, (state, action) => {});
    builder.addCase(addLinkNavbarTheme.fulfilled, (state, action) => {
      console.log(action.payload);
      state.newLink = action.payload;
      state.links.push(state.newLink);
    });
    builder.addCase(addLinkNavbarTheme.rejected, (state, action) => {});

    builder.addCase(deleteLinkNavbarTheme.pending, (state, action) => {});
    builder.addCase(deleteLinkNavbarTheme.fulfilled, (state, action) => {
      console.log(action.payload);
      state.links = state.links.filter((el) => el.id != action.payload);
    });
    builder.addCase(deleteLinkNavbarTheme.rejected, (state, action) => {});
  },
});

export default navbarThemeSlice.reducer;
