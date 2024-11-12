import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";
import { IBenefitInfo } from "../model/types/benefit.type";

axios.defaults.baseURL = "https://udv-benefits.ru";
const token = getFromLocalStorage("token");

export const BenefitApi = {
  async getBenefits() {
    const response = await axios.get("/benefits/all", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    });
    return response.data;
  },

  async getBenefit(id: number) {
    const response = await axios.get("/benefits/" + id, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  },

  async createBenefit(data: IBenefitInfo) {
    const response = await axios.post("/benefits/new", data, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },

  async editBenefit(id: number, data: IBenefitInfo) {
    const response = await axios.put("/benefits/edit/" + id, data, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  },

  async getBenefitDelete(id: number) {
    const response = await axios.delete("/benefits/delete/" + id, {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + token,
      },
    });
    return response.data;
  },

  uploadBenefitCover: async (benefitId: number, imageFile: File) => {
    const formData = new FormData();
    formData.append("image", imageFile);

    const response = await axios.post(
      `/benefits/${benefitId}/cover`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + token,
          Accept: "application/json",
        },
      },
    );

    return response.data;
  },
};
