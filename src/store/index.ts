import create from "zustand";

interface AuthState {
  loggedIn: boolean;
  email?: string;
  logIn: (email: string) => void;
  logOut: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  loggedIn: false,
  logIn: (email) => set({ loggedIn: true, email }),
  logOut: () => set({ loggedIn: false }),
}));
