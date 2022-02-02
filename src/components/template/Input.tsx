interface InputProps {
    tipo?: 'text' | 'number'
    texto: string
    value: any
    somenteLeitura?: boolean
    className?: string
    onChange?: (value: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className={`flex flex-col ${props.className}`}>
            <label className="mb-2">
                {props.texto}
            </label>
            <input
                type={props.tipo ?? 'text'}
                value={props.value}
                readOnly={props.somenteLeitura}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border border-purple-500 rounded-lg mb-5
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}