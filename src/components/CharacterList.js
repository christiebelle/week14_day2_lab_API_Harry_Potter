import React from 'react';

const CharacterList = (props) => {

    const options =  props.characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    });

    return(
      <select
        id="character-selector"
        defaultValue="default">
        <option disabled value="default">Look at all the characters!</option>
        {characters}
      </select>
    )

}

export default CharacterList;
