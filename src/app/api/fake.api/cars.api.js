const cars = [
	{
		_id: "1",
		name: "Toyota Crown 2023 ",
		img: "Toyota Crown",
		startingPrise: "$ 39900",
		perMonth: "$ 650/mo",
		carClass: "sedan",
		bookmark: false,
	},

	{
		_id: "2",
		name: "Prius Prime 2023",
		img: "Prius Prime",
		startingPrise: "$ 31800",
		perMonth: "$ 442/mo",
		carClass: "electrified",
		bookmark: false,
	},

	{
		_id: "3",
		name: "Toyota Prius 2023",
		img: "Toyota Prius",
		startingPrise: "$ 26800",
		perMonth: "$ 372/mo",
		carClass: "electrified",
		bookmark: false,
	},

	{
		_id: "4",
		name: "Hyundai Kona 2023",
		img: "Hyundai Kona",
		startingPrise: "$ 28500",
		perMonth: "$ 396/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "5",
		name: "Ford Explorer 2023",
		img: "Ford Explorer",
		startingPrise: "$ 26500",
		perMonth: "$1,013/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "6",
		name: "Santa  Fe 2023",
		img: "Santa  Fe",
		startingPrise: "$ 24500",
		perMonth: "$ 739/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "7",
		name: "KIA Niro 2023",
		img: "Kia Niro",
		startingPrise: "$ 26900",
		perMonth: "$ 554/mo",
		carClass: "electrified",
		bookmark: false,
	},

	{
		_id: "8",
		name: "Chevrolet Silverado",
		img: "Chevrolet Silverado",
		startingPrise: "$ 62260",
		perMonth: "$1,032/mo",
		carClass: "truck",
		bookmark: false,
	},
	{
		_id: "9",
		name: "Honda CR-V 2023",
		img: "Honda CR-V",
		startingPrise: "$ 35650",
		perMonth: "$519/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "10",
		name: "Hyundai Tucson 2023",
		img: "Hyundai Tucson",
		startingPrise: "$ 31885",
		perMonth: "$ 528/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "11",
		name: "Chevrolet Equinox",
		img: "Chevrolet Equinox",
		startingPrise: "$ 28950",
		perMonth: "$ 471/mo",
		carClass: "crossover",
		bookmark: false,
	},

	{
		_id: "12",
		name: "Jeep Wrangler 2023",
		img: "Jeep Wrangler",
		startingPrise: "$ 62000",
		perMonth: "$ 997/mo",
		carClass: "crossover",
		bookmark: false,
	},
];
if (!localStorage.getItem("cars")) {
	localStorage.setItem("cars", JSON.stringify(cars));
}

// const fetchAll = () =>
// 	new Promise((resolve) => {
// 		window.setTimeout(function () {
// 			resolve(JSON.parse(localStorage.getItem("cars")));
// 		}, 2000);
// 	});

export default cars;
