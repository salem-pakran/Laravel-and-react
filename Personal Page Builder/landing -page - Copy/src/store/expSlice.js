import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchExps = createAsyncThunk(
  "exp/fetchExps",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/exp");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateExp = createAsyncThunk(
  "exp/updateExp",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`http://localhost:3005/exp/${item.id}`, {
        method: "PATCH",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewExp = createAsyncThunk(
  "exp/addNewExp",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/exp`, {
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

export const deleteExp = createAsyncThunk(
  "exp/deleteExp",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/exp/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const expSlice = createSlice({
  name: "exp",
  initialState: { exps: [], updateExp: null, newExp: null },
  extraReducers: (builder) => {
    builder.addCase(fetchExps.pending, (state, action) => {});
    builder.addCase(fetchExps.fulfilled, (state, action) => {
      console.log(action.payload);
      state.exps = action.payload;
    });
    builder.addCase(fetchExps.rejected, (state, action) => {});

    builder.addCase(updateExp.pending, (state, action) => {});
    builder.addCase(updateExp.fulfilled, (state, action) => {
      state.updateExp = action.payload;
      state.exps.push(state.updateExp);
    });
    builder.addCase(updateExp.rejected, (state, action) => {});

    builder.addCase(addNewExp.pending, (state, action) => {});
    builder.addCase(addNewExp.fulfilled, (state, action) => {
      state.newExp = action.payload;
      state.exps.push(state.newExp);
    });
    builder.addCase(addNewExp.rejected, (state, action) => {});

    builder.addCase(deleteExp.pending, (state, action) => {});
    builder.addCase(deleteExp.fulfilled, (state, action) => {
      console.log(action.payload);
      state.exps = state.exps.filter((el) => el.id != action.payload);
    });
    builder.addCase(deleteExp.rejected, (state, action) => {});
  },
});

export default expSlice.reducer;
