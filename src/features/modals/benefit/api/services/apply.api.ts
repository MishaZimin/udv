import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";
const token = getFromLocalStorage("token");

export const ApplyApi = {
  async applyBenefit(id: number, formData: FormData) {
    const response = await axios.post(`/benefits/apply/${id}`, formData, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },

  async postInsurance(formData: FormData) {
    const response = await axios.post("/benefits/insurance", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },

  async submitInsuranceRequest(
    benefitId: number,
    insuranceMember: string,
    insuranceType: string,
    files: File[],
  ) {
    const formData = new FormData();

    files.forEach((file) => formData.append("files", file));

    const response = await axios.post(
      `https://udv-benefits.ru/benefits/insurance?benefit_id=${benefitId}&insurance_member=${insuranceMember}&insurance_type=${insuranceType}`,
      formData,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      },
    );

    return response.data;
  },
};
