import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'user' | 'admin';
}

interface AuthState {
  isAuthenticated: boolean;
  isAdmin: boolean;
  user: User | null;
  isVerifying: boolean;
  phone: string;
  login: (phone: string) => Promise<void>;
  verifyOTP: (otp: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  isAdmin: false,
  user: null,
  isVerifying: false,
  phone: '',
  
  login: async (phone: string) => {
    // Simulate API call for OTP generation
    set({ isVerifying: true, phone });
    // In production, this would make an API call to send OTP
    // For demo, we'll simulate success
    await new Promise(resolve => setTimeout(resolve, 1000));
  },
  
  verifyOTP: async (otp: string) => {
    // Simulate API verification
    if (otp === '123456') { // In production, verify against actual OTP
      set({
        isAuthenticated: true,
        isAdmin: false,
        isVerifying: false,
        user: {
          id: '1',
          name: 'John Doe',
          email: 'john@example.com',
          phone: '0908005544',
          role: 'user'
        }
      });
    } else {
      throw new Error('Invalid OTP');
    }
  },
  
  logout: () => {
    set({ 
      isAuthenticated: false, 
      isAdmin: false, 
      user: null,
      isVerifying: false,
      phone: ''
    });
  },
}));