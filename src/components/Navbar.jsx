import React from 'react';
import styled from 'styled-components';
import { GiCampCookingPot }  from 'react-icons/gi';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
  
    <Logo>
        <GiCampCookingPot/>
        <Link to={'/'}>
          <h3>Yumms</h3>
        </Link>     
    </Logo>
  )
}

const Logo = styled.div`
     font-family: 'Lobster', cursive;
     margin-top:20px;
     font-size:2rem;
     display:flex;
     flex-decoration:column;
     poistion:absolute;
     font-size:28px;
     color:rgb(56,56,56);

`;

export default Navbar
