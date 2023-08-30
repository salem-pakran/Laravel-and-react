import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/projects");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateProjects = createAsyncThunk(
  "projects/updateProjects",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`http://localhost:3005/projects/${item.id}`, {
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

export const addNewSlideProject = createAsyncThunk(
  "projects/addNewSlideProject",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/projects`, {
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

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/projects/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const projectsSlice = createSlice({
  name: "projects",
  initialState: { ourProjects: [], updateProject: null, newProject: null },
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {});
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      console.log(action.payload);
      state.ourProjects = action.payload;
    });
    builder.addCase(fetchProjects.rejected, (state, action) => {});

    builder.addCase(updateProjects.pending, (state, action) => {});
    builder.addCase(updateProjects.fulfilled, (state, action) => {
      state.updateProject = action.payload;
      state.ourProjects.push(state.updateProject);
    });
    builder.addCase(updateProjects.rejected, (state, action) => {});

    builder.addCase(addNewSlideProject.pending, (state, action) => {});
    builder.addCase(addNewSlideProject.fulfilled, (state, action) => {
      state.newProject = action.payload;
      state.ourProjects.push(state.newProject);
    });
    builder.addCase(addNewSlideProject.rejected, (state, action) => {});

    builder.addCase(deleteProject.pending, (state, action) => {});
    builder.addCase(deleteProject.fulfilled, (state, action) => {
      console.log(action.payload);
      state.ourProjects = state.ourProjects.filter(
        (el) => el.id != action.payload
      );
    });
    builder.addCase(deleteProject.rejected, (state, action) => {});
  },
});

export default projectsSlice.reducer;
