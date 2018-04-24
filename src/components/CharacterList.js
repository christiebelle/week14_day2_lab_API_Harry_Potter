import React from 'react';

const CharacterList = (props) => {

    const options =  props.characters.map((character, index) => {
      return <option value={index} key={index}>{character.name}</option>
    });

    const handleChange = (event) => {
      let index = event.target.value;
      props.onCharacterSelected(index);
    }

    return(
      <select
        onChange={handleChange}
        id="character-selector"
        defaultValue="default">
        <option disabled value="default">Look at all the characters!</option>
        {options}
      </select>
    )

}

export default CharacterList;
