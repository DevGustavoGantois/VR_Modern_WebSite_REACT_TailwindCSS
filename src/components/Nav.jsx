

export function Nav() {
    return (
        <nav className="hidden lg:flex">
            <ul className="flex items-center space-x-12 font-secondary">
                <li className="nav-link"><a href="#">Home</a></li>
                <li className="nav-link"><a href="#Empresa">Empresa</a></li>
                <li className="nav-link"><a href="#Caracteristica">Características</a></li>
                <li className="btn"><a href="#Explore">Inscreva-se</a></li>
            </ul>
        </nav>
    )
}