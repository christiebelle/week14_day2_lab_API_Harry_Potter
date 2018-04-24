import React from 'react';
import CharacterList from '../components/CharacterList'

class CharacterBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currectCharacter: null
    }
  }

  render(){
    return(
      <React.Fragment>
        <p>{console.log("characters")}</p>
      </React.Fragment>
    )
  }



}


export default CharacterBox;
