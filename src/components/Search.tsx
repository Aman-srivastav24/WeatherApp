import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchapi } from '../features/search/searchSlice';



const Search: React.FC = () => {
  const dispatch = useDispatch();
  const [searchInput, setSearchInput] = useState('Kasia');


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
useEffect(() => {


    dispatch(fetchapi(searchInput));
    setSearchInput("");
    
}, [])
const handleSearch = () => {
  dispatch(fetchapi(searchInput));
  setSearchInput("");
  };
 

  return (
    <div className='flex bg-black text-white justify-evenly p-4 rounded-lg items-center'>
      <p className='font-bold text-[16px]'>Weather App</p>
      <div className='flex gap-2 bg-gray-100 rounded-lg p-2'>
      <input type="text" value={searchInput} onChange={handleInputChange} className='rounded-lg p-2 text-black' />
      <button className='bg-yellow-400 rounded-full p-2 hover:scale-110 ' onClick={handleSearch}>Go</button>
      </div>
      
    </div>
  );
};

export default Search;
