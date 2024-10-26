// utils/fetchers.ts
import axios from 'axios';

export const fetchPostcodeDetails = async (query: string): Promise<string[]> => {
  const { data } = await axios.get(`https://api.postcodes.io/postcodes/${query}/`);
  return data.result || [];
};
