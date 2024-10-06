import axios from "axios";

axios.defaults.baseURL = "https://dummyjson.com";

export const BenefitServise = {
    async getProducts() {
        const response = await axios.get("/products", {
            params: { limit: 11 },
        });
        return response.data;
    },
};
