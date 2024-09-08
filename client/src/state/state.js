import {create} from 'zustand'

export const useUsersStore = create((set) => ({
  users: [],
  addUser: (username) => set((state) => 
  ({ 
    users: [
      ...state.users,
      {id: Date.now(), username}
    ]
  })),
}));

export const useAnotherUsersStore = create(()=> ({
  
}))
