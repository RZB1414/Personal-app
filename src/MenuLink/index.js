import './MenuLink.css'
import { Link, useLocation } from 'react-router-dom'

const MenuLink = ({ to, children }) => {

    const location = useLocation()

    return (
        <Link
            to={to}
            className={location.pathname === to ? 'menu-link focus' : 'menu-link'} >
                {children}
        </Link>
    )
}

export default MenuLink