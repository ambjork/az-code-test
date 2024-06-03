import get from "axios";
import * as console from "console";

//TODO: fix so that jest accepts import.meta.env syntax
//const API_URL = import.meta.env.VITE_BASE_URL
const API_URL = "https://api.tvmaze.com";

export async function getShowById(id: string) {
    try {
        const response = await get(`${API_URL}/shows/${id}`);
        return response.data;
    } catch (err) {
        console.log(err);
    }
}