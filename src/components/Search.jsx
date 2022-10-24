import React from 'react'
import styled from 'styled-components';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const Search = () => {

  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input);
  };


  return (
    <div>
        
      <FormStyle onSubmit={submitHandler}>
      <FaSearch />
        <input onChange={(e) => setInput(e.target.value)} type='text' value={input}/>
      </FormStyle>
    </div>
  )
}

const FormStyle = styled.form`
    margin:0 auto;
    poistion:relative;
    width:100%;
    
    input{
      width:100%;
      border:none;
      background: linear-gradient(35deg, #494949, #313131);
      font-size:1rem;
      color:white;
      padding:1rem 3rem;
      border:none;
      border-radius:1rem;
      outline:none;
  
    }

    svg {
      poistion: absolute;
      top:50%;
      left:0%;
      transform:translate(50%, 175%);
      color:white;
      font-size:1.5rem;
      cursor:pointer;
    }
`;


export default Search
