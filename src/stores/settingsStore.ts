import { create } from 'zustand';
interface SettingsState{dark:boolean;toggleDark:()=>void} export const useSettingsStore=create<SettingsState>(set=>({dark:false,toggleDark:()=>set(s=>({dark:!s.dark}))}));
