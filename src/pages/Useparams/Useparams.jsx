import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

    const Useparams = () => {
        const navigate = useNavigate()
        const data = useSelector((store)=>store.Alif.data)
        const idx = useSelector((store)=>store.Alif.idx)
  
    return (
        <div className='UseparamAll'>
        <div className='bg-[grey]'>
            {data.map((e)=>{
                return e.id === idx ? 
                <div className='flex px-[5%] py-[2%]' key={e.id}>
                    <img src={e.images} className='w-[35%] ml-[10%] h-[70vh] m-auto' alt="" />
                    <div className='w-[60%] ml-[5%] text-[25px]'>
                        <h1 className='mt-[3%]'><span>BRAND:</span> {e.name}</h1>
                        <h1 className='mt-[3%]'><span>PRICE:</span> {e.price}с</h1>
                        <h1 className='mt-[3%]'>{e.description}</h1>
                       
                         <div className='grid grid-cols-7 grid-rows-1 w-[100%] mt-[3%] gap-[3%]'>
                            {e.sizes.map((size,index)=>{
                                return <div className='' key={e.id}>
                                <Button variant='contained'className='w-[100%] hover:text-[red] ' key={index}>{size}</Button>
                                </div>
                            })}
                            </div>
                            <div className='my-[3%]'>
                            </div>
                            <br />
                            <div className="flex items-center">
                            <h1>COLORS: {e.color}</h1>
                            <div className='w-[20%] ml-[3%] h-[5vh] rounded-[20px]' style={{backgroundColor:e.color}}></div>
                            </div>
                    </div>
                    <div className='absolute hover:text-[red] flex items-center hover:cursor-pointer'>
                    <h1 className='absolute ml-[105%]' onClick={()=>navigate("/")}>Back</h1>
                    <ArrowBackIcon></ArrowBackIcon>
                    </div>
                </div>
                :
                null
            })}
        </div>
        </div>

    )
    }

    export default Useparams