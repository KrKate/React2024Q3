import React from 'react';
import { People } from '../../models';
import styles from './Card.module.css';

interface CardProps {
  character: People;
}

class Card extends React.PureComponent<CardProps> {
  render() {
    const { character } = this.props;
    return (
      <div className={styles.characterCard}>
        <h2>{character.name}</h2>
        <ul>
          <li>Height: {character.height}</li>
          <li>Mass: {character.mass}</li>
          <li>Hair color: {character.hair_color}</li>
          <li>Skin color: {character.skin_color}</li>
          <li>Eye color: {character.eye_color}</li>
          <li>Birth year: {character.birth_year}</li>
          <li>Gender: {character.gender}</li>
        </ul>
      </div>
    );
  }
}

export default Card;
