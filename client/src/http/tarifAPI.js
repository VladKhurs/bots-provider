import { $host} from "./index";

export const fetchUserTarif = async (tarifId) => {
  const {data} = await $host.post('api/tarif/one', {tarifId})
  return data
}

export const fetchAllTarifs = async () => {
  const {data} = await $host.get('api/tarif/all')
  return data
}
