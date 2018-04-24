import React from 'react';

const Character = (props) => {
  if(!props.character) return null;

  const alive = props.character.alive ? "Alive" : "Dead";

  return(
    <article>
      <img
        style={{width:"200px", margin: "20px"}}
        src={props.character.image} alt={props.character.name}/>
        <br/>
        <h5>{props.character.name}</h5>
        <ul>
            <ol>{props.character.dateOfBirth}</ol>
            <ol>{props.character.gender}</ol>
            <ol>{alive}</ol>
        </ul>
    </article>
  )
}

export default Character;
