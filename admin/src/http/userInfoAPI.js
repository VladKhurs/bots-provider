import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const userInfoAll = async () => {
  const {data} = await $host.get('api/user_info/all')
  return data
}
