import { create } from 'zustand';
interface AuthState{userId:string;setUserId:(id:string)=>void} export const useAuthStore=create<AuthState>(set=>({userId:'demo-user',setUserId:(userId)=>set({userId})}));
