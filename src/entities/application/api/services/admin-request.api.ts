import axios from "axios";
import { getFromLocalStorage } from "src/shared/lib";

export const sendAdminRequest = async (
  id: number,
  action: "apply" | "deny",
): Promise<void> => {
  const token = getFromLocalStorage("token");
  const response = await axios.put(
    `https://udv-benefits.ru/admin/requests/${id}/${action}`,
    null,
    {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    },
  );
  return response.data;
};

export const getRequestById = async (requestId: string) => {
  const response = await axios.get(
    `https://udv-benefits.ru/admin/requests/admin/requests/${requestId}`,
    {
      headers: {
        accept: "application/json",
      },
    },
  );
  return response.data;
};
