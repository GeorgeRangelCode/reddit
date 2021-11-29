import { API_URL } from "../utils/constants";

export const getNewsAPI = async () => {
  try {
    const url = `${API_URL}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
};
