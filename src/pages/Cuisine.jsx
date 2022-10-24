import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';



const Cuisine = () => {

        const [cuisine, setCuisine] = useState([]);
        let params = useParams();


    const getCuisine = async (name) => {
            const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9a0f948ca3e24def8cdcffb5df805a33&cuisine=${name}`
            );
            const recipes = await data.json();
            setCuisine(recipes.results);
    }

    useEffect(() => {

        getCuisine(params.type);

    },[params.type]);

  return (
    <Grid 
        animate={{ opacity:1 }}
        initial={{ opacity:0 }}
        exit={{ opacity:0 }}
        transition={{ duration: 0.5 }}
    >
        {
            cuisine.map((item) => {
                return (
                    <Card key={item.id}>
                        <Link to={'/recipe/' + item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                        </Link>
                    </Card>
                )
            })
        }
    </Grid>
  )
}

const Grid = styled(motion.div)`
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


export default Cuisine
