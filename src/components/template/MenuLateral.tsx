import { IconeConfig, IconeHome, IconeList, IconeLogout, IconeUser } from "../icons";
import MenuItem from "./MenuItem";
import Logo from "./Logo";
import useAuth from "../../data/hook/useAuth";

export default function MenuLateral() {

    const { logout } = useAuth()

    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col
                items-center justify-center
                h-20 w-20
                bg-gradient-to-r from-sky-600 via-sky-700 to-sky-800`}>
                <Logo />
            </div>
            <ul className="flex-grow">
                <MenuItem url="/" texto="Home" icone={IconeHome} />
                <MenuItem url="/pessoas" texto="Pessoas" icone={IconeUser} />
                <MenuItem url="/todos" texto="To Do" icone={IconeList} />
                <MenuItem url="/configuracoes" texto="Configuração" icone={IconeConfig} />
            </ul>
            <ul>
                <MenuItem
                    icone={IconeLogout}
                    texto="Logout"
                    className={`
                        text-red-700 hover:bg-red-400 hover:text-white
                        dark:text-red-400 dark:hover:text-white
                    `}
                    onClick={logout} />
            </ul>
        </aside>
    )
}