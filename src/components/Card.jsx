import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCount, setIdx } from '../reducers/Alif';

const Card = ({namee,img,price,id}) => {




  // Modal
  const [visible, setVisible] = useState(false);
  const handleMouseEnter = () => {
    setVisible(true);
  };
  const handleMouseLeave = () => {
    setVisible(false);
  };
  // 

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const Product = ()=>{
    dispatch(setIdx(id))
    navigate("/Useparams")
    console.log(id);
  }
  
  let productIds
  const addToCart = (id) => {
    productIds = JSON.parse(localStorage.getItem('productIds')) || [];
    productIds.push(id);
    localStorage.setItem('productIds', JSON.stringify(productIds));
    dispatch(setCount(1))
  };

  useEffect(()=>{
  },[productIds])

  return (
    <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='hover:bg-[skyblue] hover:cursor-pointer border-[2px] p-[2%] rounded-[20px]'>
        <div className="w-[90%]  text-[20px] m-auto" onClick={()=>Product(id)}>
            <img src={img} className='w-[95%] h-[35vh] m-auto rounded-[18px]' alt="" />
            <h1 className='pl-[11%] w-[100%]'>{namee}</h1>
            <h1 className='pl-[8%] text-[15px] m-[3%]'>{price}с</h1>
        </div>
            <div className='ml-[10%] w-[100%] mb-[3%]' onClick={()=>navigate("/")}>
             <Button  style={{opacity:visible?1:0}} 
             variant="contained" 
            onClick={()=>addToCart(id)} 
             className='flex w-[80%] m-auto hover:text-[red]'>В Корзину</Button>
            </div>
    </div>
  )
}

export default Card