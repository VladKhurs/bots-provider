import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const userInfoOne = async (email) => {
  const {data} = await $host.post('api/user_info/one', {email})
  return data
}

/*
http://localhost:5000/

export async function setAddress(access_token: string, userData: { id: string; version: string; actions: Actions[] }) {
  const response = await fetch(`${hostUrl + productKey}/customers/${userData.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
    body: JSON.stringify({
      version: userData.version,
      actions: userData.actions,
    }),
  });
  const data = await response.json();
  return data;
}

export async function queryProducts(access_token: string) {
  const response = await fetch(`${hostUrl + productKey}/products`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${access_token}`,
    },
  });
  const data = await response.json();
  return data.results;
}

*/