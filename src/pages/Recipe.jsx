import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';




const Recipe = () => {

  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');
  

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=1e9a79cf9b5946ddb79948d7954247ff`
    );
    const detailData = await data.json();
    setDetails(detailData);
  };

  useEffect (() => {
    fetchDetails();
  },[params.name]);

  return (
    <DetailWrapper>
        <div>
           <h2>{details.title}</h2>
           <img src={details.image} alt={details.title} />
        </div>
        <Info>
            <Button 
            className={activeTab === 'instructions' ? 'active' : ''} 
            onClick={() => setActiveTab('instructions')}
            >
            Instructions
            </Button>
            <Button 
            className={activeTab === 'ingredients' ? 'active' : ''} 
            onClick={() => setActiveTab('ingredients')}
            >
            Ingredients
            </Button>
            {activeTab === 'instructions' && (
              <div>
                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>
                <p dangerouslySetInnerHTML={{ __html: details.instructions }}></p>
              </div>
            )}
            {activeTab === 'ingredients' && (
                <ul>
                  {
                    details.extendedIngredients.map((ingredient) => (
                      <li key={ingredient.id}> 
                        {ingredient.original}
                      </li>
                    ))
                  }
                </ul>

            )

            }
        </Info>
    </DetailWrapper>

  )   
  
}

const DetailWrapper = styled.div`
  margin-top:2.5rem;
  margin-bottom:5rem;
  display:flex;
  text-align:justify;
  

  .active {
    background:linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  h2{
    margin-bottom:2rem;

  }
  li{
    font-size:1rem;
    line-height:2.5rem;
    

  }
  ul{
    margin-top: 2rem;

  }
  img{
    margin-right:2.5rem;
    border-radius:10px;
    border: 1px solid #565656;
    
  }
`;

const Button = styled.button`
    padding:10px;
    height:50px;
    width:150px;
    color: #313131;
    background:white;
    border: 2px solid black;
    margin-right: 2rem;
    margin-bottom:2rem;
    font-weight:600;
    border-radius:10px;
    cursor:pointer;
`;

const Info = styled.div`

`;



export default Recipe
