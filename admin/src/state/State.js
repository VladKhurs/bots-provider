import create from 'zustand'

export const useStore = create((set, get) => ({
  bears: 0,
  tarifInfo: '',
  purchasedFunctions: '',
  extraFunctionsToBuy: ' ',
  allTarifs: '',
  bankInfo: '',
  extraFunctions: '',
  isChanged: '',
  allUserInfos: '',
  adminInfo: '',
  allTarifsIds: '',
  isAuth: '',
  user: '',
  history: '',

  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeBear: () => set((state) => ({ bears: state.bears - 1})),
  removeAllBears: () => set({ bears: 0 }),

  setTarifInfo: (info) => set(() => ({ tarifInfo: info })),
  getTarifInfo: () => get().tarifInfo,

  setPurchasedFunctions: (info) => set(() => ({ purchasedFunctions: info })),
  getPurchasedFunctions: () => get().purchasedFunctions,

  setExtraFunctionsToBuy: (info) => set(() => ({ extraFunctionsToBuy: info })),
  getExtraFunctionsToBuy: () => get().extraFunctionsToBuy,

  setAllTarifs: (info) => set(() => ({ allTarifs: info })),
  getAllTarifs: () => get().allTarifs,

  setBankInfo: (info) => set(() => ({ bankInfo: info })),
  getBankInfo: () => get().bankInfo,

  setExtraFunctions: (info) => set(() => ({ extraFunctions: info })),
  getExtraFunctions: () => get().extraFunctions,

  setIsChanged: (info) => set(() => ({ isChanged: info })),
  getIsChanged: () => get().isChanged,

  setAllUserInfos: (info) => set(() => ({ allUserInfos: info })),
  getAllUserInfos: () => get().allUserInfos,

  setAdminInfo: (info) => set(() => ({ adminInfo: info })),
  getAdminInfo: () => get().adminInfo,

  setAllTarifsIds: (info) => set(() => ({ allTarifsIds: info })),
  getAllTarifsIds: () => get().allTarifsIds,
  
  setUser: (info) => set(() => ({ user: info })),
  getUser: () => get().user,

  setIsAuth: (info) => set(() => ({ isAuth: info })),
  getIsAuth: () => get().isAuth,

  setHistory: (info) => set(() => ({ hostory: info })),
  getHistory: () => get().hostory,
}));
