import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removefromwishlist } from '../slices/wishlistSlice';
import { addtocart } from '../slices/cartslice';


function Wishlist() {
  const wishlistarray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistarray);
  const dispatch=useDispatch()

  const handlewishlist=(item)=>{
     dispatch(addtocart(item)) 
     dispatch(removefromwishlist(item.id))
  }
  return (
    <div>
      
        <Row className='m-5 p-3'style={{backgroundColor:'dimgray'}} >

      {
        wishlistarray?.length>0?
        wishlistarray?.map((item)=>(<Col className='mb-3 mt-5'sm={12} md={6} lg={4} xl={3}>
         
        <Card style={{ width: '100%',backgroundColor:'black',color:'white' }}>
        <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
        <Card.Body >
          <Card.Title>{item.title.slice(0,20)}...</Card.Title>
          <Card.Text>
           <p >{item.description.slice(0,40)}...</p> 
           <p className='fw-bolder'>Price:₹{item.price}</p>
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
          <Button onClick={()=>dispatch(removefromwishlist(item.id))} variant="outline-danger rounded "><i class='fa-solid fa-trash fa-beat '></i></Button>
          <Button onClick={()=>handlewishlist(item)} variant="outline-success rounded "><i class='fa-solid fa-cart-plus fa-beat '></i></Button>
          </div>
        </Card.Body>
      </Card>
  
  
        </Col>))
        
        : <div style={{height:'100vh'}}className='d-flex flex-column justify-content align-items-center'>
          <img className='w-50 h-50 mt-5' src="https://assets-v2.lottiefiles.com/a/4baf7188-1169-11ee-8611-efb73bc6f73b/NfUdpdrYDB.gif" alt="" />
          <h4 className='fw-bolder text-dark mt-3'>Your Wishlist is Empty!!</h4> 
          <Button className='btn btn-success rounded mt-3 ' ><i class="fa-solid fa-arrow-left fa-fade me-3"></i><Link style={{textDecoration:'none',color:'white'}} to={'/'} >Back TO Home</Link></Button>
          </div>
}
      </Row>
    </div>
  )
}

export default Wishlist