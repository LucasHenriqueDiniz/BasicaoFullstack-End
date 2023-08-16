import axios from "axios";
import { ENV_VARIABLES } from "../env";

export const webClientInstance = axios.create({
  baseURL: ENV_VARIABLES.SERVER_BASE_URL,
});
