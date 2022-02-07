interface BotaoProps {
    cor?: 'green' | 'blue' | 'red' | 'gray'
    children: any
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    const cor = props.cor ?? 'gray'
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-br from-${cor}-300 to-${cor}-400
            text-gray-700 dark:text-gray-200 font-bold px-4 py-2 m-2 rounded-md
        `}>
            {props.children}
        </button>
    )
}