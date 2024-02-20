import MenuLink from '../../MenuLink'
import './Header.css'

const Header = () => {
    return (
        <header className="cabecalho">
            <MenuLink to={'/'} >
                Home
            </MenuLink>
            <MenuLink to={'/clients'} >
                Clients
            </MenuLink>
            <MenuLink to={'/info'} >
                Info
            </MenuLink>
        </header>
    )
}

export default Header