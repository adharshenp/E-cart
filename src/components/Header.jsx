import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Badge } from 'react-bootstrap';
import { useSelector } from 'react-redux';


function Header() {
  const wishlist=useSelector((state)=>state.wishlistReducer)//access the state value (component)
  //console.log(wishlist);
  const cart =useSelector((state)=>state.cartReducer)
  console.log(cart);
  return (
    <Navbar expand="lg" className="bg-warning fixed-top ">
      <Container>
        <Navbar.Brand href="#home"><Link style={{textDecoration:'none',color:'black',fontWeight:'bolder'}} to={'/'}>E-CART</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='btn border border-dark rounded mt-2' href="#home"><Link style={{textDecoration:'none',color:'black',fontWeight:'bolder'}}  to={'/wishlist'}><i class='fa-solid fa-heart fa-beat text-danger ms-2'></i> Wishlist<Badge bg="dark" className='rounded ms-2'>{wishlist.length}</Badge></Link></Nav.Link>
            <Nav.Link className='btn border border-dark rounded ms-2 mt-2'  href="#link"><Link style={{textDecoration:'none',color:'black',fontWeight:'bolder'}}  to={'./cart'}><i class="fa-solid fa-cart-shopping fa-fade text-dark"></i> Cart<Badge bg="dark" className='rounded ms-2'>{cart.length}</Badge></Link> </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header