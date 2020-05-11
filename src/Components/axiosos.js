import axios from "axios";
import http from "http";

export const honestoneAPI = axios.create({
  withCredentials: true,
  httpAgent: new http.Agent({ keepAlive: true }),
});
export const blizzardAPI = axios.create();
