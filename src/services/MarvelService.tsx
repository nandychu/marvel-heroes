import md5 from "md5";

const MARVEL_URL = "https://gateway.marvel.com/v1/public";

const generateCredentials = () => {
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY;
  const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
  const timestamp = Date.now();

  const hash = md5(timestamp + privateKey + publicKey);
  return { timestamp, publicKey, hash };
};

export const fetchMarvelHeroes = async (searchName?: string) => {
  const { publicKey, timestamp, hash } = generateCredentials();

  const response = await fetch(
    `${MARVEL_URL}/characters?apikey=${publicKey}&hash=${hash}&ts=${timestamp}&limit=50${
      searchName ? `&nameStartsWith=${searchName}` : ""
    }`
  );
  const responseData: any = await response.json();
  return responseData.data.results;
};

export const fetchHeroeComics = async (heroeId: string) => {
  const { publicKey, timestamp, hash } = generateCredentials();
  const response = await fetch(
    `https://gateway.marvel.com/v1/public/characters/${heroeId}/comics?apikey=${publicKey}&hash=${hash}&ts=${timestamp}`
  );
  const responseData: any = await response.json();
  return responseData.data.results;
};
