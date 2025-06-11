import { config } from "../config/env";

const fetchData = async (endPoint) => {
  const url = `${config.apiBaseUrl}${endPoint}`;
  try {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${config.apiToken}`,
      },
    });
    const response = await data.json();
    return response.results;
  } catch (error) {
    return error.message;
  }
};

export { fetchData };
