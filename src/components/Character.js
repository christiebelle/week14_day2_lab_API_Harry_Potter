import React from 'react';

const Character = (props) => {
  if(!props.character) return null;
  return(
    <article>
      <img
        style={{width:"250px", margin: "25px"}}
        src={props.character.image} alt={props.character.name}/>
        <br/>
        <h3>{props.character.name}</h3>
        <ul>
            <ol>{props.character.dateOfBirth}</ol>
            <ol>{props.character.gender}</ol>
            <ol>{props.character.alive}</ol>
        </ul>
    </article>
  )
}

export default Character;
