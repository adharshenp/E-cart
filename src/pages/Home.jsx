import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import usefetch from '../hooks/usefetch';
import { useDispatch } from 'react-redux';
import { addtowishlist } from '../slices/wishlistSlice';
import { addtocart } from '../slices/cartslice';

function Home() {
  const data= usefetch('https://dummyjson.com/products')
  console.log(data);

  //to call a function that add value to store

  const dispatch=useDispatch()

  
  return (
    <Row className='m-5 p-3 'style={{backgroundColor:'dimgray'}} >
      {data?.length>0?
      data?.map((item)=>(<Col className='mb-3 mt-5'sm={12} md={6} lg={4} xl={3}>
         
      <Card  style={{ width: '100%',backgroundColor:'black',color:'white',marginTop:'6rem' }}>
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body >
        <Card.Title>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
         <p>{item.description.slice(0,40)}...</p> 
         <p className='fw-bolder'>Price:₹{item.price}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>
        <Button onClick={()=>dispatch(addtowishlist(item))} variant="outline-danger rounded "><i class='fa-solid fa-heart fa-beat '></i></Button>
        <Button onClick={()=>dispatch(addtocart(item))}  variant="outline-success rounded "><i class='fa-solid fa-cart-plus fa-beat '></i></Button>
        </div>
      </Card.Body>
    </Card>


      </Col>))
      :<p>nothing to display</p>
      }
    </Row>
  )
}

export default Home