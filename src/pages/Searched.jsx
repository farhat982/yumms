import React from 'react';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';



const Searched = () => {

    const [searchedRecipes, setSearchedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) =>{
        const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=ee1abb3907ed4c77a1e5d9d31ec471fc&query=${name}`);
        const recipes = await data.json();
        setSearchedRecipes(recipes.results);
    }

    useEffect(() =>{
        getSearched(params.search);
    },[params.search]);

  return (
        <Grid>
            {
                searchedRecipes.map((item) => {
                    return(
                        <Card key={item.id}>
                            <Link to={'/recipe/' + item.id}>
                                <img src={item.image} alt={item.title} />
                                <h4>{item.title}</h4>
                            </Link> 
                        </Card>
                    );
                })
            }
        </Grid>
  )
}

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    grid-gap: 3rem;
`;

const Card = styled.div`
    img{
        width:100%;
        border-radius:2rem;
        border: 1px solid #565656;
    }
    a{
        text-decoration:none;
    }
    h4{
        text-align:center;
        padding: 0.1rem;
        font-size:small;
        font-weight:800;
    }
`;


export default Searched
