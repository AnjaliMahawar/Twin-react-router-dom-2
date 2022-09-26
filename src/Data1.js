import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

export default function Data1() {
    const history=useNavigate()
  
    let { id} = useParams();
   // console.log("id",id)
    const[data1,setData1]=useState({
        data:""
    })
         useEffect(()=>{
             getPosts()
          
         },[])
    
        //funxtion 
     const getPosts=()=>{
        return axios
        .get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((data)=>{
          //  console.log("second",data.data)
          setData1(data)
        }).catch((err)=>{
            console.log(err)
        })
     }

  return (
    <>
   <h1>Data Row1</h1>
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>website</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
       {
         <tr>
         <td>{data1.data.id}</td>
         <td>{data1.data.name}</td>
         <td>{data1.data.website}</td>
         <td>{data1.data.username}</td>
         </tr>
      }
      </tbody>
    </Table>
    <button onClick={() => history(-1)}>GOTO_Data_Page</button>
   </>
   
  )
}
