import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import React, { useEffect, useState }from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Popular = () => {

  const [popular, setPopular] = useState([]); 

  useEffect(()=>{
      getPopular();
  },[]);

  const getPopular = async () => {

    const check = localStorage.getItem('popular');

    if (check) {
      setPopular(JSON.parse(check));
    } else {

      const api = await fetch (
        `https://api.spoonacular.com/recipes/random?apiKey=56fe24e9376f470785f9021107de95a5&number=9`
        );
      const data = await api.json();
      localStorage.setItem('popular' , JSON.stringify(data.recipes));
      setPopular(data.recipes)
      console.log(data.recipe)
    }
  }
  return (
    <div>
    <Wrapper>
        <h3>Today's Picks</h3>
        <Splide options={{
          perPage: 3,
          pagination: false,
          drag: 'free',
        }}>
      {
        popular.map((recipe) => {
          return(
            <SplideSlide key={recipe.id}>
              <Card>
                <Link to={'/recipe/' + recipe.id}>
                 <p>{recipe.title}</p>
                 <img src={recipe.image} alt={recipe.title} />
               </Link>
              </Card>
            </SplideSlide>
          );
        })
      }
      </Splide>
    </Wrapper>
    </div>
  );
}


const Wrapper = styled.div `
 margin: 4rem 1rem;

`;

const Card = styled.div`
 min-height: 20rem;
 border-radius: 2rem;
 overflow: hidden;
 position: relative;
 margin:1rem;
 border:#565656 solid 1px;
 
img{
  border-radius:2rem;
  position: absolute;
  left: 0;
  width:100%;
  height:100%;
  object-fit: cover;
  background:black;

}
p{
  position:absolute;
  z-index: 10;
  bottom:10%;
  width:100%;
  text-align:center;
  font-weight:600;
  font-size: 1rem;
  color:white;
  height:40%;
  display:flex;
  justify-content: center;
  align-items: center;

}
`;

export default Popular
