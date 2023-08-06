import { create } from 'zustand';

interface PlayerStore {
  ids: string[];
  acctiveId?: string;
  setId: (id: string) => void;
  setIds: (ids: string[]) => void;
  reset: () => void;
}

const usePlayer = create<PlayerStore>((set) => ({
  ids: [],
  acctiveId: undefined,
  setId: (id: string) => set({ acctiveId: id }),
  setIds: (ids: string[]) => set({ ids: ids }),
  reset: () => set({ ids: [], acctiveId: undefined }),
}));

export default usePlayer;
