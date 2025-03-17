import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <NavLink
                to="/menu"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
                Menú
            </NavLink>

            <NavLink
                to="/resources"
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
                Recursos
            </NavLink>
        </nav>
    );
}
export default Navigation
