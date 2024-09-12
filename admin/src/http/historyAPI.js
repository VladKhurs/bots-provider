import { $host} from "./index";

export const createHistoryItem = async (date, time, managerLogin, operation, adminId) => {
    const {data} = await $host.post('api/history/', {date, time, managerLogin, operation, adminId})
    return data
}

export const fetchHistory = async () => {
    const {data} = await $host.get('api/history/all')
    return data
}
