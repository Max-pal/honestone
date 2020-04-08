import axios from "axios";

export const honestoneAPI = axios.create({ withCredentials: true });
export const blizzardAPI = axios.create();
