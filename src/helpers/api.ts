export enum URL {
  base = `https://swapi.dev/api/people/`,
  search = `?search=`,
}

export const fetchCharacters = async (url: string) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
