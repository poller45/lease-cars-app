import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
	return (
		<ul className="menu__list">
			<li className="menu__list-item">
				<Link
					className="nav-link menu__list-link"
					aria-current="page"
					to="/cars"
				>
					NEW CARS
				</Link>
			</li>
			<li className="menu__list-item">
				<Link className=" menu__list-link" aria-current="page" to="/">
					PRE-OWNED CARS
				</Link>
			</li>
			<li className="menu__list-item">
				<Link className=" menu__list-link" aria-current="page" to="/">
					FINANCE
				</Link>
			</li>
			<li className="menu__list-item">
				<Link className=" menu__list-link" aria-current="page" to="/">
					LEASE VS BUY
				</Link>
			</li>
			<li className="menu__list-item">
				<Link className=" menu__list-link" aria-current="page" to="/contacts">
					CONTACT US
				</Link>
			</li>
		</ul>
	);
};

export default NavBar;
