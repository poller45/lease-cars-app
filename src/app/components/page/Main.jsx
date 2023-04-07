import React from "react";
import Slider from "./Slider";
import { Link } from "react-router-dom";
const Main = () => {
	return (
		<>
			<main className="main">
				<section className="top">
					<div className="container">
						<h1 className="title">Leasing From D&M</h1>
						<Link className="top__link" aria-current="page" to="/cars">
							FIND A CAR
						</Link>
					</div>
				</section>
				<Slider />
				<section className="why-lease">
					<div className="container">
						<h2 className="section-title">Why Lease with D&M?</h2>
						<ul className="why-lease__list">
							<li className="why-lease__item">
								<img
									src="images/why-lease-1.svg"
									alt=""
									className="why-lease__item-img"
								/>
								<h3 className="why-lease__item-title">Top Dealers</h3>
								<p className="why-lease__item-text">
									TrueCar Certified Dealers compete for your business by
									providing discounted pricing on in-stock inventory.
								</p>
							</li>
							<li className="why-lease__item">
								<img
									src="images/why-lease-2.svg"
									alt=""
									className="why-lease__item-img"
								/>
								<h3 className="why-lease__item-title">Discounted Pricing</h3>
								<p className="why-lease__item-text">
									View local inventory from the comfort of home and get access
									to guaranteed savings on the car of your choice.
								</p>
							</li>
							<li className="why-lease__item">
								<img
									src="images/why-lease-3.svg"
									alt=""
									className="why-lease__item-img"
								/>
								<h3 className="why-lease__item-title">Lower Payments</h3>
								<p className="why-lease__item-text">
									Get discounted pricing when you shop for a car or truck using
									TrueCar and save on your lease payment.
								</p>
							</li>
							<li className="why-lease__item">
								<img
									src="images/why-lease-4.svg"
									alt=""
									className="why-lease__item-img"
								/>
								<h3 className="why-lease__item-title">Easy Upgrade</h3>
								<p className="why-lease__item-text">
									Easy to upgrade to the newest vehicle model every few years if
									you would like to be modern and comfortable
								</p>
							</li>
						</ul>
					</div>
				</section>
				<section className="how-does">
					<div className="container">
						<div className="how-does__inner">
							<h2 className="section-title">How Does Leasing Work?</h2>
							<p className="how-does__text">
								Leasing a vehicle is essentially entering into a long term
								rental agreement for that vehicle. Unlike a traditional car
								purchase, you don’t actually own the vehicle. Instead, a leasing
								company purchases the vehicle from the dealer on your behalf and
								then you make monthly payments to the leasing company for the
								duration of your lease. Some leases however, do provide the
								option to purchase the vehicle at the end of the lease.
							</p>
							<h4 className="how-does__title">
								Similar to a short term car rental, there are rules that define:
							</h4>
							<ol className="how-does__list">
								<li className="how-does__item">
									<p className="how-does__item-text">
										How much you can drive, stated as annual miles (excess miles
										are charged at a specified rate)
									</p>
								</li>
								<li className="how-does__item">
									<p className="how-does__item-text">
										Types of damage that you may be liable for at the end of
										your lease
									</p>
								</li>
								<li className="how-does__item">
									<p className="how-does__item-text">
										The procedures and costs when you return the vehicle at the
										end of your lease
									</p>
								</li>
							</ol>
							<p className="how-does__title">
								Lease contracts are a commitment and ending them early can be
								difficult and expensive so it is important to consider your
								circumstances carefully before you decide.
							</p>
						</div>
					</div>
				</section>
				<section className="video">
					<div className="container">
						<h2 className="section-title video__title">
							WELCOME TO D&M LEASING
						</h2>
						<p className="video__text">
							Find out how easy it is to lease from D&M
						</p>
						<iframe
							className="video__content"
							width="1000"
							height="500"
							src="https://www.youtube.com/embed/TVvu7SmD4zg?controls=0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
					</div>
				</section>
				<section className="important">
					<div className="container">
						<h2 className="section-title important__title">
							Important Things to Consider
						</h2>
						<p className="important__text">
							Depending on your circumstances and what is important to you, a
							lease could be a great option for your next vehicle. Below are
							some important factors that may influence your decision.
						</p>
						<ul className="important__list">
							<li className="important__item">
								<img
									src="images/important-1.jpg"
									alt=""
									className="important__item-img"
								/>
								<p className="important__item-text">
									Monthly payments on leases are generally 20% - 30% cheaper
									than loans
								</p>
							</li>
							<li className="important__item">
								<img
									src="images/important-2.jpg"
									alt=""
									className="important__item-img"
								/>
								<p className="important__item-text">
									You may be eligible for a tax break if you use the leased
									vehicle for business purposes
								</p>
							</li>
							<li className="important__item">
								<img
									src="images/important-3.jpg"
									alt=""
									className="important__item-img"
								/>
								<p className="important__item-text">
									Easy to upgrade to the newest vehicle model every few years
								</p>
							</li>
							<li className="important__item">
								<img
									src="images/important-4.jpg"
									alt=""
									className="important__item-img"
								/>
								<p className="important__item-text">
									There are often fees charged if you drive more than your
									lease's mileage allowance
								</p>
							</li>
						</ul>
					</div>
				</section>
			</main>
		</>
	);
};

export default Main;
