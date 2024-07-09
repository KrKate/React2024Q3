import React from 'react';
import { Product, State } from './models';
import Search from './components/Search/Search';
import Loader from './components/Loader/Loader';
import styles from './App.module.css';
import ErrorButton from './components/ErrorButton/ErrorButton';
import { fetchProducts, URL } from './helpers/api';
import ProductList from './components/productList/ProductList';

class App extends React.PureComponent<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      this.setState({
        products: JSON.parse(savedProducts),
        isLoading: false,
      });
    } else {
      this.setState({ isLoading: true });
      fetchProducts(`${URL.base}`).then((products) => {
        this.setState({ products, isLoading: false });
      });
    }
  }

  updateProducts = (products: Product[]) => {
    this.setState({ products });
    localStorage.setItem('products', JSON.stringify(products));
  };

  render() {
    const { products, isLoading } = this.state;
    return (
      <div>
        <div className={styles.errorContainer}>
          <ErrorButton />
        </div>
        <div className={styles.searchContainer}>
          <Search updateProducts={this.updateProducts} />
        </div>
        <div className={styles.cardsContainer}>
          {isLoading && !products.length ? (
            <Loader />
          ) : (
            <ProductList products={products} />
          )}
        </div>
      </div>
    );
  }
}

export default App;
