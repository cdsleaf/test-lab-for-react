import React, { useState } from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  margin: 1rem;
`;

const Button = styled.button`
  margin: 0.5rem;
  font-weight: ${props => props.selected ? "bold" : ""}; 
  color: ${props => props.selected ? "blue" : "black"};
`;

function LikeDislikeTest(props) {

  const LIKE = "like";
  const DISLIKE = "dislike";

  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(100);
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = ({ target }) => {
    const { id } = target;
    
    setLike(id === LIKE && clickedButton !== id 
      ? like+1 
      : clickedButton === LIKE ? like-1 : like
    )
    setDislike(id === DISLIKE && clickedButton !== id 
      ? dislike+1 
      : clickedButton === DISLIKE ? dislike-1 : dislike
    )
    setClickedButton(clickedButton === id ? null : id);
  };

  return (
    <ButtonContainer>
      <Button 
        selected={clickedButton === LIKE ? true : false} 
        id={LIKE} 
        onClick={handleClick}>Like: {like}
      </Button>
      <Button 
        selected={clickedButton === DISLIKE ? true : false} 
        id={DISLIKE} 
        onClick={handleClick}>Dislike: {dislike}
      </Button>
    </ButtonContainer>
  );
}

export default LikeDislikeTest;