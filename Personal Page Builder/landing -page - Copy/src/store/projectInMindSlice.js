import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjectInMind = createAsyncThunk(
  "projectMind/fetchProjectInMind",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/projectInMind");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProjectInMind = createAsyncThunk(
  "projectMind/updateProjectInMind",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(
        `http://localhost:3005/projectInMind/${item.id}`,
        {
          method: "PATCH",
          body: JSON.stringify(item),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectInMindSlice = createSlice({
  name: "projectMind",
  initialState: { projectsMind: [], updateProjectMind: null },
  extraReducers: (builder) => {
    builder.addCase(fetchProjectInMind.pending, (state, action) => {});
    builder.addCase(fetchProjectInMind.fulfilled, (state, action) => {
      console.log(action.payload);
      state.projectsMind = action.payload;
    });
    builder.addCase(fetchProjectInMind.rejected, (state, action) => {});

    builder.addCase(updateProjectInMind.pending, (state, action) => {});
    builder.addCase(updateProjectInMind.fulfilled, (state, action) => {
      state.updateProjectMind = action.payload;
      state.projectsMind.push(state.updateProjectMind);
    });
    builder.addCase(updateProjectInMind.rejected, (state, action) => {});
  },
});

export default projectInMindSlice.reducer;
