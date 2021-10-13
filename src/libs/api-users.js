import axios from "axios";
import { USER_TOKEN } from "../config/constants";

const useFetcher = async () => {
  const token = USER_TOKEN();
  const url = "https://api.bybits.co.uk/policys/details";

  if (document.cookie.includes(`ByBits-Token=${token}`)) {
    // authorized
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: "Bearer " + token,
          environment: "mock",
          "Content-type": "application/json",
        },
      });
      return response;
    } catch (err) {
      console.error(err);
    }
  }
  // not authorized
  const error = new Error("Not authorized!");
  error.status = 403;
  throw error;
};

export default useFetcher;
