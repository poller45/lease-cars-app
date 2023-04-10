import React from "react";
const CarCategory = ({ onItemSelect, selectedItem }) => {
	return (
		<div className="tabs__btn">
			<button
				className={
					"tabs__btn-item " +
					(selectedItem === "sedan" ? "tabs__btn-item--active" : "")
				}
				data-button="content-1"
				name="sedan"
				onClick={(event) => onItemSelect(event.target.name)}
			>
				Car and Minivan
			</button>
			<button
				className={
					"tabs__btn-item " +
					(selectedItem === "truck" ? "tabs__btn-item--active" : "")
				}
				data-button="content-2"
				name="truck"
				onClick={(event) => onItemSelect(event.target.name)}
			>
				Trucks
			</button>
			<button
				className={
					"tabs__btn-item " +
					(selectedItem === "crossover" ? "tabs__btn-item--active" : "")
				}
				data-button="content-3"
				name="crossover"
				onClick={(event) => onItemSelect(event.target.name)}
			>
				Crossovers & SUVs
			</button>
			<button
				className={
					"tabs__btn-item " +
					(selectedItem === "electrified" ? "tabs__btn-item--active" : "")
				}
				data-button="content-4"
				name="electrified"
				onClick={(event) => onItemSelect(event.target.name)}
			>
				Electrified
			</button>
		</div>
	);
};

export default CarCategory;
