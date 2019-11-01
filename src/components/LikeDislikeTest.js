import React, { useReducer } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 1rem;
`;

const Button = styled.button`
  margin: 0.5rem;
  font-weight: ${props => props.selected ? "bold" : ""}; 
  color: ${props => props.selected ? "blue" : "black"};
`;

const initialState = {
  like: 100,
  dislike: 100,
  clickedButton: null,
};

const LIKE = "like";
const DISLIKE = "dislike";

const reducer = (state, action) => {
  switch(action.type){
    case LIKE:
      return { 
        like: state.clickedButton !== LIKE 
          ? state.like+1 
          : state.clickedButton === LIKE ? state.like-1 : state.like,
        dislike: state.clickedButton === DISLIKE ? state.dislike-1 : state.dislike,
        clickedButton: state.clickedButton === LIKE ? null : LIKE,
      }
    case DISLIKE:
      return {
        like: state.clickedButton === LIKE ? state.like-1 : state.like,
        dislike: state.clickedButton !== DISLIKE 
          ? state.dislike+1 
          : state.clickedButton === DISLIKE ? state.dislike-1 : state.dislike,
        clickedButton: state.clickedButton === DISLIKE ? null : DISLIKE,
      }
    default:
      throw new Error();
  }    
}

function LikeDislikeTest(props) {

  const [state, dispatch] = useReducer(reducer, initialState);
  const handleClick = ({ target: { id } }) => dispatch({type: id});

  return (
    <ButtonContainer>
      <Button 
        selected={state.clickedButton === LIKE ? true : false} 
        id={LIKE} 
        onClick={handleClick}>Like: {state.like}
      </Button>
      <Button 
        selected={state.clickedButton === DISLIKE ? true : false} 
        id={DISLIKE} 
        onClick={handleClick}>Dislike: {state.dislike}
      </Button>
    </ButtonContainer>
  );
}

export default LikeDislikeTest;