import React from 'react';
import { People, State } from './models';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import CharacterList from './components/characterList/CharacterList';
import styles from './App.module.css';
import ErrorButton from './components/ErrorButton/ErrorButton';

class App extends React.PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      characters: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const savedCharacters = localStorage.getItem('characters');
    if (savedCharacters) {
      this.setState({
        characters: JSON.parse(savedCharacters),
        isLoading: false,
      });
    } else {
      this.setState({ isLoading: true });
      fetch('https://swapi.dev/api/people/')
        .then((response) => response.json())
        .then((data: { results: People[] }) => {
          this.setState({ characters: data.results, isLoading: false });
          localStorage.setItem('characters', JSON.stringify(data.results));
        })
        .catch((error) => console.log(error));
    }
  }

  updateCharacters = (characters: People[]) => {
    this.setState({ characters });
    localStorage.setItem('characters', JSON.stringify(characters));
  };

  render() {
    const { characters, isLoading } = this.state;
    return (
      <div>
        <div className={styles.errorContainer}>
          <ErrorButton />
        </div>
        <div className={styles.searchContainer}>
          <Search updateCharacters={this.updateCharacters} />
        </div>
        <div className={styles.cardsContainer}>
          {isLoading && !characters.length ? (
            <Loader />
          ) : (
            <CharacterList characters={characters} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
