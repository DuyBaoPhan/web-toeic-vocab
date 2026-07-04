import { create } from 'zustand';
interface SessionState{xp:number;addXp:(xp:number)=>void} export const useSessionStore=create<SessionState>(set=>({xp:0,addXp:(xp)=>set(s=>({xp:s.xp+xp}))}));
