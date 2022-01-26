import React from 'react';
import { Container, Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import {AiOutlineHome, AiOutlineSearch } from  'react-icons/ai'
import {GiRibbonMedal} from  'react-icons/gi'
import {BiNetworkChart} from 'react-icons/bi'
import {CgProfile} from 'react-icons/cg'
import Styles from '../styles/Home.module.css'

const NavBar = () => {

  return (
        <div className={Styles.overall}>
            <Navbar bg="light" expand="lg" className='shadow-2xl'>
            <Container fluid>
                <Navbar.Brand href="#home"><span className='text-yellow-500 font-bold'>Camp</span> <span className='font-bold bg-yellow-500 pb-3'>Yellow</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                <Form className={`flex ${Styles.Form} lg:mt-2`}>
                    <button className={`ml-1`}>
                        <AiOutlineSearch />
                    </button>
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className={`${Styles.Input} `}
                    aria-label="Search"
                    />
                </Form>
                <div className='flex flex-col lg:ml-32 lg:justify-center lg:items-center lg:mt-2'>
                    <AiOutlineHome  color='#D4AF37' />
                    <Nav.Link href="#action1" className=''>My Feed</Nav.Link>
                </div>
                <div className='flex flex-col ml-5 lg:justify-center lg:items-center lg:mt-2'>
                    <GiRibbonMedal color='#D4AF37' />
                    <Nav.Link href="#action2">Opportunities</Nav.Link>
                </div>
                <div className='flex flex-col ml-5 lg:justify-center lg:items-center lg:mt-2'>
                    <BiNetworkChart color='#D4AF37' />
                    <Nav.Link href="#action2">My Network</Nav.Link>
                </div>
                <div className='flex flex-col ml-5 lg:justify-center lg:items-center lg:mt-2'>
                    <CgProfile color='#D4AF37' />
                    <Nav.Link href="#action2">Profile</Nav.Link>
                </div>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
  )
}

export default NavBar
