export enum URL {
  base = `//dummyjson.com/products/`,
  search = `search?q=`,
  select = `&select=title`,
}

export const fetchProducts = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
