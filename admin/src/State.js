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
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeBear: () => set((state) => ({ bears: state.bears - 1})),
  removeAllBears: () => set({ bears: 0 }),
  setAdminInfo: (info) => set({ adminInfo: info }),
  getAdminInfo: () => get().adminInfo,



}));
