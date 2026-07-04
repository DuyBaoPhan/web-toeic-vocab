import { Workbox } from 'workbox-window';
export function registerPwa(onOffline?:(offline:boolean)=>void){ if('serviceWorker' in navigator){ const wb=new Workbox('/sw.js'); wb.register().catch(()=>undefined); } window.addEventListener('online',()=>onOffline?.(false)); window.addEventListener('offline',()=>onOffline?.(true)); }
