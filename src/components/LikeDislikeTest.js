import React, { useState } from "react";

function LikeDislikeTest(props) {
  const [like, setLike] = useState(100);
  const [dislike, setDislike] = useState(100);
  const [clickedButton, setClickedButton] = useState(null);


  const handleClick = ({ target }) => {

    
  };

  return (
    <div>
      <button id="like" onClick={handleClick}>Like: {like}</button>
      <button id="dislike" onClick={handleClick}>Dislike: {dislike}</button>
    </div>
  );
}

export default LikeDislikeTest;
