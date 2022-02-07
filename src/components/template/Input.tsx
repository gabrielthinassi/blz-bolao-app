interface InputProps {
    name: string
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
                name={props.name}
                type={props.tipo ?? 'text'}
                value={props.value}
                readOnly={props.somenteLeitura}
                onChange={e => props.onChange?.(e.target.value)}
                className={`
                    border-none rounded-lg mb-5
                    focus:outline-none bg-gray-100 px-4 py-2
                    ${props.somenteLeitura ? '' : 'focus:bg-white'}
                `}
            />
        </div>
    )
}