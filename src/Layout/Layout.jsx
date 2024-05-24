import React, { useEffect, useState } from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getData, setCategory, setCount, setSearch } from '../reducers/Alif';
// import { useDispatch, useSelector } from 'react-redux';
// import {  getData, setSearch } from '../reducers/Alif';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
//   const handleclick = (event)=>{
//     const value = event.target.textContent
//   console.log(value);
// }

const Layout = () => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const navigate = useNavigate()
  const handleChange = (e) =>{
  dispatch(setSearch(e.target.value))
  dispatch(getData(e.target.value))  }
 
  const dispatch = useDispatch()
  const searchValue = useSelector((store)=>store.Alif.search)
  const count = useSelector((store)=>store.Alif.count)
  const [Products, setProducts] = useState([]);

  const data = useSelector((store) => store.Alif.data);
  const totalPrice = Products.reduce((a,b)=> a+b.price,0)
    
    const deleteProductfunc = (id)=>{
     const  deletproduct = Products.filter((e)=>e.id!= id)
      setProducts(deletproduct)
      let Ids = JSON.parse(localStorage.getItem('productIds')) || [];
      Ids = Ids.filter((pId) => pId !== id);
     localStorage.setItem('productIds', JSON.stringify(Ids));
     dispatch(setCount(-1))
    }
    
    console.log(totalPrice);
    



  useEffect(() => {
    const Ids = JSON.parse(localStorage.getItem('productIds')) || [];
    const products = Ids.map((id) => data.find((product) => product.id === id));
    setProducts(products);
    // dispatch(setCount(count))
  },[dispatch,count])

  console.log(Products);
  
  
  return (
    <div className="Layout px-[5%] pb-[30%] ">
    <div className="all w-[100%] border-b-[5px] border-t-[5px]">

    <div className='bg-[grey] text-[23px] h-[15v]  justify-between flex items-center py-[3%]'>
    <div className="flex w-[33%] items-center justify-center">
     
      <h1 className="text-center " onClick={()=>navigate("/")} >Webstore</h1>
      <img src="src/images/logo.jpg" className='rounded-[25%] ml-[3%] bg-[grey] w-[10%]' alt="" />
    </div>
    <div className="flex justify-evenly w-[44%] items-center" >
    <h1 onClick={(e)=>dispatch(setCategory(e.target.textContent))} className='hover:cursor-pointer hover:text-[white] hover:bg-[black] rounded-[20px] w-[30%] text-center'>All</h1>
    <h1 onClick={(e)=>dispatch(setCategory(e.target.textContent))} className='hover:cursor-pointer hover:text-[white] hover:bg-[black] rounded-[20px] w-[30%] text-center'>Sneakers</h1>
    <h1 onClick={(e)=>dispatch(setCategory(e.target.textContent))} className='hover:cursor-pointer hover:text-[white] hover:bg-[black] rounded-[20px] w-[30%] text-center'>T-shirt</h1>
    <h1 onClick={(e)=>dispatch(setCategory(e.target.textContent))} className='hover:cursor-pointer hover:text-[white] hover:bg-[black] rounded-[20px] w-[30%] text-center'>Jeans</h1>
    </div>
    <div className="search rounded-[30px] px-[2%] h-[7vh] items-center bg-[black] flex w-[22%] mx-[3%]">
      <input 
      value={searchValue}
      onChange={handleChange}
      type="text"
      placeholder='Поиск по названию' 
       className='in text-[14px] w-[95%] bg-[black] text-[white] rounded-[30px] p-[2%]' />
    <SearchIcon  className='text-[white]' fontSize='medium'></SearchIcon>
    
    </div>

    <div className="third flex w-[20%] justify-center">
      {/* <ShoppingCartIcon fontSize='large'></ShoppingCartIcon> */}
      <div onClick={""}>
        {count}
      <Button onClick={handleOpen}><ShoppingCartIcon onClick={""} fontSize='large' className='flex mt-[-10%] items-center'></ShoppingCartIcon></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <div className="flex justify-between border-b-[2px] pr-[5%] pb-[5%] mt-[-5%]  w-[100%]">
          <div onClick={()=>navigate("/")}>
           <ArrowBackIcon onClick={handleClose}></ArrowBackIcon>
          </div>
           <h1 className=''> BOX SHOPPING</h1>
           </div>
           <div className='mt-[3%] overflow-y-scroll h-[70vh]'>
            {Products.map((e)=>{
              return <div key={e.id}>
                  <div className='flex bg-[gray]  mb-[3%] rounded-[10px] p-[5%]'>
          <img className='w-[30%] h-[15vh] rounded-[10px]' src={e.images} alt="" />
          <div className='ml-[13%] text-[15px] w-[100%] '>
           <div className="flex w-[100%] justify-between">
          <h1>Name: {e.name}  </h1>
          <h1 className='hover:text-[red] hover:cursor-pointer' onClick={()=>deleteProductfunc(e.id)}>X</h1>
         </div>
          <h1>Price: {e.price}c</h1>
          </div>

          </div>
              </div>
            })}
           </div>
        
<Typography className='h-[10vh] mt-[-10%]'>
  <div className='bg-[grey] mt-[3%] text-[15px] w-[95%] h-[10vh] flex p-[3%] items-center justify-between'>
    <div>

    <h1>TotalPrice: </h1>
    <h1 className='text-[red] text-[25px]'>{totalPrice}c</h1>
    </div>
  <Button variant='contained'>Заказать</Button>
  </div>
</Typography>
          </Typography>
          
        </Box>
      </Modal>
    </div>
      <div>
    
   
    </div>

      <PersonIcon fontSize='large'></PersonIcon>
    </div>
    </div>
    </div>
    <Outlet/>

    

    </div>
  )
}

export default Layout



