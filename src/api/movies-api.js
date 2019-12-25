import axios from "axios";

export default axios.create({
  baseURL: "https://api.internationalshowtimes.com",
  headers: {
    Authorization: "Token token=lSmrgGELQM6CegGynwUbH2aNu6NNI1Pa"
  }
});
