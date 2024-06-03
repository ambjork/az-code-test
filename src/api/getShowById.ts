import get from "axios";

//TODO: fix so that jest accepts import.meta.env syntax
//const API_URL = import.meta.env.VITE_BASE_URL
const API_URL = "https://api.tvmaze.com";

export async function getShowById(id: string) {
        const response = await get(`${API_URL}/shows/${id}`);
        return response.data;
}