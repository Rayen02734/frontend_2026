import { create } from 'zustand';
import { defaultLanguage } from '../i18n';

const initialUser = {
  id: 'student-demo',
  name: 'Amina Rahmouni',
  email: 'amina@growup.io',
  role: 'student',
};

const useAppStore = create((set, get) => ({
  activeRole: 'student',
  language: defaultLanguage,
  currentUser: initialUser,
  cart: [],
  setActiveRole: (role) => set({ activeRole: role }),
  setLanguage: (language) => set({ language }),
  setCurrentUser: (user) => set({ currentUser: user, activeRole: user.role }),
  logout: () => set({ currentUser: null, activeRole: 'student' }),
  addToCart: (course) => {
    const existing = get().cart.find((item) => item.id === course.id);
    if (existing) {
      set({
        cart: get().cart.map((item) =>
          item.id === course.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      });
      return;
    }

    set({ cart: [...get().cart, { ...course, quantity: 1 }] });
  },
  removeFromCart: (courseId) => set({ cart: get().cart.filter((item) => item.id !== courseId) }),
  clearCart: () => set({ cart: [] }),
}));

export default useAppStore;
