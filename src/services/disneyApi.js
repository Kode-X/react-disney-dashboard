import axios from "axios";
import useStore from "../store";

const API_URL = "https://api.disneyapi.dev/character";

export const fetchDisneyData = async () => {
  const { setDisneyData } = useStore.getState();
  try {
    const response = await axios.get(API_URL);
    setDisneyData(response.data.data);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching Disney data:", error);
    setDisneyData([]);
    return [];
  }
};
