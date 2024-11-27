import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

export const GetMyApplications = async () => {
  const response = await axios.get("https://udv-benefits.ru/users/requests", {
    headers: {
      accept: "application/json",
      Authorization: "Bearer " + getFromLocalStorage("token"),
    },
  });
  return response.data;
};

export const CancelMyApplications = async (id: number) => {
  const response = await axios.put(
    "https://udv-benefits.ru/benefits/deny/" + id,
    {
      reason: "",
    },

    {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer " + getFromLocalStorage("token"),
      },
    },
  );
  return response.data;
};
