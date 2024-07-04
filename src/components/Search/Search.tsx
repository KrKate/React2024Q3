// import styles from "./Search.module.css"
import React, { ChangeEvent } from 'react';

export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
}

interface SearchState {
  searchValue: string;
  products: Product[];
}

export interface CardProps {
  product: Product;
}

export interface SearchProps {
  updateProducts: (products: Product[]) => void;
  searchValue: string;
}

class Search extends React.PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props);
    this.state = {
      searchValue: '',
      products: [],
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
    localStorage.setItem('searchValue', searchValue);

    fetch(`https://dummyjson.com/products/search?q=${searchValue}`)
      .then((response: Response) => response.json())
      .then((data: { results: Product[] }) => {
        this.setState({ products: data.results });
        this.props.updateProducts(data.results);
      })
      .catch((error) => console.error(error));
  };

  render() {
    const { products } = this.state;
    const { searchValue } = this.props;
    return (
      <div>
        <input
          placeholder="Enter something"
          type="text"
          value={searchValue}
          onChange={this.handleInputChange}
        />
        <button type="button" onClick={this.handleSearch}>
          Search
        </button>
        <ul>
          {products.map((product) => (
            <li key={product.id}>{product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Search;
