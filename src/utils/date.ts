export const formatDate=(d:string|Date)=>new Intl.DateTimeFormat('vi-VN',{dateStyle:'medium'}).format(new Date(d));
export const daysUntil=(d:string|Date)=>Math.max(0,Math.ceil((new Date(d).getTime()-Date.now())/86400000));
