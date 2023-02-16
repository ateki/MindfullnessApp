import { NavLink } from 'react-router-dom';

function Header(){
    return (
        <>
        <header>
        <NavLink className="logo" to="/" >Logo</NavLink>
        <nav>
        <NavLink to="/menu">Menu</NavLink>
        <NavLink to="/garden">Garden</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        </nav>

        </header>
        </>
    )
}

export default Header