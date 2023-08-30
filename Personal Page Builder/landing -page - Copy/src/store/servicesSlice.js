import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchServices = createAsyncThunk(
  "services/fetchServices",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch("http://localhost:3005/services");
      const data = res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateServices = createAsyncThunk(
  "services/updateServices",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const res = await fetch(`http://localhost:3005/services/${item.id}`, {
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

export const addNewService = createAsyncThunk(
  "services/addNewService",
  async (item, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await fetch(`http://localhost:3005/services`, {
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

export const deleteService = createAsyncThunk(
  "projects/deleteService",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await fetch(`http://localhost:3005/services/${id}`, {
        method: "DELETE",
      });
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const servicesSlice = createSlice({
  name: "services",
  initialState: { services: [], updateService: null, newService: null },
  extraReducers: (builder) => {
    builder.addCase(fetchServices.pending, (state, action) => {});
    builder.addCase(fetchServices.fulfilled, (state, action) => {
      console.log(action.payload);
      state.services = action.payload;
    });
    builder.addCase(fetchServices.rejected, (state, action) => {});

    builder.addCase(updateServices.pending, (state, action) => {});
    builder.addCase(updateServices.fulfilled, (state, action) => {
      state.updateService = action.payload;
      state.services.push(state.updateProject);
    });
    builder.addCase(updateServices.rejected, (state, action) => {});

    builder.addCase(addNewService.pending, (state, action) => {});
    builder.addCase(addNewService.fulfilled, (state, action) => {
      state.newService = action.payload;
      state.services.push(state.newProject);
    });
    builder.addCase(addNewService.rejected, (state, action) => {});

    builder.addCase(deleteService.pending, (state, action) => {});
    builder.addCase(deleteService.fulfilled, (state, action) => {
      console.log(action.payload);
      state.services = state.services.filter((el) => el.id != action.payload);
    });
    builder.addCase(deleteService.rejected, (state, action) => {});
  },
});

export default servicesSlice.reducer;
