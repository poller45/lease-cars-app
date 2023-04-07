import React from "react";
const Footer = () => {
	function handleClick(event) {
		event.preventDefault();
		// Дополнительный код
	}

	return (
		<>
			<footer className="footer">
				<div className="container">
					<nav className="footer__menu">
						<ul className="footer__menu-list">
							<li className="footer__menu-item">
								<p className="footer__menu-title">Products</p>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Used
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									New
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Sell your car
								</a>
							</li>
						</ul>
						<ul className="footer__menu-list">
							<li className="footer__menu-item">
								<p className="footer__menu-title">Resources</p>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link">
									Blog
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									FAQ
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Contact us
								</a>
							</li>
						</ul>
						<ul className="footer__menu-list">
							<li className="footer__menu-item">
								<p className="footer__menu-title">Work With TrueCar</p>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Dealers
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Partners
								</a>
							</li>
						</ul>
						<ul className="footer__menu-list">
							<li className="footer__menu-item">
								<p className="footer__menu-title">About</p>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									About us
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Team
								</a>
							</li>
							<li className="footer__menu-item">
								<a href="/" className="footer__menu-link" onClick={handleClick}>
									Careers
								</a>
							</li>
						</ul>
					</nav>
					<ul className="app">
						<li className="app__item">
							<a href="/" className="app__item-link" onClick={handleClick}>
								<img
									className="app__item-img"
									src="images/appstore.svg"
									alt=""
								/>
							</a>
						</li>
						<li className="app__item">
							<a href="/" className="app__item-link" onClick={handleClick}>
								<img
									className="app__item-img"
									src="images/googleplay.svg"
									alt=""
								/>
							</a>
						</li>
					</ul>
					<div className="footer__copy">
						<p className="footer__copy-text">
							For questions about the TrueCar Auto Buying Service please call
							1-888-878-3227. Certified Dealers are contractually obligated by
							TrueCar to meet certain customer service requirements and complete
							the TrueCar Dealer Certification Program.
						</p>
						<p className="footer__copy-text">
							TrueCar does not broker, sell, or lease motor vehicles. Unless
							otherwise noted, all vehicles shown on this website are offered
							for sale by licensed motor vehicle dealers. All vehicles are
							subject to prior sale. By accessing this website, you agree to the
							TrueCar Terms of Service and Privacy Policy.
						</p>
					</div>
					<nav className="copy__nav">
						<ul className="copy-nav-list">
							<li className="copy__nav-item">
								<a href="/" className="copy__nav-link" onClick={handleClick}>
									Terms of Service
								</a>
							</li>
							<li className="copy__nav-item">
								<a href="/" className="copy__nav-link" onClick={handleClick}>
									Privacy Policy
								</a>
							</li>
							<li className="copy__nav-item">
								<a href="/" className="copy__nav-link" onClick={handleClick}>
									Do Not Sell My Personal Information
								</a>
							</li>
						</ul>
					</nav>
				</div>
			</footer>
		</>
	);
};

export default Footer;
