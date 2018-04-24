import React from 'react';
import CharacterList from '../components/CharacterList';
import Character from '../components/Character';



class CharacterBox extends React.Component{
  constructor(props){
    super(props);
    this.handleCharacterSelected = this.handleCharacterSelected.bind(this);
    this.filterByStudents = this.filterByStudents.bind(this);
    this.filterByStaff = this.filterByStaff.bind(this);
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

  filterByStudents(){
    const students = [];
    for (let character of this.state.characters){
      if(character.hogwartsStudent){
        students.push(character)
      };
    };
    this.setState({characters: students});
  };

  filterByStaff(){
    const staff = [];
    for (let character of this.state.characters){
      if(character.hogwartsStaff){
        staff.push(character)
      };
    };
    this.setState({characters: staff});
  }

  render(){
    return(
      <div className="main">
        <h3>Harry Potter's characters</h3>
        <CharacterList characters={this.state.characters} onCharacterSelected={this.handleCharacterSelected}>
        </CharacterList>
        <Character character={this.state.currectCharacter}>
        </Character>
        <button className="button" onClick={this.filterByStudents}>Filter By Students</button>
        <button className="button" onClick={this.filterByStaff}>Filter By Staff</button>
      </div>

    )
  }



}


export default CharacterBox;
