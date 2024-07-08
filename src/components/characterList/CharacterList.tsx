import React from 'react';
import { People } from '../../models';
import Card from '../Card/Card';

interface CharacterListProps {
  characters: People[];
}

class CharacterList extends React.PureComponent<CharacterListProps> {
  render() {
    const { characters } = this.props;
    if (characters.length === 0) {
      return <p>Character not found</p>;
    }

    return (
      <>
        {characters.map((character: People) => (
          <Card key={character.name} character={character} />
        ))}
      </>
    );
  }
}

export default CharacterList;
