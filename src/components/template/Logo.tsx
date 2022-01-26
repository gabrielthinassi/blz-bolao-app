export default function Logo() {
    return (
        <div className={`
            flex flex-col h-10 w-10 rounded-full
            bg-gradient-to-r from-sky-900 to-sky-500
        `}>
            <div className={`
                flex flex-col h-full w-full
                font-black text-ellipsis
                justify-center items-center
            `}>
                GT
            </div>
        </div>
    )
}