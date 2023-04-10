import React, { useEffect, useState } from "react";
import Header from "../components/page/Header";
import Footer from "../components/page/Footer";
import api from "../api";
import Car from "../components/page/Car";
import CarCategory from "../ui/CarCategory";
const CarsPage = () => {
	const [cars, setCars] = useState([]);
	const [selectedCarClass, setSelectedCarClass] = useState();

	useEffect(() => {
		setCars(api.cars);
	}, []);

	const handleCarClassSelect = (item) => {
		console.log(item);
		setSelectedCarClass(item);
	};
	const filteredCars = selectedCarClass
		? cars.filter((car) => car.carClass === selectedCarClass)
		: cars;
	console.log(filteredCars);
	return (
		<div className="wrapper">
			<Header headerClass={""} />
			<main className="main">
				<section className="choose-cars">
					<div className="container">
						<h2 className="section-title">Choose your car</h2>
						<div className="tabs">
							<CarCategory
								selectedItem={selectedCarClass}
								onItemSelect={handleCarClassSelect}
							/>
							<div className="tabs__content">
								<div
									className="tabs__content-item tabs__content-item--active"
									id="content-1"
								>
									<Car cars={filteredCars} />
								</div>

								<div className="tabs__content-item" id="content-2">
									{selectedCarClass && <Car cars={filteredCars} />}
								</div>
								<div className="tabs__content-item" id="content-3">
									{selectedCarClass && <Car cars={filteredCars} />}
								</div>
								<div className="tabs__content-item" id="content-4">
									{selectedCarClass && <Car cars={filteredCars} />}
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
