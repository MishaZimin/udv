import axios from "axios";

axios.defaults.baseURL = "http://89.169.137.145:8000";

export const BenefitApi = {
  async getBenefits() {
    const response = await axios.get("/benefits/all");
    return response.data;
  },
};
