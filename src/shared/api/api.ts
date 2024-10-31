import axios from "axios";

axios.defaults.baseURL = "https://udv-benefits.ru";

export const BenefitApi = {
  async getBenefits() {
    const response = await axios.get("/benefits/all");
    return response.data;
  },
};
