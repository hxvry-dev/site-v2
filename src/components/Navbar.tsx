import { IconDots } from "@tabler/icons-react";
import { NavLink } from "react-router";

export const Navbar = () => {
    return (
        <div className="navbar bg-base-200 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost">
                        <IconDots />
                    </div>
                    <ul
                        tabIndex={-1}
                        className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-50 p-2 shadow border border-base-100"
                        onClick={() =>
                            (document.activeElement as HTMLElement)?.blur()
                        }
                    >
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/resume">Resume</NavLink>
                        </li>
                        <li>
                            <NavLink to="/idle-game">Idle Game v3</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navbar-center">
                <NavLink to="/" className="font-logo text-2xl">
                    HO
                </NavLink>
            </div>
        </div>
    );
};
