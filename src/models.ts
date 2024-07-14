export interface Product {
  title: string;
  id: number;
  description: string;
  price: number;
  images: string;
}

export interface SearchState {
  searchValue: string;
  isLoading: boolean;
}

export interface CardProps {
  product: Product;
}

export interface State {
  products: Product[];
  isLoading: boolean;
}

export interface SearchProps {
  updateProducts: (products: Product[]) => void;
}
