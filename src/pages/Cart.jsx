import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removefromcart } from '../slices/cartslice'
import { emptycart } from '../slices/cartslice'

function Cart() {
  const cartarray=useSelector((state)=>state.cartReducer)
  console.log(cartarray);
  const dispatch=useDispatch()
const [total,setTotal]=useState(0)
const navigate=useNavigate()

  const gettotal=()=>{
    if(cartarray.length>0){

      setTotal(cartarray.map(item=>item.price).reduce((p1,p2)=>p1+p2))

    }
    else{
      setTotal(0)
    }
  }
  useEffect(()=>{
    gettotal()
  },[cartarray])

  const handlecart=()=>{
    alert('Thankyou........Your Order placed Successfully')
    dispatch(emptycart())
    navigate('/')
  }


  return (
    <div style={{marginTop:'150px'}}>
      { cartarray?.length>0?
      



 <div className='row w-100 '>
  
    
    <div className='col-lg-6 ms-2  mt-5  ps-4 d-flex  justify-content-center flex-column '>
 <table className='table border shadow'>
  <thead>
    <tr>
      <th>#</th>
      <th>Product</th>
      <th>image</th>
      <th>Price</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {   
      cartarray?.map((item,index)=><tr>
      <td>{index+1}</td>
      <td>{item.title}</td>
      <td><img width={'100px'} height={'100px'} src={item.thumbnail} alt="no image" /></td>
      <td>₹{item.price}</td>
      <td><Button onClick={()=>dispatch(removefromcart(item.id))} variant="outline-danger rounded "><i class='fa-solid fa-trash fa-beat '></i></Button>
</td>
    </tr>)
      }
  </tbody>
 </table>
 </div>
 <div className="col-lg-4 ps-5 d-flex  justify-content-center flex-column">
  <div className='border shadow p-5'>
    <p className='fs-2 text-center text-primary fw-bold '>Cart Summary</p>
    <p className='fs-5'>Total number of products: <span className='text-danger fw-bolder fs-3' >{cartarray.length}</span> </p>
    <p className='fs-5'>Total Price:<span className='fs-2 text-danger'>₹ {total}</span> </p>
    <Button onClick={handlecart} className='btn btn-success rounded w-100 mt-3' >Checkout</Button>
  </div>
 </div>
 </div>:
 <div style={{height:'100vh'}}className='d-flex flex-column justify-content align-items-center'>
 <img className='w-50 h-50 mt-5' src="https://assets-v2.lottiefiles.com/a/4baf7188-1169-11ee-8611-efb73bc6f73b/NfUdpdrYDB.gif" alt="no" />
 <p className='fw-bolder fs-3 text-dark mt-3'>Your Cart is Empty!!</p> 
 <Button className='btn btn-success rounded mt-3 ' ><i class="fa-solid fa-arrow-left fa-fade me-3"></i><Link style={{textDecoration:'none',color:'white'}} to={'/'} >Back TO Home</Link></Button>
 </div>
 
 }
 </div>
    
  )
}

export default Cart