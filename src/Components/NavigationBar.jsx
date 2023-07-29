import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react'
import './NavigationBar.css'
import { Link } from 'react-router-dom';
import { BiCart } from 'react-icons/bi'

function NavigationBar(props) {
    // console.log(props)
    return (
        <>
            <Navbar expand="lg" className="bg-body-danger sticky-top" id='Navi'>
                <Container>
                    <Link className='nav-link' to="/"><h1>shOOper</h1></Link>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            // style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-link' to="/">Home</Link>
                            <Link className='nav-link' to="/Product">Product</Link>
                            <Link className='nav-link' to="/Category">Category</Link>
                            <Link className='nav-link' to="/About">About</Link>


                        </Nav>
                        <Form className="d-flex">
                            <Button variant="btn btn-danger mx-1" to="/Login">Login</Button>
                            <Button variant="btn btn-danger mx-3" to="/Signup">Signup</Button>
                            <Button variant="btn btn-dark" to="/Cart"><BiCart /></Button>

                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* hero section */}

            {/* <div
                id="carouselExampleSlidesOnly"
                className="carousel slide"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://removal.ai/wp-content/uploads/2021/09/black-background-product-photography-02.png" className="d-block w-100" alt="..." />

                        <div className="container">
                            <div className="carousel-caption">
                                <h1>shOOper</h1>
                                <h4>
                                    Welcome to shOOper.com, the premier online marketplace designed to provide you with a seamless and enjoyable shopping experience
                                </h4>
                                <p>
                                    <a className="btn btn-lg btn-danger" to="#">
                                        Explore Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_671088961.jpg" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>shOOper</h1>
                                <h4>
                                    Welcome to shOOper.com, the premier online marketplace designed to provide you with a seamless and enjoyable shopping experience
                                </h4>
                                <p>
                                    <a className="btn btn-lg btn-danger" to="#">
                                        Explore Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://png.pngtree.com/thumb_back/fw800/background/20230426/pngtree-stack-of-makeup-products-arranged-on-a-black-background-image_2520399.png" className="d-block w-100" alt="..." />
                        <div className="container">
                            <div className="carousel-caption">
                                <h1>shOOper</h1>
                                <h4>
                                    Welcome to shOOper.com, the premier online marketplace designed to provide you with a seamless and enjoyable shopping experience
                                </h4>
                                <p>
                                    <a className="btn btn-lg btn-danger" to="#">
                                        Explore Now
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}




        </>

    );

}

export default NavigationBar