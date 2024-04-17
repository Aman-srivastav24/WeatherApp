import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/store';
import { addcity } from '../features/search/savecitySlice';

const DisplayData: React.FC = () => {
  const { data } = useSelector((state: RootState) => state.weatherInfo);
  const dispatch = useDispatch();

  const handleAddCity = () => {
    if (data) {
      dispatch(addcity({name:data.name,data:data.main}));
    }
  };

  if (!data) {
    return <div>Pls search</div>;
  }

  return (
    <div>
    
    <div className='bg-black text-white mt-4 rounded-lg h-[300px] flex flex-col  justify-center items-center'>
       <div className='flex justify-center gap-2 items-center '>
      <p className='text-[28px] font-bold'>{data.name}</p>
      <button className='bg-yellow-500 rounded-lg  text-[16px] px-[2px]  hover:scale-110' onClick={handleAddCity}>+</button>
      </div>
      <div className='bg-yellow-400 w-[400px] h-[200px] text-black rounded-lg justify-center items-center flex flex-col'>
      <p>Temperature: {(data.main.temp-273).toFixed(2)} °C</p>
      <p>Humidity: {data.main.humidity}</p>
      <div className='flex gap-4 justify-center'>
      <p>Min: {(data.main.temp_min-273).toFixed(2)}°C</p>
      <p>max: {(data.main.temp_max-273).toFixed(2)}°C</p>
      </div>
      <p></p>
    
      </div>
    </div>
    </div>
  );
};

export default DisplayData;
