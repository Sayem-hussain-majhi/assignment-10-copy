import { Children } from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive}) =>
                isActive ? "text-2xl pb-2 border border-b-red-600  mx-4 font-bold " : "mx-4 text-2xl "
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;