import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { removecity } from '../features/search/savecitySlice';

const SavedCity: React.FC = () => {
  const savedCities = useSelector((state: RootState) => state.CityInfomation.savedCities);
  const dispatch = useDispatch();

  const handleRemoveCity = (cityName: string) => {
    dispatch(removecity(cityName));
  };
  
  return (
    <div className='bg-black text-white mt-4 rounded-lg  flex flex-col justify-center items-center'>
      <h2 className='text-[28px] font-bold'>Saved Cities</h2>
      {savedCities.length === 0 ? (
        <div>No saved cities</div>
      ) : (
      
          <ul>
            {savedCities.map(city => (
                <div className='bg-yellow-400 w-[400px] h-[300px]  text-black rounded-lg justify-center items-center flex flex-col'>
              <li key={city.name}>
                <p className='text-[24px] font-bold'>{city.name}</p>
                {city.data ? (
                  <>
                  <p>Temperature:{(city.data.temp-273).toFixed(2)} °C
                  </p>
                  <p>Humidity:  {city.data.humidity}</p>
                  <div className='flex gap-4'>
                    <p>Min : {(city.data.temp_min-273).toFixed(2)} °C</p>
                    <p>Max : {(city.data.temp_max-273).toFixed(2)} °C</p>
                  </div>
                  </>
                  
                ) : (
                  <p>Temperature data not available</p>
                )}
                <button onClick={() => handleRemoveCity(city.name)} className='bg-black rounded-lg p-2 hover:scale-110 text-white'>Remove</button>
              </li>
                </div>
            ))}
          </ul>
      
        
      )}
    </div>
  );
};

export default SavedCity;


