import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

axios.defaults.baseURL = "https://udv-benefits.ru";
const token = getFromLocalStorage("token");

export const ApplyApi = {
  async applyBenefit(id: number, formData: FormData | string) {
    let dataToSend;

    if (formData === "") {
      const emptyFormData = new FormData();
      emptyFormData.append("files", "");
      dataToSend = emptyFormData;
    } else {
      dataToSend = formData;
    }

    console.log(dataToSend);
    const response = await axios.post(`/benefits/apply/${id}`, dataToSend, {
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

    const encodedInsuranceMember = encodeURIComponent(insuranceMember);
    const encodedInsuranceType = encodeURIComponent(insuranceType);

    const url = `https://udv-benefits.ru/benefits/insurance?benefit_id=${benefitId}&insurance_member=${encodedInsuranceMember}&insurance_type=${encodedInsuranceType}`;

    console.log(url);

    const response = await axios.post(url, formData, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  },
};
