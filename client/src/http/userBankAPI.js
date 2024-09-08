import { $host} from "./index";

export const fetchUserBank = async (userId) => {
  const {data} = await $host.post('api/user_bank/one', {userId})
  return data
}

export const fetchPurchasedFunctions = async (userBankId) => {
  const {data} = await $host.post('api/user_bank/purchased_function/all', {userBankId})
  return data
}

export const changeTarif = async (userId, tarifId) => {
  const {data} = await $host.patch('api/user_bank/tarif', {userId, tarifId})
  return data
}
