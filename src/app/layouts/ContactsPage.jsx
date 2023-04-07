import React from "react";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
const ContactsPage = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<section className="contacts">
					<div className="container">
						<h2 className="section-title contacts__title">Contact Us</h2>
						<p className="contacts__text">
							Feel free to contact us with questions, potencial partnerships or
							media inquiries
						</p>
						<form action="#" className="form">
							<input type="text" className="form__input" placeholder="Name" />
							<input
								type="email"
								className="form__input"
								placeholder="E-mail"
							/>
							<textarea
								className="form__textarea"
								placeholder="Your text"
							></textarea>
							<button className="form__btn" type="submit">
								SUBMIT
							</button>
						</form>
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

export default ContactsPage;
