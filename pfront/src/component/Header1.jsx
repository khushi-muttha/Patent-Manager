import React from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import PatentList from './PatentList';
import SignIn from './SignIn';
import Image from './p2.jpeg';

const Header1 = () => {
  const navigate = useNavigate();

  if (!localStorage.getItem('token')) {
    console.log("User is not logged in.... please log in");
    navigate('/login', { replace: true });
    return <SignIn/>; 
  }else{
    console.log("User is logged in.... please proceed");
  }

  return (
    <>
    <NavBar/>
    <img src={Image} alt="Fixed Image" style={{ width: '100%', height: 360 }} />
    
    <PatentList/>
    <Footer/>
  </>
  )
}

export default Header1
