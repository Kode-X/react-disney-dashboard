import axios from "axios";
import useStore from "../store";

const API_URL = "https://api.disneyapi.dev/character";

export const fetchDisneyData = async () => {
  const { setDisneyData, setLoading } = useStore.getState();
  setLoading(true);
  try {
    const response = await axios.get(API_URL);
    const processedData = response.data.data.map((character, index) => ({
      id: character._id || index,
      name: character.name,
      tvShows: character.tvShows.join(", "),
      videoGames: character.videoGames.join(", "),
      allies: character.allies.join(", "),
      enemies: character.enemies.join(", "),
    }));
    setDisneyData(processedData);
  } catch (error) {
    console.error("Error fetching Disney data:", error);
    setDisneyData([]);
  }
};
