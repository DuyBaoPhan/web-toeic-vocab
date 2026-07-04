import { createContext, ReactNode, useContext, useState } from 'react';
interface ToastItem{ id:number; message:string } interface ToastContextValue{ push:(message:string)=>void }
const Ctx=createContext<ToastContextValue>({push:()=>undefined});
export function ToastProvider({children}:{children:ReactNode}){const [items,setItems]=useState<ToastItem[]>([]);const push=(message:string)=>{const id=Date.now();setItems(x=>[...x,{id,message}]);window.setTimeout(()=>setItems(x=>x.filter(i=>i.id!==id)),2800)};return <Ctx.Provider value={{push}}>{children}<div className="fixed right-4 top-4 z-[60] space-y-2">{items.map(i=><div key={i.id} className="glass rounded-2xl px-4 py-3 font-semibold">{i.message}</div>)}</div></Ctx.Provider>}
export const useToast=()=>useContext(Ctx);
