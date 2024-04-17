import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const apikey = import.meta.env.VITE_WEATHER_APIKEY;
console.log("api",apikey);


interface SearchState{
  isLoading : boolean;
  data : any| null;
  isError : boolean

}
const initialState : SearchState = {
  isLoading:false,
  data:null,
  isError : false
}


// Define async thunk action
export  const fetchapi = createAsyncThunk("fetchapi", async (city:string) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
  return response.json();
  
});

// Create slice
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    // Define reducers if needed
  },
  extraReducers: (builder) => {
    builder.addCase(fetchapi.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchapi.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchapi.rejected, (state, action) => {
      console.log("Error", action.payload);
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export default searchSlice.reducer;
