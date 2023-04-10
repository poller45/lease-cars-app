import React from "react";

const Car = ({ cars }) => {
	return (
		<>
			{cars.map((item) => (
				<div className="card" key={item._id}>
					<img
						src={"images/cars/" + item.img + ".jpg"}
						alt=""
						className="card__img"
					/>
					<div className="card__content">
						<h4 className="card__title">{item.name}</h4>
						<p className="card__text">{item.startingPrise}</p>
						<p className="card__price">{item.perMonth}</p>
					</div>
					<a href="/" className="card__link">
						see details
					</a>
				</div>
			))}
		</>
	);
};

export default Car;
