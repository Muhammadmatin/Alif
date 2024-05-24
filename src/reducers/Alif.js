import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

let api = "http://localhost:3000/data"
export const getData = createAsyncThunk(
    "Alif/getData",
    async(searchValue = "")=>{
        try {
            const { data } = await axios.get(searchValue === "" ? api : `${api}?q=${searchValue}`)    
              console.log(data);
              return data;
        } catch (error) {
            console.log(error);            
        }
    }
)



export const Alif = createSlice(
    {
        name:"Alif",
        initialState:{
            data:[],
            idx:null,
            search:"",
            category:"",
            count:0
        },
        reducers:{
            getData:(state,action) =>{
                state.data = action.payload
            },
            setIdx:(state,action)=>{
                state.idx = action.payload
            },
            setSearch:(state,action)=>{
                state.search = action.payload
            },
           setCategory:(state,action)=>{
            state.category = action.payload
            console.log(state.category);
           },
           setCount:(state,actrion)=>{
            state.count += actrion.payload
           }
            
        },
        extraReducers:(builder) =>{
            builder.addCase(getData.fulfilled,(state,action)=>{
                state.data = action.payload
            }
            )
            .addCase(getData.rejected,(state,action)=>{
                console.log("Ошыбка при получения данных",action.error);
            })
       
        
    }
    }
)

export const {setIdx,setSearch,setCategory,setCount} = Alif.actions

export default Alif.reducer