import React, { ChangeEvent } from 'react';
import Loader from './loader';
import { SearchProps, SearchState, People } from '../models';

class Search extends React.Component<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: '',
      // eslint-disable-next-line react/no-unused-state
      characters: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    const savedValue = localStorage.getItem('searchValue');
    if (savedValue) {
      this.setState({ searchValue: savedValue });
    }
  }

  componentDidUpdate() {
    const { searchValue } = this.state;
    localStorage.setItem('searchValue', searchValue);
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSearch = () => {
    const { searchValue } = this.state;
    const { updateCharacters } = this.props;
    localStorage.setItem('searchValue', searchValue);
    this.setState({ isLoading: true });

    fetch(`https://swapi.dev/api/people/?search=${searchValue}`)
      .then((response: Response) => response.json())
      .then((data: { results: People[] }) => {
        // this.setState({ characters: data.results });
        updateCharacters(data.results);
      })
      .catch((error) => console.error(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      this.handleSearch();
    }
  };

  render() {
    const { searchValue, isLoading } = this.state;
    return (
      <div className="search__component">
        <input
          placeholder="Enter character name"
          type="text"
          className="search__input"
          value={searchValue}
          onChange={this.handleInputChange}
          onKeyDown={this.handleKeyPress}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
        {isLoading && <Loader />}
      </div>
    );
  }
}

export default Search;
