import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface CityInfo {
    name :string,
    data :any,
}

interface savedCity {
    savedCities : CityInfo[];
}

const initialState : savedCity= {
    savedCities : []
}

const savedcitySlice = createSlice({
    name : 'save',
    initialState,
    reducers:{
     addcity (state , action:PayloadAction<CityInfo>){
        state.savedCities.push(action.payload)
     },
     removecity(state, action: PayloadAction<string>) {
        state.savedCities = state.savedCities.filter(city => city.name !== action.payload);
      },
  

    },
})
export const { addcity, removecity } = savedcitySlice.actions;

export default savedcitySlice.reducer;


