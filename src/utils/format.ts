export const numberCompact=(n:number)=>new Intl.NumberFormat('vi-VN',{notation:'compact'}).format(n);
export const percent=(n:number)=>`${Math.round(n)}%`;
