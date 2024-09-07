import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get("/menu.json");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
