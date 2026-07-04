import { HTMLAttributes } from 'react'; import clsx from 'clsx';
export function Card({className,...props}:HTMLAttributes<HTMLDivElement>){return <div className={clsx('glass rounded-3xl p-5',className)} {...props}/>}
