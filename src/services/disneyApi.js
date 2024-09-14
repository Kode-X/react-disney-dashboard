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
      films: character.films,
      tvShows: character.tvShows,
      videoGames: character.videoGames,
      numberOfTvShows:
        character.tvShows.length > 0 ? character.tvShows.length : [],
      numberOfVideoGames:
        character.videoGames.length > 0 ? character.videoGames.length : [],
      allies: character.allies,
      enemies: character.enemies,
      image: character.imageUrl,
    }));
    setDisneyData(processedData);
  } catch (error) {
    console.error("Error fetching Disney data:", error);
    setDisneyData([]);
  }
};
