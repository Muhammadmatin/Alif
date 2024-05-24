import React, { useEffect } from 'react'

import "../../App.css"
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../reducers/Alif';
import Card from '../../components/Card';
import { useNavigate } from 'react-router-dom';
// import Card from '../../components/Card'
// import { useDispatch, useSelector } from 'react-redux'
// import { getData } from '../../reducers/Alif'
const Home = () => {
  const dispatch = useDispatch()
  const data = useSelector((store)=>store.Alif.data)
  const categoryy = useSelector((store)=>store.Alif.category)
  const search = useSelector((store)=>store.Alif.search)


  useEffect(()=>{
      dispatch(getData(data))
  },[dispatch,categoryy])

  return (
    <div className="Home bg-[grey] h-auto py-[1%]">
   {
  search != ""
    ? (
        <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>
          {
            data
              .filter((e) => e.name.toLowerCase().includes(search.toLowerCase()) || e.category.toLowerCase().includes(search))
              .map((e) => (
                <div key={e.id}>
                  <Card img={e.images} namee={e.name} price={e.price} id={e.id} />
                </div>
              ))
          }
        </div>
      )
      :null
    
}
   
    {
    

    categoryy ==="" && search ===  "" ? <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>
    {
      data.map((e)=>{
        return <div key={e.id} >
          <Card  img={e.images} namee={e.name} price={e.price} id={e.id}/>
        </div>
      })
    } </div> :
    categoryy === "All" && search ===""? <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>
    {
      data.map((e)=>{
        return <div key={e.id} >
          <Card  img={e.images} namee={e.name} price={e.price} id={e.id}/>
        </div>
      })
    } </div> 
    : categoryy === "T-shirt" && search === ""? <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>{data.map((e)=>{
      return e.category === categoryy ?
      <div key={e.id}>
        <Card img={e.images} namee={e.name} price={e.price} id={e.id}></Card>
      </div>:null
    })}</div> 
    : categoryy === "Jeans" && search === ""? <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>{data.map((e)=>{
      return e.category === categoryy?
      <div key={e.id}>
        <Card img={e.images} namee={e.name} price={e.price} id={e.id}></Card>
      </div>
      :null
    })}</div> :
    categoryy === "Sneakers" && search==="" ? <div className='cards flex w-[100%] grid grid-cols-4 gap-[3%] mb-[5%] p-[5%]'>{data.map((e)=>{
      return e.category === categoryy?
      <div key={e.id}>
        <Card img={e.images} namee={e.name} price={e.price} id={e.id} e={e}></Card>
      </div>
      :null
    })}</div>:null }






     
    </div>
  )
}

export default Home