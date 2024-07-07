import React from 'react';
import { People, State } from './models';
import Loader from './components/loader';
import CharacterList from './components/characterList/CharacterList';
import Search from './components/search';

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
      fetch('https://dummyjson.com/products/')
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
        <div className="error-container">
          <button type="button">Click for Error</button>
        </div>
        <div className="search-container">
          <Search updateCharacters={this.updateCharacters} />
        </div>
        <div className="cards-container">
          {isLoading ? <Loader /> : <CharacterList characters={characters} />}
        </div>
      </div>
    );
  }
}

export default App;
