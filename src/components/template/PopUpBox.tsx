import { ReactNode } from 'react';
import { IconeTrash } from '../icons';

interface PopUpBoxProps {
    children: ReactNode;
    titulo: string
    setTrigger?: (e: boolean) => void
    trigger?: boolean
}

function PopUpBox(props: PopUpBoxProps) {
    
    return props.trigger ? (
        <div className='flex flex-col w-full h-full float-right'>
            <div className={`
                flex flex-col w-1/3 justify-center
                border-none rounded-2xl p-4 m-5
                bg-gradient-to-tr from-slate-400 to-slate-600
                dark:from-slate-500 dark:to-slate-800
            `}>
                <div className='flex'>
                    <span className='flex flex-grow justify-center items-center p-2'>{props.titulo}</span>
                    <button
                        onClick={() => props.setTrigger(false)}
                        className='flex justify-end hover:text-red-400'> {IconeTrash(5)} </button>
                </div>
                <hr className="border-2 rounded-lg border-slate-500 dark:border-slate-200" />
                { props.children }
            </div>
        </div>
    ) : <div></div>
}

export default PopUpBox;
