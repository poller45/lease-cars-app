import React from "react";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
const CarsPage = () => {
	return (
		<div className="wrapper">
			<Header headerClass={""} />
			<main className="main">
				<section className="choose-cars">
					<div className="container">
						<h2 className="section-title">Choose your car</h2>
						<div className="tabs">
							<div className="tabs__btn">
								<button
									className="tabs__btn-item tabs__btn-item--active"
									data-button="content-1"
								>
									Car and Minivan
								</button>
								<button className="tabs__btn-item" data-button="content-2">
									Trucks
								</button>
								<button className="tabs__btn-item" data-button="content-3">
									Crossovers & SUVs
								</button>
								<button className="tabs__btn-item" data-button="content-4">
									Electrified
								</button>
							</div>
							<div className="tabs__content">
								<div
									className="tabs__content-item tabs__content-item--active"
									id="content-1"
								>
									<div className="card">
										<img src="images/card-1.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Crown 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 650/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-2.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Prius Prime 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 450/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-3.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Prius 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 400/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-4.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Hyundai Kona 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 510/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-1.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Crown 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 650/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-2.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Prius Prime 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 450/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-3.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Prius 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 400/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-4.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Hyundai Kona 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 510/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-1.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Crown 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 650/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-2.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Prius Prime 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 450/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-3.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Toyota Prius 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 400/mo</p>
										</div>
										<a href="/" className="card__link">
											see details
										</a>
									</div>
									<div className="card">
										<img src="images/card-4.jpg" alt="" className="card__img" />
										<div className="card__content">
											<h4 className="card__title">Hyundai Kona 2023</h4>
											<p className="card__text">starting from $ 39900</p>
											<p className="card__price">$ 510/mo</p>
										</div>
										<a href="/" class="card__link">
											see details
										</a>
									</div>
								</div>

								<div className="tabs__content-item" id="content-2">
									2
								</div>
								<div className="tabs__content-item" id="content-3">
									3
								</div>
								<div className="tabs__content-item" id="content-4">
									4
								</div>
							</div>
						</div>
						<a href="/" className="showmore-link">
							SHOW MORE
						</a>
					</div>
				</section>
				<section className="blog">
					<div className="container">
						<div className="blog__items">
							<div className="blog__item">
								<img
									src="images/blog-1.jpg"
									alt=""
									className="blog__item-img"
								/>
								<h4 className="blog__item-title">
									An easier way to buy your next Toyota
								</h4>
								<a href="/" className="blog__item-link">
									more
								</a>
							</div>
							<div className="blog__item">
								<img
									src="images/blog-2.jpg"
									alt=""
									className="blog__item-img"
								/>
								<h4 className="blog__item-title">
									A Guide to Road-Tripping With Pets
								</h4>
								<a href="/" className="blog__item-link">
									more
								</a>
							</div>
						</div>
						<a href="/" className="showmore-link">
							SHOW MORE
						</a>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
};

export default CarsPage;
