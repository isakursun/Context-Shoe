import React from 'react'
import {useNavigate } from 'react-router-dom';


const ShoeCard = ({item}) => {
  
  const {name,image,price,id} = item;
  //! yönlendirme
 const navigate = useNavigate();
  return (
    <div className='shoe-card'>
      <img src={image}/>
      <h4 className='m-1'>{name}</h4>
      <div className='m-1 flex justify-around'>
        <span className='bg-orange-400 p-1 rounded font-bold'>${price}</span>
        <button onClick={()=> navigate(`/detail/${id}`)} className='bg-orange-400 p-1 rounded font-bold transform transition-transform hover:scale-110'>Go to Details</button>
      </div>
      </div>
  )
}

export default ShoeCard