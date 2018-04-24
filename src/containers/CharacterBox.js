import React from 'react';
import CharacterList from '../components/CharacterList';
import Character from '../components/Character';



class CharacterBox extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      characters: [],
      currectCharacter: null
    }
  }


  componentDidMount(){
    fetch("http://hp-api.herokuapp.com/api/characters")
    .then(response => response.json())
    .then(json => this.setState({characters: json}));
  }


handleCharacterSelected(index){
  const selectedCharacter = this.state.characters[index];
  this.setState({currectCharacter: selectedCharacter});
}

  render(){
    return(
      <React.Fragment>
        <h1>Harry Potter's characters</h1>
        <CharacterList characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}>
        </CharacterList>
        <Character character={this.state.currectCharacter}>
        </Character>
      </React.Fragment>
    )
  }



}


export default CharacterBox;
