import {$host} from './index'

export const fetchExtraFunctions = async () => {
  const {data} = await $host.get('api/extra_function/all')
  return data
}

export const fetchExtraFunctionsWhereTarif = async (tarifId) => {
  const {data} = await $host.post('api/extra_function/all_where_tarif', {tarifId})
  return data
}
