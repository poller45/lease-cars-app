import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../../ui/NavBar";

function Header({ headerClass }) {
	return (
		<header className={`header ${headerClass}`}>
			<div className="container">
				<div className="header__inner">
					<Link className="logo" aria-current="page" to="/">
						<img src="images/logo.svg" alt="" className="logo__img" />
					</Link>
					<nav className="menu">
						<button className="menu__btn">
							<span></span>
							<span></span>
							<span></span>
						</button>
						<NavBar />
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
